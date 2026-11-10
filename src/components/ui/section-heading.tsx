type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id}>
        {title} <span>{accent}</span>
      </h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}
