"""Create the commercial catalogue from the same reviewed JSON as the website.

Requires reportlab 4.x, fontTools/brotli and Pillow. Development-only dependencies
may live in .qa/pdf-review; none is loaded by the public website or Node build.
"""
from pathlib import Path
import sys
import json
import hashlib
import shutil
from io import BytesIO
from html import escape
from inline_pdf import inline, register_family

ROOT = Path(__file__).resolve().parent.parent
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from fontTools.ttLib import TTFont as SourceFont
from PIL import Image

CONTENT = ROOT / 'content/instrumental-solution'
SOURCE = ROOT / 'apps/instrumental-solution/assets/source'
OUTPUT = ROOT / 'output/pdf/catalogo-isolution.pdf'
WEB = ROOT / 'apps/instrumental-solution/assets/documents/catalogo-isolution.pdf'
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
FONT_DIR = ROOT / '.qa/isolution-53/fonts'
FONT_DIR.mkdir(parents=True, exist_ok=True)
for name, filename in [('Regular', 'Poppins-Regular'), ('SemiBold', 'Poppins-SemiBold'), ('Italic', 'Poppins-Italic'), ('SemiBoldItalic', 'Poppins-SemiBoldItalic')]:
    target = FONT_DIR / f'{filename}.ttf'
    font = SourceFont(ROOT / 'apps/instrumental-solution/assets/fonts' / f'{filename}.woff2')
    font.flavor = None
    font.save(target)
    pdfmetrics.registerFont(TTFont(name, str(target)))
register_family(pdfmetrics)

products = json.loads((CONTENT / 'productos.json').read_text(encoding='utf-8'))
products = [p for p in products if p.get('active', True)]
site = json.loads((CONTENT / 'site.json').read_text(encoding='utf-8'))
institution = json.loads((CONTENT / 'institucional.json').read_text(encoding='utf-8'))
images = json.loads((CONTENT / 'imagenes.json').read_text(encoding='utf-8'))
copy = json.loads((CONTENT / 'textos.json').read_text(encoding='utf-8'))
W, H = A4
M = 43
INK, BLUE, NAVY = [HexColor(x) for x in ['#0c1f36', '#245e9a', '#102b47']]
MUTED, LINE, SURFACE = [HexColor(x) for x in ['#50657c', '#d2e0ec', '#eef5fa']]

family_copy={
    'Caudal':('Medición de caudal.','Líquidos y gases: tecnologías, conexiones y condiciones según aplicación.'),
    'Nivel':('Medición y detección de nivel.','Medición continua o puntual; tecnologías seleccionadas para cada medio.'),
    'Presión':('Medición de presión.','Transmisores inteligentes y configuraciones para sistemas de control.'),
    'Análisis de líquidos':('Análisis de líquidos.','Sensores, transmisores y análisis de cloro para procesos y agua.'),
    'Configuración':('Configuración de instrumentos.','Herramientas para equipos compatibles y asistencia para la selección.'),
    'Automatización':('Control y visualización.','Controladores PLC y pantallas HMI para equipos y procesos.'),
    'Temperatura':('Medición de temperatura.','Termocuplas y sensores resistivos seleccionados para cada montaje.'),
    'Densidad y concentración':('Densidad y concentración.','Seguimiento de densidad, concentración y viscosidad según el producto.'),
    'Torque':('Medición de torque.','Sensores de par dinámico o de reacción para máquinas y ensayos.'),
}
for product in products:
    family_copy.setdefault(product['family'],(product['family']+'.','Instrumentos y opciones de selección para tu aplicación.'))
families=[(family,copy,[p for p in products if p['family']==family]) for family,copy in family_copy.items() if any(p['family']==family for p in products)]

# Measure the index before assigning content pages. Wrapped labels and future
# instruments can add index pages without making printed numbers stale.
INDEX_GAP=26
INDEX_WIDTH=(W-2*M-INDEX_GAP)/2
INDEX_TOP=H-198
INDEX_BOTTOM=92
index_columns=[[]]
index_y=INDEX_TOP
def paragraph_height(value,width,size,leading,bold=False):
    paragraph=Paragraph(escape(str(value)),ParagraphStyle('index-measure',fontName='SemiBold' if bold else 'Regular',fontSize=size,leading=leading))
    return paragraph.wrap(width,2000)[1]

def index_entry(product):
    label=product['name']
    detail=' · '.join(dict.fromkeys(filter(None,[product.get('brand'),product['series']])))
    height=paragraph_height(label,INDEX_WIDTH-33,9.7,12,True)+paragraph_height(detail,INDEX_WIDTH-33,8.8,11)+12
    return {'kind':'product','product':product,'label':label,'detail':detail,'height':height}

