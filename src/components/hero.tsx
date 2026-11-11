import { Container } from "@/components/ui/container";
import { HeroVisual } from "@/components/hero-visual";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <Container className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span aria-hidden="true" /> {site.area}
          </p>
          <p className="hero__introduction-name">Olá, eu sou {site.name}.</p>
          <h1 id="hero-title">
            {site.headline.first}
            <br /> {site.headline.second}{" "}
            <span className="hero__typewriter">
              <span className="hero__typewriter-text" aria-hidden="true">
                {site.headline.accent}
              </span>
              <span className="sr-only">{site.headline.accent}</span>
            </span>
          </h1>
          <p className="hero__description">{site.introduction}</p>
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#projetos">
              Ver projetos <span aria-hidden="true">↗</span>
            </a>
            <a className="hero__button hero__button--secondary" href="#contato">
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
