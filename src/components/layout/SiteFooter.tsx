import Link from "next/link";
import { footerNav, footerPillars, site } from "@/lib/site";
import { Container } from "@/components/primitives/Container";
import { Logo } from "@/components/brand/Logo";

/** Quiet, minimal, timeless footer with the brand pillars and signature. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-900)] text-white/70">
      <Container className="py-20">
        {/* Brand pillars */}
        <div className="grid gap-10 border-b border-white/10 pb-14 sm:grid-cols-3">
          {footerPillars.map((pillar) => (
            <div key={pillar.heading}>
              <h2 className="eyebrow">{pillar.heading}</h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {site.category}. Powered by {site.augmentation} — Human
              Intelligence Augmentation.
            </p>
          </div>

          {footerNav.map((column) => (
            <div key={column.heading}>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                {column.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-[var(--color-gold)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.parent}. All rights reserved.
          </p>
          <p className="tracking-[0.14em]">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
