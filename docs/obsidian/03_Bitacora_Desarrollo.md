# Bitácora

## 2026-11-18 — Índice interactivo del catálogo

Generador PDF calcula índice/páginas dinámicamente, añade enlaces y marcadores por instrumento/familia, y retorno desde contenido. PDF70 páginas,123 entradas, cinco páginas de índice; QA real138 enlaces/133 marcadores y39 pruebas correctas. Catálogo/portada/huellas actualizados; datos/fichas individuales intactos.155 registros/cuatro borradores conservados al refrescar panel. Publicación autorizada pendiente de verificación remota; [[27_Indice_Interactivo_Catalogo]].

## 2026-11-18 — Publicación efectiva del catálogo ampliado

Subido commitf1090e0; Workers Builds1874e48c completed/success. Verificados669 recursos públicos,200 PDF con MIME correcto y cuatro hashes remotos idénticos; alias302/clic PDF en pestaña nueva, seis casos responsive, noindex y correo vacío correctos. Sin envíos, activaciones, DNS, dominio final o panel público. [[26_Actualizacion_Demo_Catalogo_Proveedores]]. Notas de cierre sincronizadas por commit documental posterior.

## 2026-11-18 — Catálogo PDF directo y TFDP70

Retirada plantilla/ruta/meta de catálogo duplicado; accesos comunes al PDF con target blank y sin download, alias302 local/Cloudflare. Corregida extracción desplazada de foto TFDP70; ahora equipo completo original y procedencia actualizada. Fichas/catálogo65 páginas/portada regenerados;164 HTML/200 PDF.39 pruebas/check y seis casos responsive/HTTP/PDF correctos; flujo privado y preservación155 registros/cuatro borradores. [[25_Catalogo_PDF_Directo_y_Foto_TFDP70]]. Usuario autoriza publicación de avances locales; preparación y resultado en [[26_Actualizacion_Demo_Catalogo_Proveedores]]. Sin envíos, activaciones o DNS.

## 2026-11-18 — Ampliación de proveedores24

Implementadas98 altas,123 activas/124 almacenadas, ocho categorías.26 originales intactas;18 niveles Trumen+siete presiones y cobertura por familias/series de los demás fabricantes. Nuevos esquemas por instrumento,98 fotos originales/64 documentos nuevos, fichas y catálogo65 páginas. Build165 HTML/200 PDF.39 pruebas web/25 panel, check/build de revisión, responsive, descargas reales con nombre/hash y flujo privado correctos. Conciliación del panel con backup:155 registros/cuatro borradores;57 anteriores idénticos. Datos/taxonomía/plantillas/SVG/CSS/PDF/pruebas y procedencia actualizados; detalle y archivos en [[24_Ampliacion_Catalogo_Proveedores]]. Sin nuevas dependencias, publicación, correo, auth o DNS. Material y revisión comercial/SKU pendientes.

## 2026-11-17 — Auditoría de cobertura de proveedores23

Comparados26 registros/25 activos con fuentes oficiales de Trumen, Endress+Hauser, Siemens, Yokogawa, Schneider y Sino-Inst. Distinguidas cinco configuraciones propias, nueve series de proveedores y once líneas genéricas. Identificadas17 entradas de nivel Trumen faltantes y brechas de caudal por marca, radar/presión/aguas/PLC-HMI;16 grupos Sino-Inst requieren inventario por modelo y nuevas variables. [[23_Auditoria_Cobertura_Proveedores]] contiene tablas, fuentes, precauciones y fases. Actualizados AGENTS/contexto/pendientes. Solo documentación y extracción ignorada de auditoría; sin código/contenido/PDF/DB, pruebas funcionales, envíos o publicación. Las pruebas de portada22 siguen siendo evidencia histórica, no se repitieron para esta auditoría.

## 2026-11-17 — Portada comercial de Instrumentos

Implementado [[22_Portada_Instrumentos_Comercial]] en plantillas/carrusel/CSS y nuevo contenido editorial acotado.35 pruebas y build:demo; cinco anchos, autoplay/hover/foco/movimiento reducido/loop/enlaces correctos. Flujo aislado de panel correcto, renderizadores refrescados sin cambiar57 registros/4 borradores. Sin cambios de catálogo/PDF, cuentas o publicación.

## 2026-11-17 — Catálogo por categorías

Implementado [[21_Catalogo_por_Categorias_Implementado]]: nuevos módulos de taxonomía/colecciones/carrusel/retorno y adaptaciones de plantillas/build/SEO/PDF.34 tests/check/build:demo; cinco anchos, filtros/historial/paginación/noJS/fallo JSON y PDF comprobados. Panel conserva57 registros/4 borradores tras retiro acotado. Sin publicación o envíos.

## 2026-11-17 — Plan de navegación por categorías20 y mockups

Usuario pide propuesta sin código para acortar la entrada de Instrumentos. Revisados portafolios de fabricantes y estructura actual. Propuesta marcas/directorio de5 familias → colección paginada9 → ficha; búsqueda/marca/tecnología, contexto de regreso, URLs y editor controlado. Dos mockups1536×1024 mediante image_gen integrada, inspeccionados y copiados a docs/diseno/instrumentos/2026-11-17 con prompts/hash. Fotos de equipos son referencias de distribución, no activos técnicos. Solo documentación/artefactos; sin código/datos/PDF/DB/pruebas de aplicación, publicación o envíos.

## 2026-11-17 — Investigación y plan tras revisión comercial19

