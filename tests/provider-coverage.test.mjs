import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {categoryFor,publishedProducts} from '../apps/instrumental-solution/catalogue-taxonomy.js';
import {collectionState,selectCollection,paginate} from '../apps/instrumental-solution/collection-model.js';
import {productPrinciple} from '../apps/instrumental-solution/catalogue-guide.mjs';
const load=path=>readFile(new URL(path,import.meta.url),'utf8').then(JSON.parse);
const products=publishedProducts(await load('../content/instrumental-solution/productos.json'));
const provenance=await load('../docs/diseno/instrumentos/2026-11-18/recursos-proveedores.json');

test('nivel Trumen contiene los doce switches y los seis continuos del inventario oficial',()=>{
 const required=['lsv','lsvr','lfv','lfv-11','lfv-12','lsy','lmc','lws','lsr','lmf-tm','lmfs','lmc-14','tlc','tlh','tlr','tlu','tlcf','tlr31-tlrg'];
 for(const code of required){const p=products.find(p=>p.slug==='trumen-'+code);assert.ok(p,code);assert.equal(p.brandId,'trumen');assert.equal(p.family,'Nivel');}
 for(const code of ['tfp40c','tfp40s','tfp310','tfps70','tfdp70','tfp40t','tfp300'])assert.ok(products.some(p=>p.slug==='trumen-'+code&&p.family==='Presión'));
});

test('caudal por proveedor cubre tecnologías verificadas sin inventar cruces de marca',()=>{
 const required={
  'endress-hauser':['caudal-electromagnetico','caudal-coriolis','caudal-vortex','caudal-termico','caudal-ultrasonico'],
  siemens:['caudal-electromagnetico','caudal-coriolis','caudal-vortex','caudal-ultrasonico'],
  yokogawa:['caudal-electromagnetico','caudal-coriolis','caudal-vortex'],
  'sino-inst':['caudal-electromagnetico','caudal-coriolis','caudal-vortex','caudal-termico','caudal-ultrasonico'],
 };
 for(const [brand,technologies] of Object.entries(required))for(const id of technologies)assert.ok(products.some(p=>p.family==='Caudal'&&p.brandId===brand&&p.measurement.id===id),brand+' '+id);
 assert.ok(!products.some(p=>['siemens','yokogawa'].includes(p.brandId)&&p.measurement.id==='caudal-termico'));
});

test('las nuevas variables tienen categoría y se filtran y paginan junto a las marcas',()=>{
 for(const family of ['Temperatura','Densidad y concentración','Torque']){
  const entries=products.filter(p=>p.family===family);assert.ok(entries.length);assert.ok(entries.every(p=>categoryFor(p)));
 }
 const records=products.map(p=>({id:p.slug,category:categoryFor(p).id,brand:p.brandId||'',technology:p.measurement.id,search:p.name+' '+p.series}));
 const state=collectionState('?marca=trumen&categoria=nivel',records),filtered=selectCollection(records,state);
 assert.equal(filtered.length,18);
 const pages=[paginate(filtered,1),paginate(filtered,2)];assert.deepEqual(pages.map(p=>p.items.length),[9,9]);assert.equal(new Set(pages.flatMap(p=>p.items.map(r=>r.id))).size,18);
});

test('las nuevas series usan medios originales trazables y muestran su explicación y consulta contextual',async()=>{
 const ctx={href:path=>'/instrumental-solution/'+path};
 const domains=['trumen.in','www.trumen.in','sino-inst.com','www.endress.com','bdih-download.endress.com','www.siemens.com','www.yokogawa.com','web-material3.yokogawa.com','www.se.com'];
 for(const resource of provenance.resources){
  const p=products.find(p=>p.slug===resource.slug);assert.ok(p,p?.slug);assert.ok(domains.includes(new URL(p.source).hostname));
  assert.doesNotMatch([p.name,p.series,p.family,p.summary].join(' '),/\w\?\w|\uFFFD/);
  const image=await readFile(new URL('../'+resource.imageFile,import.meta.url));assert.equal(createHash('sha256').update(image).digest('hex'),resource.sha256,resource.slug);
  for(const doc of resource.documents){const bytes=await readFile(new URL('../apps/instrumental-solution/assets/documents/'+doc.file,import.meta.url));assert.equal(bytes.subarray(0,5).toString(),'%PDF-');assert.equal(createHash('sha256').update(bytes).digest('hex'),doc.sha256);}
  const html=productPrinciple(ctx,p);assert.ok(html.includes(p.measurement.principle));assert.ok(html.includes('producto='+p.slug));assert.ok(html.includes('marca='+p.brandId));
 }
 // DPD colorimetry and amperometric chlorine remain different technologies.
 assert.equal(products.find(p=>p.slug==='analizadores-cloro-libre').measurement.id,'cloro-dpd');
 assert.equal(products.find(p=>p.slug==='endress-memosens-ccs51e').measurement.id,'chlorine');
});
