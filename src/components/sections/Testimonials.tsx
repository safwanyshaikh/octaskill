"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";

export function Testimonials() {
  const { content } = useContent();
  const t = content.testimonials;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[var(--color-ink)] py-[clamp(6rem,12vh,11rem)] text-white"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="testimonials-heading"
              className="mt-8 block max-w-[16ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)]"
            >
              {t.heading}
            </span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 80}
              className="flex flex-col justify-between bg-[var(--color-ink)] p-8 lg:p-10"
            >
              <p className="text-[length:var(--text-h3)] font-light leading-[1.4] tracking-[-0.01em] text-white/90">
                “{item.quote}”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-gold)]" />
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-white/50">{item.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {t.logos.length > 0 && (
          <Reveal delay={120}>
            <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-12">
              {t.logos.map((logo) => (
                <li
                  key={logo}
                  className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.12em] text-white/40"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
