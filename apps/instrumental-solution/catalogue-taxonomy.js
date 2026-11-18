// Shared by static generation and the catalogue browser. Families remain editorial data.
export const CATEGORIES=Object.freeze([
 {id:'caudalimetros',name:'Caudalímetros',family:'Caudal',image:'promag-w10',description:'Electromagnéticos, Coriolis y otras tecnologías para medir caudal.'},
 {id:'nivel',name:'Nivel',family:'Nivel',image:'radar',description:'Radares, transmisores y switches de nivel continuo o puntual.'},
 {id:'presion',name:'Presión',family:'Presión',image:'yokogawa-ejx530a',description:'Sensores y transmisores para medir la presión de tu proceso.'},
 {id:'analisis-de-aguas',name:'Análisis de aguas',family:'Análisis de líquidos',image:'liquiline-cm442',description:'Sensores y analizadores para el control del agua y otros líquidos.'},
 {id:'pantallas-y-control',name:'Pantallas y control',family:'Automatización',image:'schneider-st6',description:'Pantallas HMI y PLC para visualizar y controlar instalaciones.'},
 {id:'temperatura',name:'Temperatura',family:'Temperatura',image:'sino-inst-rtd',description:'Termocuplas y sensores RTD para seguir las condiciones térmicas del proceso.'},
 {id:'densidad-y-concentracion',name:'Densidad y concentración',family:'Densidad y concentración',image:'sino-inst-densidad',description:'Medición de densidad, concentración y viscosidad en líquidos.'},
 {id:'torque',name:'Torque',family:'Torque',image:'sino-inst-torque-dinamico',description:'Sensores de par para ejes rotativos, ensayos y medición de reacción.'}
]);
export const PAGE_SIZE=9;
export const publishedProducts=products=>products.filter(p=>p.active!==false);
export const categoryFor=product=>CATEGORIES.find(c=>c.family===product.family);
export const categoryPath=category=>`productos/${category.id}/`;
export const searchPath='productos/buscar/';
export const categoriesWithProducts=products=>CATEGORIES.filter(c=>products.some(p=>p.active!==false&&p.family===c.family));
