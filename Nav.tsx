"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { waLink } from "@/lib/site";

const links = [
  { href: "#expertises", label: "Expertises" },
  { href: "#approche", label: "Approche" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" aria-label="Agency One — accueil" className="flex items-center gap-2.5">
          <div className="h-9 w-9">
            <Logo variant="mark" />
          </div>
          <span className="text-sm font-semibold tracking-wider2 uppercase">
            Agency One
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-accent"
          >
            Nous contacter
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-cream transition-[max-height] duration-500 ease-editorial md:hidden ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Bonjour Agency One, je souhaite discuter d'un projet.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-cream"
          >
            WhatsApp — réponse sous 24h
          </a>
        </div>
      </div>
    </header>
  );
}
