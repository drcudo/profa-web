import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    text: 'Pripreme s profesorom Matijevićem za malu maturu vrlo su kvalitetne i dobro organizirane. Gradivo se temeljito i jasno objašnjava, uz mnogo primjera i zadataka koji su odlična priprema za nacionalne ispite. Profesor je strpljiv, jasan i uvijek spreman dodatno objasniti gradivo koje mi nije potpuno jasno. Atmosfera na satovima je ugodna i motivirajuća, bez stresa, ali uz mnogo dobru radnu disciplinu i puno smijeha. Do sada sam odslušala već nekoliko predavanja i preporučujem ih svima koji žele dodatno utvrditi gradivo iz matematike za osnovnu školu.',
    author: 'Karla',
    meta: 'Nacionalni ispit',
  },
  {
    text: 'Objašnjenja su kratka, konkretna i odmah primjenjiva na zadatke. Tempo je odličan, a predavanja zanimljiva. Napredovala sam više nego što sam očekivala. Preporučujem svima kojima fali temelj!',
    author: 'Nika',
    meta: 'B razina',
  },
  {
    text: 'Profesor matematike izuzetno je stručan i profesionalan u svom radu. Unatoč lošem predznanju matematike, uz njegovu pomoć uspjela sam savladati cjelokupno gradivo i pridobiti sigurnost u sebe. Objašnjava jasno, strpljivo i prilagođava se razini znanja studenta. Uvijek je dostupan za pitanja, susretljiv i izuzetno ljubazan. Ima puno razumijevanja i strpljenja, na satima je ugodna atmosfera jer znam da mogu pitati bilo koje pitanje bez da se osjećam osuđeno pa da radi toga gubim motivaciju. Zahvaljujući njegovim instrukcijama stekla sam sigurnost u svoje znanje i ostvarila odličan napredak.',
    author: 'Ema P.',
    meta: 'Matematika u ekonomiji',
  },
  {
    text: 'Profesor je stručan u pojašnjavanju gradiva. Izuzetno dobro uočava učenikove poteškoće u rješavanju zadataka i s lakoćom ih zajedno prolaze. Profesor ima obilje strpljenja i metoda da sat bude zanimljiv, opušten i zabavan unatoč pubertetskim otporima učenika. Pristupa učeniku s punim poštovanjem i uvažavanjem njegovih interesa i zahtjeva. Prilagođava rad potrebama učenika, prati razvoj sposobnosti te kontinuirano potiče na viši stupanj razmišljanja. Kod učenika pobuđuje zainteresiranost i ustrajnost u matematičkim izazovima.',
    author: 'Ina Plejić Morarević',
    meta: 'Instrukcije 1 na 1 - majka učenika',
  },
  {
    text: 'Već godinama radimo s profesorom i ne možemo biti zadovoljniji. Filip i Luka su uz njegove instrukcije razvili sigurnost u gradivo, podigli ocjene i zavoljeli predmet. Osjeti se da voli rad s učenicima - pristupačan je, podržava ih i uvijek dodatno objasni kad treba. Preporuka od srca!',
    author: 'Roditelji Filipa i Luke',
    meta: 'Individualne instrukcije',
  },
  {
    text: 'Profesore, hvala do neba! ❤️ I ja sam ponosna na oboje. Dobro ste Vi u tako kratkom roku uspjeli srediti. Hvala još jednom! ❤️',
    author: 'Biljana, roditelj',
    meta: 'A razina',
  },
  {
    text: 'Hvala Vam puno na svemu! Vi ste mu bili veliki motivator.',
    author: 'Helen',
    meta: 'B razina',
  },
];

export default function IskustvaPolaznika() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10 reveal">
        <h2 className="font-display text-3xl font-bold text-primary">Iskustva polaznika</h2>
        <p className="text-muted-foreground mt-2">Što kažu polaznici i njihovi roditelji nakon priprema.</p>
      </div>

      <Carousel opts={{ align: 'start', loop: true }} className="w-full reveal">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.author} className="sm:basis-1/2 lg:basis-1/3">
              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-0.5 text-warning mb-3" aria-label="Ocjena 5 od 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 flex-1 leading-relaxed">{t.text}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-primary text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.meta}</p>
                  </div>
                  <Quote className="w-5 h-5 text-accent/40 shrink-0" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-background/90 shadow-sm" />
        <CarouselNext className="right-2 bg-background/90 shadow-sm" />
      </Carousel>

      <p className="text-xs text-muted-foreground mt-6 text-center">Iskustva su prikazana uz dopuštenje polaznika i roditelja.</p>
    </section>
  );
}