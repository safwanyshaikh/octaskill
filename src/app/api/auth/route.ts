import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/server/auth";

export const runtime = "nodejs";

/** Validates the editor password (sent as the x-admin-password header). */
export async function POST(req: Request) {
  return NextResponse.json({ ok: isAuthorized(req) });
}
