import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main id="conteudo" className="foundation-preview">
      <Container className="foundation-preview__inner">
        <div className="foundation-preview__marker" aria-hidden="true">
          <span className="foundation-preview__line" />
          <span>01 / 08</span>
        </div>
        <div className="foundation-preview__content">
          <p className="foundation-preview__eyebrow">PORTFÓLIO · BASE VISUAL</p>
          <h1>
            Uma base para apresentar <span>trabalho real.</span>
          </h1>
          <p className="foundation-preview__description">
            A estrutura e o sistema visual estão preparados. Conteúdo
            profissional, projetos e formas de contato entram nas próximas
            etapas.
          </p>
          <div className="foundation-preview__rule" aria-hidden="true" />
          <p className="foundation-preview__status">
            Fundação em desenvolvimento
          </p>
        </div>
        <div className="foundation-preview__graphic" aria-hidden="true">
          <span className="foundation-preview__graphic-ring foundation-preview__graphic-ring--outer" />
          <span className="foundation-preview__graphic-ring foundation-preview__graphic-ring--middle" />
          <span className="foundation-preview__graphic-ring foundation-preview__graphic-ring--inner" />
          <span className="foundation-preview__graphic-axis" />
          <span className="foundation-preview__graphic-core" />
        </div>
      </Container>
    </main>
  );
}
