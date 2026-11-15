// Realistični demo podaci za prototip "Profa". Nisu stvarni osobni podaci.

export const programs = [
  {
    id: "a",
    slug: "matura-a-razina",
    name: "Matura - A razina",
    short: "A razina",
    level: "Viši stupanj",
    audience: "Učenici 3. i 4. razreda srednje škole koji žele upisati studij s većim zahtjevima iz matematike.",
    description: "Dubinska priprema za državnu maturu A razine - od algebre i funkcija do geometrije, s naglaskom na složene zadatke i sigurnost u rješavanju. Trikovi kako rješavati zadatke **kalkulatorom**.",
    price: "120 € / mjesec",
    duration: "9 mjeseci (rujan – lipanj)",
    format: "2× tjedno po 90 min, online uživo + snimke",
    benefits: [
      "Individualan pristup i mali raspored",
      "Provjereni materijali po cjelinama",
      "Tjedne zadaće s detaljnom povratnom informacijom",
      "Redovita komunikacija s roditeljima",
      "Priprema za složene zadatke",
    ],
    schedule: [
      { unit: "Brojevi", lessons: 2, weeks: 3 },
      { unit: "Algebra i funkcije", lessons: 14, weeks: 18 },
      { unit: "Oblik i prostor", lessons: 4, weeks: 5 },
      { unit: "Mjerenje", lessons: 3, weeks: 5 },
      { unit: "Podaci, statistika i vjerojatnost", lessons: 1, weeks: 1 },
      { unit: "Ponavljanje", lessons: 0, weeks: 4 },
    ],
    curriculum: [
      { cjelina: "O strukturi ispita", page: 6, lessons: [] },
      { cjelina: "1. cjelina: Brojevi", lessons: [
        { lekcija: "Lekcija 1: Skupovi brojeva", zadaci: 9, rjesenja: 14 },
        { lekcija: "Lekcija 2: Potencije i korijeni", zadaci: 18, rjesenja: 20 },
      ]},
      { cjelina: "2. cjelina: Algebra i funkcije", lessons: [
        { lekcija: "Lekcija 3: Algebarski izrazi", zadaci: 25, rjesenja: 28 },
        { lekcija: "Lekcija 4: Postoci, omjeri i proporcije", zadaci: 31, rjesenja: 34 },
        { lekcija: "Lekcija 5: Linearne jednadžbe i nejednadžbe", zadaci: 38, rjesenja: 42 },
        { lekcija: "Lekcija 6: Kvadratne jednadžbe i kvadratne nejednadžbe", zadaci: 47, rjesenja: 50 },
        { lekcija: "Lekcija 7: Sustavi jednadžbi s dvije nepoznanice", zadaci: 54, rjesenja: 56 },
        { lekcija: "Lekcija 8: Eksponencijalne i logaritamske jednadžbe", zadaci: 60, rjesenja: 62 },
        { lekcija: "Lekcija 9: Trigonometrijske jednadžbe", zadaci: 65, rjesenja: 69 },
        { lekcija: "Lekcija 10: Funkcije", zadaci: 78, rjesenja: 82 },
        { lekcija: "Lekcija 11: Linearna funkcija", zadaci: 87, rjesenja: 92 },
        { lekcija: "Lekcija 12: Kvadratna funkcija", zadaci: 95, rjesenja: 98 },
        { lekcija: "Lekcija 13: Eksponencijalna i logaritamska funkcija", zadaci: 100, rjesenja: 103 },
        { lekcija: "Lekcija 14: Trigonometrijske funkcije", zadaci: 110, rjesenja: 114 },
        { lekcija: "Lekcija 15: Nizovi", zadaci: 118, rjesenja: 122 },
        { lekcija: "Lekcija 16: Derivacije", zadaci: 129, rjesenja: 134 },
      ]},
      { cjelina: "3. cjelina: Oblik i prostor", lessons: [
        { lekcija: "Lekcija 17: Geometrijski likovi u ravnini", zadaci: 145, rjesenja: 152 },
        { lekcija: "Lekcija 18: Jednadžba pravca", zadaci: 157, rjesenja: 160 },
        { lekcija: "Lekcija 19: Vektori", zadaci: 165, rjesenja: 169 },
        { lekcija: "Lekcija 20: Kružnica i krug", zadaci: 171, rjesenja: 173 },
      ]},
      { cjelina: "4. cjelina: Mjerenje", lessons: [
        { lekcija: "Lekcija 21: Trigonometrija", zadaci: 178, rjesenja: 181 },
        { lekcija: "Lekcija 22: Geometrijska tijela", zadaci: 191, rjesenja: 196 },
        { lekcija: "Lekcija 23: Mjerne jedinice", zadaci: 200, rjesenja: 202 },
      ]},
      { cjelina: "5. cjelina: Podaci, statistika i vjerojatnost", lessons: [
        { lekcija: "Lekcija 24: Podaci, statistika i vjerojatnost", zadaci: 207, rjesenja: 211 },
      ]},
      { cjelina: "Formule", page: 212, lessons: [] },
    ],
    audienceItems: [
      { icon: "GraduationCap", text: "Ciljaš na STEM, tehničke, prirodoslovne ili biomedicinske fakultete." },
      { icon: "BookOpen", text: "Želiš sustavno proći cjelokupno gradivo svih četiriju godina srednje škole." },
      { icon: "Lightbulb", text: "Imaš rupu u znanju iz ranijih razreda i treba ti jasan pregled gradiva." },
      { icon: "Clock", text: "Nisi imao/la matematiku zadnje dvije/tri godine." },
    ],
    calculator: {
      title: "Kalkulator kao saveznik",
      intro: "Na A razini mnogi zadaci traže analitičko razmišljanje - kalkulator ti ne rješava problem, ali štedi vrijeme na računanju i omogućuje brzu provjeru rezultata.",
      model: "Casio fx-991-CW",
      facts: [
        "Kompleksni brojevi",
        "Primjena derivacija",
        "Crtanje funkcija",
        "Limesi",
        "Trigonometrijske jednadžbe",
        "Službeno odobren za državnu maturu",
      ],
      tip: "Službeno odobren za državnu maturu, pokriva sve cjeline A razine.",
    },
    faq: [
      { q: "Je li program prikladan ako učenik nema predznanje?", a: "Da. Prilagođavam tempo i krećem od postojećeg znanja." },
      { q: "Mogu li se uključiti kasnije u godini?", a: "U pravilu da - dogovaram individualni plan nadoknade." },
      { q: "Dobiva li učenik materijale?", a: "Da, svi materijali dostupni su u digitalnom obliku i preuzimaju se u PDF-u." },
    ],
  },
  {
    id: "b",
    slug: "matura-b-razina",
    name: "Matura - B razina",
    short: "B razina",
    level: "Srednji stupanj",
    audience: "Učenici kojima je matematika obvezan predmet za maturu, ali žele siguran prolaz bez pritiska i stresa.",
    description: "Bez straha i bez stresa - postupno gradimo temelje i sigurno prolazimo B razinu mature. Rješavanje zadataka **kalkulatorom**, a fokus je na razumijevanju osnova.",
    price: "120 € / mjesec",
    duration: "8 mjeseci (listopad – lipanj)",
    format: "1× tjedno po 90 min, online uživo + snimke",
    benefits: [
      "Oslobađanje od straha prema matematici",
      "Postupno građenje čvrstih temelja",
      "Siguran prolazak bez nepotrebnog stresa",
      "Većina zadataka rješava se kalkulatorom",
      "Tjedne zadaće s povratnom informacijom",
      "Redovita komunikacija s roditeljima",
    ],
    schedule: [
      { unit: "Brojevi", lessons: 2, weeks: 2 },
      { unit: "Algebra i funkcije", lessons: 10, weeks: 10 },
      { unit: "Oblik i prostor", lessons: 3, weeks: 4 },
      { unit: "Mjerenje", lessons: 3, weeks: 4 },
      { unit: "Podaci, statistika i vjerojatnost", lessons: 1, weeks: 1 },
      { unit: "Ponavljanje", lessons: 0, weeks: 4 },
    ],
    audienceItems: [
      { icon: "Heart", text: "Osjećaš strah ili otpor prema matematici i želiš ga prevladati." },
      { icon: "BookOpen", text: "Trebate izgraditi čvrste temelje iz ranijih razreda." },
      { icon: "ShieldCheck", text: "Ciljaš na siguran prolaz mature bez nepotrebnog stresa." },
      { icon: "Calculator", text: "Želiš naučiti kako kalkulatorom riješiti većinu zadataka." },
    ],
    calculator: {
      title: "Kalkulator kao glavni alat",
      intro: "Na B razini većina zadataka rješava se kalkulatorom. Učimo ga koristiti pametno - od osnovnih računa do jednadžbi i funkcija - da ti matematika postane predvidljiva i bez stresa.",
      model: "Casio fx-991-CW",
      facts: [
        "Rješava linearne i kvadratne jednadžbe korak po korak",
        "Računa s razlomcima, postocima i omjerima bez greške",
        "Tablično crtanje funkcija za brzu provjeru grafa",
        "540 ugrađenih funkcija, službeno odobren za državnu maturu",
      ],
      tip: "Službeno odobren za državnu maturu, jednostavan za korištenje.",
    },
    faq: [
      { q: "Bojim se matematike - je li program za mene?", a: "Apsolutno. Krenimo polako, od osnova, bez pritiska. Cilj je da matematika prestane biti strah." },
      { q: "Treba li mi puno predznanja?", a: "Ne. Gradimo temelje iz početka i idemo korak po korak." },
      { q: "Znam li koristiti kalkulator?", a: "Ne moraš - učimo te kako kalkulatorom riješiti većinu zadataka na ispitu." },
      { q: "Dobiva li učenik materijale?", a: "Da, svi materijali dostupni su u digitalnom obliku i preuzimaju se u PDF-u." },
    ],
  },
  {
    id: "n",
    slug: "nacionalni-ispit",
    name: "Nacionalni ispit",
    short: "Nacionalni",
    level: "Osnovna škola",
    audience: "Učenici 8. razreda osnovne škole koji se pripremaju za nacionalni ispit iz matematike.",
    description: "Priprema za nacionalni ispit - bez straha, s jasnim temeljima i vježbom tipičnih zadataka.",
    price: "180 € / mjesec",
    duration: "5 mjeseci (listopad - ožujak)",
    format: "1× tjedno po 75 min, online uživo",
    benefits: [
      "Pregledno ponavljanje cijelog gradiva",
      "Vježba tipova zadataka s ispita",
      "Materijali prilagođeni dobi",
      "Redovita komunikacija s roditeljima",
    ],
    schedule: [
      { unit: "Brojevi", lessons: 8, weeks: 8 },
      { unit: "Algebra", lessons: 6, weeks: 6 },
      { unit: "Oblik i prostor", lessons: 1, weeks: 2 },
      { unit: "Mjerenje", lessons: 5, weeks: 5 },
      { unit: "Podaci, statistika i vjerojatnost", lessons: 1, weeks: 1 },
      { unit: "Ponavljanje", lessons: 0, weeks: 4 },
    ],
    audienceItems: [
      { icon: "Smile", text: "Osjećaš treme pred nacionalnim ispitom i želiš sigurnost." },
      { icon: "BookOpen", text: "Trebate ponoviti cijelo gradivo osnovne škole." },
      { icon: "Target", text: "Želiš vježbati tipične zadatke s ispita." },
      { icon: "Calculator", text: "Računanje bez kalkulatora." },
    ],
    calculator: {
      title: "Kalkulator na ispitu",
      intro: "Na nacionalnom ispitu kalkulator je dozvoljen i koristan. Učimo kako ga koristiti za brže i sigurnije rješavanje - bez da zamijeni razumijevanje.",
      model: "Casio fx-991-CW",
      facts: [
        "Računa postotke, omjere i proporcije u jednom koraku",
        "Korijeni i potencije za geometriju i mjerenje",
        "Jednostavan za učenike, službeno odobren za nacionalni ispit",
      ],
      tip: "Odobren za nacionalni ispit, jednostavan za učenike osnovne škole.",
    },
    faq: [
      { q: "Kada je najbolje početi s pripremama?", a: "Najbolje u 8. razredu, dovoljno rano da gradivo ponovimo bez žurbe." },
      { q: "Treba li učenik puno predznanja?", a: "Ne. Krećemo od osnova i ponavljamo cijelo gradivo korak po korak." },
      { q: "Dobiva li materijale?", a: "Da, svi materijali prilagođeni dobi dostupni su u digitalnom obliku." },
    ],
  },
];