def index_space(height):
    global index_y
    if index_y-height<INDEX_BOTTOM:
        index_columns.append([])
        index_y=INDEX_TOP
        return True
    return False

for family,_,entries in families:
    first=index_entry(entries[0])
    index_space(32+first['height'])
    index_columns[-1].append({'kind':'family','family':family,'height':32})
    index_y-=32
    for product in entries:
        row=index_entry(product)
        if index_space(row['height']):
            index_columns[-1].append({'kind':'family','family':family,'continued':True,'height':32})
            index_y-=32
        index_columns[-1].append(row)
        index_y-=row['height']
# Balance the final spread at family boundaries instead of leaving a nearly
# empty right column when the last family has only a couple of instruments.
if len(index_columns)>1 and len(index_columns)%2==0:
    final_rows=index_columns[-2]+index_columns[-1]
    capacity=INDEX_TOP-INDEX_BOTTOM
    splits=[i for i in range(1,len(final_rows)) if final_rows[i]['kind']=='family'
            and sum(row['height'] for row in final_rows[:i])<=capacity
            and sum(row['height'] for row in final_rows[i:])<=capacity]
    if splits:
        split=min(splits,key=lambda i:abs(sum(row['height'] for row in final_rows[:i])-sum(row['height'] for row in final_rows[i:])))
        index_columns[-2:]=[final_rows[:split],final_rows[split:]]
index_pages=(len(index_columns)+1)//2
product_pages={}
family_pages={}
planned_page=2+index_pages
for family,_,entries in families:
    family_pages[family]=planned_page
    for offset in range(0,len(entries),2):
        for product in entries[offset:offset+2]:product_pages[product['slug']]=planned_page
        planned_page+=1
services_page=planned_page

c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
c.setTitle('i-Solution - Instrumentación industrial y servicios')
c.setAuthor('i-Solution')
c.setSubject('Catálogo de instrumentos y servicios técnicos')


def text(value, x, top, width, size=10.4, color=MUTED, bold=False, leading=None, markup=False):
    value = (str(value) if markup else escape(str(value))).replace('\u2013', '-').replace('\u2014', '-').replace('\u2212', '-')
    style = ParagraphStyle('copy', fontName='SemiBold' if bold else 'Regular', fontSize=size,
                           leading=leading or size * 1.5, textColor=color, spaceAfter=0)
    paragraph = Paragraph(value, style)
    _, height = paragraph.wrap(width, 2000)
    paragraph.drawOn(c, x, top - height)
    return top - height


def image(path, x, y, width, height):
    with Image.open(path) as im:
        iw, ih = im.size
        if 'transparency' in im.info:im=im.convert('RGBA')
        im.thumbnail((round(width*2.5),round(height*2.5)))
        data=BytesIO()
        if im.mode in ('RGBA','LA'):
            im.save(data,format='PNG')
        else:
            im.convert('RGB').save(data,format='JPEG',quality=90,optimize=True)
        data.seek(0)
        prepared=ImageReader(data)
    scale = min(width / iw, height / ih)
    width2, height2 = iw * scale, ih * scale
    c.drawImage(prepared, x + (width - width2) / 2, y + (height - height2) / 2,
                width=width2, height=height2, mask='auto')


def footer(number, dark=False):
    color = HexColor('#c8ddea') if dark else MUTED
    c.setStrokeColor(HexColor('#45657e') if dark else LINE)
    c.line(M, 48, W - M, 48)
    text('i-Solution | Instrumentación y control de procesos', M, 36, W - 2*M - 35, 8, color)
    text(str(number), W - M - 12, 36, 20, 8, color)
    if number>1+index_pages:
        text('Volver al índice',M,70,160,9,BLUE,True)
        c.linkRect('', 'catalogue-index', (M,55,M+160,74), relative=0, thickness=0)


def header(title, subtitle, number):
    c.setFillColor(NAVY)
    c.rect(0, H - 76, W, 76, fill=1, stroke=0)
    image(SOURCE / 'logo.png', M, H - 64, 170, 46)
    text('Catálogo de instrumentación', W - M - 200, H - 30, 200, 9, HexColor('#c8ddea'))
    text(title, M, H - 108, W - 2*M, 27, INK, True)
    text(subtitle, M, H - 154, W - 2*M, 10.5)
    footer(number)


