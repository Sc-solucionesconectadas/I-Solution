# Formato editorial y PDF desde el panel

02/11/2026, soporte local del formato visual solicitado en el panel independiente. Campos de contenido siguen strings/listas, con mapa opcional formatting de rangos; shared/inline-format.mjs genera solo strong/em escapando texto. Aplicado a equipo, servicios, instrumentos, tablas, documentos, galerías y videos; etiquetas técnicas, atributos, filtros y SEO conservan texto plano.

Generadores de catálogo/fichas usan scripts/inline_pdf.py con rangos UTF-16 compatibles con navegador y fuentes Poppins Italic/SemiBoldItalic oficiales google/fonts (OFL). Variantes convertidas a WOFF2 y versionables como recursos de autoría. Sin nueva librería npm/Python. No se regeneraron los PDF fuente actuales: las pruebas regeneran copias privadas del panel.

Mosaico y portada del catálogo eligen instrumentos activos disponibles, conservando preferidos cuando están, para admitir ocultarlos. El panel quita overrides editoriales solo al cambiar el campo correspondiente; corrige que resumen/lista/imagen de un servicio editado pudieran quedar tapados por textos previos. Documentos guardan formato por documento para que la ficha automática antepuesta no desplace índices del manual. Video legado conserva título.

Check,22 pruebas y build:demo correctos. Flujo privado con nueva entrada, ocultar radar de portada, negrita/cursiva en web y PDF, manual descargable formateado y ZIP, sin escribir JSON/medios/PDF originales. Sin envío, activaciones, push/deploy o cambios de dominio; demo pública intacta. Ver nota14 del panel para la revisión/usuarios pendientes.
