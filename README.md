# Agency One — Site web

Studio de marketing digital à Genève. Site Next.js premium, orienté conversion.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Polices : Fraunces (display) + Inter (texte)

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Configuration (1 fichier)

Tout est centralisé dans `lib/site.ts` :

- `email` — adresse du formulaire mailto et du footer
- `whatsapp` — numéro international sans `+` ni espace (actuel : `41782443284`)
- `url` — domaine de production
- `social` — liens Instagram / TikTok / LinkedIn (vides = masqués)

## Déploiement Vercel + GitHub

1. Crée un dépôt GitHub, pousse ce dossier.
2. Sur vercel.com → New Project → importe le dépôt.
3. Framework détecté : Next.js. Build par défaut. Deploy.
4. Ajoute ton domaine dans Vercel → Settings → Domains.

Aucune variable d'environnement requise.

## Structure

```
app/
  layout.tsx      SEO, polices, JSON-LD
  page.tsx        assemblage des sections
  globals.css     base + marquee
  sitemap.ts / robots.ts
components/        Nav, Hero, Services, WhyUs, Stats,
                  Portfolio, Process, CtaBand, Contact,
                  Footer, Logo, WhatsAppFloat, Reveal, Counter
lib/site.ts       configuration
```

## Notes

- Le formulaire ouvre le client mail (mailto). Pour un envoi côté serveur,
  branche Formspree ou une route API.
- Les projets du portfolio sont fictifs — remplace-les dans
  `components/Portfolio.tsx`.
- Images : Unsplash CDN. Remplaçables par tes visuels dans `/public`.
