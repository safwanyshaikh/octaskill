"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";

export function Industries() {
  const { content } = useContent();
  const ind = content.industries;

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-[var(--color-bg)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>{ind.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={80}>
              <span
                id="industries-heading"
                className="mt-8 block max-w-[14ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
              >
                {ind.heading}
              </span>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-[46ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
              {ind.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-[var(--color-grey-200)] sm:grid-cols-2 lg:grid-cols-3">
          {ind.items.map((industry, i) => (
            <Reveal
              key={industry}
              as="li"
              delay={(i % 3) * 60}
              className="group flex items-center justify-between bg-[var(--color-bg)] px-7 py-8 transition-colors duration-300 hover:bg-[var(--color-surface)]"
            >
              <span className="text-base font-medium tracking-tight text-[var(--color-ink)]">
                {industry}
              </span>
              <span
                aria-hidden
                className="text-[var(--color-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                →
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
