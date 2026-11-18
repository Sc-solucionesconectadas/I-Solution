# Plan de alineación del catálogo con la revisión del cliente

Fecha: 2026-11-17. **Investigación y planificación; sin cambios en código, instrumentos, imágenes, PDF o base del panel.** El estado implementado continúa siendo [[18_Instrumentos_Proveedores_y_Funcionamiento]], con el filtro de recursos retirado el17/11.

## Requisitos confirmados y puntos abiertos

- Marcas principales: Endress+Hauser, Siemens, Trumen y Yokogawa. Se mantienen Schneider Electric, Sino-Inst y la línea propia ya confirmadas anteriormente.
- Caudal: electromagnético, Coriolis, vórtex, térmico y ultrasónico; incorporar oferta identificable de Siemens y Yokogawa.
- Nivel: separar detección puntual y medición continua. El usuario aclaró expresamente que la marca de continuo mencionada es **Endress+Hauser**.
- Presión y análisis de aguas deben tener una oferta identificable y explicaciones específicas.
- Priorizar la presentación de pantallas HMI. La oferta de PLC/módulos y la incorporación comercial de Delta no están suficientemente definidas en las notas; propuesta pendiente, no permiso para retirar definitivamente esas fichas o anunciar todos esos productos.
- Retirar el programador Siemens por pedido del cliente. La ejecución se incluye en el plan posterior; todavía existe en la fuente.
- El cambio de foto corresponde al **caudalímetro propio**, evitando que se vea el cabezal.
- Logos en catálogo y fichas correspondientes; funcionamiento, documentación y consulta asociados a cada instrumento.

## Comparación con la fuente actual

Auditoría de `productos.json`, `marcas.json` e imágenes actuales:

| Área | Entradas actuales | Cobertura y falta principal |
| --- | ---: | --- |
| Caudal | 9 | Línea propia, seis líneas genéricas, Promag W10 y Sino-Inst Coriolis U. No hay caudalímetros identificados como Siemens o Yokogawa. |
| Nivel | 7 | Dos radares propios, tres líneas genéricas, Trumen LSV y Siemens LU240. No hay nivel continuo Endress+Hauser; Trumen solo tiene una horquilla para sólidos. |
| Presión | 3 | Dos configuraciones propias y Yokogawa EJX530A. Faltan ejemplos Endress+Hauser/Siemens si el cliente los comercializa habitualmente. |
| Análisis de líquidos | 3 | Dos líneas genéricas y Liquiline CM442. Hay que distinguir sensores/variables del transmisor que recibe sus señales. |
| Automatización | 3 | Dos PLC y una HMI Harmony ST6. Faltan pantallas Siemens; Delta queda como candidato sujeto a confirmación. |
| Configuración | 1 | Programador Siemens7ML58302AH: retiro solicitado. Al retirarlo quedaría vacía esta familia. |

Total26. Tener una marca en el bloque de logos no significa que ya haya productos suyos en todas las tecnologías. La investigación del fabricante tampoco confirma el portafolio, stock o acuerdo comercial de i-Solution.

## Selección investigada de caudal

Propuesta de familias concretas para cubrir faltantes. Son candidatos para consulta de configuración; no SKU cerrados ni compromiso de añadir todos.

