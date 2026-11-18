# Instrumentos de proveedores y funcionamiento por instrumento

Fecha: 2026-11-16. Implementación local aprobada. Esta etapa sustituye la guía general de tecnologías de [[17_Marcas_y_Guia_de_Medicion]]; esa nota conserva el análisis anterior.

## Resultado y alcance

El catálogo contiene **26 entradas: seis configuraciones y veinte líneas**. Las diecisiete entradas anteriores conservan sus datos comerciales, documentos y medios; se añadieron `brandId` y `measurement`. Las nueve series nuevas se presentan para consulta y selección de configuración, sin inventar SKU, stock, precios o acreditaciones comerciales.

| Marca | Series incorporadas |
| --- | --- |
| Endress+Hauser | Proline Promag W10; Liquiline CM442 |
| Sino-Inst | U Series Coriolis |
| Trumen | LSV, detección puntual de sólidos y polvos |
| Siemens | SITRANS Probe LU240; SIMATIC S7-1200 G2 |
| Yokogawa | EJX530A, presión relativa |
| Schneider Electric | Modicon M221; Harmony ST6 |

Los seis logos siguen en el catálogo. Cada logo selecciona su marca dentro del listado. i-Solution permanece como línea propia. La existencia de una serie en el fabricante no confirma disponibilidad inmediata ni condición de partner oficial.

## Navegación y contenido

- Se retiró la cuadrícula global «Cómo mide cada tecnología».
- Búsqueda, categoría, marca y tecnología filtran el mismo conjunto de instrumentos. Las tecnologías disponibles dependen de categoría y marca. El selector de recursos se retiró por pedido del usuario el17/11/2026; las descargas permanecen en cada instrumento.
- El encabezado del listado explica la categoría seleccionada; un resultado único usa una tarjeta horizontal en escritorio y apilada en móvil.
- Cada instrumento tiene su apartado **Cómo funciona**, esquema, explicación, datos para seleccionar y CTA contextual.
- Contacto conserva instrumento, marca y tecnología. Al cambiar el instrumento en el selector, recalcula sus valores sin reemplazar el mensaje del visitante.
- Se añadieron las familias Automatización y Configuración, sin agrupar PLC/HMI como si fueran sensores de medición.

## Contrato de datos

`productos.json` contiene una propiedad opcional `measurement` por instrumento. Actualmente las 26 entradas la tienen. No existe una tabla global que asocie cada slug a una explicación.

```json
{
  "brandId": "marca-conocida",
  "measurement": {
    "id": "tecnologia",
    "name": "Nombre de la tecnología o función",
    "principle": "Explicación correspondiente a este instrumento",
    "selection": "Datos necesarios para seleccionarlo",
    "diagram": "magnetic"
  }
}
```

Los esquemas admitidos están validados; el texto admite los rangos seguros de negrita/cursiva del editor, sin HTML arbitrario. La lista de tecnologías del catálogo se deriva de los instrumentos. `marcas.json` contiene solo el registro de marcas; sustituye el anterior `catalogue-guide.json`.

Se distingue radar FMCW, radar de 26 GHz, onda guiada, ultrasonido, horquilla, presión y análisis. El cloro DPD se explica como medición colorimétrica. Trumen LSV corresponde a sólidos/polvos; no se le atribuye el uso en líquidos de LFV. SIMATIC S7-1200 G2 no se presenta como recambio de hardware directo de la generación anterior.

## Imágenes y documentos

Nueve imágenes proceden de recursos oficiales de los fabricantes, conservando identidad y proporciones del equipo. Se extrajeron fotografías de PDF cuando la web no ofrecía una imagen fiable. Se aplicó conversión de color/transparencia y formato, sin generación de detalles ni sustitución del producto por otro modelo.

La procedencia pública de cada nueva serie, fotografía y documento está registrada en [recursos-proveedores.json](../diseno/instrumentos/2026-11-16/recursos-proveedores.json). Los recursos intermedios de investigación quedan ignorados en `.qa/`.

Se añadieron siete documentos originales de fabricantes. Las 26 fichas propias se regeneraron con el funcionamiento y enlaces de fuente correctamente identificados. El catálogo comercial actualizado tiene **18 páginas** y portada nueva. El conjunto servido suma **39 PDF**: 26 fichas generadas, doce documentos originales y un catálogo. Los cinco documentos originales anteriores conservan su SHA-256.

Sino-Inst U Series y SIMATIC S7-1200 G2 cuentan con resumen propio; no se inventó un manual original para una configuración aún no seleccionada. La documentación por versión sigue requiriendo revisión técnica.

## Archivos principales

- `content/instrumental-solution/productos.json`, `marcas.json`, `site.json`, `imagenes.json` y manifests PDF.
- `apps/instrumental-solution/catalog-pages.mjs`, `catalogue-model.js`, `catalogue.js`, `catalogue-guide.mjs`, `catalogue-guide.css`.
- `catalogue-context.js`, `contact-context.js`, `contact-model.js`, `contact.js`, validadores y `seo.mjs`.
- Generadores `scripts/create-instrumental-sheets.py` y `create-instrumental-catalog.py`.
- Adaptación del panel documentada en su nota19; el panel no escribe directamente en esta fuente pública.

La migración SEO considera solo URLs antiguas de `solution.com.ar/producto/`; las fuentes de fabricantes nunca se proponen como URLs para redirigir.

## Validaciones

- `npm run check`, **30 pruebas** y `npm run build:demo`: correctos.
- 35 páginas HTML; enlaces, anclas, documentos y fingerprints coherentes.
- 24 combinaciones representativas de página/ancho (360, 390, 768 y 1440 px) sin desbordamiento. Se corrigió el mínimo de las tarjetas de familias que producía overflow a 390 px.
- Los 26 PDF de ficha tienen una página; catálogo y páginas representativas revisados visualmente.
- Selector de Contacto recalcula marca/tecnología; prueba sin envío. No errores JavaScript en la revisión navegada.

## Revisión local y pendientes

Web: http://127.0.0.1:4175/instrumental-solution/productos/#instrumentos. Copia local y build de demo mantienen noindex y transporte vacío. **Esta etapa no se publicó y no envió correos**.

- [ ] Cliente valida series habituales, configuraciones, disponibilidad y textos técnicos.
- [ ] Obtener mejores originales de algunas fotos antiguas; no ampliar artificialmente información inexistente.
- [ ] Revisar continuidad o sustituto del programador Siemens 7ML5830-2AH antes de anunciar disponibilidad.
- [ ] Revisar versiones finales de manuales y política de uso de material de marcas antes de lanzamiento.
- [ ] Publicar estos cambios solo con autorización posterior; autenticación remota y dominio final siguen en su etapa propia.
