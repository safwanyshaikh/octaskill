import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-[var(--color-bg)] py-[clamp(7rem,16vh,14rem)]"
    >
      <Container className="max-w-4xl">
        <Reveal>
          <Eyebrow>Philosophy</Eyebrow>
        </Reveal>

        <Reveal as="h2" delay={80}>
          <span
            id="philosophy-heading"
            className="mt-10 block text-[length:var(--text-h2)] font-light leading-[1.25] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            Technology processes information.{" "}
            <span className="text-[var(--color-muted)]">
              Human Intelligence creates progress.
            </span>{" "}
            <span className="font-serif italic text-[var(--color-gold)]">
              WORKFORCE exists where those two meet.
            </span>
          </span>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-12 max-w-[52ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
            Technology should never replace human judgement. It should amplify
            human capability. That belief guides every decision we make.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
