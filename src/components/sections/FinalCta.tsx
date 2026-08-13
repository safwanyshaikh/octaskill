"use client";

import { Container } from "@/components/primitives/Container";
import { CtaButton } from "@/components/primitives/CtaButton";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";
import { site } from "@/lib/site";

export function FinalCta() {
  const { content } = useContent();
  const cta = content.finalCta;

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[var(--color-navy-900)] py-[clamp(7rem,18vh,16rem)] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_120%,color-mix(in_srgb,var(--color-gold)_18%,transparent),transparent_70%)]"
      />
      <Container className="relative text-center">
        <Reveal as="h2" delay={0}>
          <span
            id="cta-heading"
            className="mx-auto block max-w-[20ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)]"
          >
            {cta.heading}
          </span>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 text-[length:var(--text-lead)] font-light text-white/70">
            {site.trademark} — {site.tagline}
          </p>
        </Reveal>

        <Reveal
          delay={200}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CtaButton href={cta.primaryCta.href}>
            {cta.primaryCta.label}
          </CtaButton>
          <CtaButton href={cta.secondaryCta.href} variant="ghost">
            {cta.secondaryCta.label}
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
