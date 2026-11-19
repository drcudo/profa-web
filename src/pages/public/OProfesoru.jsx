import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';
import CurveDivider from '@/components/public/CurveDivider';

export default function OProfesoru() {
  return (
    <div>
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h1 className="font-display text-4xl font-bold text-primary">O profesoru</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
            Iskustvo, sustavnost i podrška učeniku - temelji na kojima počiva rad.
          </p>
        </div>
      </section>

      <CurveDivider variant="wave" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-sm reveal">
            <img
              src="/images/profesor.webp"
              alt="Profesor matematike"
              className="w-full h-full object-cover" />
            
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <section className="reveal">
            <h2 className="font-display text-2xl font-bold text-primary mb-2">Bok ekipa!</h2>
            <p className="text-muted-foreground leading-relaxed">
              Matematika uopće nije bauk - samo ti treba netko tko će ti objasniti kako stvari stvarno funkcioniraju, bez komplikacija i suhoparnih teorija.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Bilo da te čeka državna matura (A ili B razina), nacionalni ispiti, obično popravljanje ocjena u osnovnoj ili srednjoj školi, ili ti pak opako gori pod nogama na fakultetu (kolokviji, pismeni, usmeni...) - skupa rješavamo sve.
            </p>
          </section>
          <section className="reveal">
            <h3 className="font-semibold text-primary mb-2">Iskustvo</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
              <li>15+ godina rada</li>
              <li>Pripreme za A i B razinu mature te nacionalni ispit</li>
              <li>Autor provjerenih materijala po cjelinama</li>
              <li className="hidden">Mentor mladim nastavnicima matematike</li>
            </ul>
          </section>
          <section className="reveal">
            <h3 className="font-semibold text-primary mb-2">Kako izgledaju satovi kod mene?</h3>
            <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <span className="font-medium text-foreground">Atmosfera je skroz opuštena:</span> nema stresa, nema straha od "glupih pitanja" niti pametovanja. Kod mene se pita sve dok stvar ne klikne.
              </li>
              <li>
                <span className="font-medium text-foreground">Rad i vježba su ključ:</span> neću ti lagati i reći da matematika ide sama od sebe dok spavaš. Kod mene se drila i vježba, ali kroz zadatke koji zapravo imaju smisla.
              </li>
              <li>
                <span className="font-medium text-foreground">Bez štrebanja napamet:</span> cilj je da skužiš logiku, a ne da nabubaš postupak koji zaboraviš čim izađeš iz učionice. Naučit ćeš se snalaziti s kalkulatorom u svakom zadatku. Kad uđeš u šemu, zadaci idu sami od sebe.
              </li>
              <li>
                <span className="font-medium text-foreground">Fokus na rezultat:</span> prolazimo sve tipične zadatke, zamke s matura i ispita, te trikove koji ti štede vrijeme i živce na samom testu. Naučit ćeš koristiti kalkulator u svim zadacima.
              </li>
            </ul>
          </section>
          <section className="reveal">
            <h3 className="font-semibold text-primary mb-2">Što pokrivamo?</h3>
            <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <span className="font-medium text-foreground">Državna matura (A i B razina):</span> sustavna priprema, prolazak kroz sve prethodne mature, razbijanje najtežih zadataka na proste faktore.
              </li>
              <li>
                <span className="font-medium text-foreground">Nacionalni ispiti (osnovna škola):</span> utvrđivanje gradiva i priprema za prve ozbiljne testove bez panike.
              </li>
              <li>
                <span className="font-medium text-foreground">Osnovna i srednja škola:</span> krpanje rupa u znanju, pripreme za kontrolne, usmena odgovaranja i podizanje ocjene.
              </li>
              <li>
                <span className="font-medium text-foreground">Fakulteti:</span> viša matematika, linearna algebra, analitička geometrija, analize i sve ono što ti trenutno zadaje glavobolju.
              </li>
            </ul>
          </section>
          <section className="reveal">
            <h3 className="font-semibold text-primary mb-2">Rezultati</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-background border border-border rounded-xl p-4 text-center shadow-sm">
                <div className="font-display text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">učenika</div>
              </div>
              <div className="bg-background border border-border rounded-xl p-4 text-center shadow-sm">
                <div className="font-display text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">prolaznost</div>
              </div>
              <div className="bg-background border border-border rounded-xl p-4 text-center shadow-sm">
                <div className="font-display text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">godina</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CurveDivider variant="bow" />

      <section className="bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center reveal">
          <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent-foreground grid place-items-center mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="font-display text-2xl font-bold text-primary">Idemo to riješiti!</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Ako ti je dosta gubljenja živaca oko brojeva i želiš konačno riješiti tu matematiku bez stresa i sa samopouzdanjem - javi se da složimo termin i krenemo raditi! 🚀
          </p>
          <Link to="/prijava" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition bg-primary text-primary-foreground">
            Prijavi se <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>);

}