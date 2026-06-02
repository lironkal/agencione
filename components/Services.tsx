import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Création de sites web",
    desc: "Sites vitrines, plateformes SaaS et landing pages. Next.js, design sur-mesure, performance et conversion.",
  },
  {
    n: "02",
    title: "SEO — référencement naturel",
    desc: "Audit technique, contenu, netlinking et suivi de positions pour une visibilité durable sur Google.",
  },
  {
    n: "03",
    title: "Réseaux sociaux",
    desc: "Stratégie éditoriale, création de contenu et community management sur Instagram, TikTok et LinkedIn.",
  },
  {
    n: "04",
    title: "Branding — identité visuelle",
    desc: "Logo, charte graphique, direction artistique et univers de marque cohérents et mémorables.",
  },
  {
    n: "05",
    title: "Publicité digitale",
    desc: "Campagnes Meta Ads et Google Ads pilotées à la performance, du ciblage au retour sur investissement.",
  },
];

export function Services() {
  return (
    <section id="expertises" className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider3 text-accent">
              Nos expertises
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-tight text-ink md:text-5xl">
              Cinq <em>domaines d&apos;intervention</em>, une seule
              exigence&nbsp;: le résultat.
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <Reveal key={s.n} delay={idx * 0.06}>
            <article className="group h-full bg-cream p-8 transition-colors duration-500 hover:bg-cream-2 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-lg italic text-muted">
                  {s.n}
                </span>
                <span className="h-2 w-2 rounded-full bg-line transition-colors duration-500 group-hover:bg-accent" />
              </div>
              <h3 className="mt-10 font-display text-2xl font-light text-ink">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.3}>
          <a
            href="#contact"
            className="flex h-full flex-col justify-between bg-ink p-8 text-cream transition-colors duration-500 hover:bg-accent md:p-10"
          >
            <span className="text-xs uppercase tracking-wider2 opacity-80">
              Un projet en tête&nbsp;?
            </span>
            <span className="mt-10 font-display text-2xl font-light leading-snug">
              Échangeons sur votre projet →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
