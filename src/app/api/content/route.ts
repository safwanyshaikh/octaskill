import { NextResponse } from "next/server";
import { getContent, putContent } from "@/lib/server/content-repo";
import { isAuthorized } from "@/lib/server/auth";
import type { SiteContent } from "@/lib/content-types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function PUT(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: SiteContent;
  try {
    body = (await req.json()) as SiteContent;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body || typeof body !== "object" || !("hero" in body)) {
    return NextResponse.json({ error: "Invalid content" }, { status: 400 });
  }
  await putContent(body);
  return NextResponse.json({ ok: true });
}
