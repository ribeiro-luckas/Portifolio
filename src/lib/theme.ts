export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

/** Runs before hydration so a saved preference is applied before the first paint. */
export const initialThemeScript = `(() => {
  const key = ${JSON.stringify(THEME_STORAGE_KEY)};
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      const value = window.localStorage.getItem(key);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function applyTheme() {
    root.dataset.theme = savedTheme() || (system.matches ? "dark" : "light");
  }

  applyTheme();

  function onSystemChange() {
    if (!savedTheme()) applyTheme();
  }

  if (system.addEventListener) {
    system.addEventListener("change", onSystemChange);
  } else if (system.addListener) {
    system.addListener(onSystemChange);
  }

  window.addEventListener("storage", (event) => {
    if (event.key === key || event.key === null) applyTheme();
  });
})();`;
