import { Container } from "@/components/ui/container";
import { contact, emailHref, whatsappHref } from "@/content/contact";
import { site } from "@/content/site";
import { RevealOnView } from "@/components/ui/reveal-on-view";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <span className="contact-section__orbit" aria-hidden="true" />
      <Container className="contact-section__inner">
        <RevealOnView className="contact-section__intro">
          <p className="contact-section__eyebrow">
            <span aria-hidden="true" /> CONTATO
          </p>
          <h2 id="contact-title">
            Vamos começar <span>uma conversa.</span>
          </h2>
          <p>
            Tem uma ideia ou deseja entrar em contato? Escolha um dos canais
            abaixo.
          </p>
          <div className="contact-section__actions">
            <a className="contact-section__primary" href={emailHref}>
              Enviar e-mail <span aria-hidden="true">↗</span>
            </a>
            {whatsappHref && (
              <a
                className="contact-section__whatsapp"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp <span aria-hidden="true">↗</span>
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            )}
          </div>
        </RevealOnView>

        <RevealOnView className="contact-section__channels">
          <h3>Canais diretos</h3>
          <ul>
            <li>
              <span>E-mail</span>
              <a className="animated-underline" href={emailHref}>
                {contact.email}
              </a>
            </li>
            {whatsappHref && (
              <li>
                <span>WhatsApp</span>
                <a
                  className="animated-underline"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iniciar conversa <span aria-hidden="true">↗</span>
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            )}
            <li>
              <span>GitHub</span>
              <a
                className="animated-underline"
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ribeiro-luckas <span aria-hidden="true">↗</span>
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </li>
            {contact.professionalLinks.map((link) => (
              <li key={link.href}>
                <span>{link.label}</span>
                <a
                  className="animated-underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar perfil <span aria-hidden="true">↗</span>
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </RevealOnView>
      </Container>
    </section>
  );
}
