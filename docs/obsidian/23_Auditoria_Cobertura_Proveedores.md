# Auditoría de cobertura de instrumentos y proveedores

> Actualización2026-11-18: el usuario aprobó la implementación y se completó la carga local descrita en [[24_Ampliacion_Catalogo_Proveedores]]. Los estados «falta» y conteos siguientes corresponden a la auditoría del17/11; no describen el catálogo actual. La exhaustividad por SKU/variante sigue sin afirmarse.

Fecha: 2026-11-17. Comparación de la fuente local activa con los índices y páginas oficiales de fabricantes. Esta nota es una auditoría y un plan de carga; no acredita que las líneas propuestas ya estén incorporadas o publicadas.

## Resultado y alcance vigente

**El catálogo todavía no cubre todo lo solicitado.** `content/instrumental-solution/productos.json` contiene 26 entradas: 25 activas y el programador Siemens oculto. De las activas, cinco son configuraciones de marca propia, nueve son líneas/series identificadas de proveedores y once son líneas genéricas sin marca asignada. Una línea genérica no cuenta como cobertura de todas las marcas que comercializan esa tecnología.

La portada comercial y los interiores por categoría de [[21_Catalogo_por_Categorias_Implementado]] y [[22_Portada_Instrumentos_Comercial]] siguen vigentes. Los planes anteriores identificaron familias que aún no se cargaron: investigación, diseño y carga efectiva son estados diferentes.

El pedido actual amplía explícitamente la cobertura a switches **y nivel continuo de Trumen**, además del nivel continuo Endress+Hauser confirmado anteriormente; no lo sustituye. Mantiene PLC y pantallas de Siemens y Schneider Electric. Sino-Inst es una marca comercializada, y «de acá todo» comprende familias adicionales a las cinco categorías actuales. Delta sigue sin confirmación específica y no se incorpora por inferencia.

## Inventario local comprobado

| Familia | Activas | Entradas actuales |
|---|---:|---|
| Caudal | 9 | Propio sanitario DN50; seis líneas genéricas: electromagnético, vórtex, ultrasónico, dispersión térmica, turbina y área variable; Endress Promag W 10; Sino-Inst Coriolis serie U. |
| Nivel | 7 | Propios radar 80/120 GHz y radar 26 GHz; genéricos ultrasónico, radar guiado y detectores; Trumen LSV; Siemens SITRANS Probe LU240. |
| Presión | 3 | Dos configuraciones propias Smart y alta temperatura; Yokogawa EJX530A. |
| Análisis de líquidos | 3 | Líneas genéricas de analizadores de líquidos y cloro libre; Endress Liquiline CM442. |
| Automatización / Pantallas y control | 3 | Siemens SIMATIC S7-1200 G2; Schneider Modicon M221; Schneider Harmony ST6. |
| **Total activo** | **25** | Veinte líneas y cinco configuraciones. El programador Siemens continúa oculto. |

| Marca asignada | Activas |
|---|---:|
| i-Solution | 5 |
| Endress+Hauser | 2 |
| Siemens | 2 |
| Trumen | 1 |
| Yokogawa | 1 |
| Schneider Electric | 2 |
| Sino-Inst | 1 |
| Sin marca asignada | 11 |

Los seis logos de proveedores ya existen. No equivalen a completar sus portafolios, ni prueban representación oficial, stock o disponibilidad de todas las variantes.

## Trumen: comparación completa de los dos índices de nivel

