# Decisiones técnicas

## 2026-11-18 — Ampliación por series verificadas y nuevas variables

**Decisión:** incorporar98 entradas con evidencia de fabricante, mantener las26 originales, ampliar a ocho categorías y conservar measurement por instrumento. Importación del panel aditiva con respaldo, sin sobrescribir borradores.

**Motivo:** cubrir las familias solicitadas manteniendo explicaciones específicas y evitando un catálogo plano extenso, matrices inventadas o especificaciones extrapoladas entre versiones.

**Impacto:**123 activas, PDF/portada regenerados,14 tipos de esquema compatibles web/panel y nuevos recursos trazables. Cobertura por familia/serie no equivale a todos los SKU, stock o representación oficial. Sin dependencias nuevas.

**Alternativas consideradas:** copiar todos los SKU sin revisar; atribuir líneas genéricas a todas las marcas; reimportar toda la base del panel. Descartadas por falta de evidencia o riesgo para borradores.

**Archivos relacionados:** productos/imagenes/site.json, catalogue-taxonomy.js, catalogue-guide.mjs, validación y generador PDF; [[24_Ampliacion_Catalogo_Proveedores]].

## 2026-11-17 — Categorías antes del listado

**Decisión:** directorio estable de cinco categorías; colecciones estáticas paginadas9 con filtros progresivos. Mantener familias fuente y URLs de fichas.

**Motivo:** permitir crecimiento sin una portada extensa ni duplicar instrumentos.

**Impacto:** rutas/JSON, navegación/SEO, PDF activos y panel compatibles; programador retirado reversible, PLC visibles por confirmación.

**Alternativas consideradas:** grilla completa en portada; megamenú o pasos obligatorios por tecnología.

**Archivos relacionados:** `catalogue-taxonomy.js`, `collection-model.js`, `collection-pages.mjs`, build; [[21_Catalogo_por_Categorias_Implementado]].

## 2026-11-16 — Funcionamiento pertenece al instrumento

**Decisión:** almacenar measurement opcional en productos.json, mantener marcas.json como registro de marcas y derivar tecnologías/filtros desde las entradas.

**Motivo:** el cliente necesita explicaciones específicas y edición por instrumento, incluidas categorías de control sin principio de medición. La guía global rígida no satisface el recorrido.

**Impacto:** validación/render/filtros/Contacto/PDF y contrato con panel independiente; migración SEO distingue fabricante de URL antigua propia.

**Alternativas consideradas:** tabla global por slug y guía general; ambas descartadas como fuente de verdad.

**Archivos relacionados:** productos.json, marcas.json, catalogue-guide.mjs, catalogue-context.js y generadores PDF. [[18_Instrumentos_Proveedores_y_Funcionamiento]].

## 2026-11-02 — Preparación productiva hasta el punto 4

**Decisión:** validación progresiva sobre HTML nativo, manejo de borradores en memoria y comprobaciones con transporte simulado. Conservar diseño, JSON/PDF y stack existentes; sin dependencias runtime nuevas.

**Motivo:** corregir fallos reales y preparar funciones para producción, con operación y dominio aplazados por el usuario y sin autorización de envío real.

**Impacto:** apps/instrumental-solution/catalogue-model.js, contact-context.js, contact.js, form-validation.js, content-validation.mjs, components.mjs, polish.css; scripts/build-instrumental.mjs; tests/content-validation.test.mjs, instrumental.test.mjs e instrumental-contact.test.mjs. Detalle/validaciones en [[14_Funcionalidad_y_Calidad]].

**Alternativas:** incorporar una biblioteca de formularios o backend ahora; se mantiene la solución nativa por suficiencia y menor complejidad.

## 2026-11-02 — Repositorio y demo independientes

**Decisión:** i-Solution pasa a C:/Proyectos/I-Solution y su repo, con Worker isolution-demo y publicación de main por Cloudflare. No cambiar la web de LMR.

**Motivo:** solicitud expresa de subir este proyecto a Scsolucionesconectadas/I-Solution; el usuario además aprobó demo pública y conexión automática, sin envío de correo/indexación.

**Impacto:** fonts y logos de agencia propios en assets/fonts y assets/agency. Generadores PDF ya no dependen de apps/lmr ni .qa/pdf-review. Documentos públicos versionados para builds sin Python. Fingerprints/JSON se preservan en Git, y la demo falla si documentos no coinciden con datos/fotos actuales. PDFs nuevos siguen requiriendo autoría y revisión antes de commit.

**Alternativas:** regenerar PDF en cada build (añade entorno/dependencias y posibles cambios involuntarios); seguir dependiendo del monorepo (impide independencia); omitir PDF ignorados (rompe descargas). Se eligió versionar la salida revisada y conservar generadores reproducibles.

**Archivos:** scripts/build-instrumental.mjs, prepare-isolution-demo.mjs, generadores Python, requirements-authoring.txt, .gitattributes y deploy/isolution-demo/wrangler.jsonc.
