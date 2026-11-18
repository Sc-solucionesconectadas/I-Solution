# Plan de navegación del catálogo por categorías

## Actualización posterior: aprobado e implementado

El usuario aprobó el plan y confirmó **Pantallas y control con los PLC visibles**. Estado real y validaciones en [[21_Catalogo_por_Categorias_Implementado]]. El resto de esta nota conserva la propuesta histórica: sus frases sin código/no implementado y nombre Pantallas HMI describen la etapa de investigación, no el estado actual.

Fecha: 2026-11-17. **Solo investigación, planificación y dos mockups; sin modificar código, productos, imágenes de producción, PDF o panel.** Complementa [[19_Plan_Catalogo_Llamada_Cliente]] y mantiene [[18_Instrumentos_Proveedores_y_Funcionamiento]] como estado implementado.

## Objetivo

La entrada actual renderiza las26 tarjetas de instrumentos en una sola página. El crecimiento previsto hará largo el recorrido. Se propone una entrada estable con marcas y cinco familias, listados paginados por familia y fichas individuales. El menú principal conserva un único enlace Instrumentos; no se añaden todas las categorías al menú global.

Recorrido: **Instrumentos → categoría → instrumento → consulta/documentos**. Elegir una tecnología será opcional dentro de la categoría, sin imponer otro nivel de navegación.

## Referencias oficiales revisadas

