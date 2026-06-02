import type { Metadata } from "next";
import { site } from "@/site";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
      default: "Agency One — Studio de marketing digital à Genève",
          template: "%s — Agency One",
    },
    description:
          "Studio de marketing digital à Genève. Création de sites web, SEO, réseaux sociaux, identité visuelle et publicité digitale conçus pour la performance et la conversion.",
    keywords: [
          "agence marketing digital Genève",
          "création site web Suisse",
          "SEO Genève",
          "réseaux sociaux",
          "branding",
          "Meta Ads",
          "Google Ads",
        ],
    authors: [{ name: site.name }],
    openGraph: {
          type: "website",
          locale: "fr_CH",
          url: site.url,
          siteName: site.name,
          title: "Agency One — Studio de marketing digital à Genève",
          description:
                  "Sites web, SEO, réseaux sociaux, branding et publicité digitale, conçus pour convertir.",
    },
    twitter: {
          card: "summary_large_image",
          title: "Agency One — Studio de marketing digital",
          description:
                  "Sites web, SEO, réseaux sociaux, branding et publicité digitale, conçus pour convertir.",
    },
    robots: { index: true, follow: true },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description:
          "Studio de marketing digital : création de sites web, SEO, réseaux sociaux, branding, publicité digitale.",
    url: site.url,
    email: site.email,
    areaServed: "CH",
    address: {
          "@type": "PostalAddress",
          addressLocality: "Genève",
          addressCountry: "CH",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
          <html lang="fr">
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link
                                    rel="preconnect"
                                    href="https://fonts.gstatic.com"
                                    crossOrigin="anonymous"
                                  />
                        <link
                                    href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap"
                                    rel="stylesheet"
                                  />
                </head>head>
                <body>
                        <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                                  />
                  {children}
                </body>body>
          </html>html>
        );
}</html>
