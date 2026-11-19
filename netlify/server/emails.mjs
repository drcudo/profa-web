// HTML predlošci e-pošte za obrasce Prijava i Instrukcije.

const SITE_URL = 'https://profa.com.hr';
const PURPLE = '#6347eb';
const MUTED = '#6b7280';

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Tekst iz obrasca: escape + očuvani prijelomi redova.
const text = (value) => escapeHtml(value).replace(/\r?\n/g, '<br />');

const layout = ({ preview, body }) => `<!doctype html>
<html lang="hr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f6f7f9;font-family:Arial,Helvetica,sans-serif;color:#000000;">
<div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7f9;">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;">
<tr><td style="background:${PURPLE};padding:24px 36px;">
<img src="${SITE_URL}/images/logo-email.jpg" width="44" height="44" alt="Profa" style="display:block;border:0;margin-bottom:10px;" />
<div style="color:#fafafa;font-size:12px;letter-spacing:4px;">PROFA</div>
</td></tr>
${body}
<tr><td style="background:${PURPLE};padding:20px 36px;color:#fafafa;font-size:12px;text-align:center;">Profa - online pripreme iz matematike</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;

const heading = (title, subtitle) => `<tr><td style="padding:40px 36px 0;">
<div style="font-size:26px;font-weight:700;line-height:1.2;padding-bottom:10px;">${title}</div>
<div style="color:${MUTED};font-size:15px;line-height:1.6;">${subtitle}</div>
</td></tr>`;

const detailsTable = (rows) => `<tr><td style="padding:20px 36px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
${rows
  .map(
    ([label, value], i) => `<tr>
<td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:${MUTED};width:38%;vertical-align:top;">${label}</td>
<td style="padding:10px 0;border-bottom:1px solid #e5e7eb;${i === 0 ? 'font-weight:700;' : ''}">${text(value || '-')}</td>
</tr>`
  )
  .join('\n')}
</table>
</td></tr>`;

const section = (label, content, { grey = false } = {}) => `<tr><td style="padding:28px 36px;${grey ? 'background:#f6f7f9;' : ''}">
<div style="font-size:12px;color:${MUTED};letter-spacing:2px;padding-bottom:10px;">${label}</div>
<div style="font-size:15px;line-height:1.7;">${content}</div>
</td></tr>`;

const button = (href, label) => `<tr><td style="padding:28px 36px 0;">
<a href="${href}" style="display:inline-block;background:${PURPLE};color:#fafafa;font-weight:700;font-size:15px;text-decoration:none;padding:14px 28px;border-radius:4px;">${label}</a>
</td></tr>`;

const footerNote = (content) => `<tr><td style="padding:24px 36px 40px;font-size:13px;color:${MUTED};line-height:1.6;">${content}</td></tr>`;

const contactNote = (prefix) =>
  footerNote(`${prefix} odgovorite na ovaj e-mail ili pišite na <a href="mailto:profa.matematika8@gmail.com" style="color:${PURPLE};">profa.matematika8@gmail.com</a>.`);

export function novaPrijava(d) {
  return layout({
    preview: `${d.studentName} - ${d.program}`,
    body: [
      heading('Nova prijava', 'Netko je ispunio obrazac za prijavu na web stranici.'),
      detailsTable([
        ['Učenik', d.studentName],
        ['Program', d.program],
        ['Škola', d.school],
        ['Grad', d.city],
        ['Telefon učenika', d.studentPhone],
        ['Roditelj', d.parentName],
        ['E-mail roditelja', d.parentEmail],
        ['Telefon roditelja', d.parentPhone],
      ]),
      section('PORUKA', text(d.message || '-')),
      footerNote('Odgovorom na ovaj e-mail pišete izravno roditelju.'),
    ].join('\n'),
  });
}

export function potvrdaPrijave(d) {
  return layout({
    preview: 'Vaša prijava je zaprimljena. Kontaktirat ćemo vas radi dogovora.',
    body: [
      heading(
        `Zaprimili smo vašu prijavu, ${escapeHtml(d.firstName)}`,
        `Hvala na povjerenju. Prijava učenika ${escapeHtml(d.studentName)} za program ${escapeHtml(d.program)} je uspješno zaprimljena.`
      ),
      section(
        'ŠTO SLIJEDI',
        '1. Kontaktirat ćemo vas e-mailom ili telefonom radi dogovora o terminu i programu.<br />2. Dogovaramo termin kratkog upoznavanja.<br />3. Dogovaramo raspored rada i krećemo s prvim satom.',
        { grey: true }
      ),
      button(`${SITE_URL}/`, 'Pogledaj programe'),
      contactNote('Ako se predomislite ili imate dodatno pitanje,'),
    ].join('\n'),
  });
}

export function novaRezervacija(d) {
  return layout({
    preview: `${d.name} - ${d.preferredTerm}`,
    body: [
      heading('Nova rezervacija termina', 'Upit za individualne instrukcije s web stranice.'),
      detailsTable([
        ['Ime i prezime', d.name],
        ['E-mail', d.email],
        ['Telefon', d.phone],
        ['Željeni termin', d.preferredTerm],
      ]),
      section('PORUKA', text(d.message || '-')),
      footerNote('Odgovorom na ovaj e-mail pišete izravno pošiljatelju upita.'),
    ].join('\n'),
  });
}

export function potvrdaRezervacije(d) {
  return layout({
    preview: 'Vaš upit je zaprimljen. Kontaktirat ćemo vas radi dogovora o terminu.',
    body: [
      heading(
        `Zaprimili smo vaš upit, ${escapeHtml(d.firstName)}`,
        'Hvala na interesu za individualne instrukcije. Kontaktirat ćemo vas radi dogovora o terminu, najkasnije u roku od 24 sata.'
      ),
      section('VAŠ ODABIR', `Željeni termin: ${escapeHtml(d.preferredTerm)}`, { grey: true }),
      button(`${SITE_URL}/instrukcije`, 'Detalji o instrukcijama'),
      contactNote('Ako imate dodatno pitanje,'),
    ].join('\n'),
  });
}
