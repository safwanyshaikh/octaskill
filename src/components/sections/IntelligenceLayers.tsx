"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { useContent } from "@/components/content/ContentProvider";
import { site } from "@/lib/site";

export function IntelligenceLayers() {
  const { content } = useContent();
  const layers = content.layers;

  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="bg-[var(--color-ink)] py-[clamp(6rem,12vh,11rem)] text-white"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{layers.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="platform-heading"
              className="mt-8 block text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)]"
            >
              {layers.heading}
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 text-[length:var(--text-lead)] font-light leading-relaxed text-white/60">
              {layers.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {layers.items.map((layer, i) => (
            <Reveal
              key={layer.id}
              delay={(i % 3) * 80}
              className="group bg-[var(--color-ink)] p-8 transition-colors duration-500 hover:bg-white/[0.03] lg:p-10"
            >
              <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-gold)]">
                {layer.index}
              </span>
              <h3 className="mt-5 text-[length:var(--text-h3)] font-medium tracking-tight">
                {layer.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {layer.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 flex items-center gap-3 text-sm text-white/55">
            <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            Powered by{" "}
            <span className="font-medium text-[var(--color-gold)]">
              {site.augmentation}
            </span>{" "}
            — Human Intelligence Augmentation.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
