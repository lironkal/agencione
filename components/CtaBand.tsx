import { waLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-site px-5 py-20 text-center md:px-8 md:py-28">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-light leading-tight text-cream md:text-5xl">
          Prêt à donner une nouvelle dimension à votre{" "}
          <em>présence digitale&nbsp;?</em>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Nous contacter
          </a>
          <a
            href={waLink("Bonjour Agency One, je souhaite discuter d'un projet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
          >
            WhatsApp — réponse sous 24h
          </a>
        </div>
      </div>
    </section>
  );
}
