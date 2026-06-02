// Centralised site configuration — modifie ici en une ligne.
export const site = {
  name: "Agency One",
  tagline: "Studio de marketing digital",
  location: "Genève, Suisse",
  founded: "2024",

  // Contact — change ces deux valeurs si besoin :
  email: "contact@agencyone.ch",
  whatsapp: "41782443284", // format international sans +, ni espaces

  url: "https://agencyone.ch",

  social: {
    instagram: "",
    tiktok: "",
    linkedin: "",
  },
} as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}${
    msg ? `?text=${encodeURIComponent(msg)}` : ""
  }`;

export const mailtoLink = (subject = "Demande de projet — Agency One") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
