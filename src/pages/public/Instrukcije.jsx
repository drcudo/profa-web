import { useState } from 'react';
import { ArrowRight, Check, User, Mail, Phone, Loader2 } from 'lucide-react';
import { submitForm } from '@/lib/submitForm';
import CurveDivider from '@/components/public/CurveDivider';

export default function Instrukcije() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', preferredTerm: 'Fleksibilno', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (ev) => {
    ev.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError('Ime i e-mail su obavezni.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Neispravan e-mail.');
      return;
    }

    setSending(true);
    setError('');
    try {
      const res = await submitForm('/api/rezervacija', form);
      if (res.ok) setSent(true);
      else setError('Slanje nije uspjelo. Pokušajte ponovno.');
    } catch {
      setError('Slanje nije uspjelo. Provjerite vezu i pokušajte ponovno.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <span className="text-xs font-medium bg-accent/15 text-accent-foreground border border-accent/20 rounded-full px-3 py-1">
            Individualno
          </span>
          <h1 className="font-display text-4xl font-bold text-primary mt-4">Instrukcije 1 na 1</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
            Potpuno individualan pristup - prilagođeno tvom tempu, ciljevima i poteškoćama. Rezerviraj termin koji ti odgovara.
          </p>
        </div>
      </section>

      <CurveDivider variant="wave" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <section className="reveal">
            <h2 className="font-display text-2xl font-bold text-primary mb-3">Što dobivaš</h2>
            <ul className="space-y-3">
              {[
                'Sate potpuno prilagođene tvom tempu i poteškoćama',
                'Fokus na točno određene cjeline ili zadatke',
                'Materijale i bilješke sa svakog susreta',
                'Mogućnost dogovora termina preko tjedna',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-success/15 text-success grid place-items-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="reveal reveal-delay-1">
            <h2 className="font-display text-2xl font-bold text-primary mb-3">Način rada</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Susreti se održavaju online uživo, u trajanju 60 ili 90 minuta. Termin dogovaramo prema tvom rasporedu, a sve snimke ostaju dostupne za ponavljanje.
            </p>
          </section>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow-sm p-6 reveal reveal-delay-1">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-success/15 text-success grid place-items-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">Upit poslan!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Poslali smo potvrdu na {form.email}. Kontaktirat ćemo vas u roku 24 sata radi dogovora o terminu.
              </p>
              <button onClick={() => setSent(false)} className="mt-5 text-sm text-accent-foreground font-medium">Pošalji novi upit</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <h3 className="font-display text-xl font-bold text-primary">Rezervacija termina</h3>
              <Field icon={User} label="Ime i prezime" name="name" value={form.name} onChange={(v) => set('name', v)} required />
              <Field icon={Mail} label="E-mail" name="email" type="email" value={form.email} onChange={(v) => set('email', v)} required />
              <Field icon={Phone} label="Telefon" name="phone" type="tel" value={form.phone} onChange={(v) => set('phone', v)} />
              <div>
                <label htmlFor="rez-termin" className="text-sm font-medium text-foreground mb-1.5 block">Željeni termin</label>
                <select
                  id="rez-termin"
                  value={form.preferredTerm}
                  onChange={(e) => set('preferredTerm', e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option>Radnim danom popodne</option>
                  <option>Vikendom</option>
                  <option>Fleksibilno</option>
                </select>
              </div>
              <div>
                <label htmlFor="rez-poruka" className="text-sm font-medium text-foreground mb-1.5 block">Poruka</label>
                <textarea
                  id="rez-poruka"
                  rows={3}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Kojim cjelinama trebaš pristup?"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Šaljem...</> : <>Pošalji upit <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, name, type = 'text', value, onChange, required }) {
  const id = `rez-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground mb-1.5 block">
        {label}{required && <span className="text-accent-foreground">*</span>}
      </label>
      <div className="relative">
        <Icon className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
    </div>
  );
}