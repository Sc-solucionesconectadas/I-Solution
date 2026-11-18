# Actualización de demo: catálogo ampliado y PDF directo

Fecha: 2026-11-18. Destino autorizado: https://isolution-demo.scsolucionesconectadas.com.ar/. Repositorio: https://github.com/Scsolucionesconectadas/I-Solution, rama main; Worker `isolution-demo` con integración Workers Builds existente.

## Alcance preparado

Incluye los avances locales de las notas16–24 y las correcciones de [[25_Catalogo_PDF_Directo_y_Foto_TFDP70]]: catálogo por ocho categorías/123 entradas activas, series de fabricantes y funcionamiento por instrumento, imágenes/documentos originales, PDF directo en pestaña nueva y fotografía TFDP70 corregida. No se publica el panel privado, sus datos, presupuestos, `.qa`, secretos o archivos de activación.

## Validación previa

Check/39 pruebas web y build estático correctos;164 páginas,200 PDF y671 archivos. Se conserva noindex, robots de revisión y endpoint de formulario vacío. Máximo por archivo dentro del límite configurado; rutas y PDFs verificados. Sin cambios de DNS/dominio/plan, envíos o activaciones.

## Publicación efectiva y verificada

- Commit funcional: `f1090e0ca8b0c35be8826cb43a8d8e206e96dfde`, subido a main.
- Workers Builds: `1874e48c-af4a-44f7-bd9a-c18509e4a72b`, check `completed/success`, finalizado2026-11-18 a16:02:23 UTC.
- Destino confirmado: https://isolution-demo.scsolucionesconectadas.com.ar/.
- Revisión remota a16:03:50 UTC: **669 recursos públicos correctos**, cero errores. `_headers` y `_redirects` se excluyen de acceso directo porque son configuración del proveedor.
- Los200 PDF respondieron con MIME application/pdf. SHA-256 remoto idéntico al artefacto local para catálogo, ficha TFDP70, ficha original Trumen y fotografía WebP corregida.
- Tres alias antiguos del catálogo respondieron302 al PDF. No se publica la antigua página duplicada.
- Clic real en «Acceder al catálogo digital» abre una pestaña con `/assets/documentos/catalogo-isolution.pdf`; la pestaña original permanece en Instrumentos.
- Seis casos de navegador: Instrumentos, TFDP70 y colección Presión/Trumen en1440/390px, todos200 y sin overflow. Enlaces con target blank y sin descarga forzada.
- Noindex y formulario con endpoint vacío confirmados remotamente. No se enviaron consultas, correos o activaciones.

Evidencia local ignorada: `.qa/catalogue-link-photo-2026-11-18/public-verification.json`, capturas y renders de PDF. Las notas finales se sincronizan mediante un commit documental posterior; el contenido funcional publicado corresponde al commit indicado arriba.

Las restricciones de publicación de las notas16–24 describen su estado anterior local. Esta publicación autorizada las supera únicamente para la demo de i-Solution; LMR, panel remoto, DNS y dominio definitivo permanecen fuera del alcance.