| Tecnología | Familias investigadas | Contenido específico que debe prepararse |
| --- | --- | --- |
| Electromagnética | [Siemens MAG5100W, manual oficial](https://cache.industry.siemens.com/dl/files/684/109810684/att_1103287/v1/A5E03063678en_SITRANS_FM_MAG5100W_OI_en-US.pdf?download=true), con transmisor compatible; [Yokogawa ADMAG AXG](https://www.yokogawa.com/solutions/products-and-services/measurement/field-instruments-products/flow-meters/magnetic-flowmeters/admag-axg-admagti-magnetic-flowmeters/). Promag W10 ya existe. | Inducción en líquido conductor, caudal volumétrico, materiales/electrodos/revestimiento, montaje y señales del conjunto seleccionado. |
| Coriolis | [Endress+Hauser Promass F300](https://www.us.endress.com/en/field-instruments-overview/flow-measurement-product-overview/coriolis-flowmeter-promass-f300-8f3b), [Yokogawa ROTAMASS Total Insight](https://www.yokogawa.com/solutions/products-and-services/measurement/field-instruments-products/flow-meters/coriolis-flow-meters/rotamass-total-insight-coriolis-mass-flow-and-density-meters/). [Sino-Inst U](https://sino-inst.com/u-series-coriolis-flow-meter/) ya existe. | Medición másica mediante tubos vibrantes; densidad/temperatura cuando la configuración lo permita; fluido, viscosidad y pérdida de carga. |
| Vórtex | [Endress+Hauser Prowirl F200](https://www.us.endress.com/en/field-instruments-overview/flow-measurement-product-overview/vortex-flowmeter-prowirl-f200-7f2c), [Yokogawa VY](https://www.yokogawa.com/solutions/products-and-services/measurement/field-instruments-products/flow-meters/vortex-flow-meters/vortex-flowmeters-vy-series/). | Frecuencia de remolinos detrás de un cuerpo; seleccionar para líquido, gas o vapor. La compensación para obtener masa/energía depende de la versión. |
| Térmica | [Endress+Hauser t-mass I300](https://www.us.endress.com/en/field-instruments-overview/flow-measurement-product-overview/thermal-mass-flowmeter-t-mass-i300-6i3b). | Transferencia de calor al gas y caudal másico; composición, humedad, calibración y condiciones de inserción. |
| Ultrasónica | [Siemens FS230, catálogo oficial](https://sieportal.siemens.com/en-pk/products-services/10318552?tree=CatalogTree), [Endress+Hauser Prosonic Flow P500](https://www.us.endress.com/en/field-instruments-overview/flow-measurement-product-overview/ultrasonic-flow-meter-prosonic-flow-p500-9p5b). | Diferencia de tiempos acústicos; sensores clamp-on y datos reales de tubería/fluido. No atribuir características de la versión de gas a la de líquido ni confundir con Doppler. |

Prioridad comercial propuesta: cubrir primero las ausencias Siemens/Yokogawa; después añadir representantes de las otras tecnologías, sin multiplicar tarjetas repetidas de la misma serie. No asociar todas las marcas a todas las tecnologías.

## Nivel puntual: referencia Trumen

[Índice oficial de point level switches](https://trumen.in/point-level-switches-manufacturers-india.html). La serie LSV ya está incorporada. Primera ampliación propuesta:

| Serie | Diferencia y principio a explicar | Fuente |
| --- | --- | --- |
| LSV, existente | Horquilla para sólidos/polvos; la presencia del material altera la vibración. | [LSV](https://trumen.in/vibrating-fork-point-level-switch-manufacturers.html) |
| LFV | Horquilla para líquidos; la inmersión produce un cambio de frecuencia detectado por la electrónica. | [LFV](https://trumen.in/vibrating-fork-point-level-switch-exporter-india.html) |
| LMC | Cambio de capacitancia entre sonda y referencia por presencia del material. | [LMC](https://trumen.in/capacitnace-point-level-switch-manufacturers.html) |
| LSY | Admitancia RF con compensación de recubrimiento en la sonda, según instalación. | [LSY](https://trumen.in/admittance-point-level-switch-manufacturers.html) |
| LWS | El líquido conductor establece el camino eléctrico entre electrodos. | [LWS](https://trumen.in/conductivity-points-level-switch-manufacturers.html) |
| LSR | Un sólido bloquea la paleta que gira y el mecanismo produce la señal de conmutación. | [LSR](https://trumen.in/rotating-paddle-point-level-switch-exporter.html) |

Los nombres correctos observados son **LSY** para admitancia y **LSR** para paleta; no deducir códigos por semejanza. Otras variantes del índice, como LSVR o modelos compactos, quedan para una segunda selección. Un switch informa presencia o un umbral, no altura continua.

La web de Trumen ofrece pestañas de principio, aplicaciones, montaje y recursos. Se tomará esa organización como referencia y se redactarán explicaciones propias en español con diagramas propios. Verificar cada descarga: algunas páginas indican recursos pendientes; no prometer un manual o video por la sola existencia de la pestaña.

## Nivel continuo Endress+Hauser

Candidatos diferenciados:

- [Micropilot FMR60B](https://www.afs.endress.com/en/field-instruments-overview/level-measurement/Radar-Micropilot-FMR60B): radar de80GHz, medición continua sin contacto para líquidos compatibles. Explicar eco/distancia/nivel y condicionantes del recipiente.
- [Levelflex FMP51](https://www.za.endress.com/en/field-instruments-overview/level-measurement/Guided-Radar-Levelflex-FMP51): radar guiado por sonda, contacto con el medio y selección de sonda/montaje.

La distinción puntual/continuo debe ser un dato del instrumento, utilizable para un filtro contextual de Nivel. No convertirla en otra guía general permanente. Seleccionar las referencias habituales con el cliente antes de cargar límites concretos.

## Presión, análisis y pantallas

- Presión: conservar propias/EJX530A. Candidatos [Cerabar PMP51B](https://www.endress.com/en/field-instruments-overview/pressure/pressure-transmitter-cerabar-pmp51b) y [Siemens P320/P420](https://www.siemens.com/us/en/products/automation/process-instrumentation/pressure-measurement/sitrans-p320-420.html). Distinguir relativa, absoluta y diferencial; rangos/materiales/sellos corresponden a versiones, no a toda la categoría.
- Análisis: conservar Liquiline CM442 y distinguirlo de sus sensores. Candidato [Yokogawa FLXA402](https://www.yokogawa.com/solutions/products-and-services/measurement/analyzers/liquid-analyzers/ph-analyzers/multi-channel-4-wire-analyzer-flxa402/). Organizar por pH/ORP, conductividad y oxígeno según sensor/módulo; turbidez/cloro requieren sus sensores y métodos específicos. No presentar un transmisor como equipo que mide todas las variables por sí solo.
- Pantallas: conservar [Harmony ST6](https://www.se.com/ca/en/product-range/65770-harmony-st6/) y proponer [Siemens Unified Basic Panels](https://sieportal.siemens.com/en-bd/products-services/10543415). Explicar visualización, alarmas, operación y comunicación con PLC; compatibilidad/protocolos/licencias por modelo.
- [Delta DOP-100 y otras HMI del fabricante](https://www.deltaww.com/en-US/products/TouchPanelHMIHumanMachineInterfaces): investigadas, pero la decisión comercial de incluir Delta sigue pendiente. No agregar su logo o productos solo porque existe oferta en el fabricante.
- PLC S7-1200 G2 y M221: propuesta de ocultarlos temporalmente si se aprueba priorizar solo pantallas. Mantener el trabajo y los documentos privados; no borrar datos ni presentarlos como decisión ya ejecutada.

## Foto del caudalímetro propio

Inspección visual de archivos existentes:

- `caudal.png`,300×300: muestra casi únicamente el cabezal; no contiene el cuerpo necesario para obtener una foto del sensor con un simple recorte.
- `caudal-vista-2.png`,300×300: muestra el equipo completo dentro de su embalaje. Hay un cuerpo real identificable para estudiar un encuadre sin el cabezal, pero el detalle restante tiene muy poca resolución.
- Las fotos genéricas de caudal extraídas del folleto rondan353–515px de ancho; revisar su tratamiento además de la portada propia.

Plan: solicitar el original de la vista del cuerpo o una foto nueva del mismo caudalímetro. Preparar fondo limpio/encuadre del cuerpo y conexiones sin el cabezal. No sustituirlo por un producto de otra marca ni inventar conexiones o prestaciones mediante IA. El diseño y la descripción deben seguir correspondiendo al modelo real. La página antigua del caudalímetro agotó el tiempo de consulta en esta revisión; no se afirma haber recuperado un original mejor.

## Ficha y recorrido propuestos

Mantener la estética actual y los cuatro filtros visibles: búsqueda, variable/función, marca y tecnología. Las categorías principales propuestas son Caudal, Nivel, Presión, Análisis de aguas/líquidos y Pantallas HMI. Propuesta de nombre HMI pendiente de implementación; Configuración desaparece al retirar su único producto. No agregar Recursos disponibles.

Cada producto: fotografía y logo de su marca; nombre/serie; resumen breve; explicación y esquema de funcionamiento; aplicaciones y criterios de selección; datos técnicos confirmados; documentación de ese equipo; CTA «Consultar este instrumento» con marca/modelo/tecnología. En pantallas se explica la función de operación, no un principio físico de medición.

Los modelos del fabricante se cargarán como familias consultables cuando no haya referencia comercial cerrada. No copiar todos sus SKU ni todos los valores extremos de una familia. Documentar fuente/fecha/versión de cada archivo. Separar ficha propia y manual original del fabricante. Logos con proporciones y contraste correctos, sin indicar partner/representante oficial sin acreditación.

## Orden de implementación propuesto

1. Aprobar matriz y alcance HMI/PLC/Delta; conservar copia de datos y borradores antes de tocar panel o fuente.
2. Retirar programador y revisar sus apariciones en portada, catálogo, familia, Contacto, PDF y enlaces. Revisar su URL antigua; no redirigir a un PLC/HMI como si fueran productos equivalentes.
3. Añadir caudal Siemens/Yokogawa y nivel continuo Endress+Hauser con fotos/documentos oficiales; después ampliar Trumen y otros candidatos seleccionados.
4. Completar explicaciones/diagramas y datos por producto; validar diferencias de versión y preparar la foto del caudalímetro propio.
5. Ajustar categorías/filtros dependientes/logos y CTA de selección, con comportamiento fiel a los datos.
6. Integrar campos en panel, previsualizar y conciliar sin sobrescribir borradores. Las bajas de fuente requieren resolución específica: el conciliador aditivo actual rechaza eliminaciones por diseño.
7. Regenerar fichas/catálogo/portada/huellas. Comprobar fichas/documentos, menú/Contacto, no duplicados, anclas, responsive y vistas previas de panel. Publicación posterior solo cuando se autorice.

## Validación de esta investigación

Consultadas fuentes oficiales de los fabricantes; inspeccionadas las26 entradas, marcas y dimensiones/fotos locales. La documentación oficial acredita características de productos, no disponibilidad comercial de i-Solution. No se ejecutaron pruebas de aplicación porque no se modificó código/configuración/datos. Sin envíos, publicaciones, altas o cambios en los otros proyectos.
