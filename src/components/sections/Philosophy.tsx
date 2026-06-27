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
          <Eyebrow>Brand Philosophy</Eyebrow>
        </Reveal>

        <Reveal as="h2" delay={80}>
          <span
            id="philosophy-heading"
            className="mt-10 block text-[length:var(--text-h2)] font-light leading-[1.25] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            AI can analyse. AI can automate.{" "}
            <span className="text-[var(--color-muted)]">
              AI cannot own experience, judgement, trust, accountability or
              human adaptability.
            </span>{" "}
            <span className="font-medium text-[var(--color-gold)]">
              Those belong to humans.
            </span>
          </span>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-12 max-w-[54ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
            WORKFORCE combines deep human expertise with intelligent systems —{" "}
            <span className="text-[var(--color-ink)]">KAI</span> — to deliver
            assured outcomes at global scale. We don’t replace human judgement.
            We amplify human capability.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
