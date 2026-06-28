"use client";

import { useEffect, useState } from "react";
import { AdminEditor } from "@/components/admin/AdminEditor";
import { AUTH_KEY, getStoredPassword, verifyPassword } from "@/lib/admin-client";

/**
 * Content Studio gate. The password is verified by the server (POST /api/auth)
 * and every write re-checks it, so this is real server-side enforcement — not
 * just a client guard. The password is kept in sessionStorage for the session.
 */
export default function AdminPage() {
  const [password, setPassword] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = getStoredPassword();
    if (stored) {
      verifyPassword(stored).then((ok) => {
        if (ok) setPassword(stored);
        setReady(true);
      });
    } else {
      setReady(true);
    }
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await verifyPassword(value);
    if (ok) {
      sessionStorage.setItem(AUTH_KEY, value);
      setPassword(value);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!ready) return null;
  if (password) return <AdminEditor password={password} />;

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
          Authorised access only
        </p>
      </form>
    </main>
  );
}
