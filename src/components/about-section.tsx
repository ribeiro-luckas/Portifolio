import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="about-section"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <Container className="about-section__inner">
        <div className="about-section__story">
          <SectionHeading
            id="about-title"
            eyebrow={profile.eyebrow}
            title={profile.title}
            accent={profile.titleAccent}
          />
          <div className="about-section__prose">
            <p>{profile.introduction}</p>
            <p>{profile.continuation}</p>
          </div>
        </div>
        <ol className="about-section__path" aria-label="Aspectos da trajetória">
          {profile.paths.map((item, index) => (
            <li className="about-section__path-item" key={item.title}>
              <span className="about-section__path-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
