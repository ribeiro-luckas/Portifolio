import { Container } from "@/components/ui/container";
import { contact, emailHref, whatsappHref } from "@/content/contact";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <Container className="contact-section__inner">
        <div className="contact-section__intro">
          <p className="contact-section__eyebrow">
            <span aria-hidden="true" /> 05 / CONTATO
          </p>
          <h2 id="contact-title">
            Vamos começar <span>uma conversa.</span>
          </h2>
          <p>
            Tem uma ideia ou deseja entrar em contato? Escolha um dos canais
            abaixo.
          </p>
          <a className="contact-section__primary" href={emailHref}>
            Enviar e-mail <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-section__channels">
          <h3>Canais diretos</h3>
          <ul>
            <li>
              <span>E-mail</span>
              <a href={emailHref}>{contact.email}</a>
            </li>
            {whatsappHref && (
              <li>
                <span>WhatsApp</span>
                <a
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
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  Visitar perfil <span aria-hidden="true">↗</span>
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
