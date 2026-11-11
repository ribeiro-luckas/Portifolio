"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ThemeLogo } from "@/components/theme-logo";

/** The optional media slot can host a personal photo after the user provides one. */
export function HeroVisual({ media }: { media?: ReactNode }) {
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = visual.current;
    if (!target || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        target.dataset.motionActive = String(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={visual}
      className="hero-visual"
      data-motion-active="true"
      aria-hidden={media ? undefined : true}
    >
      <div className="hero-visual__frame">
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
            {media ?? <ThemeLogo eager />}
          </span>
        </div>
      </div>
    </div>
  );
}
