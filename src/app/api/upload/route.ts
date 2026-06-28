import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { isAuthorized } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 4_000_000; // 4 MB
const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
};

/**
 * Stores an uploaded image and returns its public URL.
 *
 *  • Vercel Blob — used when `BLOB_READ_WRITE_TOKEN` is set (durable on
 *    serverless). Loaded dynamically so the package is only needed in prod.
 *  • Filesystem (default) — writes `public/uploads/<hash>.<ext>`, served by
 *    `next start`. Good for local/dev and long-lived Node servers.
 */
export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }
  const ext = EXT[file.type];
  if (!ext) {
    return NextResponse.json({ error: "Unsupported type" }, { status: 415 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large" }, { status: 413 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const name = `${crypto.randomBytes(8).toString("hex")}.${ext}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      // Variable specifier keeps the optional dep out of the build graph.
      const pkg = "@vercel/blob";
      const blobMod = (await import(pkg)) as {
        put: (
          key: string,
          body: Buffer,
          opts: { access: "public"; contentType: string },
        ) => Promise<{ url: string }>;
      };
      const blob = await blobMod.put(`uploads/${name}`, bytes, {
        access: "public",
        contentType: file.type,
      });
      return NextResponse.json({ url: blob.url });
    } catch {
      // fall through to filesystem
    }
  }

  const dir = path.join(process.cwd(), ".data", "uploads");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, name), bytes);
  return NextResponse.json({ url: `/api/uploads/${name}` });
}
