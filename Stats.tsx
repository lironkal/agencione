import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { to: 40, suffix: "+", label: "Projets livrés" },
  { to: 180, suffix: "%", label: "Croissance de trafic moyenne" },
  { to: 24, suffix: "h", label: "Délai de réponse" },
  { to: 100, suffix: "%", label: "Clients accompagnés sur-mesure" },
];

export function Stats() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-site grid-cols-2 gap-y-12 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s, idx) => (
          <Reveal key={s.label} delay={idx * 0.08}>
            <div className="text-center md:text-left">
              <div className="font-display text-5xl font-light text-cream md:text-6xl">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider2 text-cream/55">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
