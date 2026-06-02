import { Nav } from "@/Nav";
import { Hero } from "@/Hero";
import { Marquee } from "@/Marquee";
import { Services } from "@/Services";
import { WhyUs } from "@/WhyUs";
import { Stats } from "@/Stats";
import { Portfolio } from "@/Portfolio";
import { Process } from "@/Process";
import { CtaBand } from "@/CtaBand";
import { Contact } from "@/Contact";
import { Footer } from "@/Footer";
import { WhatsAppFloat } from "@/WhatsAppFloat";

export default function Home() {
    return (
          <>
                <Nav />
                <main>
                        <Hero />
                        <Marquee />
                        <Services />
                        <WhyUs />
                        <Stats />
                        <Portfolio />
                        <Process />
                        <CtaBand />
                        <Contact />
                </main>main>
                <Footer />
                <WhatsAppFloat />
          </>>
        );
}</>