export const chapters = [
  { id: "c1", programId: "a", name: "1. cjelina: Brojevi", progress: 100, status: "dovršeno", lessons: [
    { id: "l1", title: "Lekcija 1: Skupovi brojeva", status: "dovršeno", score: 96 },
    { id: "l2", title: "Lekcija 2: Potencije i korijeni", status: "dovršeno", score: 92 },
  ]},
  { id: "c2", programId: "a", name: "2. cjelina: Algebra i funkcije", progress: 43, status: "u tijeku", lessons: [
    { id: "l3", title: "Lekcija 3: Algebarski izrazi", status: "dovršeno", score: 88 },
    { id: "l4", title: "Lekcija 4: Postoci, omjeri i proporcije", status: "dovršeno", score: 91 },
    { id: "l5", title: "Lekcija 5: Linearne jednadžbe i nejednadžbe", status: "dovršeno", score: 85 },
    { id: "l6", title: "Lekcija 6: Kvadratne jednadžbe i kvadratne nejednadžbe", status: "dovršeno", score: 82 },
    { id: "l7", title: "Lekcija 7: Sustavi jednadžbi s dvije nepoznanice", status: "dovršeno", score: 79 },
    { id: "l8", title: "Lekcija 8: Eksponencijalne i logaritamske jednadžbe", status: "u tijeku", score: null },
    { id: "l9", title: "Lekcija 9: Trigonometrijske jednadžbe", status: "nije započeto", score: null },
    { id: "l10", title: "Lekcija 10: Funkcije", status: "nije započeto", score: null },
    { id: "l11", title: "Lekcija 11: Linearna funkcija", status: "nije započeto", score: null },
    { id: "l12", title: "Lekcija 12: Kvadratna funkcija", status: "nije započeto", score: null },
    { id: "l13", title: "Lekcija 13: Eksponencijalna i logaritamska funkcija", status: "nije započeto", score: null },
    { id: "l14", title: "Lekcija 14: Trigonometrijske funkcije", status: "nije započeto", score: null },
    { id: "l15", title: "Lekcija 15: Nizovi", status: "nije započeto", score: null },
    { id: "l16", title: "Lekcija 16: Derivacije", status: "nije započeto", score: null },
  ]},
  { id: "c3", programId: "a", name: "3. cjelina: Oblik i prostor", progress: 0, status: "nije započeto", lessons: [
    { id: "l17", title: "Lekcija 17: Geometrijski likovi u ravnini", status: "nije započeto", score: null },
    { id: "l18", title: "Lekcija 18: Jednadžba pravca", status: "nije započeto", score: null },
    { id: "l19", title: "Lekcija 19: Vektori", status: "nije započeto", score: null },
    { id: "l20", title: "Lekcija 20: Kružnica i krug", status: "nije započeto", score: null },
  ]},
  { id: "c4", programId: "a", name: "4. cjelina: Mjerenje", progress: 0, status: "nije započeto", lessons: [
    { id: "l21", title: "Lekcija 21: Trigonometrija", status: "nije započeto", score: null },
    { id: "l22", title: "Lekcija 22: Geometrijska tijela", status: "nije započeto", score: null },
    { id: "l23", title: "Lekcija 23: Mjerne jedinice", status: "nije započeto", score: null },
  ]},
  { id: "c5", programId: "a", name: "5. cjelina: Podaci, statistika i vjerojatnost", progress: 0, status: "nije započeto", lessons: [
    { id: "l24", title: "Lekcija 24: Podaci, statistika i vjerojatnost", status: "nije započeto", score: null },
  ]},
];

