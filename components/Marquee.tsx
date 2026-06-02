const words = [
  "Sites web",
  "SEO",
  "Réseaux sociaux",
  "Branding",
  "Meta Ads",
  "Google Ads",
  "Conversion",
  "Identité visuelle",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="mt-24 border-y border-line bg-ink py-5 md:mt-32">
      <div className="marquee-track">
        {row.map((w, idx) => (
          <span
            key={idx}
            className="flex shrink-0 items-center gap-8 px-8 font-display text-2xl font-light italic text-cream/90 md:text-3xl"
          >
            {w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
