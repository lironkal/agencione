"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { waLink } from "@/lib/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#process" },
  { label: "Resultats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #e0e8ff" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,102,255,0.08)" : "none",
      }}
    >
      <nav className="mx-auto max-w-site px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.a
          href="#top"
          whileHover={reduce ? {} : { scale: 1.05 }}
          className="font-black text-xl tracking-tight"
          style={{
            background: "linear-gradient(135deg, #0066FF, #00AAFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Agency One
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              <a
                href={link.href}
                className="relative text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: "linear-gradient(90deg, #0066FF, #00AAFF)" }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={waLink}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={reduce ? {} : { scale: 1.05, boxShadow: "0 0 20px #0066FF66" }}
          whileTap={reduce ? {} : { scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all"
          style={{
            background: "linear-gradient(135deg, #0066FF, #00AAFF)",
            boxShadow: "0 2px 12px #0066FF44",
          }}
        >
          Demarrer
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-blue-50 transition-colors"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-blue-600 rounded-full transition-all"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-blue-600 rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-blue-600 rounded-full transition-all"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-blue-50"
          >
            <ul className="px-5 py-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.07 }}
              >
                <a
                  href={waLink}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white w-full justify-center"
                  style={{ background: "linear-gradient(135deg, #0066FF, #00AAFF)" }}
                >
                  Demarrer un projet
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}