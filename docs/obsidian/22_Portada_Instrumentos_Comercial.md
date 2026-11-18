# Portada comercial de Instrumentos

2026-11-17. Cambios locales solicitados después de [[21_Catalogo_por_Categorias_Implementado]]. El usuario pidió una entrada más completa, hero con imagen/explicación, logos sin descripciones, avance automático y categorías más grandes; retirar buscador/frase de elección, mantener catálogo y agregar destacados. Las páginas interiores de categorías se conservan.

## Diseño aplicado

- Hero panorámico con imagen industrial existente, superposición azul, H1 de instrumentación, explicación de líneas y marca propia, asesoramiento/documentación y CTA **Acceder al catálogo digital**. Paleta y Poppins existentes; no se añadieron imágenes técnicas ficticias, bibliotecas o dependencias.
- Seis fabricantes en franja de logos sin descripción inferior. Flechas, hover con zoom moderado, desplazamiento táctil y automático cada4 segundos en la portada. El avance se detiene fuera de pantalla, al ocultar la pestaña, al pasar el cursor y al enfocar/interactuar. Movimiento reducido desactiva el automático. Flechas/teclado siguen disponibles; Espacio en la franja permite detener/reanudar. Sin botones visibles de pausa/reproducir, según preferencia anterior del usuario. Duplicados visuales del bucle excluidos del tabulador/árbol accesible; no se duplican las marcas en la fuente comercial.
- Cinco categorías ampliadas en tres columnas y segunda fila centrada en escritorio; dos en tablet y una en móvil. Imágenes, descripciones, tecnologías y aplicación, CTA **Ver más**; alturas uniformes verificadas en todos los anchos. Jerarquía H1 del hero, H2 de secciones y H3 de categorías ampliadas.
- Tres destacados tomados de la misma fuente: Promag W10, radar80/120 y Harmony ST6. Fotos, marca/serie, resumen y enlace a la ficha real. Si se oculta uno en el panel se elige otro activo de su familia; una familia sin instrumentos no aporta destacado. Se conserva el formato editorial B/I de los datos.
- Cierre visual con imagen existente de asistencia técnica, explicación de cómo iniciar la selección, datos útiles del proceso y CTA **Consultar por mi aplicación**. Alineado con el ancho de contenido, separado del footer.
- El buscador ya no aparece en esta portada. Búsqueda global/URLs anteriores permanecen como recorridos compatibles; filtros y fichas interiores conservados.

## Fuentes y archivos

- `apps/instrumental-solution/collection-pages.mjs`: hero/directorio ampliado/destacados/consulta, reutilizando categorías y ctx de productos.
- Nuevo `directory-content.mjs`: textos específicos de portada y selección de destacados activos. No es una tabla de medición general; funcionamiento técnico sigue perteneciendo a cada instrumento.
- `catalogue-guide.mjs`: marcas con logos, automático habilitado en portada. La página de catálogo digital recibe el mismo estilo de logos pero conserva control manual.
- `brand-carousel.js`: bucle sin dependencias, controles, observadores de visibilidad y preferencia de movimiento.
- `catalogue-navigation.css`: estilos limitados a las variantes ampliadas; tarjetas pequeñas de otras páginas y listados interiores conservados.
- `tests/collection-navigation.test.mjs`, `tests/instrumental.test.mjs`: selección de destacados/ocultamiento y portada sin buscador/descripciones de logos, además de las comprobaciones previas.

No se editaron datos de productos, especificaciones, fotos, manifests o PDF en esta etapa. Se reutilizan los25 activos y los38 PDF consistentes de21. No se declara partner oficial, stock, disponibilidad inmediata ni recomendación técnica universal.

## Validación

- Check/sintaxis y35 pruebas web correctas. Build:demo:43 páginas/215 archivos, noindex y transporte vacío; solo artefacto local.
- Navegador:360/390/768/1024/1440px sin overflow/imágenes rotas. Alturas uniformes finales:756/728/729/706/707px respectivamente. Hero610px escritorio,772px a390px.
- Automático real0→225px; hover225→225; salida del hover→450; foco450→450. Movimiento reducido mantiene0px. Flechas recorren todas las marcas y vuelven al inicio sin huecos; seis enlaces originales y seis copias visuales de bucle ocultas a tecnología asistiva.
- Marca Endress→dos categorías compatibles→Caudalímetros con marca conservada; destacados→ficha real; CTA de catálogo y consulta con destinos internos existentes. Pruebas de enlaces y documentos completas.
- Flujo aislado del panel correcto: altas/ocultamiento/formatos en preview real, catálogo/manual descargable y ZIP. Fuentes web sin mutaciones durante esa prueba. El PDF de QA es privado y usa registros ficticios solo en base aislada.
- Renderizadores privados actualizados por `refresh-renderers.mjs`: comparación estricta de fuentes/bases,57 registros y4 borradores conservados. Comparación SHA-256 de todas las filas antes/después idéntica; solo huellas de fuente actualizadas. Sin cambios en cuentas/credenciales/correos.
- Evidencia local: `.qa/directory-rich-tests.txt`, `.qa/directory-rich-baseline/`, `.qa/directory-rich-review/` y panel `output/qa/directory-rich-functional.txt`.

## Estado y pendientes

Local en http://127.0.0.1:4175/instrumental-solution/productos/ . El usuario revisa antes de publicación. Categorías internas se pulirán en etapa siguiente, tal como pidió. Pendientes comerciales/materiales de21/19 siguen vigentes. No push/deploy/DNS, indexación, envíos, nuevas cuentas o cambios en otras webs/ERP.
