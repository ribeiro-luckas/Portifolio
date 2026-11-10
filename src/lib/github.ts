import { projectsConfig, type ProjectSelection } from "@/content/projects";

type GithubRepository = {
  name: string;
  description: string | null;
  language: string | null;
  homepage: string | null;
  fork: boolean;
  archived: boolean;
};

export type PortfolioProject = {
  repository: string;
  title: string;
  description: string;
  technologies: readonly string[];
  repositoryUrl: string;
  demoUrl?: string;
  media?: ProjectSelection["media"];
};

function isRepository(value: unknown): value is GithubRepository {
  if (!value || typeof value !== "object") return false;
  const repo = value as Record<string, unknown>;
  return (
    typeof repo.name === "string" &&
    (typeof repo.description === "string" || repo.description === null) &&
    (typeof repo.language === "string" || repo.language === null) &&
    (typeof repo.homepage === "string" || repo.homepage === null) &&
    typeof repo.fork === "boolean" &&
    typeof repo.archived === "boolean"
  );
}

function publicWebUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

function projectFromSelection(
  selection: ProjectSelection,
  repository: GithubRepository | undefined,
): PortfolioProject {
  const description = selection.description || repository?.description?.trim();
  const language = repository?.language?.trim();
  const technologies = selection.technologies ?? (language ? [language] : []);

  return {
    repository: selection.repository,
    title: selection.title || selection.repository,
    description: description || projectsConfig.fallbackDescription,
    technologies,
    repositoryUrl: `https://github.com/${projectsConfig.username}/${encodeURIComponent(selection.repository)}`,
    demoUrl: publicWebUrl(selection.demoUrl || repository?.homepage),
    media: selection.media,
  };
}

export async function getSelectedProjects(): Promise<PortfolioProject[]> {
  let repositories: GithubRepository[] = [];

  try {
    const url = new URL(
      `https://api.github.com/users/${projectsConfig.username}/repos`,
    );
    url.search = new URLSearchParams({
      type: "owner",
      sort: "updated",
      per_page: "100",
    }).toString();

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio-profissional",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);

    const payload: unknown = await response.json();
    if (!Array.isArray(payload))
      throw new Error("GitHub API: invalid response");
    repositories = payload.filter(isRepository);
  } catch {
    // The configured cards and repository links stay usable without the API.
  }

  const byName = new Map(repositories.map((repo) => [repo.name, repo]));
  return projectsConfig.selected.map((selection) =>
    projectFromSelection(selection, byName.get(selection.repository)),
  );
}
