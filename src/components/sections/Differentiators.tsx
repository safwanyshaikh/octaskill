import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { differentiators } from "@/content/differentiators";

export function Differentiators() {
  return (
    <section
      id="differentiators"
      aria-labelledby="differentiators-heading"
      className="bg-[var(--color-surface)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Key Differentiators</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="differentiators-heading"
              className="mt-8 block max-w-[16ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
            >
              Why enterprises trust WORKFORCE.
            </span>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 hairline" />
              <h3 className="mt-6 text-[length:var(--text-h3)] font-medium leading-tight tracking-tight text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
