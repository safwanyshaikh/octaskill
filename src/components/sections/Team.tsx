"use client";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { SmartImage } from "@/components/primitives/SmartImage";
import { useContent } from "@/components/content/ContentProvider";

export function Team() {
  const { content } = useContent();
  const t = content.team;

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="bg-[var(--color-surface)] py-[clamp(6rem,12vh,11rem)]"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={80}>
            <span
              id="team-heading"
              className="mt-8 block max-w-[16ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] text-[var(--color-ink)]"
            >
              {t.heading}
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-[46ch] text-[length:var(--text-lead)] font-light leading-relaxed text-[var(--color-muted)]">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.members.map((member, i) => (
            <Reveal key={member.id} as="li" delay={(i % 4) * 70}>
              <SmartImage
                src={member.image}
                name={member.name}
                alt={`${member.name}, ${member.role}`}
                className="aspect-[4/5] w-full"
              />
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-gold)]">
                {member.role}
              </p>
              {member.bio && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {member.bio}
                </p>
              )}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
