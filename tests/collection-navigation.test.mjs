import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {collectionState,selectCollection,paginate,collectionUrl} from '../apps/instrumental-solution/collection-model.js';
import {publishedProducts,categoryFor,CATEGORIES} from '../apps/instrumental-solution/catalogue-taxonomy.js';
import {pages} from '../apps/instrumental-solution/pages.mjs';
import {highlightedProducts} from '../apps/instrumental-solution/directory-content.mjs';
const products=JSON.parse(await readFile(new URL('../content/instrumental-solution/productos.json',import.meta.url),'utf8'));
const records=Array.from({length:28},(_,i)=>({id:`equipo-${i}`,category:'caudalimetros',brand:i%2?'siemens':'endress-hauser',technology:i%3?'magnetico':'coriolis',search:`Medición de caudal equipo ${i}`}));
test('paginar conserva todos los instrumentos una sola vez y limita cada página a nueve',()=>{
 const result=Array.from({length:4},(_,i)=>paginate(records,i+1));
 assert.deepEqual(result.map(r=>r.items.length),[9,9,9,1]);
 assert.deepEqual(result.flatMap(r=>r.items.map(r=>r.id)),records.map(r=>r.id));
 assert.equal(paginate(records,999).page,4);assert.equal(paginate([],3).page,1);
});
test('filtrar busca en toda la colección y combina marca, tecnología, categoría y palabras',()=>{
 const state=collectionState('?q=medicion%2027&marca=siemens&tecnologia=coriolis&categoria=caudalimetros',records);
 assert.deepEqual(selectCollection(records,state).map(r=>r.id),['equipo-27']);
 assert.equal(paginate(selectCollection(records,state),3).page,1);
 assert.equal(selectCollection(records,{...state,category:'nivel'}).length,0);
 assert.equal(collectionState('?marca=ajena&tecnologia=%3Cscript%3E&pagina=-1',records).brand,'');
});
test('URL de filtros se puede abrir directamente y la paginación simple usa páginas reales',()=>{
 const state={query:'medición & agua',brand:'siemens',technology:'coriolis',category:'caudalimetros'};
 const target=collectionUrl('/productos/buscar/',state,3),url=new URL(target,'https://example.invalid');
 assert.deepEqual(collectionState(url.search,records),{...state,page:3});
 assert.equal(collectionUrl('/productos/caudalimetros/',{},2),'/productos/caudalimetros/pagina/2/#instrumentos');
 assert.equal(collectionUrl('/productos/nivel/',{},1),'/productos/nivel/#instrumentos');
});
test('categorías controladas cubren los productos activos; pantallas incluye ambos PLC y el programador queda oculto',()=>{
 const visible=publishedProducts(products);
 assert.ok(visible.every(categoryFor));
 assert.deepEqual(CATEGORIES.map(c=>c.id),['caudalimetros','nivel','presion','analisis-de-aguas','pantallas-y-control','temperatura','densidad-y-concentracion','torque']);
 assert.ok(!visible.some(p=>p.slug==='programador-siemens'));
 for(const id of ['siemens-simatic-s7-1200-g2','schneider-modicon-m221','schneider-harmony-st6','siemens-unified-basic','siemens-unified-comfort'])assert.ok(visible.some(p=>p.slug===id&&categoryFor(p).id==='pantallas-y-control'));
 const extra=Array.from({length:12},(_,i)=>({...visible.find(p=>p.family==='Caudal'),slug:`nuevo-${i}`}));
 const routes=pages([...products,...extra]);
 assert.ok(routes.some(p=>p.slug==='productos/caudalimetros/pagina/3/'));
 assert.ok(routes.some(p=>p.slug==='productos/buscar/pagina/5/'));
 assert.ok(routes.find(p=>p.slug==='productos/programador-siemens/').redirectTo);
});
test('destacados se resuelven desde productos visibles y admiten ocultamiento y categorías vacías',()=>{
 const selection=highlightedProducts(products);
 assert.equal(selection.length,3);assert.equal(new Set(selection.map(p=>p.slug)).size,3);
 const hidden=products.map(p=>p.slug==='endress-promag-w10'?{...p,active:false}:p);
 assert.ok(!highlightedProducts(hidden).some(p=>p.slug==='endress-promag-w10'));
 assert.ok(highlightedProducts(hidden).some(p=>p.family==='Caudal'));
 assert.deepEqual(highlightedProducts([]),[]);
});
