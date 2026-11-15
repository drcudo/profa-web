import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Loader2, User, GraduationCap } from 'lucide-react';
import { programs } from '@/lib/demoData';
import { base44 } from '@/api/base44Client';
import CurveDivider from '@/components/public/CurveDivider';

export default function Prijava() {
  const [form, setForm] = useState({
    parentFirstName: '', parentLastName: '', parentEmail: '', parentPhone: '',
    studentFirstName: '', studentLastName: '', studentPhone: '', studentSchool: '', studentCity: '',
    program: '', message: '', consent: false
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.parentFirstName.trim()) e.parentFirstName = 'Unesite ime roditelja.';
    if (!form.parentLastName.trim()) e.parentLastName = 'Unesite prezime roditelja.';
    if (!form.parentEmail.trim()) e.parentEmail = 'Unesite e-mail.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.parentEmail)) e.parentEmail = 'Neispravan e-mail.';
    if (!form.parentPhone.trim()) e.parentPhone = 'Unesite telefon roditelja.';
    if (!form.studentFirstName.trim()) e.studentFirstName = 'Unesite ime učenika.';
    if (!form.studentLastName.trim()) e.studentLastName = 'Unesite prezime učenika.';
    if (!form.studentPhone.trim()) e.studentPhone = 'Unesite telefon učenika.';
    if (!form.studentSchool.trim()) e.studentSchool = 'Unesite naziv škole.';
    if (!form.studentCity.trim()) e.studentCity = 'Unesite grad.';
    if (!form.program) e.program = 'Odaberite program.';
    if (!form.consent) e.consent = 'Morate potvrditi politiku privatnosti i uvjete korištenja.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSending(true);
    setSubmitError('');
    try {
      const res = await base44.functions.invoke('submitPrijava', form);
      if (res.data?.ok) setSent(true);else
      setSubmitError('Slanje nije uspjelo. Pokušajte ponovno.');
    } catch {
      setSubmitError('Slanje nije uspjelo. Provjerite vezu i pokušajte ponovno.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-success/15 text-success grid place-items-center mx-auto mb-5">
          <Check className="w-8 h-8" />
        </div>
        <h1 className="font-display text-3xl font-bold text-primary">Prijava uspješno poslana!</h1>
        <p className="text-muted-foreground mt-3">
          Poslali smo potvrdu na {form.parentEmail}. Kontaktirat ćemo vas u roku od 24 sata radi dogovora o terminu i programu.
        </p>
        <div data-connect className="mt-8 bg-background border border-border rounded-2xl p-6 text-left shadow-sm">
          <h2 className="font-semibold text-primary mb-3">Sljedeći koraci</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-secondary text-primary grid place-items-center text-xs font-bold shrink-0">1</span> Potvrđujemo primitak prijave e-mailom.</li>
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-secondary text-primary grid place-items-center text-xs font-bold shrink-0">2</span> Dogovaramo termin kratkog upoznavanja.</li>
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-secondary text-primary grid place-items-center text-xs font-bold shrink-0">3</span> Dogovaramo raspored rada i krećemo s prvim satom.</li>
          </ol>
        </div>
        <Link to="/" className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:underline">
          Natrag na početnu <ArrowRight className="w-4 h-4" />
        </Link>
      </div>);

  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-3xl font-bold text-primary">Kontakt i prijava</h1>
      <p className="text-muted-foreground mt-2">Ispunite formu.</p>

      


      

      <CurveDivider variant="ribbon" className="my-8" />

      <form onSubmit={submit} data-connect className="bg-background border border-border rounded-2xl shadow-sm p-6 space-y-6" noValidate>
        {/* Podaci o roditelju */}
        <Section icon={User} title="Podaci o roditelju" />
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Ime" value={form.parentFirstName} onChange={(v) => set('parentFirstName', v)} error={errors.parentFirstName} required />
          <Input label="Prezime" value={form.parentLastName} onChange={(v) => set('parentLastName', v)} error={errors.parentLastName} required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="E-mail" type="email" value={form.parentEmail} onChange={(v) => set('parentEmail', v)} error={errors.parentEmail} required />
          <Input label="Telefon" type="tel" value={form.parentPhone} onChange={(v) => set('parentPhone', v)} error={errors.parentPhone} required />
        </div>

        {/* Podaci o učeniku */}
        <Section icon={GraduationCap} title="Podaci o učeniku" />
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Ime" value={form.studentFirstName} onChange={(v) => set('studentFirstName', v)} error={errors.studentFirstName} required />
          <Input label="Prezime" value={form.studentLastName} onChange={(v) => set('studentLastName', v)} error={errors.studentLastName} required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Telefon" type="tel" value={form.studentPhone} onChange={(v) => set('studentPhone', v)} error={errors.studentPhone} required />
          <Input label="Grad" value={form.studentCity} onChange={(v) => set('studentCity', v)} error={errors.studentCity} required />
        </div>
        <Input label="Naziv škole iz koje učenik dolazi" value={form.studentSchool} onChange={(v) => set('studentSchool', v)} error={errors.studentSchool} required />
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Željeni program<span className="text-accent-foreground">*</span></label>
          <select value={form.program} onChange={(e) => set('program', e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option value="">Odaberite program</option>
            {programs.map((p) => <option key={p.id}>{p.name}</option>)}
            <option>Individualne instrukcije 1 na 1</option>
          </select>
          {errors.program && <p className="text-xs text-destructive mt-1">{errors.program}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Poruka</label>
          <textarea rows={4} value={form.message} onChange={(e) => set('message', e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Recite nam nešto o ciljevima i trenutnom znanju učenika." />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-1 w-4 h-4 rounded border-input accent-[hsl(var(--primary))]" />
          <span className="text-sm text-foreground/80">
            Pročitao/la sam <Link to="/privatnost" className="text-primary underline">politiku privatnosti</Link> i <Link to="/uvjeti-koristenja" className="text-primary underline">uvjete korištenja</Link>.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-destructive -mt-2">{errors.consent}</p>}
        {submitError && <p className="text-sm text-destructive text-center">{submitError}</p>}
        <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-60">
          {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Šaljem...</> : <>Pošalji prijavu <ArrowRight className="w-4 h-4" /></>}
        </button>
        <p className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
          <ShieldCheck className="w-4 h-4" /> Vaši podaci su zaštićeni i koriste se samo za svrhu priprema.
        </p>
      </form>
    </div>);

}

function Section({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2.5 pb-1 border-b border-border">
      <div className="w-8 h-8 rounded-lg bg-secondary text-primary grid place-items-center">
        <Icon className="w-4 h-4" />
      </div>
      <h2 className="font-display text-lg font-bold text-primary">{title}</h2>
    </div>);

}

function Input({ label, value, onChange, error, type = 'text', required }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">
        {label}{required && <span className="text-accent-foreground">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 ${error ? 'border-destructive' : 'border-input'}`} />
      
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>);

}