import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ilmiogeniotto.it';

  const articles = [
    'ansia-da-prestazione-scolastica',
    'apprendimento-attivo-vs-passivo',
    'come-scrivere-tema-italiano',
    'creare-mappe-mentali-efficaci',
    'dsa-e-intelligenza-artificiale',
    'filosofia-senza-noia',
    'futuro-scuola-ai',
    'geografia-interattiva',
    'gestione-tempo-schermi',
    'guida-genitori-compiti-digitale',
    'inglese-con-ai',
    'matematica-metodo-logico',
    'memorizzare-date-storiche',
    'metodo-feynman',
    'pensiero-critico-fake-news',
    'perche-lingue-morte-vive',
    'prepararsi-alla-maturita',
    'tecnica-pomodoro',
    'tesi-con-ai-guida-etica',
    'trucchi-compiti-veloci-ia',
  ];

  const staticPages = [
    '',
    '/chat',
    '/articoli',
    '/chi-siamo',
    '/come-funziona',
    '/contatti',
    '/cookie-policy',
    '/privacy',
    '/termini',
    '/guide/come-studiare-con-ia',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1.0 : page === '/chat' ? 0.9 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((slug) => ({
    url: `${baseUrl}/articoli/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