El [índice oficial de switches](https://trumen.in/point-level-switches-manufacturers-india.html) lista 12 entradas. El [índice de transmisores continuos](https://trumen.in/level-transmitter-manufacturers-india.html) lista seis. Solo LSV está cargado: **faltan 17 de las 18 entradas de estos dos índices**. Son entradas/series, no un conteo de todas las configuraciones eléctricas o mecánicas.

### Detección puntual: 12 entradas

| Modelo | Tecnología / orientación | Estado local | Fuente oficial |
|---|---|---|---|
| LSV | Horquilla vibrante para sólidos | Cargado | [LSV](https://trumen.in/vibrating-fork-point-level-switch-manufacturers.html) |
| LSVR | Varilla vibrante para sólidos | Falta | [LSVR](https://trumen.in/vibrating-rod-point-level-switch-suppliers.html) |
| LFV | Horquilla para líquidos | Falta | [LFV](https://trumen.in/vibrating-fork-point-level-switch-exporter-india.html) |
| LFV-11 | Horquilla compacta | Falta | [LFV-11](https://trumen.in/capacitance-level-switch-manufacturer-india.html) |
| LFV-12 | Horquilla compacta para líquidos | Falta | [LFV-12](https://trumen.in/tuning-fork-point-level-switch.html) |
| LSY | Admitancia RF | Falta | [LSY](https://trumen.in/admittance-point-level-switch-manufacturers.html) |
| LMC | Capacitancia | Falta | [LMC](https://trumen.in/capacitnace-point-level-switch-manufacturers.html) |
| LWS | Conductividad | Falta | [LWS](https://trumen.in/conductivity-points-level-switch-manufacturers.html) |
| LSR | Paleta rotativa | Falta | [LSR](https://trumen.in/rotating-paddle-point-level-switch-exporter.html) |
| LMF-TM | Flotador magnético superior | Falta | [LMF-TM](https://trumen.in/top-mounted-magnetic-flot-level-switch.html) |
| LMFS | Barrido de frecuencia | Falta | [LMFS](https://trumen.in/fly-ash-level-switch-water-level-switch-for-dairy.html) |
| LMC-14 | Capacitancia compacta | Falta | [LMC-14](https://trumen.in/compact-capacitance-level-switch-lmc-14.html) |

### Nivel continuo: seis entradas

| Modelo | Tecnología | Estado local | Fuente oficial |
|---|---|---|---|
| TLC | Capacitivo de dos hilos | Falta | [TLC](https://trumen.in/capacitance-level-transmitter-manufacturers-india.html) |
| TLH | Hidrostático | Falta | [TLH](https://trumen.in/hydrostatic-level-transmitter-manufacturers-india.html) |
| TLR | Radar sin contacto | Falta | [TLR](https://trumen.in/radar-level-transmitter-manufacturers.html) |
| TLU | Ultrasónico | Falta | [TLU](https://trumen.in/ultrasonic-level-transmitter-manufacturers.html) |
| TLCF | Capacitivo para combustible | Falta | [TLCF](https://trumen.in/capacitance-level-transmitter-suppliers-india.html) |
| TLR31 (TLRG) | Radar guiado / TDR | Falta | [TLR31 / TLRG](https://trumen.in/radar-level-transmitter-manufacturer-india.html) |

Precauciones de autoría: la URL de LFV-11 menciona capacitancia, pero su título/contenido identifica una horquilla; clasificar por la ficha técnica, no por el slug. El índice presenta LFV-11 para líquidos/sólidos y la página desarrolla aplicaciones en líquidos: revisar el documento antes de ampliar sus usos. En LMFS hay secciones «Coming Soon»; no prometer manuales, videos o recursos que no estén disponibles. TLR31 está confirmado en el índice; falta revisar íntegramente sus documentos antes de cargar parámetros. Estas 18 entradas corresponden exclusivamente a los dos índices de nivel.

### Presión Trumen: siete entradas adicionales, ninguna cargada

El [índice oficial de presión](https://trumen.in/pressure-transmitter-manufacturer-india.html) también presenta TFP40C (cerámico), TFP40S (piezorresistivo), TFP310 (diafragma rasante), TFPS 70 (Smart), TFDP 70 (diferencial Smart), TFP40T (piezorresistivo para temperatura elevada) y TFP300 (diafragma rasante). Son otros siete faltantes si se incluye su oferta de presión. No se suman a las 17 entradas faltantes de **nivel**: pertenecen a otra familia. El índice está comprobado; revisar documentación vigente y diferencias entre TFP310/TFP300 antes de cargar parámetros.

## Caudal: matriz de las cinco tecnologías solicitadas

«Falta» significa que no existe una entrada identificada con esa marca/serie, aunque haya una tarjeta genérica. «Parcial» significa que existe una serie o configuración, no toda la familia. «Sin verificar» no significa que el fabricante nunca la comercialice: no se confirmó una línea vigente en el índice revisado.

| Tecnología | Endress+Hauser | Siemens | Yokogawa | Sino-Inst |
|---|---|---|---|---|
| Electromagnético | Parcial: Promag W 10; otros Promag por seleccionar | Falta: SITRANS FM | Falta: ADMAG / AXG | Falta: familia magnética |
| Coriolis | Falta: Promass | Falta: SITRANS FC | Falta: ROTAMASS | Parcial: serie U; otras series por seleccionar |
| Vórtex | Falta: Prowirl | Falta: SITRANS FX | Falta: VY | Falta: familia vórtex |
| Dispersión térmica | Falta: t-mass | Sin verificar una familia vigente de caudal másico térmico | Sin verificar en el portafolio revisado | Falta: térmicos y variantes de control de caudal |
| Ultrasónico | Falta: Prosonic Flow | Falta: SITRANS FS | Sin verificar en el portafolio revisado | Falta: tiempo de tránsito / Doppler según serie |

Fuentes: [Endress caudal](https://www.endress.com/en/field-instruments-overview/flow-measurement-product-overview), [Siemens catálogo de caudal](https://mall.industry.siemens.com/mall/en/id/Catalog/Products/10020499), [Siemens folletos de instrumentación](https://www.siemens.com/en-us/products/sitrans/process-instrumentation-brochures/), [Yokogawa caudal](https://www.yokogawa.com/solutions/products-and-services/measurement/field-instruments-products/flow-meters/), [Sino-Inst caudal](https://sino-inst.com/).

Candidatos documentados para la próxima selección: Endress Promass F 300 / Prowirl F 200 / t-mass I 300 / Prosonic Flow P 500; Siemens FMS / FC / FS230 / FX330; Yokogawa ADMAG AXG / ROTAMASS Total Insight / VY. Cada ficha debe corresponder a la serie y versión real elegida; no combinar parámetros de equipos distintos para crear una configuración ficticia.

La energía térmica calculada por un sistema no equivale al principio de dispersión térmica para caudal másico de gases. Tampoco corresponde forzar cinco tecnologías a todas las marcas: Schneider y Trumen no se agregan automáticamente a esta matriz de caudal por el mero hecho de estar entre los proveedores.

## Radares, presión y análisis de aguas

| Área | Cobertura actual | Ampliación identificada / siguiente selección |
|---|---|---|
| Radar de nivel | Dos series propias; línea genérica de onda guiada | Trumen TLR/TLR31; Endress Micropilot y Levelflex; Siemens LR100/LR500; Sino-Inst sin contacto/guiado y variantes por aplicación. |
| Otros niveles continuos | Siemens LU240 y línea ultrasónica genérica | Trumen TLC/TLH/TLU/TLCF; Endress continuo por tecnología; Sino-Inst ultrasónico, hidrostático, capacitivo, magnetostrictivo/flotador. |
| Presión | Dos propios y Yokogawa EJX530A de presión relativa | Endress Cerabar/Deltabar; Siemens SITRANS P320/P420; Yokogawa EJA/EJX por relativa, absoluta y diferencial; familias Sino-Inst y siete entradas del índice Trumen. |
| Agua / líquidos | Dos líneas genéricas y Endress CM442 | Separar pH/ORP, conductividad, oxígeno disuelto, turbidez y cloro; sensores/transmisores Endress y Yokogawa compatibles con cada variable. |

Fuentes:

- [Endress radar](https://www.endress.com/en/field-instruments-overview/level-measurement/Radar-level-measurement): Micropilot compacto FMR10B/20B/30B, proceso FMR60B/62B/63B y sólidos FMR66B/67B; son familias con aplicaciones diferentes. Levelflex FMP51 es una opción de radar guiado.
- [Siemens LR500](https://www.siemens.com/en-us/products/sitrans/lr500/) y [catálogo radar](https://sieportal.siemens.com/en-kr/products-services/10000251): LR510/530/550/580 según aplicación. LU240 es ultrasónico, no radar.
- [Endress presión](https://www.endress.com/en/field-instruments-overview/pressure/Absolute-gauge-pressure-measurement), [Siemens P320/P420](https://www.siemens.com/us/en/products/automation/process-instrumentation/pressure-measurement/sitrans-p320-420.html), [Yokogawa presión relativa](https://www.yokogawa.com/mea/solutions/products-and-services/measurement/field-instruments-products/pressure-transmitters/gauge-pressure/), [Yokogawa diferencial](https://www.yokogawa.com/mx/solutions/products-and-services/measurement/field-instruments-products/pressure-transmitters/differential-pressure/).
- [Endress análisis de líquidos](https://www.endress.com/en/field-instruments-overview/liquid-analysis-product-overview), [Yokogawa FLXA402](https://www.yokogawa.com/nl/solutions/products-and-services/measurement/analyzers/liquid-analyzers/ph-analyzers/multi-channel-4-wire-analyzer-flxa402/), [Yokogawa FLXA402T](https://www.yokogawa.com/ph/solutions/products-and-services/measurement/analyzers/liquid-analyzers/turbidity-analyzers/liquid-analyzer-turbidity-chlorine-flxa402t/).

CM442 es un transmisor multiparamétrico que necesita sensores y módulos compatibles. No acredita tener cargados todos los instrumentos de cada variable. FLXA402 y FLXA402T tampoco deben fusionarse: el segundo corresponde a la línea de turbidez/cloro. Medir caudal de agua no equivale a analizar su composición química. No se confirmó una línea de análisis químico de aguas en los índices principales revisados de Sino-Inst: no inventar esa asociación.

## PLC y pantallas Siemens / Schneider

| Marca | Cargado | Faltante / ampliación |
|---|---|---|
| Siemens | SIMATIC S7-1200 G2 | Pantallas HMI: Unified Basic y Unified Comfort; evaluar S7-1500 y otras familias de control según comercialización. No hay HMI Siemens cargada. |
| Schneider Electric | Modicon M221 y Harmony ST6 | Evaluar Modicon M241/M251/M262 y otras familias Harmony como GTU/STW6; no confundir una ST6 con todo el portafolio. |

Fuentes: [Siemens controladores](https://www.siemens.com/en-us/products/simatic/controller-configurator/), [Siemens HMI Unified](https://www.siemens.com/en-us/products/simatic-hmi/wincc-unified-hardware/), [Schneider controladores de máquinas](https://www.se.com/us/en/product-subcategory/3910-controllers-plc-pac-for-industrial-machines/), [Schneider Harmony](https://www.se.com/es/es/work/products/master-ranges/harmony/).

La página de Siemens anuncia Unified Mobile para el primer semestre de 2027: no presentarlo como disponible en la revisión de noviembre de 2026. Mantener oculto el programador Siemens retirado; no reactivarlo al importar un proveedor. Los catálogos contienen accesorios, módulos y variantes: no equipararlos a nuevas series independientes sin una regla editorial.

## Sino-Inst: alcance de «todo»

Solo está cargada la serie U de Coriolis. Se revisaron los diez grupos del menú de caudal y las seis familias restantes del menú principal. Son **16 grupos de navegación**, no 16 productos ni un conteo exhaustivo de SKU. La página de térmicos amplía el grupo Mass Flow Meters.

| Grupo oficial | Subtipos a contemplar en la selección | Estado local de esa marca | Fuente |
|---|---|---|---|
| Magnetic Flow Meters | En línea, inserción, sanitario, batería, presión y otros montajes | Falta | [Magnéticos](https://sino-inst.com/magnetic-flow-meters/) |
| Turbine Flow Meters | Líquidos/gases; conexión y montaje según serie | Falta | [Turbina](https://sino-inst.com/turbine-flow-meters/) |
| Paddle Wheel Flow Meters | Rueda de paletas | Falta | [Paletas](https://sino-inst.com/paddle-wheel-flow-meters/) |
| Vortex Flow Meters | Líquidos, gases o vapor según versión | Falta | [Vórtex](https://sino-inst.com/vortex-flow-meters/) |
| Ultrasonic Flow Meters | Fijo/portátil, clamp-on/en línea, tránsito o Doppler | Falta | [Ultrasónicos](https://sino-inst.com/ultrasonic-flow-meters/) |
| Mass Flow Meters | Coriolis, térmico, MFM/MFC y medición de sólidos | Parcial: solo Coriolis U | [Másicos](https://sino-inst.com/mass-flow-meters/), [térmicos](https://sino-inst.com/thermal-gas-mass-flow-meters/) |
| Positive Displacement Flow Meters | Engranajes/oval y otros desplazamientos según serie | Falta | [Desplazamiento positivo](https://sino-inst.com/positive-displacement-flow-meters/) |
| Differential Pressure Flow Meters | Orificio, Venturi, Pitot/Annubar, cono y otros | Falta | [Presión diferencial](https://sino-inst.com/differential-pressure-flow-meters/) |
| Multiphase Flow Meter | Medición multifásica para petróleo y gas | Falta | [Multifásico](https://sino-inst.com/multiphase-flow-meter-for-oil-and-gas-2/) |
| Open Channel Flow Meters | Canal abierto: nivel/velocidad por tecnología | Falta | [Canal abierto](https://sino-inst.com/open-channel-flow-meters/) |
| Flow Switches | Térmicos, electrónicos y variantes de supervisión | Falta | [Switches de flujo](https://sino-inst.com/industrial-flow-switches/) |
| Pressure Sensors & Transmitters | Relativa/absoluta/diferencial; sumergible, diafragma, alta temperatura/presión y switches | Falta | [Presión](https://sino-inst.com/pressure-sensors/) |
| Level Meters | Radar, guiado, ultrasónico, hidrostático, capacitivo, flotador/magnetostrictivo, interruptores | Falta | [Nivel](https://sino-inst.com/industrial-level-transmitters/) |
| Torque Sensors / Transducers | Rotativo/dinámico y estático/reacción | Falta; categoría nueva | [Torque](https://sino-inst.com/torque-sensors-torque-transducers/) |
| Temperature Sensors / Transmitters | Termocuplas, RTD, transmisores, termómetros y accesorios | Falta; categoría nueva | [Temperatura](https://sino-inst.com/industrial-temperature-sensors-transmitters/) |
| Industrial Densitometers | Densidad por tecnología; también concentración/viscosidad relacionadas | Falta; categoría nueva | [Densidad](https://sino-inst.com/industrial-densitometers/) |

Para completar ese alcance habrá que extender la taxonomía actual a temperatura, densidad/concentración y torque, con nombres comprensibles y la misma navegación paginada. Esta nota no cambia aún las cinco categorías. Switches de caudal pueden vivir dentro de Caudal; MFM/MFC no deben perder su distinción medición/control.

Ejemplos de series identificadas para el siguiente inventario de modelos: SI-310x magnéticos, SI-320x turbina, SI-330x vórtex, SI-340x ultrasónicos, SI-3501 térmico; SI-600/SI-210/SI-100 de switches; SI-1180/SI-2088 y series de presión diferencial; CL1 de torque. Estos códigos no deben convertirse en rangos genéricos ficticios: crear solo entradas con página/ficha propia comprobada.

No se cerró una auditoría SKU por SKU de todas las variantes de Sino-Inst. Sus páginas cruzan recursos, artículos, aplicaciones y equipos repetidos: deduplicar por modelo y URL canónica antes de contar o importar. Se encontraron títulos distintos de equipos magnéticos que enlazan a una misma URL. Algunas explicaciones generales del sitio tampoco son consistentes entre categorías; contrastar principio y parámetros con la ficha específica. No trasladar certificaciones, stock, cifras o promesas comerciales del fabricante a i-Solution.

## Ficha que debe tener cada nueva entrada

- Marca y familia reales; serie/modelo cuando se conoce; variantes dentro de la misma serie cuando corresponda.
- Imagen original que represente ese equipo; galería solo si hay material verificable. Mejorar recorte/compresión/resolución de entrega sin inventar construcción o marcas.
- Descripción breve, aplicaciones, **principio de medición propio de ese instrumento**, condiciones de selección y límites por variante. Para PLC/HMI, describir función de control/visualización, no un principio de medición ficticio.
- Parámetros cotejados con documentos de la misma versión. No asignar a toda una línea los límites de un único modelo.
- Ficha/manual/videos/software asociados al equipo exacto y comprobados antes de mostrar el enlace. Si falta material, ofrecer consulta; no generar un manual inexistente.
- CTA contextual que lleve marca, instrumento y necesidad a Contacto; conservar retorno a su categoría y filtros.
- Visibilidad/orden/editor y previsualización del panel; ficha y catálogo digital regenerados desde esa misma fuente.

No describir a i-Solution como partner/distribuidor oficial sin acreditación. Se puede hablar de marcas comercializadas y asesoramiento. La foto pendiente del caudalímetro propio debe salir del original del mismo equipo, con el encuadre sin cabezal pedido; no sustituirla por otro fabricante para simular el instrumento.

## Orden de ejecución propuesto

1. **Completar Trumen nivel:** 11 switches faltantes y seis continuos. Verificar documentos y fotos por cada una de las 17 entradas nuevas.
2. **Completar el núcleo solicitado:** caudal por marca/tecnología de la matriz; radares y otros continuos Endress/Siemens/Sino; presión; análisis de aguas por variable; HMI Siemens y familias PLC/HMI seleccionadas. No asignar automáticamente tecnologías no verificadas a una marca.
3. **Ampliar Sino-Inst:** consolidar inventario por serie/modelo de los 16 grupos, eliminar duplicados y añadir las nuevas variables a la taxonomía. La primera pasada cubre familias; la segunda concilia cada serie y sus documentos. No anunciar «todo cargado» antes de esa conciliación.
4. **Integrar y verificar por lote:** fuente JSON, imágenes/documentos, filtros/categorías, ficha/CTA, PDF/catálogo y panel. Copia de seguridad del panel, preservar borradores, ejecutar check/tests/build y revisar móvil/escritorio y descargas. Publicar únicamente con autorización explícita.

No generar centenares de páginas duplicadas por combinaciones de DN, conexiones o accesorios: usar una ficha de serie con variantes fieles cuando sea suficiente. Añadir muchas entradas no debe volver a alargar la portada; conservar las tarjetas de categoría y la paginación interior.

## Evidencia, límites y cambios de esta tarea

- Leídos `AGENTS.md`, contexto, pendientes, plan19 y fuente actual de productos. Recuento reproducible: 26 almacenadas / 25 activas, con reparto 9/7/3/3/3 y 5 propias/9 de proveedores/11 genéricas.
- Revisados índices oficiales, páginas de familias y páginas individuales indicadas. Trumen bloqueó el acceso HTTP simple con 406; los dos índices se leyeron por herramientas de navegación y extracción. El fallo no se trató como ausencia de productos.
- Extracción intermedia ignorada en `.qa/catalogue-audit-2026-11-17/official-indexes.json`: 17 páginas de Sino-Inst disponibles y dos respuestas de Trumen bloqueadas por ese método. No es un inventario depurado de SKU; incluye enlaces de recursos y navegación.
- No se descargaron ni validaron todos los manuales e imágenes de cada serie candidata. Esa comprobación sigue siendo requisito de carga; tampoco se verificó stock o representación comercial.
- Solo documentación e inventario de auditoría. No se alteraron código, productos, imágenes, PDF, panel/base de datos, cuentas, correo, dominios o despliegue; no se enviaron mensajes ni formularios.
- No se ejecutaron pruebas de aplicación: no hubo cambio funcional. Las validaciones de esta tarea son recuento/consistencia del inventario, referencias y documentación. Las pruebas de la portada22 son evidencia anterior, no una nueva ejecución.

Relacionadas: [[19_Plan_Catalogo_Llamada_Cliente]] · [[21_Catalogo_por_Categorias_Implementado]] · [[22_Portada_Instrumentos_Comercial]] · [[05_Pendientes]].