export const student = {
  name: "Luka",
  program: "Matura A razina",
  overall: 33,
  lessonsSolved: 8,
  lessonsTotal: 24,
  nextDeadline: { type: "Zadaća", title: "Lekcija 8: Eksponencijalne i logaritamske jednadžbe", date: "pet, 19. rujna" },
};

export const submissions = [
  { id: "s1", student: "Luka Horvat", program: "A razina", chapter: "Funkcije", lesson: "Kvadratna funkcija", date: "12.09.2026.", status: "Čeka pregled", score: null, files: 3 },
  { id: "s2", student: "Ana Kovač", program: "A razina", chapter: "Jednadžbe", lesson: "Kvadratne jednadžbe", date: "11.09.2026.", status: "Pregledano", score: 88, files: 2 },
  { id: "s3", student: "Marko Babić", program: "B razina", chapter: "Funkcije", lesson: "Linearna funkcija", date: "10.09.2026.", status: "U obradi", score: null, files: 4 },
  { id: "s4", student: "Petra Novak", program: "A razina", chapter: "Geometrija", lesson: "Trokuti", date: "09.09.2026.", status: "Pregledano", score: 72, files: 2 },
  { id: "s5", student: "Luka Horvat", program: "A razina", chapter: "Jednadžbe", lesson: "Kvadratne jednadžbe", date: "05.09.2026.", status: "Pregledano", score: 91, files: 3 },
  { id: "s6", student: "Ana Kovač", program: "A razina", chapter: "Funkcije", lesson: "Kvadratna funkcija", date: "04.09.2026.", status: "Vraćeno na doradu", score: null, files: 2 },
];

