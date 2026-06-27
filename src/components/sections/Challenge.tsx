import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

const shifts = [
  { label: "Skills evolve", detail: "Capability has a shorter half-life than ever." },
  { label: "Industries transform", detail: "Whole sectors reshape within a single cycle." },
  { label: "Talent moves globally", detail: "People and capability cross every border." },
];

export function Challenge() {
  return (
    <section
      id="challenge"
      aria-labelledby="challenge-heading"
      className="bg-[var(--color-bg)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container>
        <Reveal>
          <Eyebrow>The Challenge</Eyebrow>
        </Reveal>

        <Reveal as="h2" delay={80}>
          <span
            id="challenge-heading"
            className="mt-8 block max-w-[16ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
          >
            The workforce has changed.
          </span>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 max-w-[52ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
            Traditional workforce systems struggle to keep pace. They record
            information. Very few create intelligence.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-[var(--color-grey-200)] sm:grid-cols-3">
          {shifts.map((shift, i) => (
            <Reveal
              key={shift.label}
              delay={i * 100}
              className="bg-[var(--color-bg)] p-8 sm:p-10"
            >
              <p className="text-[length:var(--text-h3)] font-medium tracking-tight text-[var(--color-ink)]">
                {shift.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {shift.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
