const data=document.querySelector('#catalogue-directory-data');
if(data){
 const context=JSON.parse(data.textContent),params=new URLSearchParams(location.search);
 const legacyFamily=context.categories.find(c=>c.family===params.get('familia'));
 if(legacyFamily||params.get('q')||params.get('tecnologia')){
  const target=new URL(legacyFamily?`${context.base}${legacyFamily.id}/`:context.search,location.origin);
  for(const key of ['q','marca','tecnologia'])if(params.get(key))target.searchParams.set(key,params.get(key).slice(0,100));target.hash='instrumentos';location.replace(target.href);
 }else{
  const cards=[...document.querySelectorAll('[data-category-card]')],selection=document.querySelector('[data-directory-brand]');
  const apply=()=>{
   const value=new URLSearchParams(location.search).get('marca'),brand=context.brands.find(([id])=>id===value);
   selection.hidden=!brand;selection.querySelector('[data-directory-brand-name]').textContent=brand?.[1]??'';
   let count=0;for(const card of cards){card.hidden=Boolean(brand&&!card.dataset.categoryBrands.split(' ').includes(value));if(!card.hidden)count++;const target=new URL(card.dataset.categoryUrl,location.origin);if(brand)target.searchParams.set('marca',value);card.href=target.href;}
   document.querySelector('[data-directory-no-brand]').hidden=count!==0;
   for(const link of document.querySelectorAll('[data-brand-id]'))link.toggleAttribute('data-selected-brand',link.dataset.brandId===value);
  };
  document.querySelector('[data-directory-brand-clear]').addEventListener('click',()=>{history.pushState(null,'',context.base+'#instrumentos');apply();});
  document.addEventListener('click',event=>{const link=event.target.closest('[data-brand-id]');if(!link||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();const target=new URL(context.base,location.origin);target.searchParams.set('marca',link.dataset.brandId);target.hash='instrumentos';history.pushState(null,'',target);apply();selection.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
  addEventListener('popstate',apply);apply();
 }
}
