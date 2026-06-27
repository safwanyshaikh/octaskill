"use client";

import { useState } from "react";
import { regions } from "@/content/regions";

/**
 * Interactive intelligence map. A dot-grid world canvas with focusable,
 * keyboard-navigable region nodes. Decorative paths are aria-hidden; each
 * node is a real button with an accessible name. Pulses are CSS and are
 * disabled under reduced motion via the global stylesheet.
 */
export function WorldMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-navy-900)]">
      <div
        className="relative w-full"
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* Dot-grid world canvas (decorative) */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.4px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(120% 90% at 50% 45%, #000 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(120% 90% at 50% 45%, #000 55%, transparent 100%)",
          }}
        />

        {/* Connecting filaments (decorative) */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {regions.slice(1).map((r, i) => {
            const prev = regions[i];
            return (
              <line
                key={r.name}
                x1={prev.x}
                y1={prev.y}
                x2={r.x}
                y2={r.y}
                stroke="rgba(184,145,80,0.28)"
                strokeWidth="0.25"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {/* Region nodes */}
        {regions.map((r) => (
          <button
            key={r.name}
            type="button"
            onMouseEnter={() => setActive(r.name)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(r.name)}
            onBlur={() => setActive(null)}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
            aria-label={r.name}
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[var(--color-gold)] opacity-60 [animation-duration:2.6s]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold-soft)] transition-transform duration-300 group-hover:scale-150 group-focus-visible:scale-150" />
            </span>
            <span
              className={`pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[var(--color-navy-900)] px-3 py-1 text-xs text-white transition-opacity duration-200 ${
                active === r.name ? "opacity-100" : "opacity-0"
              }`}
            >
              {r.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
