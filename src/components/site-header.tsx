"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a
          className="site-brand"
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          aria-label={`${site.name}, início`}
        >
          <span className="site-brand__symbol" aria-hidden="true">
            {site.initials}
            <span>.</span>
          </span>
          <span className="site-brand__divider" aria-hidden="true" />
          <span className="site-brand__name">{site.name}</span>
        </a>

        <button
          ref={menuButton}
          className="site-menu-button"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-menu-button__bars" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className="site-nav"
          data-open={menuOpen}
          aria-label="Navegação principal"
        >
          <a
            className="site-nav__link"
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            aria-current="page"
          >
            Início
          </a>
          <a
            className="site-nav__link"
            href="#sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre mim
          </a>
          <a
            className="site-nav__link"
            href="#tecnologias"
            onClick={() => setMenuOpen(false)}
          >
            Tecnologias
          </a>
          <a
            className="site-nav__link"
            href="#projetos"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </a>
          <a
            className="site-nav__link"
            href={site.contactHref}
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </nav>

        <a className="site-header__action" href={site.contactHref}>
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </Container>
    </header>
  );
}
