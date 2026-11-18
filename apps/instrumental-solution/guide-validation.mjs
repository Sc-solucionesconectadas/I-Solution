export function validateGuide(guide) {
  if(!Array.isArray(guide?.brands))throw new Error('Falta el registro de marcas.');
  const ids=new Set();
  for(const brand of guide.brands){
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(brand.id)||ids.has(brand.id))throw new Error('Identificador de marca inválido o repetido.');
    ids.add(brand.id);
    if(['name','focus','url','logo'].some(field=>typeof brand[field]!=='string'||!brand[field].trim()))throw new Error('Marca incompleta.');
    const url=new URL(brand.url);if(url.protocol!=='https:'||url.username||url.password)throw new Error('Fuente de marca inválida.');
    if(!['light','dark'].includes(brand.tone)||!/^[a-z0-9-]+\.(?:svg|webp|png)$/.test(brand.logo))throw new Error('Recurso de marca inválido.');
  }
}
