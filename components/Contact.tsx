"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/site";

const contactOptions = [
  {
    icon: "💬",
    label: "WhatsApp",
    desc: "Reponse rapide",
    href: waLink,
    cta: "Envoyer un message",
    primary: true,
  },
  {
    icon: "📧",
    label: "Email",
    desc: "contact@agencyone.ch",
    href: "mailto:contact@agencyone.ch",
    cta: "Envoyer un email",
    primary: false,
  },
  {
    icon: "📞",
    label: "Appel decouverte",
    desc: "30 min offerts",
    href: waLink,
    cta: "Reserver un appel",
    primary: false,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}
    >
      <motion.div
        animate={reduce ? {} : { scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #0066FF15 0%, transparent 60%)" }}
      />

      <div className="mx-auto max-w-site px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: "#0066FF", borderColor: "#0066FF33", background: "#0066FF11" }}
          >
            Parlons de votre projet
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Pret a{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
            >
              demarrer ?
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Contactez-nous aujourd'hui et obtenez un audit gratuit de votre presence digitale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactOptions.map((option, i) => (
            <motion.a
              key={option.label}
              href={option.href}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { y: -8 }}
              whileTap={reduce ? {} : { scale: 0.98 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl transition-all no-underline"
              style={
                option.primary
                  ? {
                      background: "linear-gradient(135deg, #0066FF, #00AAFF)",
                      boxShadow: "0 8px 30px #0066FF44",
                      color: "white",
                    }
                  : {
                      background: "white",
                      border: "1px solid #e0e8ff",
                      boxShadow: "0 2px 12px rgba(0,102,255,0.06)",
                    }
              }
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: option.primary ? "white" : "#0A0A1A" }}
              >
                {option.label}
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: option.primary ? "rgba(255,255,255,0.8)" : "#6b7280" }}
              >
                {option.desc}
              </p>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
                style={
                  option.primary
                    ? { background: "rgba(255,255,255,0.2)", color: "white" }
                    : { background: "linear-gradient(135deg, #0066FF, #00AAFF)", color: "white" }
                }
              >
                {option.cta}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          Premier audit offert - Pas d'engagement - Reponse sous 24h
        </motion.p>
      </div>
    </section>
  );
}