import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Analyse",
    desc: "Audit de votre présence, de votre marché et de vos objectifs.",
  },
  {
    n: "02",
    title: "Stratégie",
    desc: "Une feuille de route claire, priorisée et orientée résultats.",
  },
  {
    n: "03",
    title: "Exécution",
    desc: "Design, développement et déploiement avec un soin de studio.",
  },
  {
    n: "04",
    title: "Résultats",
    desc: "Mesure, optimisation continue et reporting transparent.",
  },
];

export function Process() {
  return (
    <section id="methode" className="bg-cream-2">
      <div className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider3 text-accent">
            Notre méthode
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-light leading-tight text-ink md:text-5xl">
            Un processus simple, <em>quatre étapes.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-6">
          {steps.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 0.08}>
              <div className="group">
                <span className="font-display text-sm italic text-accent">
                  {s.n}
                </span>
                <div className="mt-3 h-px w-8 bg-ink transition-all duration-500 ease-editorial group-hover:w-16" />
                <h3 className="mt-6 font-display text-2xl font-light text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
