import fs from 'node:fs';

const sources = [
  ['/Users/marcelosanchezdev/.codex/attachments/fd981ef5-7e92-41bc-b966-d5db21de7f3c/Texto pegado.txt', 'premium.html'],
  ['/Users/marcelosanchezdev/.codex/attachments/5e10dec1-e238-41e2-af7c-64582947067a/Texto pegado.txt', 'family.html'],
  ['/Users/marcelosanchezdev/.codex/attachments/95d74755-ad7f-4425-bb6e-69405af56fee/Texto pegado.txt', 'commercial.html'],
];

function loremizeTextNodes(markup) {
  return markup.replace(/>([^<]+)</g, (match, text, offset) => {
    const value = text.trim();
    if (!value) return match;
    const lastTag = markup.slice(0, offset).slice(markup.slice(0, offset).lastIndexOf('<'));
    if (lastTag.includes('material-symbols-outlined')) return match;
    const prefix = text.match(/^\s*/)?.[0] ?? '';
    const suffix = text.match(/\s*$/)?.[0] ?? '';
    if (/Carlos Reyes Decoraciones/i.test(value)) return `>${prefix}Carlos Reyes Decoraciones${suffix}<`;
    if (/50\s*(?:\+\s*)?a(?:ñ|n)os|a(?:ñ|n)os\s+de\s+experiencia/i.test(value)) return `>${prefix}50 años de experiencia${suffix}<`;
    return `>${prefix}Lorem ipsum dolor sit amet.${suffix}<`;
  });
}

function labelInteractiveElements(markup) {
  let navigationIndex = 0;
  let buttonIndex = 0;
  const replaceLorem = (inner, label) => {
    let replacements = 0;
    return inner.replace(/Lorem ipsum dolor sit amet\./g, () => replacements++ === 0 ? label : '→');
  };

  let output = markup.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attributes, inner) => {
    const href = attributes.match(/href="([^"]*)"/i)?.[1] ?? '';
    let label;
    if (href.includes('wa.me')) label = 'WhatsApp';
    else if (/#(?:cotizador-rapido|presupuesto|contacto)/i.test(href)) label = 'Pedir presupuesto';
    else label = `Botón ${++navigationIndex}`;
    return `<a${attributes}>${replaceLorem(inner, label)}</a>`;
  });

  output = output.replace(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi, (full, attributes, inner) => {
    const label = /type="submit"/i.test(attributes) ? 'Enviar pedido' : `Botón ${++buttonIndex}`;
    return `<button${attributes}>${replaceLorem(inner, label)}</button>`;
  });
  return output.replace(/Lorem ipsum dolor sit amet\.\s*(<span[^>]*>)(Pedir presupuesto|WhatsApp|Botón \d+)(<\/span>)/g, '$1$2$3');
}

for (const [source, destination] of sources) {
  const file = fs.readFileSync(source, 'utf8');
  const body = file.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const clean = body
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/\s+onclick="[^"]*"/gi, '')
    .replace(/\s+onsubmit="[^"]*"/gi, '')
    .replace(/Vanderbilt &amp; Cía\.|Vanderbilt & Cía\./g, 'Cortinas &amp; Tapizados [Nombre del Cliente]')
    .replace(/Cortinas &amp; Tapizados \[Nombre del Cliente\]/g, 'Carlos Reyes Decoraciones')
    .replace(/Cortinas &amp; Tapicería Familiar|Cortinas y Tapicería Familiar/g, 'Carlos Reyes Decoraciones')
    .replace(/Cortinas &amp; Tapicería/g, 'Carlos Reyes Decoraciones')
    .replace(/vanderbilt-taller\.com\.ar/g, 'cortinasydecoracion.com')
    .replace(/5491155002400|541148209100/g, '549110000000')
    .replace(/\+54 9 11 5500-2400|11 5500-2400|11 5500 2400|\+54 11 4820-9100|\(011\) 4820-9100/g, '+54 9 11 0000-0000');
  fs.writeFileSync(new URL(`../src/templates/${destination}`, import.meta.url), clean);
}
