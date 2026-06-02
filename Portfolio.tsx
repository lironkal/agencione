"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    name: "Maison Levant",
    type: "Site e-commerce — Mode",
    year: "2025",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=85&auto=format&fit=crop",
  },
  {
    name: "Clinique Aria",
    type: "Site vitrine + SEO — Santé",
    year: "2025",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=85&auto=format&fit=crop",
  },
  {
    name: "Nord Capital",
    type: "Identité visuelle — Finance",
    year: "2024",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=85&auto=format&fit=crop",
  },
  {
    name: "Atelier Tofu",
    type: "Réseaux sociaux + Ads — Restauration",
    year: "2024",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=85&auto=format&fit=crop",
  },
  {
    name: "Skylane SaaS",
    type: "Landing page + Branding — Tech",
    year: "2024",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=85&auto=format&fit=crop",
  },
];

export function Portfolio() {
  const reduce = useReducedMotion();
  return (
    <section id="realisations" className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
      <p className="mb-4 text-xs font-medium uppercase tracking-wider3 text-accent">
        Réalisations sélectionnées
      </p>
      <h2 className="max-w-2xl font-display text-3xl font-light leading-tight text-ink md:text-5xl">
        Des marques que nous avons aidées à <em>grandir.</em>
      </h2>

      <div className="mt-12 md:mt-16">
        {projects.map((p, idx) => (
          <motion.a
            key={p.name}
            href="#contact"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-center justify-between gap-4 border-t border-line py-6 transition-[padding] duration-500 ease-editorial last:border-b hover:px-4 md:py-8"
          >
            <div className="flex items-center gap-5 md:gap-8">
              <div className="h-14 w-14 overflow-hidden rounded-xl md:h-16 md:w-16">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={120}
                  height={120}
                  className="h-full w-full scale-100 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-light text-ink transition-colors group-hover:text-accent md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs text-muted md:text-sm">{p.type}</p>
              </div>
            </div>
            <span className="shrink-0 font-display text-sm italic text-muted">
              {p.year}
            </span>
          </motion.a>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted">
        Sélection illustrative — projets fictifs présentés à titre d&apos;exemple.
      </p>
    </section>
  );
}
