"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";

export function Solutions() {
  const { content } = useContent();
  const s = content.solutions;

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="bg-[var(--color-surface)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="solutions-heading"
              className="mt-8 block max-w-[15ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
            >
              {s.heading}
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-[44ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
              {s.intro}
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-px self-center overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-[var(--color-grey-200)] sm:grid-cols-2">
          {s.items.map((solution, i) => (
            <Reveal
              key={solution}
              as="li"
              delay={(i % 2) * 70}
              className="group flex items-center gap-4 bg-[var(--color-bg)] p-6 transition-colors duration-300 hover:bg-[var(--color-surface)]"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
              />
              <span className="text-base font-medium tracking-tight text-[var(--color-ink)]">
                {solution}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
