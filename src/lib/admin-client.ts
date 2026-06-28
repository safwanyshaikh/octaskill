import type { SiteContent } from "@/lib/content-types";

/** sessionStorage key holding the editor password for the current session. */
export const AUTH_KEY = "workforce:admin-pw";

export function getStoredPassword(): string {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(AUTH_KEY) ?? "";
}

export async function verifyPassword(password: string): Promise<boolean> {
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "x-admin-password": password },
  });
  const data = (await res.json()) as { ok: boolean };
  return data.ok;
}

export async function fetchContent(): Promise<SiteContent> {
  const res = await fetch("/api/content", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load content");
  return (await res.json()) as SiteContent;
}

export async function saveContent(
  content: SiteContent,
  password: string,
): Promise<void> {
  const res = await fetch("/api/content", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-admin-password": password,
    },
    body: JSON.stringify(content),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error ?? "Save failed");
  }
}

export async function uploadImage(
  file: File,
  password: string,
): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/upload", {
    method: "POST",
    headers: { "x-admin-password": password },
    body: form,
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error ?? "Upload failed");
  }
  const data = (await res.json()) as { url: string };
  return data.url;
}
