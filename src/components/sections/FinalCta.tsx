import { Container } from "@/components/primitives/Container";
import { CtaButton } from "@/components/primitives/CtaButton";
import { Reveal } from "@/components/primitives/Reveal";
import { site } from "@/lib/site";

export function FinalCta() {
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
            The future belongs to organisations that understand Human
            Intelligence.
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
          <CtaButton href="/contact">Request a Demo</CtaButton>
          <CtaButton href="/contact" variant="ghost">
            Start the Conversation
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
