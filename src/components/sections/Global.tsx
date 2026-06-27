import dynamic from "next/dynamic";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

const WorldMap = dynamic(
  () => import("@/components/visuals/WorldMap").then((m) => m.WorldMap),
  {
    loading: () => (
      <div
        className="w-full rounded-2xl border border-white/10 bg-[var(--color-navy-900)]"
        style={{ aspectRatio: "16 / 9" }}
      />
    ),
  },
);

export function Global() {
  return (
    <section
      id="network"
      aria-labelledby="network-heading"
      className="bg-[var(--color-ink)] py-[clamp(6rem,12vh,11rem)] text-white"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <Eyebrow>Global Intelligence Network</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="network-heading"
              className="mt-8 block text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)]"
            >
              One network. One standard.
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-8 max-w-[44ch] text-[length:var(--text-lead)] font-light leading-relaxed text-white/60">
              Boundless human intelligence — on-ground expertise in every region
              you operate, connected as one living ecosystem.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16">
          <WorldMap />
        </Reveal>
      </Container>
    </section>
  );
}
