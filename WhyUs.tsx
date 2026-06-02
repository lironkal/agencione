import Image from "next/image";
import { Reveal } from "./Reveal";

const points = [
  {
    n: "01",
    title: "Stratégie avant tout",
    desc: "Chaque projet démarre par une analyse rigoureuse de vos objectifs, de votre marché et de vos concurrents.",
  },
  {
    n: "02",
    title: "Qualité d'exécution",
    desc: "Un soin éditorial et technique de niveau studio, du premier pixel à la mise en production.",
  },
  {
    n: "03",
    title: "Rapidité maîtrisée",
    desc: "Des délais courts sans compromis sur la qualité, grâce à des méthodes éprouvées.",
  },
  {
    n: "04",
    title: "Performance mesurable",
    desc: "Nous pilotons par les chiffres : trafic, conversions, retour sur investissement.",
  },
];

export function WhyUs() {
  return (
    <section id="approche" className="bg-cream-2">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider3 text-accent">
            Notre approche
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-5xl">
            Pourquoi les marques exigeantes nous{" "}
            <em>choisissent.</em>
          </h2>
          <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=85&auto=format&fit=crop"
              alt="Équipe en collaboration"
              width={900}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col">
          {points.map((p, idx) => (
            <Reveal key={p.n} delay={idx * 0.05}>
              <div className="border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10">
                <div className="flex items-start gap-6">
                  <span className="font-display text-xl italic text-accent">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-light text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
