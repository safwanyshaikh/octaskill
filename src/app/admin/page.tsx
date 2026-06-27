"use client";

import { useEffect, useState } from "react";
import { AdminEditor } from "@/components/admin/AdminEditor";
import { ADMIN_PASSWORD, AUTH_KEY } from "@/lib/content-store";

/**
 * Content Studio. The password gate is a client-side convenience only — it
 * keeps the editor out of casual reach but is NOT real security (the check
 * runs in the browser). For production, put this behind real auth / middleware.
 */
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(AUTH_KEY) === "1");
    setReady(true);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!ready) return null;
  if (authed) return <AdminEditor />;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-navy-900)] px-6 text-white">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8"
      >
        <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[var(--color-gold)]">
          WORKFORCE
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold">
          Content Studio
        </h1>
        <p className="mt-2 text-sm text-white/55">
          Enter the editor password to manage site content.
        </p>
        <input
          type="password"
          value={value}
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="mt-6 w-full rounded-lg border border-white/15 bg-[var(--color-navy-900)] px-4 py-3 text-sm outline-none focus:border-[var(--color-gold)]"
        />
        {error && (
          <p className="mt-2 text-xs text-red-400">Incorrect password.</p>
        )}
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-navy-900)] hover:bg-[var(--color-gold-soft)]"
        >
          Enter
        </button>
        <p className="mt-4 text-center text-[0.7rem] text-white/30">
          Demo password: workforce
        </p>
      </form>
    </main>
  );
}
