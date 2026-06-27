"use client";

import { useEffect, useRef, useState } from "react";

type StatProps = {
  /** Numeric target to count up to. Omit for static values like "24/7". */
  value?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Non-numeric display that skips the count-up (e.g. "24/7"). */
  display?: string;
  label: string;
};

/**
 * A single enterprise metric that counts up once when scrolled into view.
 * Respects reduced motion (renders the final value immediately).
 */
export function Stat({
  value = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  display,
  label,
}: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(display ? value : 0);

  useEffect(() => {
    if (display) return;
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setN(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(value * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, display]);

  return (
    <div ref={ref}>
      <p className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] font-semibold leading-none tracking-tight text-[var(--color-ink)]">
        {display ??
          `${prefix}${n.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}${suffix}`}
      </p>
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {label}
      </p>
    </div>
  );
}
