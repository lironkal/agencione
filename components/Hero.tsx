"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/site";

const titleLines = [
    ["Le", "marketing"],
    ["digital,", "conçu"],
    ["pour", "la", "performance."],
  ];

export function Hero() {
    const reduce = useReducedMotion();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  const fadeUp = {
        hidden: { opacity: 0, y: reduce ? 0 : 40 },
        visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }),
  };

  const glowVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.9, ease: "easeOut" },
        },
  };

  return (
        <section
                id="top"
                ref={ref}
                className="relative overflow-hidden min-h-screen flex items-center"
                style={{
                          background: "linear-gradient(135deg, #ffffff 0%, #e8f0ff 40%, #c8d8ff 70%, #0066FF22 100%)",
                }}
              >
          {/* Animated background blobs */}
              <motion.div
                        animate={reduce ? {} : {
                                    scale: [1, 1.15, 1],
                                    opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, #0066FF44 0%, transparent 70%)" }}
                      />
              <motion.div
                        animate={reduce ? {} : {
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[10%] left-[-5%] w-80 h-80 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, #00AAFF33 0%, transparent 70%)" }}
                      />
              <motion.div
                        animate={reduce ? {} : {
                                    scale: [1, 1.1, 1],
                                    opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[40%] left-[40%] w-64 h-64 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, #0066FF22 0%, transparent 70%)" }}
                      />
        
              <div className="mx-auto max-w-site px-5 md:px-8 relative z-10 py-20">
                      <div className="max-w-4xl">
                        {/* Badge */}
                                <motion.div
                                              variants={glowVariant}
                                              initial="hidden"
                                              animate={isInView ? "visible" : "hidden"}
                                              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm"
                                            >
                                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                            <span className="text-sm font-medium text-blue-600 tracking-wide">
                                                          Studio de marketing digital · Genève
                                            </span>span>
                                </motion.div>motion.div>
                      
                        {/* Title */}
                                <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-gray-900">
                                  {titleLines.map((words, li) => (
                              <span key={li} className="block overflow-hidden">
                                              <motion.span
                                                                  className="block"
                                                                  custom={li}
                                                                  variants={fadeUp}
                                                                  initial="hidden"
                                                                  animate={isInView ? "visible" : "hidden"}
                                                                >
                                                {words.map((w, wi) => (
                                                                                      <span
                                                                                                              key={wi}
                                                                                                              className={
                                                                                                                                        (li === 0 && wi === 1) || (li === 2 && wi === 2)
                                                                                                                                          ? "text-transparent bg-clip-text"
                                                                                                                                          : "text-gray-900 mr-3 "
                                                                                                                }
                                                                                                              style={
                                                                                                                                        (li === 0 && wi === 1) || (li === 2 && wi === 2)
                                                                                                                                          ? {
                                                                                                                                                                          backgroundImage: "linear-gradient(135deg, #0066FF, #00AAFF)",
                                                                                                                                                                          marginRight: "0.75rem",
                                                                                                                                            }
                                                                                                                                          : {}
                                                                                                                }
                                                                                                            >
                                                                                        {w}{" "}
                                                                                        </span>span>
                                                                                    ))}
                                              </motion.span>motion.span>
                              </span>span>
                            ))}
                                </h1>h1>
                      
                        {/* Subtitle */}
                                <motion.p
                                              custom={3}
                                              variants={fadeUp}
                                              initial="hidden"
                                              animate={isInView ? "visible" : "hidden"}
                                              className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
                                            >
                                            Stratégie digitale, création de contenu et publicité performance —
                                            pour les marques qui veulent dominer leur marché.
                                </motion.p>motion.p>
                      
                        {/* CTA Buttons */}
                                <motion.div
                                              custom={4}
                                              variants={fadeUp}
                                              initial="hidden"
                                              animate={isInView ? "visible" : "hidden"}
                                              className="flex flex-wrap gap-4 items-center"
                                            >
                                            <motion.a
                                                            href={waLink}
                                                            whileHover={reduce ? {} : { scale: 1.05, boxShadow: "0 0 30px #0066FF88" }}
                                                            whileTap={reduce ? {} : { scale: 0.97 }}
                                                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg transition-all"
                                                            style={{
                                                                              background: "linear-gradient(135deg, #0066FF, #00AAFF)",
                                                                              boxShadow: "0 4px 20px #0066FF55",
                                                            }}
                                                          >
                                                          Démarrer un projet
                                                          <motion.span
                                                                            animate={reduce ? {} : { x: [0, 5, 0] }}
                                                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                                          >
                                                                          →
                                                          </motion.span>motion.span>
                                            </motion.a>motion.a>
                                
                                            <motion.a
                                                            href="#services"
                                                            whileHover={reduce ? {} : { scale: 1.05 }}
                                                            whileTap={reduce ? {} : { scale: 0.97 }}
                                                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-blue-600 text-lg border-2 border-blue-200 bg-white/70 backdrop-blur-sm hover:border-blue-400 transition-all"
                                                          >
                                                          Voir nos services
                                            </motion.a>motion.a>
                                </motion.div>motion.div>
                      
                        {/* Stats bar */}
                                <motion.div
                                              custom={5}
                                              variants={fadeUp}
                                              initial="hidden"
                                              animate={isInView ? "visible" : "hidden"}
                                              className="mt-16 flex flex-wrap gap-8 pt-8 border-t border-blue-100"
                                            >
                                  {[
                                              { number: "50+", label: "Clients satisfaits" },
                                              { number: "3×", label: "ROI moyen" },
                                              { number: "98%", label: "Taux de rétention" },
                                                          ].map((stat, i) => (
                                                                          <div key={i} className="flex flex-col">
                                                                                          <span
                                                                                                              className="text-3xl font-black text-transparent bg-clip-text"
                                                                                                              style={{ backgroundImage: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
                                                                                                            >
                                                                                            {stat.number}
                                                                                            </span>span>
                                                                                          <span className="text-sm text-gray-500 mt-1">{stat.label}</span>span>
                                                                          </div>div>
                                                                        ))}
                                </motion.div>motion.div>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
