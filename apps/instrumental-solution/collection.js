import {collectionState,selectCollection,paginate,collectionUrl} from './collection-model.js';
const section=document.querySelector('[data-collection]');
if(section){
 const form=section.querySelector('[data-collection-controls]'),list=section.querySelector('[data-collection-results]'),pager=section.querySelector('[data-collection-pagination]');
 const endpoint=new URL(section.dataset.collectionJson,location.origin);
 let records=[],state,queryTimer;
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const url=(page=state.page)=>collectionUrl(section.dataset.collectionBase,state,page);
 function render(write='replace',scroll=false){
  state.query=form.elements.q.value.trim().slice(0,100);state.brand=form.elements.marca.value;state.category=form.elements.categoria?.value??'';
  const available=new Map(records.filter(r=>(!state.brand||r.brand===state.brand)&&(!state.category||r.category===state.category)).filter(r=>r.technology).map(r=>[r.technology,r.technologyName]));
  const oldTechnology=form.elements.tecnologia.value;
  form.elements.tecnologia.replaceChildren(new Option('Todas las tecnologías',''),...[...available].map(([value,label])=>new Option(label,value)));
  form.elements.tecnologia.value=available.has(oldTechnology)?oldTechnology:'';state.technology=form.elements.tecnologia.value;
  const selected=selectCollection(records,state),result=paginate(selected,state.page);state.page=result.page;document.title=`${section.dataset.collectionTitle}${result.page>1?` · Página ${result.page}`:''} | i-Solution`;
  if(write)history[write==='push'?'pushState':'replaceState'](null,'',url());
  list.innerHTML=result.items.map(r=>r.html).join('');
  section.querySelector('[data-collection-count]').textContent=`${result.total} ${result.total===1?'instrumento':'instrumentos'}${result.pages>1?` · Página ${result.page} de ${result.pages}`:''}`;
  section.querySelector('[data-collection-empty]').hidden=result.total!==0;
  const contact=section.querySelector('[data-collection-inquiry]');if(contact){const target=new URL(contact.href);target.searchParams.delete('marca');target.searchParams.delete('tecnologia');if(state.brand)target.searchParams.set('marca',state.brand);if(state.technology)target.searchParams.set('tecnologia',state.technology);contact.href=target.href;}
  if(result.pages>1){
   const numbers=Array.from({length:result.pages},(_,i)=>i+1).filter(n=>n===1||n===result.pages||Math.abs(n-result.page)<=2);let last=0;
   const link=(n,label)=>`<a href="${escape(url(n))}" data-collection-page="${n}" ${n===result.page?'aria-current="page"':''}>${label}</a>`;
   pager.innerHTML=`<nav class="collection-pagination" aria-label="Páginas del catálogo">${result.page>1?link(result.page-1,'Anterior'):'<span aria-disabled="true">Anterior</span>'}${numbers.map(n=>{const gap=last&&n-last>1?'<span aria-hidden="true">…</span>':'';last=n;return gap+link(n,n);}).join('')}${result.page<result.pages?link(result.page+1,'Siguiente'):'<span aria-disabled="true">Siguiente</span>'}</nav>`;
  }else pager.replaceChildren();
  const from=location.pathname+location.search+'#instrumentos';for(const link of list.querySelectorAll('[data-product-link]')){const target=new URL(link.href);target.searchParams.set('volver',from);link.href=target.href;}
  if(scroll){section.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});list.setAttribute('tabindex','-1');list.focus({preventScroll:true});}
 }
 function restore(){
  const match=location.pathname.match(/\/pagina\/(\d+)\/$/);state=collectionState(location.search,records,match?Number(match[1]):Number(section.dataset.defaultPage));
  form.elements.q.value=state.query;form.elements.marca.value=state.brand;if(form.elements.categoria)form.elements.categoria.value=state.category;
  form.elements.tecnologia.replaceChildren(new Option('Todas las tecnologías',''),...[...new Map(records.filter(r=>r.technology).map(r=>[r.technology,r.technologyName]))].map(([value,label])=>new Option(label,value)));
  form.elements.tecnologia.value=state.technology;render('replace');
 }
 async function initialize(){
  if(endpoint.origin!==location.origin)throw new Error('Origen de catálogo inválido.');
  const response=await fetch(endpoint,{credentials:'omit'});if(!response.ok)throw new Error('No se pudo cargar el catálogo.');
  const data=await response.json();if(!Array.isArray(data)||data.length>10000||data.some(r=>typeof r.id!=='string'||typeof r.html!=='string'||typeof r.search!=='string'))throw new Error('Datos de catálogo inválidos.');
  records=data;restore();form.hidden=false;
  form.addEventListener('input',event=>{if(event.target!==form.elements.q)return;clearTimeout(queryTimer);queryTimer=setTimeout(()=>{state.page=1;render('replace');},140);});
  form.addEventListener('change',event=>{if(event.target===form.elements.q)return;state.page=1;render('push');});
  form.addEventListener('submit',event=>{event.preventDefault();clearTimeout(queryTimer);state.page=1;render('push');});
  form.addEventListener('reset',event=>{event.preventDefault();clearTimeout(queryTimer);form.elements.q.value='';form.elements.marca.value='';form.elements.tecnologia.value='';if(form.elements.categoria)form.elements.categoria.value='';state.page=1;render('push');});
  pager.addEventListener('click',event=>{const link=event.target.closest('[data-collection-page]');if(!link||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();state.page=Number(link.dataset.collectionPage);render('push',true);});
  list.addEventListener('click',event=>{if(!event.target.closest('[data-product-link]'))return;try{sessionStorage.setItem('catalogue-scroll:'+location.pathname+location.search,String(scrollY));}catch{}});
  addEventListener('popstate',restore);
  try{const key='catalogue-scroll:'+location.pathname+location.search,saved=sessionStorage.getItem(key);if(saved!==null){sessionStorage.removeItem(key);requestAnimationFrame(()=>scrollTo({top:Math.max(0,Number(saved)||0),behavior:'instant'}));}}catch{}
 }
 initialize().catch(()=>{const error=section.querySelector('[data-collection-error]');error.hidden=false;error.textContent='No se pudieron cargar los filtros. Podés seguir recorriendo los instrumentos y las páginas del catálogo.';});
}
