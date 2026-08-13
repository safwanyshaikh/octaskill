import { site } from "@/lib/site";

type LogoProps = {
  /** Show the small "SAY" signature above the wordmark. */
  signature?: boolean;
  className?: string;
};

/** WORKFORCE wordmark with the gold W monogram and optional SAY signature. */
export function Logo({ signature = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <WMark className="h-7 w-7 shrink-0" />
      <span className="flex flex-col leading-none">
        {signature && (
          <span className="text-[0.6rem] font-semibold tracking-[0.42em] text-[var(--color-gold)]">
            {site.signature}
          </span>
        )}
        <span className="mt-0.5 text-base font-semibold tracking-[0.16em]">
          {site.name}
        </span>
      </span>
    </span>
  );
}

export function WMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="WORKFORCE"
    >
      <path
        d="M4 7 L9 25 L16 12 L23 25 L28 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--color-gold)]"
      />
    </svg>
  );
}
