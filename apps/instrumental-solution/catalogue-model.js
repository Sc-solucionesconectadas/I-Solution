export const normalizeSearch=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es-AR').trim();
export function catalogueState(url,families,facets) {
  const params=new URL(url).searchParams;
  const family=params.get('familia')??'';
  const resource=params.get('recurso')??'';
  const state={query:(params.get('q')??'').slice(0,100),family:families.includes(family)?family:'',documents:params.get('documentos')==='1',resource:['manual','video'].includes(resource)?resource:''};
  if(facets){state.brand=facets.brands.includes(params.get('marca'))?params.get('marca'):'';state.technology=facets.technologies.includes(params.get('tecnologia'))?params.get('tecnologia'):'';}
  return state;
}
export function matchesProduct(product,state) {
  const terms=normalizeSearch(state.query).split(/\s+/).filter(Boolean);
  const text=normalizeSearch(product.search);
  return (!state.family||product.family===state.family)&&(!state.brand||product.brand===state.brand)&&(!state.technology||product.technology===state.technology)&&(!state.documents||product.documents)&&(!state.resource||product[state.resource]===true)&&terms.every(term=>text.includes(term));
}
