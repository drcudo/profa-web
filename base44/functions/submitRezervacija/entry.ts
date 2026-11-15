import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import { sendOwnerNotifications, sendTemplate } from '../../shared/mail.ts';

const clean = (value, max = 500) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

// Upit za individualne instrukcije ("Rezervacija termina").
export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const data = {
      name: clean(body.name, 120),
      email: clean(body.email, 120),
      phone: clean(body.phone, 40),
      preferred_term: clean(body.preferredTerm, 80) || 'Fleksibilno',
      message: clean(body.message, 2000),
    };

    if (!data.name || !data.email) {
      return Response.json({ error: 'Ime i e-mail su obavezni.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return Response.json({ error: 'Neispravan e-mail.' }, { status: 400 });
    }

    const firstName = data.name.split(' ')[0];

    const [ownerResult, confirmationResult] = await Promise.allSettled([
      sendOwnerNotifications(base44, {
        templateName: 'NovaRezervacija',
        subject: `Nova rezervacija termina: ${data.name} - ${data.preferred_term}`,
        variables: {
          name: data.name,
          email: data.email,
          phone: data.phone || '-',
          preferred_term: data.preferred_term,
          message: data.message || '-',
        },
      }),
      sendTemplate(base44, {
        to: data.email,
        templateName: 'PotvrdaRezervacije',
        subject: 'Potvrda rezervacije termina - Profa',
        variables: {
          first_name: firstName,
          preferred_term: data.preferred_term,
        },
      }),
    ]);

    if (ownerResult.status === 'rejected') console.error('Obavijest o rezervaciji nije poslana:', ownerResult.reason?.message);
    if (confirmationResult.status === 'rejected') console.error('Potvrda rezervacije nije poslana:', confirmationResult.reason?.message);

    return Response.json({ ok: true, confirmation_sent: confirmationResult.status === 'fulfilled' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}