# Cover: actual instruments, with balanced space and original company mark.
c.setFillColor(NAVY)
c.rect(0, 0, W, H, fill=1, stroke=0)
image(SOURCE / 'logo.png', M, H - 110, 240, 66)
text('Instrumentación', M, H - 158, W - 2*M, 36, white, True)
text('industrial.', M, H - 211, W - 2*M, 36, HexColor('#b6dcf5'), True)
text('Equipos de medición, documentación y servicios para tus procesos.', M, H - 278,
     W - 2*M - 40, 13, HexColor('#c8ddea'))
cell_w = (W - 2*M - 24) / 3
cover_slugs=['sino-inst-coriolis-serie-u','trumen-lsv','yokogawa-ejx530a','endress-liquiline-cm442','siemens-simatic-s7-1200-g2','schneider-harmony-st6']
preferred=[p for slug in cover_slugs for p in products if p['slug']==slug]
cover_products=(preferred+[p for p in products if p not in preferred])[:6]
for i, product in enumerate(cover_products):
    col, row = i % 3, i // 3
    x, y = M + col * (cell_w + 12), 292 - row * 176
    c.setFillColor(white)
    c.roundRect(x, y, cell_w, 161, 8, fill=1, stroke=0)
    image(SOURCE / images[product['image']], x + 13, y + 42, cell_w - 26, 102)
    label = product['name'].replace(' electromagnético', '').replace(' Smart', '')
    text(label, x + 12, y + 36, cell_w - 24, 9.2, INK, True, 12)
text('Caudal | Nivel | Presión | Análisis | Control | Temperatura | Densidad | Torque', M, 91, W - 2*M, 10, HexColor('#c8ddea'))
footer(1, dark=True)
text('Ver índice de instrumentos',M,68,W-2*M,10,HexColor('#b6dcf5'),True)
c.linkRect('', 'catalogue-index', (M,53,M+240,73), relative=0, thickness=0)
c.showPage()

for page_offset in range(index_pages):
    if page_offset==0:
        c.bookmarkPage('catalogue-index')
        c.addOutlineEntry('Índice de instrumentos','catalogue-index',level=0)
    header('Índice de instrumentos.','Buscá por familia, marca o modelo. Seleccioná un equipo para ir a su página.',2+page_offset)
    for column in range(2):
        column_index=page_offset*2+column
        if column_index>=len(index_columns):break
        x=M+column*(INDEX_WIDTH+INDEX_GAP)
        y=INDEX_TOP
        for row in index_columns[column_index]:
            bottom=y-row['height']
            if row['kind']=='family':
                label=row['family']+(' · continúa' if row.get('continued') else '')
                c.setFillColor(SURFACE)
                c.roundRect(x,y-24,INDEX_WIDTH,25,4,fill=1,stroke=0)
                text(label,x+7,y-4,INDEX_WIDTH-42,10,BLUE,True,13)
                text(str(family_pages[row['family']]),x+INDEX_WIDTH-25,y-4,23,10,BLUE,True,13)
                c.linkRect('', 'family-'+str(list(family_copy).index(row['family'])), (x,y-24,x+INDEX_WIDTH,y+1), relative=0, thickness=0)
            else:
                product=row['product']
                next_y=text(row['label'],x+2,y-2,INDEX_WIDTH-33,9.7,INK,True,12)
                text(row['detail'],x+2,next_y-2,INDEX_WIDTH-33,8.8,MUTED,leading=11)
                text(str(product_pages[product['slug']]),x+INDEX_WIDTH-24,y-3,24,10,BLUE,True,13)
                c.setStrokeColor(LINE)
                c.line(x,bottom+4,x+INDEX_WIDTH,bottom+4)
                c.linkRect('', 'instrument-'+product['slug'], (x,bottom+4,x+INDEX_WIDTH,y), relative=0, thickness=0)
            y=bottom
    text(f'Índice {page_offset+1} de {index_pages} · Los números corresponden a las páginas del PDF.',M,82,W-2*M,8.5,MUTED)
    c.showPage()


