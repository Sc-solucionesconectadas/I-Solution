# Ampliación local del catálogo de proveedores

Fecha: 2026-11-18. Implementación autorizada por el usuario después de [[23_Auditoria_Cobertura_Proveedores]]. Fuente activa: `C:/Proyectos/I-Solution`; panel independiente: `C:/Proyectos/Solution-Group-Admin`.

## Resultado y alcance

Se añadieron **98 entradas** a las 26 anteriores, conservando exactamente los objetos originales: **124 almacenadas y 123 activas**. El programador Siemens permanece oculto. Una entrada representa un instrumento, una serie o una familia comercial según su descripción; **no representa todas sus variantes ni un SKU con stock confirmado**.

La web y la integración del panel se actualizaron solo localmente. No se realizaron commit, push, deploy, cambios DNS, envíos, activaciones, cambios de cuentas o contraseñas. La demo remota conserva su versión publicada anterior. Los builds de revisión mantienen noindex y transporte de formulario vacío.

## Cobertura activa comprobada

| Categoría visible | Familia fuente | Entradas activas |
|---|---|---:|
| Caudalímetros | Caudal | 35 |
| Nivel | Nivel | 43 |
| Presión | Presión | 18 |
| Análisis de aguas | Análisis de líquidos | 10 |
| Pantallas y control | Automatización | 10 |
| Temperatura | Temperatura | 2 |
| Densidad y concentración | Densidad y concentración | 3 |
| Torque | Torque | 2 |
| **Total** | | **123** |

| Marca asignada | Activas |
|---|---:|
| i-Solution | 5 |
| Endress+Hauser | 15 |
| Siemens | 12 |
| Trumen | 25 |
| Yokogawa | 8 |
| Schneider Electric | 6 |
| Sino-Inst | 41 |
| Líneas genéricas sin marca asignada | 11 |

Las líneas genéricas anteriores no se atribuyeron a fabricantes por inferencia. Los seis logos originales continúan en el carrusel; su presencia no afirma exclusividad o representación oficial.

### Trumen

Se completaron las **18 entradas de los dos índices oficiales de nivel**, con 17 altas además de LSV:

- Switches: LSV, LSVR, LFV, LFV-11, LFV-12, LSY, LMC, LWS, LSR, LMF-TM, LMFS y LMC-14.
- Continuos: TLC, TLH, TLR, TLU, TLCF y TLR31/TLRG.
- Presión: siete altas TFP40C, TFP40S, TFP310, TFPS70, TFDP70, TFP40T y TFP300.

