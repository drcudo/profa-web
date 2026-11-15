import { Link } from 'react-router-dom';
import { ArrowRight, Star, Monitor, BookOpen, Pi } from 'lucide-react';
import { programs, stats } from '@/lib/demoData';
import IskustvaPolaznika from '@/components/public/IskustvaPolaznika';
import KakoRadimo from '@/components/public/KakoRadimo';
import CurveDivider from '@/components/public/CurveDivider';
import HeroCurvesBackground from '@/components/public/HeroCurvesBackground';
import RichText from '@/components/public/RichText';
import { revealClass } from '@/lib/reveal';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <HeroCurvesBackground />

        <div className="relative">
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Državna matura A/B razina · Nacionalni ispit · Poduke 1 na 1
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold text-primary leading-[1.04] tracking-tight">
              Online pripreme iz matematike za državnu maturu A/B razine
            </h1>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-12">
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Pripreme koje vode do sigurnog rezultata - individualan pristup, provjereni materijali i jasni koraci za
                maturu A i B razine.
              </p>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link to="/prijava" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-sm bg-primary text-primary-foreground">
                  Prijavi se <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/matura-a-razina" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border border-primary/30 text-primary hover:bg-primary/5 transition">
                  Pogledaj programe
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Programi */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 bg-[hsl(var(--primary))] rounded-[20px]">
        <div className="text-center mb-10 reveal">
          <h2 className="font-display text-3xl font-bold text-left text-[hsl(var(--background))]">Odaberi program</h2>
          <p className="text-left text-[hsl(var(--primary-foreground))]">Pronađi pripremu prilagođenu svom cilju.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) =>
          <Link
            key={p.id}
            to={`/${p.slug}`}
            className={revealClass(i, 'group bg-background rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition p-6 flex flex-col')}>
              <span className="text-xs font-medium text-accent-foreground bg-accent/15 border border-accent/20 rounded-full px-3 py-1 self-start mb-4">
                {p.level}
              </span>
              <h3 className="font-display text-xl font-bold text-primary">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">
                <RichText text={p.description} />
              </p>
              <span className="mt-5 text-sm text-accent-foreground group-hover:translate-x-1 transition flex items-center gap-1">
                Saznaj više <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          )}
          <Link
            to="/instrukcije"
            className={revealClass(0, 'group bg-background rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition p-6 flex flex-col')}>
            <span className="text-xs font-medium text-accent-foreground bg-accent/15 border border-accent/20 rounded-full px-3 py-1 self-start mb-4">
              Individualno
            </span>
            <h3 className="font-display text-xl font-bold text-primary">Individualne instrukcije 1 na 1</h3>
            <p className="text-sm text-muted-foreground mt-2 flex-1">
              Prilagođene instrukcije za učenike osnovne i srednje škole te studente - vlastitim tempom, uz potpunu podršku.
            </p>
            <span className="mt-5 text-sm text-accent-foreground group-hover:translate-x-1 transition flex items-center gap-1">
              Saznaj više <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      <CurveDivider variant="bow" />

      {/* Statistike */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-[hsl(var(--background))] reveal">
          {stats.map((s) =>
          <div key={s.label}>
              <div className="font-display text-4xl font-bold text-[hsl(var(--primary))]">{s.value}</div>
              <div className="text-sm mt-1 text-[hsl(var(--foreground))]">{s.label}</div>
            </div>
          )}
        </div>
      </section>

      {/* Prednosti */}
      <section className="bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12 reveal">Zašto Profa?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            { icon: Monitor, t: 'Online rad', d: 'Nastava se održava u online okruženju, uživo preko video poziva, uz grafički tablet i dinamičke programe poput GeoGebre i emulatora kalkulatora. Tempo rada prilagođen je učeniku.' },
            { icon: BookOpen, t: 'Provjereni materijali', d: 'Skripta, udžbenik ili priručnik za A/B razinu odnosno nacionalni ispit, domaće zadaće s provjerom znanja na kraju svake cjeline, vježba na zadatcima s prošlih matura i simulacije ispita mature.' },
            { icon: Star, t: 'Odlične recenzije', d: 'Visoka prolaznost učenika i više od 15 godina iskustva profesora u pripremama za maturu, uz odlične recenzije učenika i roditelja - motivacija koja pokreće i profesora i same učenike.' }].
            map((f, i) =>
            <div key={f.t} className={revealClass(i, 'bg-background rounded-2xl border border-border p-6 shadow-sm')}>
                <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent-foreground grid place-items-center mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-primary">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CurveDivider variant="wave" />

      <KakoRadimo />

      <CurveDivider variant="bow" />

      <IskustvaPolaznika />

      <CurveDivider variant="ribbon" />

      {/* Završni CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-primary rounded-3xl px-6 sm:px-12 py-12 text-center text-primary-foreground relative overflow-hidden reveal">
          <Pi className="absolute -right-4 -bottom-4 w-48 h-48 text-primary-foreground/5" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold relative">Spreman/na za bolji rezultat iz matematike?</h2>
          <p className="text-primary-foreground/70 mt-3 relative">Prijavi se danas i krenimo zajedno prema sigurnom rezultatu.</p>
          <Link to="/prijava" className="inline-flex items-center gap-2 mt-7 bg-secondary text-primary px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition relative">
            Prijavi se <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>);
}