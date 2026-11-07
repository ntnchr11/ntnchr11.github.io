# Sito personale

Sito statico in [Astro](https://astro.build), pubblicato su GitHub Pages.

## Avvio in locale
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Cosa personalizzare
1. `src/site.ts`: nome, ruolo, tagline, email e link social.
2. `astro.config.mjs`: `site` con il tuo utente GitHub. Se il repo NON si chiama `<utente>.github.io`, imposta anche `base: '/nome-repo'`.
3. `src/pages/percorso.astro` e `competenze.astro`: sostituisci i dati di esempio.
4. Home: il paragrafo "Dove voglio arrivare" in `src/pages/index.astro`.

## Aggiungere contenuti
- Nuovo progetto: file `.md` in `src/content/progetti/` (campi: titolo, descrizione, stato, tecnologie, repo, demo, ordine).
- Nuova nota: file `.md` in `src/content/laboratorio/`.

## Form contatti
Il sito è statico, quindi il form usa [Formspree](https://formspree.io) (piano gratuito), che inoltra i messaggi alla tua email senza mostrarla nel sito.
1. Crea un account su formspree.io con la tua email e clicca "New form".
2. Copia l'endpoint, simile a `https://formspree.io/f/abcd1234`.
3. Incollalo in `formEndpoint` dentro `src/site.ts`, poi push.
4. Invia un messaggio di prova dal sito e conferma l'email di verifica che Formspree ti manda al primo invio.
Il campo nascosto `_gotcha` blocca i bot più semplici; per più protezione puoi attivare reCAPTCHA dalle impostazioni di Formspree.

## Pubblicazione
1. Push su `main`.
2. Su GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Il workflow `.github/workflows/deploy.yml` pubblica a ogni push.

## Diritti
© Chiara Antonucci. Tutti i diritti riservati su testi, immagini e fotografie di questo sito. Il repository è pubblico per trasparenza, ma senza licenza di riuso: nulla può essere copiato o ridistribuito senza permesso.
