import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

const outcomes = [
  "Workforce visibility",
  "Verified capability",
  "Smarter hiring",
  "Faster deployment",
  "Operational resilience",
  "Better business outcomes",
];

export function WhyWorkforce() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="bg-[var(--color-surface)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>Why WORKFORCE</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="why-heading"
              className="mt-8 block max-w-[14ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
            >
              Intelligence creates better decisions.
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-[46ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
              Organisations collect data. Very few understand capability.
              WORKFORCE turns fragmented information into trusted enterprise
              intelligence.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-px self-center overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-[var(--color-grey-200)] sm:grid-cols-2">
          {outcomes.map((outcome, i) => (
            <Reveal
              key={outcome}
              as="li"
              delay={i * 70}
              className="flex items-center gap-4 bg-[var(--color-bg)] p-6"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
              />
              <span className="text-base font-medium tracking-tight text-[var(--color-ink)]">
                {outcome}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
