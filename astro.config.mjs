import { defineConfig } from 'astro/config';

// Se il repo si chiama <utente>.github.io lascia base '/'.
// Altrimenti imposta site e base con il nome del repo, es. base: '/mio-sito'.
export default defineConfig({
  site: 'https://ntnchr11.github.io',
  base: '/',
});
