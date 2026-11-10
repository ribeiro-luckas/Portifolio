import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { SiteHeader } from "@/components/site-header";
import { TechnologiesSection } from "@/components/technologies-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <TechnologiesSection />
      </main>
    </>
  );
}
