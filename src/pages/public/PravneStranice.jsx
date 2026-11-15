import { Link } from 'react-router-dom';
import CurveDivider from '@/components/public/CurveDivider';

export default function Privatnost() {
  return (
    <LegalPage title="Politika privatnosti">
      <Block title="Koji podatci se obrađuju">
        Profa obrađuje podatke roditelja (ime, e-mail, telefon), učenika (ime, razred, program) te podatke o napretku, zadaćama i rezultatima. Svi se podaci koriste isključivo za svrhu priprema.
      </Block>
      <Block title="Predaje zadaća i fotografije">
        Fotografije i PDF datoteke zadaća koriste se isključivo za pregled i povratnu informaciju. Datoteke su spremljene u privatnom spremištu i nisu javno dostupne.
      </Block>
      <Block title="Maloljetni učenik">
        Maloljetnog učenika prijavljuje roditelj ili skrbnik, koji potvrđuje e-mail i dogovara način komunikacije o napretku učenika.
      </Block>
      <Block title="Prava korisnika">
        Korisnik ima pravo na pristup, ispravak, brisanje i izvoz svojih podataka. Zahtjev se šalje na kontakt za privatnost.
      </Block>
      <Block title="Rokovi čuvanja podataka">
        Podatci se čuvaju tijekom trajanja programa, nakon čega se brišu.
      </Block>
      <Block title="Kontakt za privatnost">
        Za sva pitanja o privatnosti: profa.matematika8@gmail.com.
      </Block>
    </LegalPage>
  );
}

export function UvjetiKoristenja() {
  return (
    <LegalPage title="Uvjeti korištenja">
      <Block title="Korištenje usluga">
        Korištenjem usluga Profe prihvaćate ove uvjete u cijelosti. Usluge su namijenjene učenicima, roditeljima i nastavnicima u svrhu pripremne nastave i podučavanja iz matematike. Ako se ne slažete s bilo kojim dijelom ovih uvjeta, molimo vas da ne koristite naše usluge.
      </Block>
      <Block title="Odgovornost i povjerljivost">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><span className="font-medium text-foreground">Odgovornost za maloljetnike:</span> Prijavu i dogovor o programu za maloljetnog učenika provodi roditelj ili zakonski skrbnik.</li>
          <li><span className="font-medium text-foreground">Povjerljivost podataka:</span> Podaci o učeniku i roditelju koriste se isključivo u svrhu priprema i ne dijele se s trećim osobama bez privole.</li>
          <li><span className="font-medium text-foreground">Komunikacija:</span> Dogovori o terminima, zadaćama i napretku vode se izravno s nastavnikom putem dogovorenog kanala komunikacije.</li>
        </ul>
      </Block>
      <Block title="Sadržaj i materijali">
        Svi materijali, videolekcije, zadatci, testovi i tekstovi koje izrađuje Profa autorsko su vlasništvo Profe.
        <ul className="list-disc pl-4 space-y-1.5 mt-2">
          <li>Materijali su namijenjeni isključivo za osobnu upotrebu učenika polaznika priprema.</li>
          <li>Zabranjeno je svako umnožavanje, distribucija, javno prikazivanje ili dijeljenje materijala trećim osobama bez prethodnog pisanog odobrenja.</li>
        </ul>
      </Block>
      <Block title="Upisi i plaćanja">
        Pristup plaćenim programima ostvaruje se nakon vidljive uplate sukladno cjeniku istaknutom na stranici pojedinog programa. Cijene i uvjeti plaćanja mogu se povremeno ažurirati; važeći cjenik dostupan je na stranicama programa.
      </Block>
      <Block title="Otkazivanje i povrat">
        Korisnik ima pravo na otkazivanje usluge u skladu sa Zakonom o zaštiti potrošača, unutar definiranog roka prije početka održavanja programa. Detalji o roku i postupku povrata navedeni su uz pojedini program.
      </Block>
      <Block title="Ograničenje odgovornosti">
        Profa nastoji pružiti najvišu kvalitetu edukativnog sadržaja, ali ne jamči određeni uspjeh ili ocjenu na ispitima i državnoj maturi, budući da konačni rezultat ovisi o individualnom trudu i zalaganju učenika.
      </Block>
      <Block title="Prikupljanje i zaštita podataka">
        Obradu osobnih podataka uređuje <Link to="/privatnost" className="text-primary font-medium underline underline-offset-2 hover:opacity-80">Politika privatnosti</Link>. Molimo vas da je pregledate radi informiranja o vrstama podataka koje prikupljamo i vašim pravima.
      </Block>
      <Block title="Promjene uvjeta i kontakt">
        Zadržavamo pravo izmjene ovih Uvjeta korištenja u bilo kojem trenutku. O značajnim promjenama korisnici će biti obaviješteni putem e-maila. Za sva pitanja u vezi s uvjetima korištenja možete nas kontaktirati putem naše kontakt stranice.
      </Block>
    </LegalPage>
  );
}

export function Kolacici() {
  return (
    <LegalPage title="Politika kolačića">
      <Block title="Što su kolačići">
        Kolačići su male tekstualne datoteke koje se prilikom posjete web stranici spremaju u vaš preglednik. Služe za ispravan rad stranice i, uz vaš pristanak, za analitiku posjećenosti.
      </Block>
      <Block title="Vrste kolačića">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><span className="font-medium text-foreground">Nužni kolačići:</span> potrebni su za ispravan rad stranice i ne mogu se isključiti.</li>
          <li><span className="font-medium text-foreground">Analitički kolačići:</span> postavljaju se samo uz vaš pristanak i služe za razumijevanje načina korištenja stranice.</li>
        </ul>
      </Block>
      <Block title="Upravljanje kolačićima">
        Kolačiće možete u svakom trenutku obrisati ili blokirati u postavkama svog preglednika. Onemogućavanje nužnih kolačića može utjecati na rad pojedinih dijelova stranice.
      </Block>
    </LegalPage>
  );
}

function LegalPage({ title, children }) {
  return (
    <div>
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <h1 className="font-display text-3xl font-bold text-primary">{title}</h1>
        </div>
      </section>
      <CurveDivider variant="bow" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">{children}</div>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <section className="bg-background border border-border rounded-2xl p-6 shadow-sm reveal">
      <h2 className="font-semibold text-primary mb-2">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}