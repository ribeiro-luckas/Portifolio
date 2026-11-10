/** The public HTTPS origin is provided only when the portfolio is published. */
export function getSiteUrl(): URL | null {
  const configured = process.env.SITE_URL?.trim();
  if (!configured) return null;

  let url: URL;
  try {
    url = new URL(configured);
  } catch {
    throw new Error("SITE_URL must be an absolute HTTPS origin.");
  }

  if (
    url.protocol !== "https:" ||
    !url.hostname ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("SITE_URL must be an absolute HTTPS origin.");
  }

  return url;
}
