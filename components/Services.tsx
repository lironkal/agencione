"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "📱",
    title: "Social Media",
    desc: "Strategie de contenu, community management et croissance organique sur tous les reseaux.",
    features: ["Instagram & TikTok", "LinkedIn B2B", "YouTube"],
  },
  {
    icon: "🎯",
    title: "Publicite Performance",
    desc: "Campagnes Meta Ads, Google Ads et TikTok Ads optimisees pour un ROI maximum.",
    features: ["Meta Ads", "Google Ads", "TikTok Ads"],
    highlight: true,
  },
  {
    icon: "✍️",
    title: "Creation de Contenu",
    desc: "Photos, videos, reels et visuels qui captivent votre audience et renforcent votre marque.",
    features: ["Video & Reels", "Photographie", "Design graphique"],
  },
  {
    icon: "🔍",
    title: "SEO & Referencement",
    desc: "Optimisation pour les moteurs de recherche et strategie de contenu long terme.",
    features: ["SEO technique", "Content marketing", "Link building"],
  },
  {
    icon: "💻",
    title: "Web Design",
    desc: "Sites web modernes, rapides et convertissants qui refletent votre identite de marque.",
    features: ["Next.js / React", "Design UI/UX", "Optimisation conversion"],
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "Suivi de vos KPIs, tableaux de bord en temps reel et rapports de performance mensuels.",
    features: ["Google Analytics", "Data Studio", "Rapports personnalises"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
            style={{ color: "#0066FF", borderColor: "#0066FF33", background: "#0066FF11" }}
          >
            Ce que nous faisons
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nos{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
            >
              services
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Une offre complete pour developper votre presence digitale et generer des resultats mesurables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { y: -8 }}
              className="relative rounded-2xl p-7 transition-all cursor-default"
              style={
                service.highlight
                  ? {
                      background: "linear-gradient(135deg, #0066FF, #0088EE)",
                      boxShadow: "0 8px 30px #0066FF44",
                    }
                  : {
                      background: "white",
                      border: "1px solid #e0e8ff",
                      boxShadow: "0 2px 12px rgba(0,102,255,0.06)",
                    }
              }
            >
              {service.highlight && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                >
                  Populaire
                </span>
              )}
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: service.highlight ? "white" : "#0A0A1A" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: service.highlight ? "rgba(255,255,255,0.85)" : "#6b7280" }}
              >
                {service.desc}
              </p>
              <ul className="flex flex-col gap-1.5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: service.highlight ? "rgba(255,255,255,0.9)" : "#374151" }}
                  >
                    <span style={{ color: service.highlight ? "rgba(255,255,255,0.8)" : "#0066FF", fontWeight: "bold" }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}