export const submissionDetail = {
  id: "s1",
  student: "Luka Horvat",
  program: "Matura A razina",
  chapter: "Funkcije",
  lesson: "Kvadratna funkcija",
  date: "12.09.2026.",
  tasks: [
    { id: "3.8", title: "Nacrtajte graf funkcije f(x)=x²−4x+3", points: 6, max: 6, error: null },
    { id: "3.10", title: "Odredite tjeme i os simetrije", points: 5, max: 6, error: "Pogreška u predznaku koordinate tjemena" },
    { id: "3.12", title: "Riješite jednadžbu x²−5x+6=0 grafički", points: 4, max: 8, error: "Nije pravilno očitanje nultočaka s grafa" },
  ],
  aiSuggestion: {
    recognized: 3,
    totalScore: 15,
    maxScore: 20,
    confidence: 0.86,
    commonErrors: ["Pogrešno očitanje nultočaka s grafa", "Pogreška u predznaku koordinate tjemena"],
    needsManual: true,
  },
  rubric: [
    "Točno crtanje grafa (6 bodova)",
    "Točno određivanje tjemena i osi simetrije (6 bodova)",
    "Točno grafičko rješavanje jednadžbe (8 bodova)",
  ],
};

export const recommendations = [
  {
    taskId: "4.16",
    taskTitle: "Nultočke racionalne funkcije",
    priority: "Obavezno",
    studentsWithError: 9,
    totalStudents: 14,
    commonError: "Nije pravilno postavljen uvjet nazivnika (≠ 0)",
    rationale: "Preduvjet za iduću lekciju o grafu racionalne funkcije.",
  },
  {
    taskId: "4.21",
    taskTitle: "Sustav nejednadžbi s apsolutnom vrijednošću",
    priority: "Preporučeno",
    studentsWithError: 6,
    totalStudents: 14,
    commonError: "Pogrešno rješavanje dvojnog predznaka",
    rationale: "Često se pojavljuje na ispitu; dobra prilika za utvrđivanje.",
  },
  {
    taskId: "4.27",
    taskTitle: "Optimizacijski zadatak s funkcijom cilja",
    priority: "Ako ostane vremena",
    studentsWithError: 3,
    totalStudents: 14,
    commonError: "Nije prepoznat ekstrem iz uvjeta problema",
    rationale: "Povezuje algebru s problemskim kontekstom; korisno za A razinu.",
  },
];

