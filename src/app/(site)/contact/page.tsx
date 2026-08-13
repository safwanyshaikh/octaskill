import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { CtaButton } from "@/components/primitives/CtaButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start the Conversation",
  description:
    "Request an enterprise consultation with WORKFORCE — the global workforce intelligence company.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Enterprise", value: "enterprise@workforce.example" },
  { label: "Partnerships", value: "partners@workforce.example" },
  { label: "Media", value: "media@workforce.example" },
];

export default function ContactPage() {
  return (
    <main id="main" className="bg-[var(--color-navy-900)] text-white">
      <Container className="flex min-h-[100svh] flex-col justify-center py-40">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-8 max-w-[16ch] text-[length:var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)]">
              Start the conversation.
            </h1>
            <p className="mt-8 max-w-[44ch] text-[length:var(--text-lead)] font-light leading-relaxed text-white/65">
              We work with leadership teams building the workforce of the next
              decade. Tell us where you are headed.
            </p>
            <div className="mt-12">
              <CtaButton href="mailto:enterprise@workforce.example">
                Request a Demo
              </CtaButton>
            </div>
          </div>

          <div className="self-center">
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {channels.map((channel) => (
                <div
                  key={channel.label}
                  className="flex items-center justify-between gap-6 py-6"
                >
                  <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {channel.label}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${channel.value}`}
                      className="text-sm text-white/80 transition-colors hover:text-[var(--color-gold)]"
                    >
                      {channel.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-sm leading-relaxed text-white/45">
              {site.trademark} — {site.tagline}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
