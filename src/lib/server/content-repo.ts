import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { SiteContent } from "@/lib/content-types";
import { defaultContent } from "@/content/defaults";
import { deepMerge } from "@/lib/deep-merge";

/**
 * Server-side content store. Two adapters, chosen automatically:
 *
 *  • Vercel KV / Upstash Redis — used when `KV_REST_API_URL` and
 *    `KV_REST_API_TOKEN` are set (the standard Vercel KV env vars). This is
 *    the shared, production-grade store: every visitor sees the same content.
 *  • Filesystem JSON (default) — writes `.data/content.json`. Works in local
 *    dev and on any long-lived Node server; shared across all visitors to that
 *    server. (Not suitable for Vercel's ephemeral serverless FS — set up KV.)
 *
 * Stored docs are merged over `defaultContent`, so partial data never breaks
 * the site and new default fields appear automatically.
 */

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const KV_KEY = "workforce:content";
const FILE =
  process.env.CONTENT_FILE ?? path.join(process.cwd(), ".data", "content.json");

const usingKv = Boolean(KV_URL && KV_TOKEN);

async function kvCommand(command: unknown[]): Promise<unknown> {
  const res = await fetch(KV_URL as string, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV ${command[0]} failed: ${res.status}`);
  const data = (await res.json()) as { result?: unknown };
  return data.result;
}

async function readStore(): Promise<Partial<SiteContent> | null> {
  try {
    if (usingKv) {
      const result = (await kvCommand(["GET", KV_KEY])) as string | null;
      return result ? (JSON.parse(result) as Partial<SiteContent>) : null;
    }
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw) as Partial<SiteContent>;
  } catch {
    return null;
  }
}

async function writeStore(content: SiteContent): Promise<void> {
  if (usingKv) {
    await kvCommand(["SET", KV_KEY, JSON.stringify(content)]);
    return;
  }
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(content, null, 2), "utf8");
}

/** Published content (defaults merged with the stored overrides). */
export async function getContent(): Promise<SiteContent> {
  const stored = await readStore();
  return stored ? deepMerge(defaultContent, stored) : defaultContent;
}

/** Persist the full content document to the shared store. */
export async function putContent(content: SiteContent): Promise<void> {
  await writeStore(content);
}

export const storeKind = usingKv ? "kv" : "file";
