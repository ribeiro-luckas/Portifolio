import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { SiteHeader } from "@/components/site-header";
import { TechnologiesSection } from "@/components/technologies-section";
import { ProjectsSection } from "@/components/projects-section";
import { getSelectedProjects } from "@/lib/github";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default async function Home() {
  const projects = await getSelectedProjects();

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
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
