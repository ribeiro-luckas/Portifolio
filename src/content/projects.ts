/** Edit this list to choose the public repositories shown on the homepage. */
export type ProjectSelection = {
  repository: string;
  title?: string;
  description?: string;
  technologies?: readonly string[];
  demoUrl?: string;
  media?: {
    /** Place the file in public/projects; PNG, JPG, WebP and GIF are supported. */
    src: `/projects/${string}`;
    alt: string;
  };
};

export const projectsConfig = {
  username: "ribeiro-luckas",
  fallbackDescription: "Descrição ainda não disponível no GitHub.",
  selected: [
    { repository: "crm-gestao-clientes" },
    { repository: "product-management-system-api" },
    { repository: "to-do-list-API" },
    { repository: "digital-cep" },
  ] satisfies readonly ProjectSelection[],
} as const;
