"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
};

/**
 * Lightweight scroll-reveal. Uses one IntersectionObserver per element,
 * animates a single time, and never ships animation work to users who
 * prefer reduced motion (CSS also enforces this as a fallback).
 */
export function Reveal({
  children,
  as,
  delay = 0,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      node.setAttribute("data-revealed", "true");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.setAttribute("data-revealed", "true");
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