def product_block(product, top, height=262):
    destination='instrument-'+product['slug']
    c.bookmarkPage(destination,fit='XYZ',left=M,top=top+8,zoom=0)
    c.addOutlineEntry(product['name']+' · '+product['series'],destination,level=1)
    bottom = top - height
    c.setStrokeColor(LINE)
    c.setFillColor(white)
    c.roundRect(M, bottom, W - 2*M, height, 8, fill=1, stroke=1)
    image(SOURCE / images[product['image']], M + 12, top - 204, 142, 174)
    text(product['brand'] or product['family'], M + 16, bottom + 36, 140, 9, BLUE, True)
    x, width = M + 175, W - 2*M - 193
    y = text(inline(product,'name'), x, top - 18, width, 15.5, INK, True, 20, markup=True)
    y = text(('Línea de productos' if product.get('kind')=='line' else inline(product,'series')), x, y - 5, width, 10, BLUE, True, markup=True) - 12
    y = text(inline(product,'summary'), x, y, width, 9.3, MUTED, leading=13.5, markup=True) - 12
    specs = [row for row in product['parameters'] if row[0]!='Variable'][:3]
    for key, value in specs:
        i=product['parameters'].index([key,value])
        label=inline(product,f'parameters.{i}.0').replace(' publicada', '')
        y = text(label+': '+inline(product,f'parameters.{i}.1'), x, y, width, 8.8, MUTED, leading=12, markup=True) - 5
    if y < bottom + 16:
        raise ValueError(f'Product block overflows: {product["slug"]}')


number=2+index_pages
for family,(title,subtitle),entries in families:
    family_destination='family-'+str(list(family_copy).index(family))
    for offset in range(0,len(entries),2):
        pair=entries[offset:offset+2]
        if offset==0:
            c.bookmarkPage(family_destination)
            c.addOutlineEntry(family,family_destination,level=0)
        header(title,subtitle,number)
        if len(pair)==2:
            product_block(pair[0], H-194)
            product_block(pair[1], H-478)
        else:
            product_block(pair[0], H-194,height=300)
            text('Seleccionemos el equipo para tu proceso.',M,298,W-2*M,17,INK,True)
            text('Indicá la variable, el medio, el rango y las condiciones de montaje. Consultanos por el modelo, su documentación y la configuración adecuada.',M,263,W-2*M,11)
        text('Las fichas de línea presentan opciones de selección. Los alcances, materiales y recursos se confirman por modelo y aplicación.',M,86,W-2*M,8.5,MUTED,leading=12)
        c.showPage()
        number+=1

c.bookmarkPage('services')
c.addOutlineEntry('Servicios y contacto','services',level=0)
header('Servicios para tus instrumentos.', 'Calibración, mantenimiento, asistencia técnica y automatización industrial.', number)
y = H - 198
for service in institution['services']:
    image(SOURCE / copy['images'].get('servicio-'+service['id'], images[service['image']]), M, y - 53, 53, 53)
    text(inline(service,'name'), M + 72, y, W - 2*M - 72, 12, INK, True, markup=True)
    text(inline(service,'summary'), M + 72, y - 23, W - 2*M - 72, 9.3, MUTED, leading=13, markup=True)
    c.setStrokeColor(LINE)
    c.line(M, y - 68, W - M, y - 68)
    y -= 86
c.setFillColor(SURFACE)
c.roundRect(M, 77, W - 2*M, 109, 8, fill=1, stroke=0)
text('Conversemos sobre tu aplicación.', M + 20, 168, W - 2*M - 40, 17, INK, True)
text(site['email'] + ' | ' + site['phone'], M + 20, 133, W - 2*M - 40, 10.5, BLUE)
text(site['address'], M + 20, 110, W - 2*M - 40, 9.2, MUTED)
c.linkURL('mailto:' + site['email'], (M+20, 117, M+240, 138), relative=0)
c.linkURL('https://wa.me/' + site['whatsapp'], (M+240, 117, W-M-20, 138), relative=0)
c.save()
shutil.copyfile(OUTPUT, WEB)

# Fingerprint prevents serving an outdated commercial PDF after content changes.
digest = hashlib.sha256()
for filename in ['site.json', 'productos.json', 'institucional.json', 'imagenes.json']:
    digest.update((CONTENT / filename).read_bytes())
for product in products:
    digest.update((SOURCE / images[product['image']]).read_bytes())
for service in institution['services']:
    digest.update((SOURCE / copy['images'].get('servicio-'+service['id'], images[service['image']])).read_bytes())
metadata = {'contentSha256': digest.hexdigest(), 'pdfSha256': hashlib.sha256(OUTPUT.read_bytes()).hexdigest(),
            'indexPages': index_pages, 'productPages': product_pages, 'familyPages': family_pages, 'servicesPage': services_page,
            'pages': number, 'entries': len(products), 'lines': sum(p.get('kind')=='line' for p in products), 'date': '2026-11-18', 'generator': 'scripts/create-instrumental-catalog.py'}
(CONTENT / 'catalogo-pdf.json').write_text(json.dumps(metadata, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'output': str(OUTPUT), 'bytes': OUTPUT.stat().st_size, **metadata}))
