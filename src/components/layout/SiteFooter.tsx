import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Container } from "@/components/primitives/Container";

/** Quiet, minimal, timeless footer. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-900)] text-white/70">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-base font-semibold tracking-[0.14em] text-white"
            >
              {site.name}
              <span className="align-super text-[0.55em] text-[var(--color-gold)]">
                ™
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {site.tagline}
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

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.trademark}. All rights reserved.
          </p>
          <p className="tracking-[0.14em]">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