| Fabricante | Organización observada en sus fuentes públicas | Aplicación propuesta para i-Solution |
| --- | --- | --- |
| [Endress+Hauser](https://www.us.endress.com/en/field-instruments-overview/flow-measurement-product-overview) | Separa variable de medición y tecnologías, con productos y recursos específicos. | Familia primero; tecnología como filtro dentro de ella; detalle técnico por instrumento. |
| [Siemens SITRANS](https://www.siemens.com/en-us/products/sitrans/) | Portafolio dividido en caudal, nivel, presión y otras áreas. | Directorio por función con acceso a su propia colección. |
| [Yokogawa](https://www.yokogawa.com/solutions/products-and-services/measurement/field-instruments-products/flow-meters/) | Agrupa caudal por Coriolis, magnético, vórtex y área variable; presenta familias de producto. | Tecnología y marca como datos diferenciados; evitar mezclar todos los modelos en la entrada. |
| [Trumen: switches](https://trumen.in/point-level-switches-manufacturers-india.html) y [transmisores](https://trumen.in/level-transmitter-manufacturers-india.html) | Distingue detección puntual y transmisores continuos. | Subtipos claros dentro de Nivel y explicación propia del equipo. |
| [Sino-Inst](https://sino-inst.com/) | Menú por familia y tecnologías dentro de caudal. | Acceso directo por familia sin copiar la amplitud de su megamenú. |
| [Schneider Harmony ST6](https://www.se.com/ca/en/product-range/65770-harmony-st6/) | Presenta una gama HMI específica con recursos asociados. | Pantallas como categoría y series identificadas en sus fichas. |
| [Delta HMI](https://www.deltaww.com/en-US/products/TouchPanelHMIHumanMachineInterfaces) | Agrupa su oferta HMI por series. | Referencia de organización, no confirmación de incorporación comercial de Delta. |

La propuesta es una adaptación al tamaño y contenido de i-Solution, no una réplica de los portales de fabricantes. Se revisaron contenidos/navegación pública; no se afirma haber probado sus configuradores o procesos de compra. Algunas segundas lecturas de páginas agotaron el tiempo; no se depende de funciones interactivas no verificadas.

## Nivel1: entrada Instrumentos

Orden propuesto:

1. Header actual, con Instrumentos activo y Solicitar cotización.
2. Franja compacta **Marcas que comercializamos**, seis logos existentes, con tamaños ópticos y proporciones coherentes. No llamar partner oficial sin acreditación. Mantener línea propia i-Solution en el catálogo y el filtro de marca.
3. Título **Instrumentos para tu proceso.** y una frase breve.
4. Buscador global por nombre, marca o modelo; acceso secundario al catálogo digital.
5. Cinco tarjetas visuales de categorías; sin desplegar instrumentos individuales debajo.
6. Ayuda comercial breve y footer actual.

El hero de esta página se vuelve compacto para que las categorías aparezcan pronto. Se conserva la identidad, no un banner gigante añadido antes del directorio. El buscador global tiene una vista de resultados paginada; no vuelve a expandir todo el catálogo debajo de las categorías.

## Categorías propuestas

| Categoría visible | Contenido | Agrupación interna |
| --- | --- | --- |
| Caudalímetros | Todas las líneas de medición de caudal, con sus marcas. | Electromagnético, Coriolis, vórtex, térmico, ultrasónico y otras tecnologías realmente cargadas. |
| Nivel | Radares, transmisores y switches destinados a nivel. | Continuo/puntual y tecnología: radar, onda guiada, ultrasonido, horquilla, capacitancia, etc. |
| Presión | Sensores/transmisores de presión. | Relativa, absoluta o diferencial según datos reales. |
| Análisis de aguas | Sensores y analizadores para agua/líquidos. | Variable y tecnología compatibles con sensor/transmisor. Mantener alcance a otros líquidos cuando corresponda. |
| Pantallas HMI | Pantallas y terminales de operación. | Marca, serie y funciones/comunicaciones verificadas. |

Se evita una categoría genérica Transmisores como hermana de Nivel y Presión: el término describe el tipo de equipo y puede pertenecer a varias variables. Radares es un subtipo de Nivel. Si el catálogo creciera mucho, se podrán crear entradas secundarias sin mover las fichas existentes. No duplicar un instrumento para mostrarlo en dos recorridos.

La denominación Pantallas HMI aplica a la propuesta del cliente; todavía existen dos PLC y un programador en la fuente. Su ocultamiento/retiro y el alcance Delta siguen el plan19 y no se ejecutan por preparar estas imágenes. No presentar las cinco familias propuestas como categorías ya migradas.

## Nivel2: página de categoría

Ejemplo Caudalímetros:

- Enlace **Volver a categorías**, encabezado breve y una imagen de apoyo; no repetir el gran bloque de marcas/directorio.
- Controles: **Buscar en caudal**, **Marca** y **Tecnología**, más Limpiar filtros.
- No mostrar Variable/función porque la categoría ya está elegida. Recursos disponibles permanece retirado.
- Tecnología/marca se ofrecen solo cuando existen instrumentos publicados que correspondan a la combinación.
- **Nueve instrumentos por página**, inicialmente en tres columnas. Dos en tablet y una en móvil; tamaño de página estable para conservar enlaces y regreso.
- Paginación numerada con Anterior/Siguiente; sin scroll infinito. Con menos de una página se oculta la paginación innecesaria.
- Orden y cantidad derivados de los registros activos, sin cifras escritas a mano. El filtro opera sobre la categoría completa, no solo sobre los nueve resultados visibles.
- Tarjeta con foto real, marca/logo, nombre/serie, descripción breve y dos o tres características confirmadas; enlace Ver instrumento o Ver línea según el registro.
- Las capacidades solo aparecen si corresponden a la configuración presentada. No poner límites universales a toda una familia.

Nivel puede mostrar un selector contextual continuo/puntual; Análisis, una variable; HMI, comunicaciones o tipo cuando haya suficientes datos. No introducir campos vacíos o filtros que no ayuden a esa familia. Empezar con pocos controles.

## Logos y búsqueda por marca

La categoría es el acceso principal; la marca es una alternativa. Al seleccionar un logo, mantener la marca visible en una etiqueta con opción Quitar y ofrecer categorías con registros publicados de esa marca. Al entrar en una categoría se conserva la selección. Quitarla restaura todas las marcas.

No anunciar combinaciones marca/tecnología por la sola presencia del logo. No sacar al visitante hacia el sitio del proveedor como acción principal: la consulta corresponde a i-Solution.

El buscador global devuelve tarjetas paginadas, cada una con su categoría visible. Usar una ruta propia y botón Volver a categorías. Evitar una nueva página general con cientos de instrumentos siempre desplegados.

## Nivel3: instrumento

Conservar la ficha individual y su URL cuando ya exista. Contenido: marca/modelo o serie, foto/galería real, resumen, funcionamiento/esquema, aplicaciones, datos técnicos, documentos y consulta contextual. La explicación del principio de medición sigue siendo una propiedad del instrumento, no texto general de la categoría.

Regresar a la categoría debe conservar marca, tecnología, búsqueda, página y posición cuando sea posible. El retorno se limita a rutas internas conocidas. Las fichas de HMI explican operación/comunicación, no una medición física inexistente.

## URLs y adaptación técnica propuestas

Sin implementar todavía:

- `/productos/`: directorio.
- `/productos/caudalimetros/`, `/productos/nivel/`, `/productos/presion/`, `/productos/analisis-de-aguas/`, `/productos/pantallas-hmi/`: categorías.
- `/productos/buscar/`: búsqueda global.
- `/productos/<slug-del-instrumento>/`: fichas existentes conservadas.

Reservar slugs de categoría/buscador para evitar colisiones con instrumentos. Definir páginas reales de paginación y enlaces progresivos, además del índice de búsqueda/filtros generado desde los mismos registros. Validar que funcionen acceso directo, recarga y navegador Atrás. Mapear enlaces antiguos `?familia=...`, `?marca=...`, `q` y `#instrumentos` para que no terminen en un ancla inexistente o pierdan el contexto.

Mantener HTML/CSS/JS y generación estática actuales, sin dependencia nueva o backend para el catálogo público. Cargar imágenes con dimensiones, variantes y lazy loading apropiado; no descargar todos los originales de todas las categorías en la entrada. Canonical/título propios por categoría; controlar combinaciones de filtros para no generar duplicados de indexación. La demo conserva noindex.

## Panel y crecimiento

El editor carga un instrumento, selecciona categoría, marca y tecnología, incorpora información/medios/documentos y revisa el borrador. La generación actualiza categorías, conteos, listados, ficha y PDF de manera automática. No se pide al cliente diseñar páginas o modificar menús.

Las categorías iniciales forman parte del diseño controlado; crear familias nuevas no se habilita al cliente sin decisión posterior. Retirar una ficha o cambiar la taxonomía requiere conciliar fuente y borradores; el comando aditivo actual rechaza eliminaciones. Conservar copias/versiones y comprobar preview antes de publicar.

## Diseño y movimiento

Conservar Poppins y paleta real: ink #0c1f36, navy #102b47, blue #245e9a, accent #2780c4, surface #eef5fa, line #d2e0ec.

Tarjetas con profundidad moderada, foto contenida sin cortar conexiones, título grande y CTA claro. Hover/foco: elevación corta, zoom de foto discreto y desplazamiento de flecha; respuesta equivalente de teclado/táctil. Entrada breve de contenido y actualización suave al filtrar, respetando movimiento reducido. Evitar carrusel como único acceso, giro de tarjetas que oculte información, loaders artificiales y animación constante en el listado.

## Mockups de referencia

Herramienta: **image_gen integrada**, dos generaciones independientes con el logo original como referencia. Archivos copiados al proyecto; originales conservados.

1. [Directorio con marcas y categorías](../diseno/instrumentos/2026-11-17/01-directorio-categorias-v1.png).
2. [Categoría Caudalímetros](../diseno/instrumentos/2026-11-17/02-categoria-caudalimetros-v1.png).
3. [Prompts completos](../diseno/instrumentos/2026-11-17/prompts-catalogo-categorias-v1.md).

Ambas imágenes son1536×1024. Se revisaron legibilidad, jerarquía, cinco categorías, filtros de categoría y paginación. El orden de entrega en el chat fue categoría primero/directorio después; los nombres de archivos indican su función.

**Límite del mockup:** fotografías y formas de equipos generadas para evaluar distribución, no fotos oficiales de modelos ni documentación técnica. El listado usa series de ejemplo investigadas en plan19; no demuestra que estén cargadas o disponibles. En implementación se reutilizarán logos originales y fotografías reales con fuente verificada, sin adoptar letras/formas inventadas por el generador.

SHA-256 directorio: `40c491960163f1a747db98adb80fe39ef06f92293bf83ead5f65d68adab73da9`.
SHA-256 categoría: `6d10ad211490e8a8bb11d9c84f1774724e083a6789836569d7bb6afae61a1865`.

## Etapas de ejecución propuestas

1. Aprobar arquitectura/maquetas y resolver HMI/PLC/Delta del plan19.
2. Definir taxonomía, slugs y reglas de categorías; mantener fichas y modelos fuente intactos hasta tener el mapa.
3. Construir directorio, categoría reutilizable, buscador y paginación; adaptar enlaces de marcas/portada/footer/Contacto.
4. Integrar las altas/retiros del plan19, atributos por familia, fotos y documentación; no duplicar registros genéricos y series sin revisar su función.
5. Adaptar panel/preview y regenerar fichas/catálogo/portada desde el mismo conjunto aprobado.
6. Verificar filtros sobre toda la categoría, enlaces directos, vuelta con contexto, recursos, teclado/móvil, SEO de demo y ausencia de regresiones. Publicar después con autorización expresa.

## Validaciones de esta etapa

Lectura de fuentes/código actual y referencias oficiales; generación/inspección de dos mockups. Sin pruebas de aplicación o build porque esta etapa no cambia la aplicación. No se tocaron instrumentos, datos privados, correos, DNS, publicación o los otros sitios.
