"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { waLink } from "@/lib/site";

const titleLines = [
  ["Le", "marketing"],
  ["digital,", "conçu"],
  ["pour", "la", "performance."],
];

export function Hero() {
  const reduce = useReducedMotion();
  let i = 0;

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 text-xs font-medium uppercase tracking-wider3 text-muted"
        >
          Studio de marketing digital — Genève
        </motion.p>

        <h1 className="font-display text-[2.6rem] font-light leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          {titleLines.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <span className="block">
                {line.map((word) => {
                  const delay = 0.15 + i * 0.07;
                  i += 1;
                  const isAccent = word === "performance.";
                  return (
                    <motion.span
                      key={word + delay}
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      <em className={isAccent ? "text-accent not-italic font-display italic" : ""}>
                        {word}
                      </em>
                      &nbsp;
                    </motion.span>
                  );
                })}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          Sites web, référencement, réseaux sociaux, identité visuelle et
          publicité. Nous générons des résultats mesurables pour les marques
          ambitieuses.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="rounded-full bg-ink px-7 py-3.5 text-center text-sm font-medium text-cream transition-colors hover:bg-accent"
          >
            Nous contacter
          </a>
          <a
            href={waLink("Bonjour Agency One, je souhaite discuter d'un projet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-7 py-3.5 text-center text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Échangeons sur WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex items-center gap-6 text-xs uppercase tracking-wider2 text-muted"
        >
          <span>Genève · Suisse</span>
          <span className="h-px w-8 bg-line" />
          <span>Depuis 2024</span>
        </motion.div>
      </div>

      {/* Grille d'images asymétrique */}
      <div className="mx-auto mt-16 max-w-site px-5 md:mt-24 md:px-8">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 aspect-[4/3] overflow-hidden rounded-2xl md:col-span-5 md:aspect-[3/4]"
          >
            <Image
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=900&q=85&auto=format&fit=crop"
              alt="Direction créative"
              width={900}
              height={1200}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-4">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl bg-accent p-7 text-cream"
            >
              <span className="text-xs uppercase tracking-wider2 opacity-80">
                Performance
              </span>
              <span className="font-display text-5xl font-light leading-none">
                +180%
              </span>
              <span className="text-sm opacity-90">
                de croissance moyenne du trafic organique de nos clients
              </span>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.94, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=85&auto=format&fit=crop"
                alt="Réunion stratégique"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 hidden aspect-[3/4] overflow-hidden rounded-2xl md:col-span-3 md:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85&auto=format&fit=crop"
              alt="Bureau moderne"
              width={700}
              height={930}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