export const teacherStudents = [
  { id: "u1", name: "Luka Horvat", program: "A razina", overall: 78, lastSubmission: "12.09.", status: "Aktivan", needsSupport: false },
  { id: "u2", name: "Ana Kovač", program: "A razina", overall: 88, lastSubmission: "11.09.", status: "Aktivan", needsSupport: false },
  { id: "u3", name: "Marko Babić", program: "B razina", overall: 64, lastSubmission: "10.09.", status: "Aktivan", needsSupport: true },
  { id: "u4", name: "Petra Novak", program: "A razina", overall: 72, lastSubmission: "09.09.", status: "Aktivan", needsSupport: false },
  { id: "u5", name: "Ivan Marić", program: "A razina", overall: 41, lastSubmission: "-", status: "Ne predaje", needsSupport: true },
  { id: "u6", name: "Ela Perić", program: "B razina", overall: 80, lastSubmission: "08.09.", status: "Aktivan", needsSupport: false },
  { id: "u7", name: "Nina Radić", program: "N razina", overall: 70, lastSubmission: "07.09.", status: "Aktivan", needsSupport: false },
  { id: "u8", name: "Toma Vidić", program: "Individualne", overall: 55, lastSubmission: "06.09.", status: "Aktivan", needsSupport: true },
];

