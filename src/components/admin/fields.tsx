"use client";

import { useRef, type ReactNode } from "react";

const labelCls =
  "block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]";
const inputCls =
  "mt-2 w-full rounded-lg border border-[var(--color-grey-200)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-gold)]";

export function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <input
        className={inputCls}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <textarea
        className={`${inputCls} resize-y leading-relaxed`}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | undefined;
  onChange: (v: number | undefined) => void;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <input
        type="number"
        step="any"
        className={inputCls}
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? undefined : Number(e.target.value))
        }
      />
    </label>
  );
}

/** Image picker: upload a file (stored as a data URL) or paste a URL. */
export function ImageField({
  label,
  value,
  onChange,
  name,
}: {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
  name: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 1_500_000) {
      alert("Please use an image under ~1.5 MB (stored in your browser).");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <span className={labelCls}>{label}</span>
      <div className="mt-2 flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[var(--color-navy)]">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-xs text-[var(--color-gold)]">
              {name.slice(0, 1).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <input
            className={inputCls.replace("mt-2 ", "")}
            placeholder="https://… image URL"
            value={value && !value.startsWith("data:") ? value : ""}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="rounded-md border border-[var(--color-grey-200)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] hover:border-[var(--color-gold)]"
            >
              Upload image
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                Clear
              </button>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFile(e.target.files?.[0])}
          />
        </div>
      </div>
    </div>
  );
}

export function ItemCard({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-grey-200)] bg-[var(--color-surface)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
          {title}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="text-xs font-medium text-[var(--color-muted)] hover:text-red-600"
        >
          Remove
        </button>
      </div>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}

export function AddButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-dashed border-[var(--color-grey-200)] px-4 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-ink)]"
    >
      {children}
    </button>
  );
}
