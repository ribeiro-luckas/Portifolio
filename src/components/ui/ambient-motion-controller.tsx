"use client";

import { useEffect } from "react";

const sections =
  ".hero, .about-section, .technologies-section, .projects-section, .contact-section";

/** A single observer pauses decorative loops outside the viewport. */
export function AmbientMotionController() {
  useEffect(() => {
    if (!window.IntersectionObserver) return;

    const targets = document.querySelectorAll<HTMLElement>(sections);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        (entry.target as HTMLElement).dataset.ambientActive = String(
          entry.isIntersecting,
        );
      }
    });

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      target.dataset.ambientActive = String(
        rect.bottom > 0 && rect.top < window.innerHeight,
      );
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