export const testimonials = [
  { name: "Ana, maturantica", text: "Matematika mi je konačno postala razumljiva. Sustavan rad i jasni koraci dali su mi sigurnost za ispit.", score: "A - 92%" },
  { name: "Marko, roditelj", text: "Kao roditelj cijenim redovnu komunikaciju i transparentnost. Točno znam gdje je sin i što mu treba.", score: "B - 78%" },
  { name: "Petra, učenica 8. razreda", text: "Najdraže mi je što profesori objašnjavaju dok ne shvatim. Više se ne bojim ispita.", score: "Nacionalni - 86%" },
];

export const faqItems = [
  { q: "Kako izgledaju online pripreme?", a: "Pripreme se održavaju uživo preko video poziva individualno 1 na 1." },
  { q: "Treba li učenik imati predznanje?", a: "Ne. Program se prilagođava učeniku - krenemo od onoga što učenik zna i postupno gradimo sigurnost." },
  { q: "Dobiva li materijale?", a: "Da. Svi materijali, zadaci i rješenja dostupni su učeniku u digitalnom obliku." },
  { q: "Kako se predaju zadaće?", a: "Učenik pošalje fotografiju ili snimku riješene zadaće, a nastavnik je pregledava i daje povratnu informaciju." },
  { q: "Kako roditelj prati napredak?", a: "Roditelj je u redovnom kontaktu s nastavnikom i dobiva povratnu informaciju o napretku učenika." },
  { q: "Kako funkcionira prijava?", a: "Roditelj ispunjava prijavnu formu, a mi se javljamo na mail u roku 24 sata radi dogovora o terminu i programu." },
  { q: "Kako se plaća program?", a: "Plaćanje je mjesečno ili po terminu, a točan način i uvjeti dogovaraju se prilikom prijave." },
];

export const stats = [
  { value: "500+", label: "Zadovoljnih učenika" },
  { value: "100 %", label: "Prolaznost" },
  { value: "1 na 1", label: "Podrška" },
];