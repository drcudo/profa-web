// Šalje podatke obrasca na Netlify server (netlify/server/index.mjs), koji šalje e-poštu preko Resenda.
export async function submitForm(path, data) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok && body.ok === true, error: body.error };
}
