import {e,arrow,icon,button} from './components.mjs';
import {formatted as f} from '../../shared/inline-format.mjs';

export function consultationLink(ctx,{brand,technology,product}={}) {
  const params=new URLSearchParams({motivo:'asesoramiento'});
  if(product)params.set('producto',product.slug);
  if(brand?.id||product?.brandId)params.set('marca',brand?.id??product.brandId);
  if(technology?.id||product?.measurement?.id)params.set('tecnologia',technology?.id??product.measurement.id);
  return ctx.href(`contacto/?${params}#formulario`);
}

export function brandSection(ctx,{autoplay=false}={}) {
  if(!ctx.guide)return '';
  return `<section class="section commercial-brands" id="marcas" aria-labelledby="marcas-titulo"><div class="container"><div class="guide-heading"><h2 id="marcas-titulo">Marcas que comercializamos.</h2><p>Instrumentación de marcas internacionales y nuestra línea i-Solution.</p></div><div class="brand-carousel brand-carousel--logos" data-brand-carousel ${autoplay?'data-brand-autoplay':''} role="region" aria-roledescription="carrusel" aria-label="Marcas comercializadas"><button type="button" class="brand-carousel-arrow" data-brand-previous aria-label="Ver marcas anteriores">‹</button><div class="commercial-brand-track" data-brand-track tabindex="0" aria-label="Marcas de instrumentos. Usá las flechas para recorrerlas.${autoplay?' Espacio sobre esta franja detiene o reanuda el avance automático.':''}">${ctx.guide.brands.map(brand=>`<a data-brand-id="${e(brand.id)}" class="commercial-brand commercial-brand--${e(brand.id)}" href="${e(ctx.href(`productos/?marca=${brand.id}#instrumentos`))}" aria-label="Ver instrumentos ${e(brand.name)}"><span class="commercial-brand-art${brand.tone==='dark'?' commercial-brand-art--dark':''}"><img src="${ctx.href(`assets/brands/${brand.logo}`)}" width="200" height="70" alt="${e(brand.name)}" loading="lazy" decoding="async"></span></a>`).join('')}</div><button type="button" class="brand-carousel-arrow" data-brand-next aria-label="Ver marcas siguientes">›</button></div></div></section>`;
}

