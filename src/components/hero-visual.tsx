import type { ReactNode } from "react";
import { site } from "@/content/site";

/** The optional media slot can host a personal photo after the user provides one. */
export function HeroVisual({ media }: { media?: ReactNode }) {
  return (
    <div className="hero-visual" aria-hidden={media ? undefined : true}>
      <div className="hero-visual__frame">
        <span
          className="hero-visual__coordinate hero-visual__coordinate--top"
          aria-hidden="true"
        >
          01 / PORTFÓLIO
        </span>
        <span
          className="hero-visual__coordinate hero-visual__coordinate--bottom"
          aria-hidden="true"
        >
          EXPLORAR · CRIAR
        </span>
        <div className="hero-visual__orbit">
          <span
            className="hero-visual__orbit-ring hero-visual__orbit-ring--outer"
            aria-hidden="true"
          />
          <span
            className="hero-visual__orbit-ring hero-visual__orbit-ring--middle"
            aria-hidden="true"
          />
          <span
            className="hero-visual__orbit-ring hero-visual__orbit-ring--inner"
            aria-hidden="true"
          />
          <span className="hero-visual__orbit-axis" aria-hidden="true" />
          <span
            className="hero-visual__orbit-dot hero-visual__orbit-dot--one"
            aria-hidden="true"
          />
          <span
            className="hero-visual__orbit-dot hero-visual__orbit-dot--two"
            aria-hidden="true"
          />
          <span className="hero-visual__orbit-core">
            {media ?? <span>{site.initials}</span>}
          </span>
        </div>
      </div>
    </div>
  );
}
