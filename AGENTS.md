# AGENTS.md

## Project Context

Vite + React web stranica (Profa – pripreme iz matematike) hostana na Netlifyju. Nema više Base44 ovisnosti.
Pročitaj `README.md` za lokalni razvoj, varijable okruženja i objavu.

## Key Files

- `src/`: frontend (React Router, Tailwind, shadcn/ui).
- `src/lib/submitForm.js`: slanje obrazaca na `/api/*`.
- `netlify/server/index.mjs`: Netlify Server – obrada obrazaca i slanje e-pošte preko Resenda.
- `netlify/server/emails.mjs`: HTML predlošci e-pošte.
- `netlify.toml`: build postavke i SPA rewrite pravila (svaka ruta posebno, da se ne prekrije `/api/*`).
- `public/images/`: slike stranice i logo za e-poštu.

## Working Notes

- Lokalno pokreni `netlify dev` (frontend + server).
- Kad dodaješ novu stranicu u `src/App.jsx`, dodaj i njezin rewrite u `netlify.toml`.
- Ne spremaj tajne u repozitorij; `RESEND_API_KEY` je varijabla okruženja na Netlifyju.
- Prije završetka pokreni `npm run lint`.
