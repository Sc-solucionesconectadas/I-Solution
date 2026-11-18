"""Render only escaped text plus the two supported inline marks in ReportLab."""
from html import escape

def inline(record, key):
    value = record
    for part in key.split('.'):
        value = value[int(part)] if isinstance(value, list) else value.get(part, '')
    text = str(value)
    units = text.encode('utf-16-le')
    def segment(start, end):
        return escape(units[start * 2:end * 2].decode('utf-16-le', errors='replace'))
    result, previous = '', 0
    for start, end, mark in record.get('formatting', {}).get(key, []):
        result += segment(previous, start)
        part = segment(start, end)
        if mark & 2:
            part = '<i>' + part + '</i>'
        if mark & 1:
            part = '<b>' + part + '</b>'
        result += part
        previous = end
    return result + segment(previous, len(units) // 2)

def register_family(pdfmetrics):
    pdfmetrics.registerFontFamily('Regular', normal='Regular', bold='SemiBold', italic='Italic', boldItalic='SemiBoldItalic')
    pdfmetrics.registerFontFamily('SemiBold', normal='SemiBold', bold='SemiBold', italic='SemiBoldItalic', boldItalic='SemiBoldItalic')
