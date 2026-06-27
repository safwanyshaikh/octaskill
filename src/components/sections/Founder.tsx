"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SmartImage } from "@/components/primitives/SmartImage";
import { useContent } from "@/components/content/ContentProvider";

export function Founder() {
  const { content } = useContent();
  const f = content.founder;

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="bg-[var(--color-bg)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SmartImage
              src={f.image}
              name={f.name}
              alt={`${f.name}, ${f.title}`}
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>{f.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal as="blockquote" delay={80}>
              <p
                id="founder-heading"
                className="mt-8 text-[length:var(--text-h3)] font-light leading-[1.4] tracking-[-0.01em] text-[var(--color-ink)]"
              >
                “{f.message}”
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--color-gold)]" />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-ink)]">
                    {f.name}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">{f.title}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
