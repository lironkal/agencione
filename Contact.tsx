"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site, waLink, mailtoLink } from "@/lib/site";

const expertises = [
  "Création de site web",
  "SEO / référencement",
  "Réseaux sociaux",
  "Branding / identité visuelle",
  "Publicité digitale",
  "Autre",
];

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    expertise: expertises[0],
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Projet ${form.expertise} — ${form.name}`;
    const body = [
      `Nom : ${form.name}`,
      `Entreprise : ${form.company}`,
      `Email : ${form.email}`,
      `Expertise : ${form.expertise}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `${mailtoLink(subject)}&body=${encodeURIComponent(
      body
    )}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-wider3 text-accent">
            Contact
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-5xl">
            Échangeons sur <em>votre projet.</em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Décrivez-nous votre besoin. Premier entretien stratégique offert,
            sans engagement.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85&auto=format&fit=crop"
              alt="Espace de travail Agency One"
              width={900}
              height={560}
              className="h-56 w-full object-cover md:h-64"
            />
          </div>

          <a
            href={waLink(
              "Bonjour Agency One, je souhaite discuter d'un projet."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-[#25D366] px-6 py-5 text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="text-sm font-medium">WhatsApp</span>
            </span>
            <span className="text-xs opacity-90">Réponse rapide en moins de 24h →</span>
          </a>

          <a
            href={mailtoLink()}
            className="mt-4 inline-block text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {site.email}
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-line bg-cream-2 p-7 md:p-10"
        >
          <form onSubmit={submit} className="flex flex-col gap-5">
            <Field label="Nom complet" required>
              <input
                required
                value={form.name}
                onChange={set("name")}
                className="field"
                placeholder="Votre nom"
              />
            </Field>
            <Field label="Entreprise">
              <input
                value={form.company}
                onChange={set("company")}
                className="field"
                placeholder="Nom de l'entreprise"
              />
            </Field>
            <Field label="Email professionnel" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={set("email")}
                className="field"
                placeholder="vous@entreprise.com"
              />
            </Field>
            <Field label="Expertise souhaitée">
              <select value={form.expertise} onChange={set("expertise")} className="field">
                {expertises.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </Field>
            <Field label="Votre projet" required>
              <textarea
                required
                value={form.message}
                onChange={set("message")}
                rows={4}
                className="field resize-none"
                placeholder="Décrivez votre besoin en quelques lignes…"
              />
            </Field>
            <button
              type="submit"
              className="mt-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-accent"
            >
              Envoyer la demande
            </button>
            <p className="text-center text-xs text-muted">
              Premier entretien stratégique offert · Réponse sous 24h
            </p>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        :global(.field) {
          width: 100%;
          border: 1px solid #e4e2da;
          background: #faf9f6;
          border-radius: 0.75rem;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          color: #141414;
          outline: none;
          transition: border-color 0.25s ease;
        }
        :global(.field:focus) {
          border-color: #e8590c;
        }
        :global(.field::placeholder) {
          color: #9a9a9a;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider2 text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
