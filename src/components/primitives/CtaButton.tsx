import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "group inline-flex items-center gap-2.5 text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2";

const variants = {
  primary:
    "rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-[var(--color-navy-900)] hover:bg-[var(--color-gold-soft)]",
  ghost:
    "rounded-full border border-current/25 px-7 py-3.5 text-current hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
} as const;

/** Primary and secondary calls to action, with a subtle arrow micro-interaction. */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
