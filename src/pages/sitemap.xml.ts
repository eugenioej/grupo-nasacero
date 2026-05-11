import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const base = 'https://gruponasacero.com';
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: `${base}/`, priority: '1.0', changefreq: 'monthly' },
    { loc: `${base}/nosotros/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${base}/contacto/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${base}/en/`, priority: '1.0', changefreq: 'monthly' },
    { loc: `${base}/en/about/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${base}/en/contact/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${base}/privacidad/`, priority: '0.3', changefreq: 'yearly' },
    { loc: `${base}/en/privacy/`, priority: '0.3', changefreq: 'yearly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${loc.includes('/en/') || loc === `${base}/en/`
      ? `<xhtml:link rel="alternate" hreflang="en-US" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="es-MX" href="${loc.replace('/en/', '/').replace(`${base}/en`, `${base}`)}"/>`
      : `<xhtml:link rel="alternate" hreflang="es-MX" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="${loc === `${base}/` ? `${base}/en/` : loc.replace(`${base}/`, `${base}/en/`)}"/>`
    }
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
