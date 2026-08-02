# Portfolio App

Sito portfolio in React (Vite), pronto per diventare un'app installabile (PWA).

## Struttura

```
portfolio-app/
├── index.html
├── package.json
├── vite.config.js        # config Vite + plugin PWA
├── public/
│   └── icon.svg          # icona del sito/app (sostituiscila con la tua)
└── src/
    ├── main.jsx           # punto di ingresso React
    ├── App.jsx            # compone tutte le sezioni
    ├── index.css          # tutto lo stile
    └── components/
        ├── Header.jsx     # nav + menu mobile
        ├── Hero.jsx       # sezione iniziale
        ├── About.jsx      # chi sono
        ├── Projects.jsx   # elenco progetti (array PROJECTS)
        ├── Contact.jsx    # form contatti (con stato React)
        └── Footer.jsx
```

## Come avviarlo (sul tuo computer)

Serve Node.js installato (versione 18+). Poi, dentro la cartella `portfolio-app`:

```bash
npm install
npm run dev
```

Apri l'indirizzo che compare in terminale (di solito `http://localhost:5173`).

## Come modificare i contenuti

- Testi hero/about: modifica direttamente `Hero.jsx` e `About.jsx`.
- Progetti: modifica l'array `PROJECTS` in `Projects.jsx` (titolo, descrizione, tag, link).
- Colori: cambia le variabili in cima a `src/index.css` (`--accent`, `--bg`, ecc.).
- Icona app: sostituisci `public/icon.svg` con il tuo logo.

## Perché diventa un'app

Il progetto usa `vite-plugin-pwa`. Con `npm run build` genera automaticamente:
- un service worker (per funzionare offline e velocizzare i caricamenti),
- un manifest (nome, icona, colori) che permette a Chrome/Edge/Safari di
  offrire "Installa app" o "Aggiungi a schermata Home".

Per testare l'installabilità serve una build di produzione servita (non `npm run dev`):

```bash
npm run build
npm run preview
```

Poi apri l'URL mostrato: nella barra degli indirizzi del browser (desktop) o nel
menu del browser (mobile) troverai l'opzione per installare l'app.

## Prossimi passi possibili

- Deploy gratuito su Vercel o Netlify (collegando questa cartella a GitHub).
- Routing multi-pagina con `react-router-dom`, se vuoi più pagine oltre alla home.
- Un backend (es. Firebase, Supabase) quando vorrai aggiungere dati dinamici
  o autenticazione: è il passo naturale per farla diventare un'app "vera" e
  non solo un sito statico installabile.
