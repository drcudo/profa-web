import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import { sendOwnerNotifications, sendTemplate } from '../../shared/mail.ts';

const clean = (value, max = 500) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const data = {
      parent_first_name: clean(body.parentFirstName, 80),
      parent_last_name: clean(body.parentLastName, 80),
      parent_email: clean(body.parentEmail, 120),
      parent_phone: clean(body.parentPhone, 40),
      student_first_name: clean(body.studentFirstName, 80),
      student_last_name: clean(body.studentLastName, 80),
      student_phone: clean(body.studentPhone, 40),
      student_school: clean(body.studentSchool, 160),
      student_city: clean(body.studentCity, 80),
      program: clean(body.program, 120),
      message: clean(body.message, 2000),
    };

    const required = ['parent_first_name', 'parent_last_name', 'parent_email', 'parent_phone', 'student_first_name', 'student_last_name', 'student_phone', 'student_school', 'student_city', 'program'];
    const missing = required.filter((field) => !data[field]);
    if (missing.length > 0) {
      return Response.json({ error: 'Nedostaju obavezna polja: ' + missing.join(', ') }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.parent_email)) {
      return Response.json({ error: 'Neispravan e-mail.' }, { status: 400 });
    }

    const record = await base44.asServiceRole.entities.Prijava.create(data);

    const studentName = `${data.student_first_name} ${data.student_last_name}`;
    const parentName = `${data.parent_first_name} ${data.parent_last_name}`;

    const [ownerResult, confirmationResult] = await Promise.allSettled([
      sendOwnerNotifications(base44, {
        templateName: 'NovaPrijava',
        subject: `Nova prijava: ${studentName} - ${data.program}`,
        variables: {
          student_name: studentName,
          program: data.program,
          school: data.student_school,
          city: data.student_city,
          student_phone: data.student_phone,
          parent_name: parentName,
          parent_email: data.parent_email,
          parent_phone: data.parent_phone,
          message: data.message || '-',
        },
      }),
      sendTemplate(base44, {
        to: data.parent_email,
        templateName: 'PotvrdaPrijave',
        subject: 'Potvrda prijave - Profa',
        variables: {
          first_name: data.parent_first_name,
          program: data.program,
        },
      }),
    ]);

    if (ownerResult.status === 'rejected') console.error('Obavijest o prijavi nije poslana:', ownerResult.reason?.message);
    if (confirmationResult.status === 'rejected') console.error('Potvrda prijave nije poslana:', confirmationResult.reason?.message);

    return Response.json({
      ok: true,
      id: record.id,
      confirmation_sent: confirmationResult.status === 'fulfilled',
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}