import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";
import type { PortfolioProject } from "@/lib/github";

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <li className="projects-section__card">
      <div className="projects-section__media">
        {project.media ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            unoptimized={project.media.src.toLowerCase().endsWith(".gif")}
          />
        ) : (
          <span className="projects-section__media-mark" aria-hidden="true">
            {project.repository.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <div className="projects-section__body">
        <p className="projects-section__eyebrow">Projeto público · GitHub</p>
        <h3>{project.title}</h3>
        <p className="projects-section__description">{project.description}</p>
        {project.technologies.length > 0 && (
          <ul
            className="projects-section__technologies"
            aria-label="Tecnologias"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        <div className="projects-section__actions">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Repositório ${project.title} no GitHub (abre em nova aba)`}
          >
            Repositório <span aria-hidden="true">↗</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Demonstração de ${project.title} (abre em nova aba)`}
            >
              Demonstração <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export function ProjectsSection({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  return (
    <section
      id="projetos"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <Container>
        <SectionHeading
          id="projects-title"
          eyebrow="04 / PROJETOS"
          title="Ideias que viraram"
          accent="código."
          description="Uma seleção de repositórios públicos. Descrições e tecnologias são obtidas do GitHub quando disponíveis."
        />
        <ul className="projects-section__grid">
          {projects.map((project) => (
            <ProjectCard key={project.repository} project={project} />
          ))}
        </ul>
        <a
          className="projects-section__all-link"
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos os repositórios no GitHub
          <span aria-hidden="true">↗</span>
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      </Container>
    </section>
  );
}
