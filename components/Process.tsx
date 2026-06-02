"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
        num: "01",
        title: "Audit & Stratégie",
        desc: "Analyse complète de votre présence digitale actuelle, de vos concurrents et de vos objectifs pour définir une feuille de route sur mesure.",
        icon: "🔍",
  },
  {
        num: "02",
        title: "Plan d'action",
        desc: "Élaboration d'une stratégie digitale précise avec des objectifs mesurables, un calendrier éditorial et un budget publicitaire optimisé.",
        icon: "📋",
  },
  {
        num: "03",
        title: "Création & Lancement",
        desc: "Production de contenus de qualité, mise en place des campagnes publicitaires et déploiement de toutes les actions prévues.",
        icon: "🚀",
  },
  {
        num: "04",
        title: "Optimisation continue",
        desc: "Suivi quotidien des performances, A/B testing et ajustements en temps réel pour maximiser votre ROI.",
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
                {/* Header */}
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
                                            Notre méthode
                                </span>span>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                            Comment on{" "}
                                            <span
                                                            className="text-transparent bg-clip-text"
                                                            style={{ backgroundImage: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
                                                          >
                                                          travaille
                                            </span>span>
                                </h2>h2>
                                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                                            Un processus éprouvé en 4 étapes pour transformer votre présence digitale en moteur de croissance.
                                </p>p>
                      </motion.div>motion.div>
              
                {/* Steps */}
                      <div className="relative">
                        {/* Connecting line */}
                                <div
                                              className="absolute left-8 top-8 bottom-8 w-px hidden lg:block"
                                              style={{ background: "linear-gradient(180deg, #0066FF, #00AAFF, #0066FF22)" }}
                                            />
                      
                                <div className="flex flex-col gap-6">
                                  {steps.map((step, i) => (
                              <motion.div
                                                key={step.num}
                                                initial={{ opacity: 0, x: reduce ? 0 : -40 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                whileHover={
                                                                    reduce ? {} : { x: 8, boxShadow: "0 10px 40px rgba(0,102,255,0.12)" }
                                                }
                                                className="flex gap-6 items-start rounded-2xl p-6 transition-all"
                                                style={{
                                                                    background: "white",
                                                                    border: "1px solid #e0e8ff",
                                                                    boxShadow: "0 2px 12px rgba(0,102,255,0.05)",
                                                }}
                                              >
                                {/* Number */}
                                              <div
                                                                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg"
                                                                  style={{ background: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
                                                                >
                                                {step.num}
                                              </div>div>
                              
                                              <div className="flex-1">
                                                                <div className="flex items-center gap-3 mb-2">
                                                                                    <span className="text-2xl">{step.icon}</span>span>
                                                                                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>h3>
                                                                </div>div>
                                                                <p className="text-gray-500 leading-relaxed">{step.desc}</p>p>
                                              </div>div>
                              
                                {/* Accent line on right */}
                                              <motion.div
                                                                  initial={{ scaleY: 0 }}
                                                                  animate={isInView ? { scaleY: 1 } : {}}
                                                                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                                                                  className="flex-shrink-0 w-1 self-stretch rounded-full"
                                                                  style={{ background: "linear-gradient(180deg, #0066FF, #00AAFF)" }}
                                                                />
                              </motion.div>motion.div>
                            ))}
                                </div>div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