const pipe='<path d="M25 65h310M25 125h310"/><path class="measurement-flow" d="M35 95h115m60 0h110" stroke-dasharray="7 10"/>';
const shapes={
 magnetic:pipe+'<path d="M145 35v120m70-120v120" stroke-dasharray="3 7"/><path d="M135 25h90v20h-90zM135 145h90v20h-90z"/><circle cx="180" cy="65" r="6"/><circle cx="180" cy="125" r="6"/><path d="M180 25V12h120v160H180v-17"/>',
 coriolis:'<path d="M20 55h70v72a50 50 0 0 0 100 0V55h60v52a80 80 0 0 1-160 0V55m160 0h90"/><path class="measurement-flow" d="M105 110q35-25 70 0m-70 22q35 25 70 0" stroke-dasharray="5 7"/><circle cx="90" cy="78" r="7"/><circle cx="250" cy="78" r="7"/>',
 vortex:pipe+'<path d="m125 70 25 25-25 25Z"/><path class="measurement-flow" d="M165 95c20-35 35 35 55 0s35 35 55 0 35 35 55 0"/>',
 ultrasonic:pipe+'<path d="m95 60 20-17 18 25-20 17ZM225 133l20-17 18 25-20 17Z"/><path class="measurement-flow" d="m120 70 115 55m0-55-115 55" stroke-dasharray="6 8"/>',
 thermal:pipe+'<path d="M150 20h65v25h-65zM168 45v45m28-45v45"/><circle cx="168" cy="96" r="8"/><circle cx="196" cy="96" r="8"/><path d="M207 85q12 12 0 24m13-36q25 24 0 48"/>',
 turbine:pipe+'<circle cx="180" cy="95" r="27"/><path d="m180 68 15 27-15 27-15-27zM153 95h54"/>',
 'variable-area':'<path d="M140 20h80l-15 140h-50zM125 20h110M145 160h70"/><path d="m152 105 28-30 28 30z"/><path class="measurement-flow" d="M180 168v-48m0-55V25" stroke-dasharray="5 7"/>',
 radar:'<rect x="75" y="30" width="210" height="135" rx="12"/><path d="M165 12h30v30h-30zM85 120q30-10 60 0t60 0 60 0v35H85Z"/><path class="measurement-flow" d="m165 58 15 52 15-52m-35 17q20 15 40 0m-47 18q27 15 54 0" stroke-dasharray="5 6"/>',
 guided:'<rect x="75" y="30" width="210" height="135" rx="12"/><path d="M165 12h30v30h-30zM180 42v105M85 120q30-10 60 0t60 0 60 0v35H85Z"/><path class="measurement-flow" d="M170 50v65m20 10V60" stroke-dasharray="4 6"/>',
 fork:'<path d="M55 30h250v135H55zM80 120l35-20 35 17 40-28 40 20 55-10v56H80Z"/><path d="M165 12h30v30h-30zM170 42v57h20V42m-20 42h20"/>',
 pressure:'<path d="M25 125h310M25 155h310M180 125V90"/><circle cx="180" cy="58" r="38"/><path d="M180 58l20-18m-45 18h6m38 0h6m-25-25v6"/>',
 analysis:'<path d="M125 40h110v100H125zM130 100h100M30 90h75m150 0h75"/><rect x="25" y="70" width="30" height="40" rx="6"/><rect x="305" y="70" width="30" height="40" rx="6"/><path class="measurement-flow" d="M57 90h246" stroke-dasharray="5 8"/>',
 plc:'<rect x="90" y="35" width="180" height="115" rx="7"/><path d="M115 55h130v40H115zM115 115h12m12 0h12m12 0h12m12 0h12m12 0h12M35 60h55m-55 30h55m-55 30h55m180-60h55m-55 30h55m-55 30h55"/>',
 hmi:'<rect x="70" y="25" width="220" height="130" rx="9"/><path d="M85 40h190v90H85zM150 155v15h60v-15M110 95l35-30 40 35 45-42m-120 55h130"/>',
 configuration:'<rect x="135" y="15" width="90" height="155" rx="8"/><path d="M147 30h66v40h-66zM150 90h12m12 0h12m12 0h12m-60 20h12m12 0h12m12 0h12m-60 20h12m12 0h12m12 0h12"/>',
 'positive-displacement':pipe+'<circle cx="160" cy="95" r="23"/><circle cx="200" cy="95" r="23"/><path d="m145 80 30 30m10-30 30 30M135 62h90v66h-90z"/>',
 differential:pipe+'<path d="M130 65l35 20v20l-35 20m100-60-35 20v20l35 20M100 65V35h160v30M150 35V15h60v20"/><path class="measurement-flow" d="M160 95h40" stroke-dasharray="4 5"/>',
 'open-channel':'<path d="M40 60v95h280V60M50 120q30-10 60 0t60 0 60 0 60 0 20 0M160 95v60h25V95"/><path d="M115 20h40v25h-40zM135 45v55m95-65v60" stroke-dasharray="5 6"/>',
 'control-loop':pipe+'<circle cx="105" cy="95" r="20"/><path d="m230 75 35 40V75l-35 40zM250 75V35H105v40"/><rect x="155" y="20" width="45" height="30" rx="4"/>',
 'ultrasonic-level':'<rect x="70" y="35" width="220" height="130" rx="10"/><path d="M165 12h30v30h-30zM80 120q30-10 60 0t60 0 60 0 20 0v35H80Z"/><path class="measurement-flow" d="m160 60 20 45 20-45m-55 15q35 25 70 0" stroke-dasharray="5 6"/>',
 hydrostatic:'<rect x="70" y="30" width="220" height="135" rx="10"/><path d="M80 80q30-10 60 0t60 0 60 0 20 0v75H80Z"/><rect x="165" y="125" width="30" height="25" rx="4"/><path d="M180 125V15h120m-75 75v55m-8-45 8-10 8 10m-16 35 8 10 8-10"/>',
 capacitive:'<rect x="70" y="30" width="220" height="135" rx="10"/><path d="M165 12h30v30h-30zM180 42v105M80 110q30-10 60 0t60 0 60 0 20 0v45H80Z"/><path class="measurement-flow" d="M190 70h65m-65 25h65m-65 25h65" stroke-dasharray="4 7"/>',
 float:'<rect x="70" y="30" width="220" height="135" rx="10"/><path d="M180 15v135M80 105q30-10 60 0t60 0 60 0 20 0v50H80Z"/><rect x="155" y="88" width="50" height="30" rx="10"/><path d="M220 65v65m-8-53 8-12 8 12m-16 41 8 12 8-12"/>',
 rod:'<rect x="70" y="30" width="220" height="135" rx="10"/><path d="M165 12h30v30h-30zM180 42v65M80 130l35-20 35 17 40-28 40 20 50-10v46H80Z"/><path class="measurement-flow" d="M165 60q-12 20 0 40m30-40q12 20 0 40"/>',
 conductive:'<rect x="70" y="30" width="220" height="135" rx="10"/><path d="M130 15h100v25H130zM145 40v90m35-50V40m35 0v110M80 100q30-10 60 0t60 0 60 0 20 0v55H80Z"/><path class="measurement-flow" d="M145 120h70" stroke-dasharray="4 6"/>',
 'rotary-level':'<rect x="70" y="30" width="220" height="135" rx="10"/><path d="M165 12h30v30h-30zM180 42v65m-35-10 70 20m-70 0 70-20M80 135l40-20 40 15 40-20 40 15 40-10v40H80Z"/><path d="M210 60a40 40 0 0 1 15 35m-8-8 8 8 7-9"/>',
 temperature:'<path d="M164 35a16 16 0 0 1 32 0v80a30 30 0 1 1-32 0Z"/><path class="measurement-flow" d="M180 45v90"/><circle cx="180" cy="140" r="12"/><path d="M215 50h20m-20 25h12m-12 25h20M80 65q20 10 0 25t0 25m190-50q20 10 0 25t0 25"/>',
 density:'<rect x="70" y="35" width="220" height="130" rx="10"/><path d="M80 95q30-10 60 0t60 0 60 0 20 0v60H80ZM165 12h30v35h-30zM170 47v75h20V47"/><path class="measurement-flow" d="M150 90q-15 15 0 30m60-30q15 15 0 30"/>',
 torque:'<path d="M30 75h100v40H30m200-40h100v40H230"/><rect x="130" y="55" width="100" height="80" rx="12"/><path d="M180 55V25m-35 10a50 50 0 0 1 70 0m-10-4 10 4-1-12M180 135v30"/><path class="measurement-flow" d="M150 80l60 30m-60 0 60-30"/>',
 generic:'<circle cx="180" cy="95" r="45"/><path d="M30 95h105m90 0h105M180 20v30m0 90v30m-20-75h40m-20-20v40"/>',
};

export function productPrinciple(ctx,product) {
  const measurement=product.measurement;
  if(!measurement)return '';
  const shape=shapes[measurement.diagram]??shapes.generic;
  return `<section class="section product-principle" id="funcionamiento"><div class="container product-principle-grid"><div><h2>Cómo funciona.</h2><figure class="measurement-figure"><svg viewBox="0 0 360 190" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shape}</svg><figcaption>${f(product,'measurement.name')}</figcaption></figure></div><div><p class="measurement-explanation">${f(product,'measurement.principle')}</p><div class="measurement-selection"><h3>Para elegir este instrumento</h3><p>${f(product,'measurement.selection')}</p>${button(consultationLink(ctx,{product}),'Consultar por este instrumento')}</div></div></div></section>`;
}
