import {catalogueState,matchesProduct} from './catalogue-model.js';
const form=document.querySelector('[data-catalogue-controls]');
const items=[...document.querySelectorAll('[data-product-family]')].map(node=>({node,family:node.dataset.productFamily,brand:node.dataset.productBrand,technology:node.dataset.productTechnology,documents:node.dataset.productDocuments==='true',manual:node.dataset.productManual==='true',video:node.dataset.productVideo==='true',search:node.dataset.productSearch}));
if(form&&items.length){
  const query=form.elements.q,family=form.elements.familia,brand=form.elements.marca,technology=form.elements.tecnologia;
  const families=[...family.options].map(option=>option.value).filter(Boolean);
  const allTechnologies=[...technology.options].map(option=>({value:option.value,label:option.textContent}));
  const count=document.querySelector('[data-catalogue-count]'),empty=document.querySelector('[data-catalogue-empty]');
  const heading=document.querySelector('[data-category-heading]'),description=document.querySelector('[data-category-description]');
  const copy=JSON.parse(document.querySelector('#catalogue-family-context').textContent);
  const chips=[...document.querySelectorAll('[data-family-chip]')];
  function update(writeUrl=false){
    const available=new Set(items.filter(item=>(!family.value||item.family===family.value)&&(!brand.value||item.brand===brand.value)).map(item=>item.technology));
    const previous=technology.value;
    technology.replaceChildren(...allTechnologies.filter(t=>!t.value||available.has(t.value)).map(t=>new Option(t.label,t.value)));
    technology.value=available.has(previous)?previous:'';
    const state={query:query.value,family:family.value,brand:brand.value,technology:technology.value};let total=0;
    items.forEach(item=>{const visible=matchesProduct(item,state);item.node.hidden=!visible;if(visible)total++;});
    count.textContent=`${total} ${total===1?'resultado':'resultados'}`;empty.hidden=total!==0;
    document.querySelector('[data-product-results]').dataset.count=String(total);
    const selected=copy.find(entry=>entry.family===family.value)??copy[0];
    heading.textContent=selected.title;description.textContent=selected.description;
    chips.forEach(chip=>chip.setAttribute('aria-pressed',String(chip.dataset.familyChip===family.value)));
    const inquiry=document.querySelector('[data-filter-inquiry]');
    const target=new URL(inquiry.dataset.base,location.href);target.searchParams.set('motivo','asesoramiento');
    if(brand.value)target.searchParams.set('marca',brand.value);
    if(technology.value)target.searchParams.set('tecnologia',technology.value);
    inquiry.href=target.href;
    if(writeUrl){const url=new URL(location.href);for(const key of ['q','familia','marca','tecnologia','documentos','recurso'])url.searchParams.delete(key);for(const [key,value] of [['q',query.value.trim()],['familia',family.value],['marca',brand.value],['tecnologia',technology.value]])if(value)url.searchParams.set(key,value);history.replaceState(null,'',url);}
  }
  function restore(){
    const state=catalogueState(location.href,families,{brands:[...brand.options].map(o=>o.value),technologies:allTechnologies.map(o=>o.value)});
    query.value=state.query;family.value=state.family;brand.value=state.brand;
    technology.replaceChildren(...allTechnologies.map(t=>new Option(t.label,t.value)));technology.value=state.technology;update();
  }
  form.addEventListener('input',()=>update(true));form.addEventListener('change',()=>update(true));
  form.addEventListener('submit',event=>{event.preventDefault();update(true);});
  form.addEventListener('reset',event=>{event.preventDefault();query.value='';family.value='';brand.value='';technology.value='';update(true);});
  chips.forEach(chip=>{chip.hidden=false;chip.addEventListener('click',()=>{family.value=chip.dataset.familyChip;update(true);});});
  addEventListener('popstate',restore);restore();form.hidden=false;
}
