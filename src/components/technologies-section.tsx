import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { technologyGroups } from "@/content/technologies";
import { technologyBadgeStyle } from "@/content/technology-colors";

export function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      className="technologies-section"
      aria-labelledby="technologies-title"
      tabIndex={-1}
    >
      <Container>
        <SectionHeading
          id="technologies-title"
          eyebrow="TECNOLOGIAS"
          title="Ferramentas para"
          accent="colocar ideias em prática."
          description="Tecnologias que fazem parte dos meus estudos e projetos. A lista pode evoluir junto com o trabalho."
        />
        <ul className="technologies-section__grid">
          {technologyGroups.map((group) => (
            <li className="technologies-section__group" key={group.category}>
              <h3>{group.title}</h3>
              <ul
                className="technologies-section__items"
                aria-label={group.title}
              >
                {group.items.map((item) => (
                  <li
                    className="technology-badge"
                    key={item}
                    style={technologyBadgeStyle(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
