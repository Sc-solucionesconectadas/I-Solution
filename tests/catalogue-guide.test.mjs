import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateGuide} from '../apps/instrumental-solution/guide-validation.mjs';
import {validateCatalogue} from '../apps/instrumental-solution/content-validation.mjs';
import {catalogueContext,contextFields} from '../apps/instrumental-solution/catalogue-context.js';
import {catalogueState,matchesProduct} from '../apps/instrumental-solution/catalogue-model.js';
import {consultationPayload} from '../apps/instrumental-solution/contact-model.js';
import {brandSection,productPrinciple} from '../apps/instrumental-solution/catalogue-guide.mjs';
const guide=JSON.parse(await readFile(new URL('../content/instrumental-solution/marcas.json',import.meta.url),'utf8'));
const products=JSON.parse(await readFile(new URL('../content/instrumental-solution/productos.json',import.meta.url),'utf8'));
const images=JSON.parse(await readFile(new URL('../content/instrumental-solution/imagenes.json',import.meta.url),'utf8'));
const context={brands:guide.brands.map(b=>({id:b.id,label:b.name})),technologies:[...new Map(products.map(p=>[p.measurement.id,{id:p.measurement.id,label:p.measurement.name}])).values()]};
const ctx={guide,href:path=>`/instrumental-solution/${path}`};

test('funcionamiento pertenece a cada instrumento y las marcas no contienen una grilla de tecnologías',()=>{
 validateGuide(guide);validateCatalogue(products,images);
 assert.deepEqual(guide.brands.map(b=>b.id),['endress-hauser','siemens','trumen','yokogawa','schneider-electric','sino-inst']);
 assert.equal(guide.technologies,undefined);
 for(const p of products)assert.ok(p.measurement.principle&&p.measurement.selection,p.slug);
 const custom={slug:'equipo-sin-tabla-global',measurement:{id:'nueva-tecnica',name:'Técnica nueva',principle:'Funcionamiento propio del registro.',selection:'Datos propios de selección.'}};
 assert.match(productPrinciple(ctx,custom),/Funcionamiento propio del registro/);
 assert.match(productPrinciple(ctx,custom),/producto=equipo-sin-tabla-global/);
});

test('registros de marcas y funcionamiento inválidos se rechazan antes del build',()=>{
 const duplicate=structuredClone(guide);duplicate.brands.push(duplicate.brands[0]);assert.throws(()=>validateGuide(duplicate));
 const broken=structuredClone(products);broken[0].measurement.diagram='<script>';assert.throws(()=>validateCatalogue(broken,images));
 const incomplete=structuredClone(products);incomplete[0].measurement.principle='';assert.throws(()=>validateCatalogue(incomplete,images));
 const path=structuredClone(guide);path.brands[0].logo='../otro.svg';assert.throws(()=>validateGuide(path));
});

test('marca y tecnología solo se resuelven desde identificadores conocidos',()=>{
 const selection=catalogueContext(context,new URLSearchParams('marca=sino-inst&tecnologia=caudal-electromagnetico'));
 assert.equal(selection.brand.label,'Sino-Inst');assert.equal(selection.technology.label,'Caudal electromagnético');
 assert.deepEqual(catalogueContext(context,new URLSearchParams('marca=%3Cscript%3E&tecnologia=https://otro.invalid')),{brand:null,technology:null});
 assert.deepEqual(contextFields(context,{brand:'inexistente',technology:'<script>'}),{brand:'',technology:''});
});

test('consulta transmite contexto sin modificar el texto del visitante ni enviar correo',()=>{
 const message='Necesitamos medir este proceso en la planta.';
 const payload=consultationPayload({name:'Prueba local',email:'persona@example.invalid',reason:'Asesoramiento',message,source:'http://127.0.0.1/contacto/',...contextFields(context,{brand:'sino-inst',technology:'caudal-coriolis'})});
 assert.equal(payload.brand,'Sino-Inst');assert.equal(payload.technology,'Caudal másico Coriolis');assert.equal(payload.message,message);
});

test('logos llevan al catálogo de la marca y las fichas al instrumento consultado',()=>{
 const brands=brandSection(ctx);
 assert.equal((brands.match(/class="commercial-brand commercial-brand--/g)??[]).length,6);
 assert.doesNotMatch(brands,/partner oficial|distribuidor oficial|stock/i);
 assert.match(brands,/productos\/\?marca=sino-inst/);
 const html=productPrinciple(ctx,products.find(p=>p.slug==='sino-inst-coriolis-serie-u'));
 assert.match(html,/id="funcionamiento"/);assert.match(html,/producto=sino-inst-coriolis-serie-u/);
 assert.doesNotMatch(html,/#tecnologias/);
});

test('filtros combinan familia, marca y tecnología y descartan identificadores de URL ajenos',()=>{
 const facets={brands:['siemens','sino-inst'],technologies:['caudal-coriolis','control-plc']};
 const state=catalogueState('https://example.invalid/?familia=Caudal&marca=sino-inst&tecnologia=caudal-coriolis',['Caudal','Automatización'],facets);
 assert.equal(matchesProduct({family:'Caudal',brand:'sino-inst',technology:'caudal-coriolis',search:''},state),true);
 assert.equal(matchesProduct({family:'Caudal',brand:'siemens',technology:'caudal-coriolis',search:''},state),false);
 const unknown=catalogueState('https://example.invalid/?marca=otra&tecnologia=inventada',['Caudal'],facets);
 assert.equal(unknown.brand,'');assert.equal(unknown.technology,'');
});

test('cada proveedor tiene series reales diferenciadas de las líneas genéricas del folleto',()=>{
 const branded=products.filter(p=>p.kind==='line'&&p.brandId);
 assert.equal(new Set(branded.map(p=>p.brandId)).size,6);
 for(const id of ['endress-promag-w10','sino-inst-coriolis-serie-u','trumen-lsv','siemens-sitrans-probe-lu240','yokogawa-ejx530a','endress-liquiline-cm442'])assert.ok(branded.some(p=>p.slug===id));
 assert.ok(branded.every(p=>p.source&&p.measurement&&!p.model));
 assert.ok(branded.some(p=>p.family==='Automatización'));
});

test('la marca y tecnología siguen al instrumento al cambiar la selección del formulario',()=>{
 const data={...context,products:products.map(p=>({id:p.slug,brandId:p.brandId,technologyId:p.measurement.id}))};
 const params=new URLSearchParams('producto=sino-inst-coriolis-serie-u&marca=siemens');
 assert.equal(catalogueContext(data,params).brand.id,'sino-inst');
 const changed=catalogueContext(data,params,'endress-promag-w10');
 assert.equal(changed.brand.id,'endress-hauser');assert.equal(changed.technology.id,'caudal-electromagnetico');
});
