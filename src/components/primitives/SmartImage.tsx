type SmartImageProps = {
  src?: string;
  alt: string;
  /** Seed used to build the monogram placeholder when no image is set. */
  name: string;
  className?: string;
  rounded?: string;
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Renders a content image when one is set, otherwise an elegant monogram
 * placeholder (navy field, gold initials) — so the layout never looks broken
 * before photos are uploaded through the editor. Uses a plain <img> because
 * sources are user-supplied URLs or data URLs from localStorage.
 */
export function SmartImage({
  src,
  alt,
  name,
  className = "",
  rounded = "rounded-2xl",
}: SmartImageProps) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        className={`${rounded} object-cover ${className}`}
        loading="lazy"
      />
    );
  }
  return (
    <div
      aria-label={alt}
      role="img"
      className={`flex items-center justify-center bg-[var(--color-navy)] ${rounded} ${className}`}
    >
      <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-gold)]">
        {initials(name) || "—"}
      </span>
    </div>
  );
}
