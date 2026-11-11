"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealOnViewProps = {
  as?: "div" | "ol";
  className: string;
  children: ReactNode;
  ariaLabel?: string;
};

/** Server-rendered content stays visible until JavaScript can observe it. */
export function RevealOnView({
  as = "div",
  className,
  children,
  ariaLabel,
}: RevealOnViewProps) {
  const element = useRef<HTMLOListElement & HTMLDivElement>(null);

  useEffect(() => {
    const target = element.current;
    if (
      !target ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Do not conceal content already in view while hydration completes.
    if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
      return;
    }

    target.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(target);
    return () => {
      target.dataset.reveal = "visible";
      observer.disconnect();
    };
  }, []);

  if (as === "ol") {
    return (
      <ol ref={element} className={className} aria-label={ariaLabel}>
        {children}
      </ol>
    );
  }

  return (
    <div ref={element} className={className}>
      {children}
    </div>
  );
}
