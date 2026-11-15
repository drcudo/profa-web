// Zajedničko slanje e-pošte za obrasce (prijava i rezervacija termina).

// Adrese na koje stiže obavijest o svakoj novoj prijavi ili rezervaciji.
export const OWNER_EMAILS = ['profa.matematika8@gmail.com', 'jasmin.matijevic@gmail.com'];

// Vrijednosti iz obrazaca ulaze u HTML predloška, zato se čiste od oznaka.
const cleanValue = (value) =>
  typeof value === 'string'
    ? value.replace(/[<>&]/g, '').replace(/\s+/g, ' ').trim().slice(0, 2000)
    : '';

const sanitizeVars = (variables = {}) =>
  Object.fromEntries(
    Object.entries(variables).map(([key, value]) => [key, cleanValue(String(value ?? ''))])
  );

export async function sendTemplate(base44, { to, templateName, subject, fromName = 'Profa', variables }) {
  const result = await base44.asServiceRole.integrations.Core.SendEmail({
    to,
    template_name: templateName,
    subject,
    from_name: fromName,
    variables: sanitizeVars(variables),
    category: 'transactional',
  });

  if (result && result.success === false) {
    console.error(`E-mail nije poslan na ${to}:`, result.reason);
  }

  return result;
}

export async function sendOwnerNotifications(base44, payload) {
  const results = await Promise.allSettled(
    OWNER_EMAILS.map((to) => sendTemplate(base44, { ...payload, to }))
  );

  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error(`Obavijest nije poslana na ${OWNER_EMAILS[index]}:`, result.reason?.message);
    }
  });

  return results.some((result) => result.status === 'fulfilled');
}