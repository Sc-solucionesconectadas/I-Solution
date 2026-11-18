# Catálogo por categorías implementado

Fecha: 2026-11-17. Implementación local aprobada de [[20_Plan_Navegacion_Catalogo_por_Categorias]]. Sustituye su estado de propuesta sin código. El usuario confirmó **Pantallas y control, manteniendo ambos PLC visibles**. No hubo push, despliegue, DNS, indexación o envíos.

## Recorrido y sistema visual

- `/productos/`: carrusel manual de seis fabricantes (flechas, scroll táctil/teclado), buscador global, enlace al catálogo y cinco tarjetas de igual dimensión con CTA **Ver más**.
- Categorías: `/productos/caudalimetros/`, `/productos/nivel/`, `/productos/presion/`, `/productos/analisis-de-aguas/`, `/productos/pantallas-y-control/`.
- Cada categoría muestra solo sus instrumentos; marca, búsqueda y tecnología se combinan sobre la colección completa. Nueve resultados por página; rutas estáticas `/pagina/N/` para los recorridos sin filtros y parámetros de consulta para los filtrados.
- `/productos/buscar/` reúne la búsqueda global paginada, sin expandir el directorio principal. Con el contenido actual son tres páginas.
- Las fichas mantienen sus URLs, funcionamiento propio, datos y documentos. El regreso conserva categoría/resultados, filtros, página y posición cuando el navegador lo permite; solo admite destinos internos conocidos.
- Logos reales por fabricante en las tarjetas de instrumentos. Una línea genérica sin marca no se presenta como marca propia. Paleta, Poppins y footer existentes conservados. Hover moderado y reducción de movimiento según preferencia del sistema.
- Inicio, catálogo digital y descargas enlazan las categorías. Consultas siguen llegando con el contexto del instrumento o de sus filtros; transporte vacío en los artefactos de revisión.

## Contenido y compatibilidad

La fuente conserva26 registros:25 publicados y `programador-siemens` con `active:false`, según pedido anterior del cliente. Su URL antigua redirige al directorio con alternativa accesible sin JavaScript. No se borraron datos del panel ni se alteraron los campos de los otros productos. Los dos PLC y la pantalla HMI continúan visibles bajo Pantallas y control. Delta y nuevas series propuestas en19 siguen sujetos a selección comercial; esta etapa no equivale a cargar todo el portafolio de los fabricantes.

`catalogue-taxonomy.js` centraliza las cinco categorías y mapea las familias comerciales existentes, que permanecen compatibles con el editor/PDF. No se instala una biblioteca nueva. `collection-model.js` comparte búsqueda/paginación entre servidor y navegador. El build genera HTML inicial y seis archivos JSON públicos (cinco colecciones y búsqueda global), con rutas ajustadas al prefijo de cada artefacto. Sin JavaScript se pueden recorrer páginas/enlaces; un fallo de JSON conserva los resultados estáticos y muestra un aviso.

PDF regenerados desde la misma fuente activa:25 fichas y catálogo de17 páginas. Se ofrecen38 PDF en total incluyendo originales de fabricantes y catálogo; portada real actualizada y huellas verificadas. Se conservan los documentos fuente del producto retirado, sin ofrecerlos como descarga activa.

## Archivos principales

- `apps/instrumental-solution/{catalogue-taxonomy.js,collection-model.js,collection-pages.mjs,collection.js,catalogue-directory.js,brand-carousel.js,product-return.js,catalogue-navigation.css}`.
- Adaptaciones en `pages.mjs`, `catalog-pages.mjs`, `components.mjs`, `catalogue-guide.mjs`, `render.mjs`, `seo.mjs`, `content-validation.mjs` y `app.js`.
- `scripts/build-instrumental.mjs`, `serve.mjs`, generadores PDF y manifests; `productos.json` incorpora únicamente el retiro reversible mencionado en esta etapa.
- Pruebas de colección/navegación, enlaces/SEO y artefacto demo actualizadas al nuevo recorrido.

## Validación

- `npm run check`, sintaxis de todos los módulos y34 pruebas correctas.
- `npm run build:demo`:43 páginas,215 archivos,38 PDF,66.162.009 bytes; archivo mayor9.171.274 bytes. Artefacto local noindex y correo vacío.
- Navegador: directorio/categoría/control en360,390,768,1024 y1440 px, sin overflow ni imágenes rotas; dimensiones iguales (móvil final309/331 ×263 px; escritorio224 ×443 px).
- Carrusel, marca → categoría → ficha → regreso, filtros combinados y recarga, historial, enlaces heredados `?familia=`, cero resultados y limpiar comprobados.
- Búsqueda global:25 IDs únicos al recorrer9+9+7; página3 persistente tras recargar. Buscar un modelo de la última página encuentra el resultado sin depender de la página visible.
- Sin JavaScript: nueve tarjetas en página2 y enlace real a página3. Fallo de JSON simulado: siete tarjetas de Nivel siguen disponibles con aviso. Error de red esperado solo durante esa simulación.
- `prefers-reduced-motion`: transición0s. PDF17 páginas sin texto fuera del papel; inspección visual de portada/interior/final. Ausencia de Programador Siemens en el PDF.
- Panel: check/25 pruebas y flujo aislado real de alta/ocultamiento/preview/PDF/ZIP correctos. Conciliación acotada con backup/CAS:0 altas,1 retiro,57 registros,4 borradores comparados byte a byte con el respaldo. Ver Admin/nota20.

Capturas y evidencia técnica privadas en `.qa/catalogue-navigation-review/`, `.qa/catalogue-navigation-tests.txt` y `.qa/cloudflare/isolution-demo-report.json`. No versionar esos directorios ni los datos privados del panel.

## Revisión y pendientes

- Revisión visual del usuario en `http://127.0.0.1:4175/instrumental-solution/productos/`.
- El caudalímetro propio conserva su foto actual hasta recibir un original del cuerpo sin cabezal; no sustituirlo por una marca diferente ni inventar apariencia técnica.
- Validación comercial/técnica de nuevas series, versiones, disponibilidad y manuales; expansión del plan19 posterior.
- Publicación solo bajo instrucción explícita posterior; no enviar pruebas de correo.
