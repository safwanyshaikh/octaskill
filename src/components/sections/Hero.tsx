import dynamic from "next/dynamic";
import { Container } from "@/components/primitives/Container";
import { CtaButton } from "@/components/primitives/CtaButton";
import { site } from "@/lib/site";

// Decorative canvas — loaded lazily so it never blocks first paint.
const NetworkCanvas = dynamic(
  () =>
    import("@/components/visuals/NetworkCanvas").then((m) => m.NetworkCanvas),
);

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[var(--color-navy-900)] text-white"
    >
      {/* Ambient intelligence network */}
      <div className="absolute inset-0">
        <NetworkCanvas />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,transparent_40%,var(--color-navy-900)_92%)]"
        />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-24 pt-36">
        <p className="eyebrow">Enterprise Workforce Intelligence</p>

        <h1
          id="hero-heading"
          className="mt-7 max-w-[16ch] text-[length:var(--text-display)] font-semibold leading-[var(--text-display--line-height)] tracking-[-0.03em]"
        >
          {site.name}
          <span className="align-super text-[0.3em] text-[var(--color-gold)]">
            ™
          </span>
        </h1>

        <p className="mt-6 text-[length:var(--text-h2)] font-light leading-[1.1] text-white/85">
          Human Intelligence.{" "}
          <span className="font-serif italic text-[var(--color-gold)]">
            Redefined.
          </span>
        </p>

        <p className="mt-8 max-w-[44ch] text-[length:var(--text-lead)] font-light leading-relaxed text-white/65">
          Understanding human capability before the world demands it.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaButton href="/#platform">Explore WORKFORCE</CtaButton>
          <CtaButton href="/contact" variant="ghost">
            Request Enterprise Consultation
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