Fuentes: [switches](https://trumen.in/point-level-switches-manufacturers-india.html), [continuos](https://trumen.in/level-transmitter-manufacturers-india.html), [presión](https://trumen.in/pressure-transmitter-manufacturer-india.html). Los datos de montaje/rango dependen de la versión; no se extrapolaron a todos los modelos. LMC-14 conserva documentos distintos para agua y aceite, con identificadores y archivos separados.

### Caudal por marca

| Marca | Tecnologías con entrada identificada |
|---|---|
| Endress+Hauser | Electromagnético, Coriolis, vórtex, dispersión térmica y ultrasónico |
| Siemens | Electromagnético, Coriolis, vórtex y ultrasónico |
| Yokogawa | Electromagnético, Coriolis y vórtex |
| Sino-Inst | Electromagnético, Coriolis, vórtex, térmico y ultrasónico; además turbina, paletas, desplazamiento positivo, diferencial, canal abierto y otras familias verificadas |

No se inventaron equipos térmicos Siemens/Yokogawa ni ultrasónicos Yokogawa para completar una matriz. La matriz expresa presencia de series verificadas, no exhaustividad del portafolio.

### Otras líneas

- Nivel: radares SITRANS LR100/LR500, Micropilot FMR60B, Levelflex FMP51 y familias Sino-Inst de radar sin contacto/guiado, ultrasonido, hidrostática y detección puntual.
- Presión: series Endress, Siemens, Yokogawa, Trumen y Sino-Inst con su principio y alcance propio.
- Agua: sensores Endress de pH, conductividad, oxígeno, turbidez y cloro; analizadores Yokogawa FLXA402/FLXA402T. Se distingue cloro amperométrico de la línea DPD colorimétrica anterior.
- Control: HMI Siemens Basic/Comfort y S7-1500; Schneider M241/M251/M262 y Harmony GTU, además de los PLC/HMI ya existentes. No se incorporó Delta sin confirmación.
- Sino-Inst: **40 altas y 41 entradas activas en total**, cubriendo las familias principales de sus 16 grupos de navegación e incorporando temperatura, densidad/concentración y torque. También se revisaron MFC y SolidFlow. Esto **no es un inventario completo de todos los SKU y variantes** del sitio. [Fuente oficial](https://sino-inst.com/).

## Recorrido y explicación por instrumento

Se conserva la portada comercial aprobada22: hero, carrusel automático de logos, tarjetas uniformes «Ver más», destacados y ayuda de selección. Ahora muestra ocho categorías. Los interiores continúan paginados de nueve resultados con marca/tecnología/búsqueda y regreso contextual.

`measurement` sigue perteneciendo a cada entrada en `productos.json`. Cada ficha reúne descripción, funcionamiento, aplicaciones, datos de selección, documentos y CTA contextual hacia Contacto con el instrumento seleccionado. No se restauró una tabla rígida global de tecnologías. Contacto deriva sus 123 opciones activas de la misma fuente; no se enviaron formularios.

Se añadieron 14 tipos de esquema SVG al contrato compartido: desplazamiento positivo, diferencial, canal abierto, lazo de control, nivel ultrasónico, hidrostático, capacitivo, flotador, varilla vibrante, conductivo, paleta rotativa, temperatura, densidad y torque. Validadores web/panel y selector del editor aceptan los mismos tipos; B/I y reducción de movimiento se conservan. No se instalaron dependencias.

## Imágenes y documentación

- 98 imágenes originales de fabricantes, obtenidas de sus páginas o extraídas de sus documentos. Ajustes de recorte/fondo/formato conservan el instrumento; no se generaron piezas técnicas con IA.
- 64 documentos originales de fabricante incorporados, además de los recursos anteriores y las fichas propias regeneradas.
- 123 fichas comerciales generadas para entradas activas; catálogo digital regenerado automáticamente: **65 páginas**, aproximadamente 4,2 MB.
- Build estático de revisión: **165 páginas HTML, 200 PDF, 671 archivos**, aproximadamente 298 MB. El archivo mayor es el manual Schneider M262, de 21.524.394 bytes. La preparación valida el límite configurado de 25 MiB por archivo y 20.000 archivos; estos números corresponden al artefacto local, no a mediciones de tráfico remoto.
- Procedencia pública, URLs, procesamiento, dimensiones y SHA-256: `docs/diseno/instrumentos/2026-11-18/recursos-proveedores.json`. Los temporales de investigación/render/pruebas permanecen en `.qa/`, ignorados.
- La foto propia del caudalímetro sin cabezal sigue pendiente de un original adecuado del cliente; no se sustituyó por un montaje inventado.

El documento LR500 de aplicación se etiqueta como caso de aplicación y se acompaña de brochure. No se presenta un caso como manual. HTML de desafío de acceso no se acepta como ficha ni como PDF válido. La selección de versiones y manuales exactos debe revisarse comercialmente antes de producción.

## Panel y preservación de datos

Conciliación aditiva con el script existente, respaldo SQLite previo y control de versiones: **98 altas, cero enriquecimientos**, 155 registros totales. Los **57 registros previos y sus cuatro borradores se conservaron exactamente**. No se reimportó toda la base ni se modificaron cuentas.

Las categorías nuevas se importan en el selector; instrumentos y documentos mantienen el mismo editor. `refresh-renderers.mjs` comprobó igualdad de bases/fuentes antes de actualizar huellas. Un flujo aislado comprobó borrador → vista real → PDF/catálogo → ZIP, sin modificar fuentes ni borradores reales. Detalle en `C:/Proyectos/Solution-Group-Admin/docs/obsidian/21_Ampliacion_Catalogo_Proveedores.md`.

## Validaciones

- `npm run check`: correcto en web y panel.
- `npm test`: **39 pruebas web y 25 del panel**, sin fallos.
- `npm run build:demo`: preparación local de revisión correcta; no publica.
- `node scripts/verify-functional.mjs` en el panel: cinco controles de autenticación/aislamiento y flujo de ambas webs correctos; catálogo privado de 65 páginas. Prueba con datos aislados y correo sin transporte.
- Navegador: 24 casos de rutas en 1440/390 px sin overflow, imágenes rotas detectadas o errores JS; ocho comprobaciones adicionales a 360/768 px sin overflow.
- Filtro Trumen de nivel: 18 resultados en dos páginas de nueve, regreso/contexto y CTA correctos. Contacto selecciona LMC-14 y lista solo entradas activas.
- Tarjetas de categorías: ocho alturas de 735 px a 1440 px; ajustes móviles conservados.
- Descargas reales de catálogo y LMC-14 aceite: nombres `catalogo-isolution.pdf` y `trumen-lmc-14-aceite.pdf`, sin error de descarga y SHA-256 idéntico al origen.
- Inspección visual de portada y muestras distribuidas del catálogo, más cinco fichas generadas: sin recortes/solapamientos en las páginas revisadas. No equivale a revisión editorial humana de cada página.
- Comparación profunda de las 26 entradas anteriores: intactas; hashes de las 98 imágenes y 64 documentos nuevos comprobados por pruebas.

Se actualizaron pruebas que fijaban el antiguo tamaño del catálogo. En el QA del panel se eliminó la posición fija100 y la suposición de que un instrumento nuevo siempre aparece en la primera página; la validación de orden del servidor se mantiene. Se añadieron controles de acentos/codificación y separación entre tecnologías de cloro.

## Archivos principales

- Datos: `content/instrumental-solution/{productos,imagenes,site}.json` y procedencia pública24.
- Web: `catalogue-taxonomy.js`, `directory-content.mjs`, `collection-pages.mjs`, `catalogue-guide.mjs`, `catalogue-navigation.css`, `content-validation.mjs`.
- PDF: `scripts/create-instrumental-catalog.py`, documentos/manifiestos/portada derivados y fuentes de imágenes.
- Pruebas: `tests/provider-coverage.test.mjs` y adaptación de pruebas de navegación/guía/catálogo existentes.

## Pendientes reales

- Revisión del usuario del catálogo ampliado y validación técnica/comercial del cliente de series, aplicaciones, versiones, documentación y disponibilidad.
- Si se pretende inventario exhaustivo Sino-Inst u otra marca: inventariar SKU/variantes, deduplicar y validar lotes; la carga actual representa familias/series verificadas.
- Obtener foto propia original sin cabezal, además de material final del cliente.
- Revisión editorial de todas las fichas y selección de qué familias desea promover primero.
- Publicar solo con autorización posterior. Correo real, operación remota del panel y dominio definitivo siguen fuera de esta etapa.
