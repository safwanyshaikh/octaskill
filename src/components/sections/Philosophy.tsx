"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";

export function Philosophy() {
  const { content } = useContent();
  const p = content.philosophy;

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-[var(--color-bg)] py-[clamp(7rem,16vh,14rem)]"
    >
      <Container className="max-w-4xl">
        <Reveal>
          <Eyebrow>{p.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal as="h2" delay={80}>
          <span
            id="philosophy-heading"
            className="mt-10 block text-[length:var(--text-h2)] font-light leading-[1.25] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            {p.lead}{" "}
            <span className="text-[var(--color-muted)]">{p.emphasis}</span>{" "}
            <span className="font-medium text-[var(--color-gold)]">
              {p.accent}
            </span>
          </span>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-12 max-w-[54ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
            {p.body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
