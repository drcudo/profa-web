# Profa – web stranica

React (Vite) stranica za Profa pripreme iz matematike, objavljena na Netlifyju (https://profa.com.hr).

## Lokalni razvoj

```bash
npm install
netlify dev   # frontend + Netlify Server (obrasci) zajedno
```

`npm run dev` pokreće samo frontend; obrasci tada ne rade jer `/api/*` ne postoji.

## Obrasci i e-pošta

Obrasci **Prijava** (`/prijava`) i **Instrukcije 1 na 1** (`/instrukcije`) šalju podatke na
Netlify Server u `netlify/server/index.mjs`:

- `POST /api/prijava` – obavijest vlasniku + potvrda roditelju
- `POST /api/rezervacija` – obavijest vlasniku + potvrda osobi koja je poslala upit

E-pošta se šalje preko [Resend](https://resend.com). Predlošci su u `netlify/server/emails.mjs`.

Varijable okruženja (Netlify → Project configuration → Environment variables):

| Varijabla | Obavezna | Opis |
|---|---|---|
| `RESEND_API_KEY` | da | API ključ iz Resenda |
| `MAIL_FROM` | ne | Pošiljatelj, zadano `Profa <prijave@profa.com.hr>` (domena mora biti potvrđena u Resendu) |
| `OWNER_EMAIL` | ne | Primatelj obavijesti, zadano `profa.matematika8@gmail.com` |

## Objava

Push na granu `main` na GitHubu – Netlify automatski napravi build i objavu.
