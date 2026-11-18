// Editorial content for the Instruments landing page; product details remain in the catalogue.
export const CATEGORY_PRESENTATION={
 caudalimetros:{description:'Medí el movimiento de líquidos y gases con la tecnología adecuada para tu instalación. Conocé las alternativas de medición y consultá por su integración con tu proceso.',topics:['Electromagnético','Coriolis','Ultrasónico'],application:'Medición en tuberías y líneas de proceso.'},
 nivel:{description:'Conocé el nivel de un tanque o silo y detectá la presencia de producto. Encontrá soluciones de medición continua y detección puntual para distintas condiciones de trabajo.',topics:['Radar','Ultrasonido','Switches de nivel'],application:'Control de almacenamiento y llenado.'},
 presion:{description:'Convertí la presión del proceso en información para supervisar tu instalación. Explorá transmisores y configuraciones para diferentes conexiones y condiciones de operación.',topics:['Transmisores Smart','Presión relativa','Alta temperatura'],application:'Supervisión de presión en instalaciones industriales.'},
 'analisis-de-aguas':{description:'Acompañá el seguimiento del agua y otros líquidos con sensores, transmisores y analizadores. Evaluá cada variable y la configuración necesaria para tu aplicación.',topics:['Sensores y transmisores','Análisis en línea','Cloro libre'],application:'Seguimiento de variables en agua y líquidos de proceso.'},
 'pantallas-y-control':{description:'Visualizá las variables de tu instalación y coordiná su control. Conocé pantallas HMI y controladores PLC para integrar señales, operación y automatización.',topics:['Pantallas HMI','PLC Siemens','PLC Schneider'],application:'Operación y automatización de instalaciones.'},
 temperatura:{description:'Seguí las condiciones térmicas de tu instalación con sensores adecuados al rango y al montaje. Compará termocuplas y elementos resistivos para integrar la temperatura a tu sistema de control.',topics:['Termocuplas','RTD','PT100 / PT1000'],application:'Seguimiento de temperatura en equipos y procesos.'},
 'densidad-y-concentracion':{description:'Conocé cómo cambia tu producto durante el proceso. Explorá instrumentos para seguir densidad, concentración o viscosidad y consultá por la calibración que requiere cada mezcla.',topics:['Densidad','Concentración','Viscosidad'],application:'Supervisión de mezclas y consistencia del producto.'},
 torque:{description:'Medí el par que transmite un eje o la reacción de un conjunto mecánico. Elegí entre sensores rotativos y estáticos según el montaje, la velocidad y los esfuerzos del equipo.',topics:['Par dinámico','Par de reacción','Ensayos'],application:'Medición de torque en máquinas y bancos de prueba.'}
};

export function highlightedProducts(products){
 const preferences=[['Caudal','endress-promag-w10'],['Nivel','radar-nivel-80-120-ghz'],['Automatización','schneider-harmony-st6']];
 return preferences.map(([family,id])=>products.find(p=>p.active!==false&&p.slug===id)??products.find(p=>p.active!==false&&p.family===family)).filter(Boolean);
}
