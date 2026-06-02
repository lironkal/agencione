"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Audit & Strategie",
    desc: "Analyse complete de votre presence digitale actuelle, de vos concurrents et de vos objectifs pour definir une feuille de route sur mesure.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Plan d'action",
    desc: "Elaboration d'une strategie digitale precise avec des objectifs mesurables, un calendrier editorial et un budget publicitaire optimise.",
    icon: "📋",
  },
  {
    num: "03",
    title: "Creation & Lancement",
    desc: "Production de contenus de qualite, mise en place des campagnes publicitaires et deploiement de toutes les actions prevues.",
    icon: "🚀",
  },
  {
    num: "04",
    title: "Optimisation continue",
    desc: "Suivi quotidien des performances, A/B testing et ajustements en temps reel pour maximiser votre ROI.",
    icon: "📊",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "#ffffff" }}
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
            Notre methode
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Comment on{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
            >
              travaille
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Un processus eprouve en 4 etapes pour transformer votre presence digitale en moteur de croissance.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: reduce ? 0 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { x: 8 }}
              className="flex gap-6 items-start rounded-2xl p-6 transition-all"
              style={{
                background: "white",
                border: "1px solid #e0e8ff",
                boxShadow: "0 2px 12px rgba(0,102,255,0.05)",
              }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg"
                style={{ background: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
              >
                {step.num}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>

              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                className="flex-shrink-0 w-1 self-stretch rounded-full"
                style={{ background: "linear-gradient(180deg, #0066FF, #00AAFF)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}