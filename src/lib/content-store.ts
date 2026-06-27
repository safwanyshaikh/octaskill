import type { SiteContent } from "@/lib/content-types";
import { defaultContent } from "@/content/defaults";

export const STORAGE_KEY = "workforce:content:v1";
export const AUTH_KEY = "workforce:admin-auth";
/** Client-side gate only — not real security. Change before any real use. */
export const ADMIN_PASSWORD = "workforce";

type Json = Record<string, unknown>;

/** Deep-merge a partial override onto a base object (arrays are replaced). */
export function deepMerge<T>(base: T, override: unknown): T {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    return (override === undefined ? base : (override as T)) ?? base;
  }
  const result: Json = { ...(base as Json) };
  for (const [key, value] of Object.entries(override as Json)) {
    if (value === undefined) continue;
    result[key] = deepMerge((base as Json)[key], value);
  }
  return result as T;
}

export function loadContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    return deepMerge(defaultContent, JSON.parse(raw));
  } catch {
    return defaultContent;
  }
}

export function saveContent(content: SiteContent): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function clearContent(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
