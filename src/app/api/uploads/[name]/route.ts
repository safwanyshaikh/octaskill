import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const TYPES: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
  avif: "image/avif",
};

/** Serves images uploaded to the filesystem store (.data/uploads). */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  // Guard against path traversal — allow a plain hashed filename only.
  if (!/^[a-f0-9]+\.[a-z]+$/i.test(name)) {
    return new Response("Not found", { status: 404 });
  }
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const type = TYPES[ext];
  if (!type) return new Response("Not found", { status: 404 });

  try {
    const file = await fs.readFile(
      path.join(process.cwd(), ".data", "uploads", name),
    );
    return new Response(new Uint8Array(file), {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
