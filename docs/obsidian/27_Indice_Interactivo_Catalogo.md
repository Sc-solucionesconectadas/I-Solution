# Índice interactivo del catálogo

Fecha: 2026-11-18. El usuario solicita un índice por instrumento y autoriza publicar el PDF actualizado en la demo existente.

## Implementación

`scripts/create-instrumental-catalog.py` mide las filas del índice antes de calcular las páginas de contenido. Agrupa todas las entradas activas por familia y muestra nombre, marca, serie y número de página. Los saltos de línea y nuevas altas pueden añadir páginas de índice sin desajustar la numeración. La última página se equilibra por grupos entre las dos columnas.

El catálogo actual conserva los123 instrumentos/líneas: **cinco páginas de índice y70 páginas totales**. Cada fila y cabecera de familia tiene un enlace interno. Se añaden133 marcadores del visor PDF y un enlace «Volver al índice» en todas las páginas de contenido. La portada también permite acceder al índice. Se mantiene el PDF directo en pestaña nueva; no se restaura la antigua página web de catálogo.

`catalogo-pdf.json` incorpora indexPages/productPages/familyPages/servicesPage para trazabilidad. Se regeneran catálogo, portada derivada y huellas; datos de instrumentos y fichas individuales intactos. Sin dependencias nuevas.

## Verificación

- `scripts/verify-instrumental-catalog.py`: abre el PDF real con PyMuPDF y comprueba123 entradas,138 enlaces de índice, números impresos frente a destinos, contenido de las páginas de destino, vuelta al índice y133 marcadores. No envía solicitudes externas.
- `npm run check` y39 pruebas web correctos; el test existente verifica el contrato de páginas del índice.
- Índice inicial/final y página de contenido renderizados e inspeccionados; última doble columna equilibrada, sin desbordes en las muestras.
- Panel: respaldo, comparación de155 registros/cuatro borradores y refresco de renderizadores sin reimportación. El generador reutilizado por el panel conserva el índice automático.
- Temporales en `.qa/catalogue-index-2026-11-18`, ignorados.

## Publicación

Publicación confirmada: commit `2639e7be8b70fb99dcbb893d813a8ad1fc32e6ee`, Workers Builds `5a16b140-d2af-4a8e-b23f-cfdcd001b8cd` completed/success. PDF remoto200/MIME application/pdf y SHA-256 idéntico al archivo local:70 páginas, cinco de índice y123 entradas. Archivo publicado de verificación en `.qa/catalogue-index-2026-11-18/catalogo-publicado.pdf`, ignorado.

No se modificaron dominio, DNS, correo o panel remoto. Las mejoras separadas de LMR se desarrollan en su propio repositorio. Las notas finales se sincronizan mediante commit documental posterior sin cambios de la web.
