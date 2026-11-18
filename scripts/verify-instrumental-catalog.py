"""Verify the generated PDF's real pages, index links and printed page numbers."""
from pathlib import Path
import json
import re
import unicodedata
import pymupdf

root=Path(__file__).resolve().parent.parent
content=root/'content/instrumental-solution'
products=[p for p in json.loads((content/'productos.json').read_text(encoding='utf-8')) if p.get('active',True)]
metadata=json.loads((content/'catalogo-pdf.json').read_text(encoding='utf-8'))
document=pymupdf.open(root/'apps/instrumental-solution/assets/documents/catalogo-isolution.pdf')
def normalize(value):
    return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFKD',value).encode('ascii','ignore').decode().lower())

assert len(document)==metadata['pages']
assert set(metadata['productPages'])=={p['slug'] for p in products}
index_count=metadata['indexPages']
assert index_count>0
index_text=normalize(' '.join(document[i].get_text() for i in range(1,1+index_count)))
links=[]
for i in range(1,1+index_count):
    for link in document[i].get_links():
        assert link['kind']==pymupdf.LINK_GOTO
        assert 1+index_count<=link['page']<len(document)
        rect=link['from']
        printed=document[i].get_text(clip=pymupdf.Rect(rect.x1-30,rect.y0,rect.x1,rect.y1)).strip()
        assert printed==str(link['page']+1),(i+1,printed,link['page']+1)
        links.append(link)
assert len(links)>=len(products)
for product in products:
    number=metadata['productPages'][product['slug']]
    page_text=normalize(document[number-1].get_text())
    assert normalize(product['name']) in page_text,product['slug']
    assert normalize(product['series']) in page_text or product.get('kind')=='line',product['slug']
    assert normalize(product['name']) in index_text,product['slug']
    assert normalize(product['series']) in index_text,product['slug']
    assert any(link['page']==number-1 for link in links)
for i in range(1+index_count,len(document)):
    assert any(link.get('page')==1 for link in document[i].get_links()),('Back to index',i+1)
assert len(document.get_toc())>=len(products)+len(metadata['familyPages'])+1
print(json.dumps({'pages':len(document),'indexPages':index_count,'instruments':len(products),'indexLinks':len(links),'bookmarks':len(document.get_toc()),'valid':True}))
