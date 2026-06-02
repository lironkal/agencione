"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Clients accompagnes", icon: "🏆" },
  { value: 3, suffix: "x", label: "ROI moyen genere", icon: "📈" },
  { value: 98, suffix: "%", label: "Taux de satisfaction", icon: "⭐" },
  { value: 5, suffix: "M+", label: "Impressions generees", icon: "👁️" },
];

function AnimatedNumber({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reduce) { setCount(target); return; }
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, reduce]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section
      id="stats"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0044CC 0%, #0066FF 40%, #0088EE 70%, #00AAFF 100%)" }}
    >
      <motion.div
        animate={reduce ? {} : { scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.1)" }}
      />

      <div className="mx-auto max-w-site px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white border border-white/30">
            Nos resultats
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Des chiffres qui parlent
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: reduce ? 0 : 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { scale: 1.05, y: -4 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-sm text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}