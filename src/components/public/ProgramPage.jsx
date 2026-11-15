import { Link } from 'react-router-dom';
import { Check, ArrowRight, Calendar, Euro, Video, Users, HeartHandshake, Target, GraduationCap, BookOpen, Lightbulb, Clock, Heart, ShieldCheck, Calculator, Smile } from 'lucide-react';
import { programs } from '@/lib/demoData';
import ScheduleChart from '@/components/public/ScheduleChart';
import CurveDivider from '@/components/public/CurveDivider';
import CalculatorSection from '@/components/public/CalculatorSection';
import CurriculumSection from '@/components/public/CurriculumSection';
import RichText from '@/components/public/RichText';

const iconMap = {
  GraduationCap, BookOpen, Lightbulb, Clock, Heart, ShieldCheck, Calculator, Smile, Target
};

export default function ProgramPage({ programId }) {
  const p = programs.find((x) => x.id === programId);
  if (!p) return null;

  return (
    <div>
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <span className="text-xs font-medium bg-accent/15 text-accent-foreground border border-accent/20 rounded-full px-3 py-1">
            {p.level}
          </span>
          <h1 className="font-display text-4xl font-bold text-primary mt-4">{p.name}</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
            <RichText text={p.description} />
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/prijava" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-sm bg-primary text-primary-foreground">
              Prijavi se na {p.short} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/cesta-pitanja" className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 rounded-xl font-semibold hover:bg-muted transition">
              Česta pitanja
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        <CurveDivider variant="wave" />
        <section className="bg-gradient-to-br from-secondary/60 to-background border border-border rounded-2xl p-8 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
              <Target className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary">Kome je program namijenjen</h2>
              <p className="text-sm text-muted-foreground mt-0.5">Ove pripreme idealne su za tebe ako:</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {p.audienceItems.map((item) => {
              const Icon = iconMap[item.icon] || BookOpen;
              return (
                <div key={item.text} className="flex items-start gap-3 bg-background/70 border border-border rounded-xl p-4">
                  <span className="w-9 h-9 rounded-lg bg-accent/15 text-accent-foreground grid place-items-center shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </span>
                  <span className="text-sm text-foreground/90 leading-relaxed pt-1.5">{item.text}</span>
                </div>);

            })}
          </div>
        </section>

        <CurveDivider variant="bow" />

        <div className="grid lg:grid-cols-2 gap-6 reveal">
          <section className="bg-secondary/40 border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Users className="w-5 h-5" />
              </span>
              <h2 className="font-display text-xl font-bold text-primary">Što učenik dobiva</h2>
            </div>
            <ul className="space-y-3">
              {p.benefits.map((b) =>
              <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-success/15 text-success grid place-items-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{b}</span>
                </li>
              )}
            </ul>
          </section>

          <section className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </span>
              <h2 className="font-display text-xl font-bold text-primary">Što roditelj dobiva</h2>
            </div>
            <ul className="space-y-3">
              {[
              'Redovitu komunikaciju o napretku učenika',
              'Dogovor o ciljevima i tempu rada',
              'Direktnu komunikaciju s nastavnikom'].
              map((b) =>
              <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/20 text-accent-foreground grid place-items-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{b}</span>
                </li>
              )}
            </ul>
          </section>
        </div>

        <CurveDivider variant="ribbon" />

        <CalculatorSection data={p.calculator} />

        <CurveDivider variant="wave" />

        <section className="reveal">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Plan rada po cjelinama</h2>
          <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
            <ScheduleChart schedule={p.schedule} />
          </div>
        </section>

        <CurveDivider variant="bow" />

        {p.curriculum && programId !== 'a' && <CurriculumSection curriculum={p.curriculum} />}

        {programId !== 'a' && <CurveDivider variant="ribbon" />}

        <section className="reveal">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Način održavanja, termini i cijena</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-background border border-border rounded-2xl p-5 shadow-sm">
              <Video className="w-6 h-6 text-accent-foreground mb-3" />
              <p className="text-sm font-medium text-primary">Način održavanja</p>
              <p className="text-sm text-muted-foreground mt-1">Predavanja online uživo 90 min</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-5 shadow-sm">
              <Calendar className="w-6 h-6 text-accent-foreground mb-3" />
              <p className="text-sm font-medium text-primary">Trajanje</p>
              <p className="text-sm text-muted-foreground mt-1">{p.duration}</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-5 shadow-sm">
              <Euro className="w-6 h-6 text-accent-foreground mb-3" />
              <p className="text-sm font-medium text-primary">Cijena</p>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="line-through text-muted-foreground/70">40 €</span>{' '}
                <span className="font-semibold text-primary">30 €</span> /90 min
              </p>
            </div>
          </div>
        </section>

        <CurveDivider variant="wave" />

        <section className="reveal">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Česta pitanja</h2>
          <div className="space-y-3">
            {p.faq.map((f) =>
            <div key={f.q} className="bg-background border border-border rounded-xl p-4 shadow-sm">
                <p className="font-medium text-foreground text-sm">{f.q}</p>
                <p className="text-sm text-muted-foreground mt-1">{f.a}</p>
              </div>
            )}
          </div>
        </section>

        <CurveDivider variant="ribbon" />

        <section className="bg-primary rounded-3xl px-6 sm:px-10 py-10 text-center text-primary-foreground reveal">
          <h2 className="font-display text-2xl font-bold">Spreman/na za {p.short}?</h2>
          <p className="text-primary-foreground/70 mt-2">Pošalji prijavu i javimo se u roku 24 sata.</p>
          <Link to="/prijava" className="inline-flex items-center gap-2 mt-6 bg-secondary text-primary px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Prijavi se na {p.short} <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>);

}