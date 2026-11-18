// Query values are identifiers resolved against the published catalogue registry.
export function catalogueContext(context,params,productId=params.get('producto')) {
  const product=(context.products??[]).find(item=>item.id===productId);
  return {
    brand:(context.brands??[]).find(item=>item.id===(product?.brandId||params.get('marca')))??null,
    technology:(context.technologies??[]).find(item=>item.id===(product?.technologyId||params.get('tecnologia')))??null,
  };
}

export function contextFields(context,dataset) {
  return {
    brand:(context.brands??[]).find(item=>item.id===dataset.brand)?.label??'',
    technology:(context.technologies??[]).find(item=>item.id===dataset.technology)?.label??'',
  };
}
