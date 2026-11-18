# Catálogo PDF directo y fotografía TFDP 70

Fecha: 2026-11-18. Corrección solicitada por el usuario y autorización posterior para subir i-Solution a la demo pública existente.

## Comportamiento resultante

Los botones de Inicio e Instrumentos y el enlace «Catálogo digital» del footer apuntan directamente a `assets/documentos/catalogo-isolution.pdf`, con `target="_blank"` y `rel="noopener noreferrer"`. No fuerzan descarga ni requieren JavaScript. El visor o descarga final depende de la configuración del navegador del visitante.

Se retiran la ruta de contenido `catalogo/`, su plantilla duplicada, metadatos y mensaje de descarga asociado. Ya no se genera `catalogo/index.html`. Los enlaces antiguos `catalogo`, `catalogo/` y `catalogo/index.html` redirigen al PDF mediante `_redirects` con302 en el artefacto estático. El servidor local ofrece el mismo destino para el enlace anterior. Si falta un PDF vigente en un build no estricto, los botones de catálogo se omiten y la redirección de despliegue apunta a Instrumentos, sin ofrecer un recurso inexistente.

No se modifican las descargas de fichas/manuales dentro de cada instrumento. El catálogo sigue regenerándose desde los datos; se elimina únicamente la página intermedia.

## Fotografía correcta

La imagen del Trumen TFDP70 anterior tomaba la primera transformación del objeto de imagen del PDF, que quedaba desplazada y mostraba título/texto junto a un producto cortado. Se sustituyó por la fotografía completa que aparece en la página1 de su ficha oficial, renderizando el rectángulo `[70,112,225,315]` a4x:620×812 px. Producto completo sobre fondo blanco, sin textos de la ficha alrededor y sin alteración generativa del equipo.

Fuentes: [página oficial Trumen](https://trumen.in/smart-differential-pressure-transmitter.html), [ficha TFDP70](https://trumen.in/wp-content/uploads/2025/06/TFDP_70_data_sheet.pdf). La procedencia, dimensiones, método y SHA-256 actualizados están en `docs/diseno/instrumentos/2026-11-18/recursos-proveedores.json`.

La imagen corregida llega al listado, ficha, PDF comercial por instrumento y catálogo general. Se regeneraron fichas, catálogo y portada/huellas: catálogo de65 páginas. Se inspeccionaron la ficha TFDP70 y la página45 del catálogo; producto completo y texto legible en las páginas revisadas.

## Archivos principales

- `components.mjs`: botón común para abrir catálogo vigente.
- `pages.mjs`, `collection-pages.mjs`, `render.mjs`: enlaces directos y eliminación de ruta intermedia.
- `catalog-pages.mjs`, `app.js`, `textos.json`: retirada de plantilla/metadatos/feedback obsoletos.
- `scripts/build-instrumental.mjs`, `scripts/serve.mjs`: alias de compatibilidad sin página duplicada.
- `assets/source/trumen-tfdp70.png`, PDFs/huellas/portada derivados y manifiesto de procedencia.
- `tests/instrumental.test.mjs`: comprobaciones de PDF directo, pestaña nueva, ausencia de descarga forzada/página intermedia y redirección heredada.

## Validaciones locales

- Check y39 pruebas web correctos; enlaces estáticos, prefijos y PDF íntegros.
- Build de revisión:164 HTML/200 PDF,671 archivos; transporte vacío y noindex.
- Navegador: Inicio/Instrumentos/TFDP70 en1440 y390px, sin overflow. Todos los enlaces de catálogo comprobados usan PDF directo, pestaña nueva y ausencia de atributo download.
- Antigua URL local:302 al PDF; PDF200, MIME application/pdf y firma `%PDF-`.
- Panel: respaldo y comparación exacta de155 registros/cuatro borradores; refresco de huellas sin reimportar ni cambiar contenido/cuentas. Flujo aislado preview/PDF/ZIP de ambas webs correcto; fuentes sin mutaciones durante la prueba.
- No se enviaron formularios, correos o activaciones.

## Publicación

El usuario autorizó expresamente «luego subí i-Solution a la demo que tenemos publicada». Se prepara la publicación mediante GitHub main y Workers Builds en el destino existente, conservando correo sin transporte/noindex. Resultado verificable y commit en [[26_Actualizacion_Demo_Catalogo_Proveedores]]. No cambia dominio definitivo, DNS, LMR o panel remoto.
