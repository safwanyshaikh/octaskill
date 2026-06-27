import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="bg-[var(--color-ink)] py-[clamp(6rem,12vh,11rem)] text-white"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Enterprise Capabilities</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="platform-heading"
              className="mt-8 block text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)]"
            >
              One platform. Nine intelligences.
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 text-[length:var(--text-lead)] font-light leading-relaxed text-white/60">
              Each capability is measured by the business value it creates — not
              the technology behind it.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={(i % 3) * 80}
              className="group bg-[var(--color-ink)] p-8 transition-colors duration-500 hover:bg-white/[0.03] lg:p-10"
            >
              <span className="font-serif text-sm text-[var(--color-gold)]">
                {cap.index}
              </span>
              <h3 className="mt-5 text-[length:var(--text-h3)] font-medium tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {cap.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
