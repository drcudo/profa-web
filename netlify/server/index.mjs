// Netlify Server: prima obrasce s web stranice i šalje e-poštu preko Resenda.
//   POST /api/prijava      - obrazac "Prijava"
//   POST /api/rezervacija  - obrazac "Instrukcije 1 na 1"
// Obavijest o svakom obrascu ide na OWNER_EMAIL, a potvrda osobi koja je ispunila obrazac.
import { novaPrijava, novaRezervacija, potvrdaPrijave, potvrdaRezervacije } from './emails.mjs';

const DEFAULT_OWNER_EMAIL = 'profa.matematika8@gmail.com';
const DEFAULT_FROM = 'Profa <prijave@profa.com.hr>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max = 500) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const oneLine = (value) => value.replace(/\s+/g, ' ').trim();
const json = (body, status = 200) => Response.json(body, { status });

async function sendEmail({ to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY nije postavljen.');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || DEFAULT_FROM,
      to: [to],
      subject: oneLine(subject),
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
}

// Obavijest vlasniku mora uspjeti (podaci se nigdje drugdje ne spremaju); potvrda je dodatak.
async function deliver({ owner, confirmation }) {
  const ownerEmail = process.env.OWNER_EMAIL || DEFAULT_OWNER_EMAIL;
  const [ownerResult, confirmationResult] = await Promise.allSettled([
    sendEmail({ ...owner, to: ownerEmail }),
    sendEmail({ ...confirmation, replyTo: ownerEmail }),
  ]);

  if (confirmationResult.status === 'rejected') {
    console.error('Potvrda nije poslana:', confirmationResult.reason?.message);
  }
  if (ownerResult.status === 'rejected') {
    console.error('Obavijest vlasniku nije poslana:', ownerResult.reason?.message);
    return json({ error: 'Slanje nije uspjelo. Pokušajte ponovno ili nam pišite e-mailom.' }, 502);
  }
  return json({ ok: true, confirmation_sent: confirmationResult.status === 'fulfilled' });
}

async function handlePrijava(body) {
  const d = {
    parentFirstName: clean(body.parentFirstName, 80),
    parentLastName: clean(body.parentLastName, 80),
    parentEmail: clean(body.parentEmail, 120),
    parentPhone: clean(body.parentPhone, 40),
    studentFirstName: clean(body.studentFirstName, 80),
    studentLastName: clean(body.studentLastName, 80),
    studentPhone: clean(body.studentPhone, 40),
    school: clean(body.studentSchool, 160),
    city: clean(body.studentCity, 80),
    program: clean(body.program, 120),
    message: clean(body.message, 2000),
  };

  const required = ['parentFirstName', 'parentLastName', 'parentEmail', 'parentPhone', 'studentFirstName', 'studentLastName', 'studentPhone', 'school', 'city', 'program'];
  const missing = required.filter((field) => !d[field]);
  if (missing.length > 0) return json({ error: 'Nedostaju obavezna polja: ' + missing.join(', ') }, 400);
  if (!EMAIL_RE.test(d.parentEmail)) return json({ error: 'Neispravan e-mail.' }, 400);

  d.studentName = `${d.studentFirstName} ${d.studentLastName}`;
  d.parentName = `${d.parentFirstName} ${d.parentLastName}`;

  return deliver({
    owner: {
      subject: `Nova prijava: ${d.studentName} - ${d.program}`,
      html: novaPrijava(d),
      replyTo: d.parentEmail,
    },
    confirmation: {
      to: d.parentEmail,
      subject: 'Potvrda prijave - Profa',
      html: potvrdaPrijave({ firstName: d.parentFirstName, studentName: d.studentName, program: d.program }),
    },
  });
}

async function handleRezervacija(body) {
  const d = {
    name: clean(body.name, 120),
    email: clean(body.email, 120),
    phone: clean(body.phone, 40),
    preferredTerm: clean(body.preferredTerm, 80) || 'Fleksibilno',
    message: clean(body.message, 2000),
  };

  if (!d.name || !d.email) return json({ error: 'Ime i e-mail su obavezni.' }, 400);
  if (!EMAIL_RE.test(d.email)) return json({ error: 'Neispravan e-mail.' }, 400);

  return deliver({
    owner: {
      subject: `Nova rezervacija termina: ${d.name} - ${d.preferredTerm}`,
      html: novaRezervacija(d),
      replyTo: d.email,
    },
    confirmation: {
      to: d.email,
      subject: 'Potvrda rezervacije termina - Profa',
      html: potvrdaRezervacije({ firstName: d.name.split(' ')[0], preferredTerm: d.preferredTerm }),
    },
  });
}

const routes = {
  '/api/prijava': handlePrijava,
  '/api/rezervacija': handleRezervacija,
};

export default async function handler(request) {
  const { pathname } = new URL(request.url);
  const route = routes[pathname.replace(/\/$/, '')];

  if (!route) return json({ error: 'Not found' }, 404);
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const body = await request.json().catch(() => ({}));
    return await route(body && typeof body === 'object' ? body : {});
  } catch (error) {
    console.error('Greška pri obradi obrasca:', error);
    return json({ error: 'Greška na poslužitelju.' }, 500);
  }
}
