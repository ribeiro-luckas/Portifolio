import type { CSSProperties } from "react";

/** Brand hues from Simple Icons; Java Orange follows Oracle's Java guidelines. */
export const technologyColors = {
  TypeScript: {
    id: "typescript",
    brand: "#3178C6",
    light: "#235A94",
    dark: "#9ACBFF",
  },
  JavaScript: {
    id: "javascript",
    brand: "#F7DF1E",
    light: "#685000",
    dark: "#FFE873",
  },
  PHP: { id: "php", brand: "#777BB4", light: "#514B88", dark: "#C8CAFF" },
  Java: { id: "java", brand: "#ED8B00", light: "#8B4700", dark: "#FFBE6A" },
  "Next.js": {
    id: "nextdotjs",
    brand: "#000000",
    light: "#252D3A",
    dark: "#F8FAFC",
  },
  "Spring Boot": {
    id: "springboot",
    brand: "#6DB33F",
    light: "#426A1D",
    dark: "#B9E68E",
  },
  React: { id: "react", brand: "#61DAFB", light: "#00667A", dark: "#8AE8FF" },
  "Tailwind CSS": {
    id: "tailwindcss",
    brand: "#06B6D4",
    light: "#006D7F",
    dark: "#79E4F4",
  },
  Bootstrap: {
    id: "bootstrap",
    brand: "#7952B3",
    light: "#58318B",
    dark: "#CEB0FF",
  },
  jQuery: { id: "jquery", brand: "#0769AD", light: "#15598C", dark: "#91CFFF" },
  MySQL: { id: "mysql", brand: "#4479A1", light: "#285B77", dark: "#A9D4EE" },
  PostgreSQL: {
    id: "postgresql",
    brand: "#4169E1",
    light: "#28549E",
    dark: "#AFC7FF",
  },
} as const;

type TechnologyBadgeStyle = CSSProperties & {
  "--technology-brand"?: string;
  "--technology-light-ink"?: string;
  "--technology-dark-ink"?: string;
};

export function technologyBadgeStyle(
  name: string,
): TechnologyBadgeStyle | undefined {
  const technology = technologyColors[name as keyof typeof technologyColors];
  if (!technology) return undefined;

  return {
    "--technology-brand": technology.brand,
    "--technology-light-ink": technology.light,
    "--technology-dark-ink": technology.dark,
  };
}
