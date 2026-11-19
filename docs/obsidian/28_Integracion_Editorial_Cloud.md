# Adaptador editorial y regeneración — 18/11/2026

Preparado para el panel privado central. shared/panel-media.mjs consume inventario opcional content/instrumental-solution/panel-media.json con rutas propias, IDs y SHA; solo descarga medios aprobados y comprueba tamaño/integridad. Sin inventario no cambia el build actual.

Si una publicación del panel incorpora el inventario, build:demo regenera fichas/catálogo/portada con requirements-authoring.txt vigente. Entorno .build-venv ignorado o Python proporcionado por CI. Índice automático y X-Solution-Revision para verificar despliegue.

Workflow editorial manual preparado, sin artifacts/caches o credenciales versionadas. Documentos nuevos llegan al build desde almacén aprobado, sin copias sucesivas en Git. Catálogo actual/formulario sin envío/datos/imágenes conservados.

Check,39 tests y build:demo correctos:164 páginas/671 archivos. Flujo aislado del panel conserva catálogo70 páginas. App/secretos y prueba CI real pendientes; no declarar publicador operativo todavía.
