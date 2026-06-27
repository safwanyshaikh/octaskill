import dynamic from "next/dynamic";
import { Container } from "@/components/primitives/Container";
import { CtaButton } from "@/components/primitives/CtaButton";
import { site } from "@/lib/site";

// Decorative globe — loaded lazily so it never blocks first paint.
const GlobeCanvas = dynamic(() =>
  import("@/components/visuals/GlobeCanvas").then((m) => m.GlobeCanvas),
);

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[var(--color-navy-900)] text-white"
    >
      {/* Luminous intelligence globe, anchored top-right and cropped */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] -top-[22%] aspect-square w-[62rem] max-w-[120vw] sm:-right-[8%] lg:-top-[28%]"
      >
        <GlobeCanvas />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_-10%,transparent_42%,var(--color-navy-900)_88%)]"
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-24 pt-36">
        <p className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.42em] text-[var(--color-gold)]">
          {site.signature}
          <span aria-hidden className="h-px w-8 bg-[var(--color-gold)]/50" />
          {site.category}
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-[16ch] text-[length:var(--text-display)] font-bold leading-[var(--text-display--line-height)] tracking-[-0.03em]"
        >
          {site.name}
          <span className="align-super text-[0.28em] text-[var(--color-gold)]">
            ™
          </span>
        </h1>

        <p className="mt-6 text-[length:var(--text-h2)] font-light leading-[1.1] text-[var(--color-gold)]">
          Human Intelligence. Redefined.
        </p>

        <p className="mt-8 max-w-[48ch] text-[length:var(--text-lead)] font-light leading-relaxed text-white/65">
          Building the infrastructure that enables global enterprises to
          discover, verify and deploy human intelligence.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaButton href="/#platform">Explore Platform</CtaButton>
          <CtaButton href="/contact" variant="ghost">
            Enterprise Solutions
          </CtaButton>
        </div>
      </Container>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex"
      >
        <span className="text-[0.7rem] tracking-[0.2em]">SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
      </div>
    </section>
  );
}
