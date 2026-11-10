"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function currentTheme(): Theme | null {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function serverTheme(): Theme | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    currentTheme,
    serverTheme,
  );
  const label =
    theme === "dark"
      ? "Ativar tema claro"
      : theme === "light"
        ? "Ativar tema escuro"
        : "Alternar tema";

  function toggleTheme() {
    const nextTheme: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The choice still applies to the current page if storage is unavailable.
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <svg
        className="theme-toggle__icon theme-toggle__icon--moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20.3 15.9A8.5 8.5 0 0 1 8.1 3.7a8.6 8.6 0 1 0 12.2 12.2Z" />
      </svg>
      <svg
        className="theme-toggle__icon theme-toggle__icon--sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    </button>
  );
}
