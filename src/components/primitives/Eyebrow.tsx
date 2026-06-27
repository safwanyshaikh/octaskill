type EyebrowProps = {
  children: string;
  className?: string;
};

/** Gold uppercase kicker that labels each section. */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-px w-6 bg-[var(--color-gold)]" />
      {children}
    </span>
  );
}
