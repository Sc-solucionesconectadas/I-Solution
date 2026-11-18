const back=document.querySelector('[data-catalogue-return]');
if(back){
 const value=new URLSearchParams(location.search).get('volver');
 if(value)try{
  const target=new URL(value,location.origin),category=new URL(back.dataset.categoryUrl,location.origin),search=new URL(back.dataset.searchUrl,location.origin);
  const allowed=[category.pathname,search.pathname].some(path=>target.pathname===path||target.pathname.startsWith(path+'pagina/')&&/^\d+\/$/.test(target.pathname.slice((path+'pagina/').length)));
  if(target.origin===location.origin&&allowed){back.href=target.href;back.querySelector('[data-return-label]').textContent=target.pathname.startsWith(search.pathname)?'Volver a resultados':back.dataset.categoryLabel;}
 }catch{}
}
