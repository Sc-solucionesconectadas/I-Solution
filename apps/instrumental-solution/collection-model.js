import {normalizeSearch} from './catalogue-model.js';
import {CATEGORIES,PAGE_SIZE} from './catalogue-taxonomy.js';

export function collectionState(search,records,defaultPage=1){
 const params=search instanceof URLSearchParams?search:new URLSearchParams(search);
 const known=(key,field)=>records.some(r=>r[field]===params.get(key))?params.get(key):'';
 const number=Number(params.get('pagina')??defaultPage);
 return {query:(params.get('q')??'').trim().slice(0,100),brand:known('marca','brand'),technology:known('tecnologia','technology'),category:CATEGORIES.some(c=>c.id===params.get('categoria'))?params.get('categoria'):'',page:Number.isSafeInteger(number)&&number>0?number:1};
}
export function selectCollection(records,state){
 const terms=normalizeSearch(state.query).split(/\s+/).filter(Boolean);
 return records.filter(r=>(!state.brand||r.brand===state.brand)&&(!state.technology||r.technology===state.technology)&&(!state.category||r.category===state.category)&&terms.every(term=>normalizeSearch(r.search).includes(term)));
}
export function paginate(records,page=1,size=PAGE_SIZE){
 const pages=Math.max(1,Math.ceil(records.length/size));
 const current=Math.min(pages,Math.max(1,Number.isSafeInteger(page)?page:1));
 return {items:records.slice((current-1)*size,current*size),page:current,pages,total:records.length};
}
export function collectionUrl(base,state={},page=1){
 const params=new URLSearchParams();
 for(const [key,value] of [['q',state.query],['categoria',state.category],['marca',state.brand],['tecnologia',state.technology]])if(value)params.set(key,value);
 if(params.size){if(page>1)params.set('pagina',String(page));return `${base}?${params}#instrumentos`;}
 return `${base}${page>1?`pagina/${page}/`:''}#instrumentos`;
}
