import { Container } from "@/components/ui/container";
import { HeroVisual } from "@/components/hero-visual";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span aria-hidden="true" /> {site.area}
          </p>
          <p className="hero__introduction-name">Olá, eu sou {site.name}.</p>
          <h1 id="hero-title">
            {site.headline.first}
            <br /> {site.headline.second} <span>{site.headline.accent}</span>
          </h1>
          <p className="hero__description">{site.introduction}</p>
          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projetos <span aria-hidden="true">↗</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a
              className="hero__button hero__button--secondary"
              href={site.contactHref}
            >
              Entrar em contato <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero__footnote">
            Projetos, estudos e ideias em evolução.
          </p>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
