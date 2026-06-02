import { Logo } from "./Logo";
import { site, mailtoLink, waLink } from "@/lib/site";

const cols = [
  {
    title: "Expertises",
    items: [
      { label: "Création de sites web", href: "#expertises" },
      { label: "SEO", href: "#expertises" },
      { label: "Réseaux sociaux", href: "#expertises" },
      { label: "Branding", href: "#expertises" },
      { label: "Publicité digitale", href: "#expertises" },
    ],
  },
  {
    title: "Studio",
    items: [
      { label: "Notre approche", href: "#approche" },
      { label: "Réalisations", href: "#realisations" },
      { label: "Méthode", href: "#methode" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10">
                <Logo variant="mark" dark />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider2">
                Agency One
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
              Studio de marketing digital à Genève. Nous concevons des
              expériences qui inspirent confiance et génèrent des résultats.
            </p>
            <a
              href={mailtoLink()}
              className="mt-6 inline-block text-sm text-cream/80 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-xs uppercase tracking-wider2 text-cream/45">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-sm text-cream/75 transition-colors hover:text-accent"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-7 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Agency One — Tous droits réservés.</span>
          <div className="flex gap-5">
            {site.social.instagram && (
              <a href={site.social.instagram} className="hover:text-accent">
                Instagram
              </a>
            )}
            {site.social.tiktok && (
              <a href={site.social.tiktok} className="hover:text-accent">
                TikTok
              </a>
            )}
            {site.social.linkedin && (
              <a href={site.social.linkedin} className="hover:text-accent">
                LinkedIn
              </a>
            )}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
