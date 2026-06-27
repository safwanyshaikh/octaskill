"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { Container } from "@/components/primitives/Container";

/** Sticky top navigation. Transparent over the hero, then frosts on scroll. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[var(--color-navy-900)]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between text-white">
        <Link
          href="/"
          className="text-base font-semibold tracking-[0.14em]"
          aria-label={`${site.name} home`}
        >
          {site.name}
          <span className="align-super text-[0.55em] text-[var(--color-gold)]">
            ™
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/25 px-5 py-2.5 text-sm text-white transition-colors duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:inline-flex"
        >
          Request Consultation
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex flex-col gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden"
          style={{ height: "calc(100dvh - 5rem)" }}
        >
          <Container className="flex h-full flex-col justify-between bg-[var(--color-navy-900)] pb-12 pt-8">
            <nav aria-label="Primary mobile" className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-2xl text-white/80 transition-colors hover:text-[var(--color-gold)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[var(--color-gold)] px-7 py-4 text-center text-sm font-medium text-[var(--color-navy-900)]"
            >
              Request Enterprise Consultation
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
