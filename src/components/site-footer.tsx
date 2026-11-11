import { Container } from "@/components/ui/container";
import { ThemeLogo } from "@/components/theme-logo";
import { site } from "@/content/site";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <a
          className="site-footer__brand"
          href="#inicio"
          aria-label={`${site.name}, voltar ao início`}
        >
          <ThemeLogo />
        </a>
        <nav aria-label="Navegação do rodapé">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
