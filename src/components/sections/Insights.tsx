"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";

export function Insights() {
  const { content } = useContent();
  const ins = content.insights;

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="bg-[var(--color-bg)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>{ins.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={80}>
              <span
                id="insights-heading"
                className="mt-8 block max-w-[16ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
              >
                {ins.heading}
              </span>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-[46ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
              {ins.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-grey-200)] bg-[var(--color-grey-200)] md:grid-cols-3">
          {ins.items.map((item, i) => (
            <Reveal
              key={item.id}
              as="li"
              delay={(i % 3) * 80}
              className="group flex flex-col bg-[var(--color-bg)] p-8 transition-colors duration-300 hover:bg-[var(--color-surface)] lg:p-10"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {item.date}
              </span>
              <h3 className="mt-5 text-[length:var(--text-h3)] font-medium leading-tight tracking-tight text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.excerpt}
              </p>
              <span
                aria-hidden
                className="mt-6 text-sm text-[var(--color-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Read →
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
