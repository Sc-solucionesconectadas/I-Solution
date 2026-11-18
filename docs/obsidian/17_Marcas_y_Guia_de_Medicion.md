# Marcas y guía de medición

## Estado local — 2026-11-16

Se agregaron seis marcas comercializadas (Endress+Hauser, Siemens, Trumen, Yokogawa, Schneider Electric y Sino-Inst), manteniendo la línea propia i-Solution. La redacción no afirma representación oficial, exclusividad, stock ni condición de partner certificado.

Las marcas se muestran en Instrumentos y Catálogo digital web; cada logo abre Contacto con la marca identificada. La guía de Instrumentos presenta 13 tecnologías/funciones mediante details/summary nativos: siete de caudal, nivel continuo, detección puntual, presión, análisis, PLC/HMI y configuración. Las 17 entradas actuales tienen explicación contextual en su ficha. Coriolis y PLC/HMI son consultas de tecnología, sin SKU, imágenes o manuales inventados.

## Datos y diseño

- Fuente única: content/instrumental-solution/catalogue-guide.json.
- Logos originales independientes en apps/instrumental-solution/assets/brands/; procedencia en README.md. No se redibujaron marcas ni se alteraron imágenes de producto.
- Poppins, azul/navy y tarjetas coherentes con la web existente. Zoom leve al pasar el mouse; foco visible; prefiere movimiento reducido respetado. Sin carrusel automático ni dependencia nueva de frontend.
- Guía de dos columnas en escritorio/una en móvil. Contenido desplegable disponible sin JS. Acceso directo desde el encabezado del catálogo.
- Principios generales separados de las especificaciones particulares del modelo. No se atribuye automáticamente cada tecnología a todas las marcas comercializadas.

## Consulta contextual

Parámetros marca y tecnologia aceptan solo identificadores del registro. Contacto muestra etiquetas conocidas, selecciona asesoramiento y mantiene el texto escrito por el visitante. Marca/tecnología se incluyen como campos del payload y en los enlaces de WhatsApp/correo. Las pruebas de payload usan funciones locales sin red.

No se modificó contacto.json ni el destinatario. El build local se generó con contactEndpoint vacío; demo mantiene noindex y correo vacío. No se enviaron formularios, activaciones o correos.

## Validación

- npm run check correcto.
- npm test: 27 pruebas correctas; cinco nuevas para cobertura, fuentes/IDs inválidos, contexto permitido, payload y consultas accesibles.
- npm run build:demo: 26 HTML, 153 recursos, 24.844.525 bytes.
- Playwright: 16 casos (Instrumentos, Catálogo, ficha electromagnética y Contacto; 360/390/768/1440 px), sin overflow ni errores JS; seis logos cargados.
- Revisión visual escritorio/móvil; consulta Sino-Inst y tecnología combinadas en Contacto/WhatsApp, teclado Enter abre detalles, envío deshabilitado en copia local.
- Los JSON de productos, fichas/documentos, fingerprints y PDF no fueron alterados. Las 17 entradas conservan sus datos; 23 PDF continúan disponibles.
- git diff --check sin errores de espacios. No commit, push, deploy o DNS.

## Próximas etapas

1. Validar con el responsable técnico textos, alcance de provisión por marca y versiones disponibles.
2. Coriolis y PLC/HMI: recibir modelos, fotos y documentos; incorporarlos como líneas o configuraciones reales según el material recibido.
3. Ajustar el PDF comercial, portada y sus fingerprints cuando se apruebe su nueva estructura de marcas/tecnologías. El PDF actual no contiene todavía estos nuevos bloques de la web.
4. Preparar ilustraciones originales del principio de medición y mejorar el descubrimiento por variable/tecnología si la revisión lo justifica; mantener pocas animaciones útiles.
5. Integrar los campos marca/tecnología y adjuntos específicos con el administrador independiente, sin ampliar permisos sobre el diseño institucional.
6. Publicar únicamente con autorización y verificar artefacto/URLs/descargas; dominio e indexación siguen como etapa posterior.

El programador Siemens 7ML5830-2AH figura como Prod. Discont. en su portal oficial. Confirmar disponibilidad o alternativa con el responsable comercial; no se retiró ni reemplazó automáticamente. Fuente: https://sieportal.siemens.com/en-in/products-services/detail/7ML5830-2AH

## Fuentes técnicas consultadas

- Caudal electromagnético: https://www.endress.com/en/field-instruments-overview/flow-measurement-product-overview/electromagnetic-flowmeters
- Caudal másico Coriolis: https://www.mesc.endress.com/en/support-overview/learning-center/flow-principle-animation-coriolis
- Caudal vórtex: https://www.us.endress.com/en/support-overview/learning-center/flow-measuring-principle-vortex
- Caudal por dispersión térmica: https://www.uk.endress.com/en/support-overview/learning-center/flow-measuring-principle-thermal
- Caudal ultrasónico: https://www.endress.com/en/support-overview/learning-center/flow-measuring-principle-ultrasonic-methods
- Caudal por turbina: https://sino-inst.com/turbine-flowmeter-technology/
- Caudal por área variable: https://www.yokogawa.com/us/solutions/products-and-services/measurement/field-instruments-products/flow-meters/variable-area-flow-meter-rotameters/
- Nivel continuo: https://trumen.in/level-transmitter-manufacturers-india.html
- Detección puntual de nivel: https://trumen.in/point-level-switches-manufacturers-india.html
- Medición de presión: https://www.yokogawa.com/solutions/products-and-services/measurement/
- Análisis de agua y líquidos: https://www.endress.com/en/field-instruments-overview
- PLC y pantallas HMI: https://www.se.com/mx/es/faqs/FAQ000264630/
- Configuración de instrumentos: https://cache.industry.siemens.com/dl/files/992/109792992/att_1052960/v1/A5E32280389_ACen_ISprogrammer_COI_en-US.pdf

Las aplicaciones y límites se resumen de forma general; las especificaciones y documentación de fabricante deben corresponder al modelo suministrado.
