export type TechnologyCategory =
  "languages" | "frameworks" | "libraries" | "databases" | "tools" | "other";

export type TechnologyGroup = {
  category: TechnologyCategory;
  title: string;
  items: readonly string[];
};

/** Only skills explicitly confirmed by Luckas are rendered. */
export const technologyGroups = [
  {
    category: "languages",
    title: "Linguagens",
    items: ["TypeScript", "JavaScript", "PHP", "Java"],
  },
  {
    category: "frameworks",
    title: "Frameworks",
    items: ["Next.js", "Spring Boot"],
  },
  {
    category: "libraries",
    title: "Bibliotecas e estilos",
    items: ["React", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    category: "databases",
    title: "Bancos de dados",
    items: ["MySQL", "PostgreSQL"],
  },
] satisfies readonly TechnologyGroup[];