Comparación de26 entradas por familia y consulta de fabricantes oficiales. Hallados faltantes de caudal Siemens/Yokogawa, nivel continuo Endress y switches Trumen. Confirmación del usuario: continuo Endress+Hauser y foto del caudalímetro propio sin cabezal. Inspección de foto principal/cuerpo300×300px; propuesta de obtener original. Plan19 detalla familias/funcionamiento/recursos/HMI, retiro pendiente del programador y alcances PLC/Delta no definidos. Solo documentación; sin código, datos, PDF, DB, pruebas de aplicación o envíos/publicación.

## 2026-11-17 — Simplificar filtros del catálogo

Eliminado el selector «Recursos disponibles» en catalog-pages.mjs y sus referencias activas en catalogue.js. catalogue-guide.css redistribuye los cuatro campos y usa dos columnas intermedias. No se alteraron instrumentos, documentos o correo. Check,30 pruebas y compilación local correctos; UI comprobada en1440/1024/768/390/360px sin overflow ni errores JS. Marca Sino-Inst da1 resultado, Limpiar filtros recupera26 y una URL antigua con recurso=manual no filtra silenciosamente. Huellas del panel conciliadas con backup,0 altas/0 enriquecidos,57 registros y4 borradores conservados. Sin publicación.

## 2026-11-16 — Instrumentos de proveedores y funcionamiento18

Añadidas nueve series sin SKU ficticio; conservados los17 instrumentos anteriores salvo brandId/measurement. Retirada guía global y derivados filtros/tecnologías desde cada entrada. Nueve fotos y siete documentos oficiales,26 fichas de una página y catálogo de18 páginas;39 PDF. Contacto recalcula contexto y migración SEO excluye fuentes de fabricantes. Check/30 tests/build,35 páginas y24 casos responsive correctos; corregido overflow390px de familias. Integración del panel preserva borradores y formato. Procedencia en docs/diseno/instrumentos/2026-11-16; [[18_Instrumentos_Proveedores_y_Funcionamiento]]. Sin publicación o envíos.

## 2026-11-02 ? Formato editorial16

Plantillas B/I con helper escapado; generadores PDF con rangos UTF-16 y Poppins Italic OFL. Portada/mosaico usan activos disponibles. Formato de documento no se desplaza al anteponer ficha automática y video legado conserva título.22 tests/check/build:demo, integración privada con PDF/manual/ZIP correctos. Sin JSON/medios/PDF fuente/emails/deploy. [[16_Formato_Editorial_y_PDF_Panel]].

## 02/11/2026 — Mejoras publicadas y verificadas

Commitdbd21f0, check Cloudflare completed/success, build7e5df2c2-e4e8-4a4c-b886-c6ee5f8a9659. 142 recursos públicos correctos y revisión conjunta de62 casos responsive. Evidencia en [[15_Actualizacion_Demo_Publica]]. Transporte vacío/noindex conservados; sin correos/activaciones o cambios de DNS/plan/dominio final. Documentación de cierre sincronizada mediante un commit posterior sin cambios funcionales.

## 2026-11-02 — Publicación de mejoras solicitada

El usuario autoriza actualizar la demo pública con las mejoras locales. Preparación y verificación en [[15_Actualizacion_Demo_Publica]]; se conservan transporte vacío/noindex y documentos originales. No ampliar operación, plan o dominio final por esta tarea.

## 2026-11-02 — Funcionalidad y calidad, puntos 1–4

Continuación tras AVANZA: controles hover conservan texto visible en nueve botones de muestra. Video original confirmado con pista de audio; soporte opcional WebVTT implementado/validado, sin subtítulos inventados o cambios en JSON comerciales. Revisar el audio y preparar subtítulos revisados queda pendiente. Dos pruebas adicionales de este soporte; total22.

Implementación local descrita en [[14_Funcionalidad_y_Calidad]], conservando diseño/datos/documentos aprobados. 22 pruebas/check/build:demo correctos. 31 páginas/124 casos responsive y revisión axe-core conjunta sin infracciones automáticas detectadas; teclado, fallback sin JavaScript y errores de formulario comprobados. Transporte simulado/interceptado, sin correos/activaciones. Sin commit/push/DNS o desarrollo de operación/dominio. UI documentada en [[10_UI_UX_Diseno]].

## 2026-11-02 — Separación y demo de i-Solution

Fuentes separadas de SOLUTION-GROUP, recursos propios,23 PDF públicos versionados y8 JSON de contenido/manifests preservados por bytes. Generadores PDF con requisitos fijados, sin dependencia de recursos LMR. Build raíz y noindex/404, envío vacío, protección contra documentación obsoleta. README/AGENTS y notas para continuar aquí.

Check y16 pruebas correctas; dry-run Wrangler correcto. Las pruebas de correo son simuladas, sin solicitudes de envío reales. Commit1c543e2 subido, build7f21997f y versión195e170f correctos desde Linux.141 recursos/23 PDF verificados en público y18 casos responsive sin roturas/errores. Un segundo push sincroniza estas notas y refuerza la validación por slug de fichas; su check se verifica al cerrar.

## 2026-11-16 — Marcas y principios de medición

Se implementaron localmente registro catalogue-guide.json, recursos de seis marcas, plantillas/CSS de guía, asociación de las17 fichas y contexto seguro marca/tecnología en Contacto/payload. Cinco pruebas nuevas;27 pruebas/check/build:demo y16 casos responsive correctos. Preservados datos/PDF/correo/cambios previos. Sin push/deploy/envíos. Detalle en [[17_Marcas_y_Guia_de_Medicion]].
