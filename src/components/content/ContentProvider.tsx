"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SiteContent } from "@/lib/content-types";
import { defaultContent } from "@/content/defaults";
import { loadContent, saveContent, clearContent } from "@/lib/content-store";

type ContentContextValue = {
  content: SiteContent;
  /** True once localStorage overrides have hydrated (client only). */
  hydrated: boolean;
  /** Replace the whole content tree (used by the editor). */
  setContent: (next: SiteContent) => void;
  /** Persist the current content to localStorage. */
  publish: (next: SiteContent) => void;
  /** Reset to built-in defaults. */
  reset: () => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  // Start from defaults so the server render and first client render match,
  // then hydrate any localStorage overrides after mount (no hydration error).
  const [content, setContentState] = useState<SiteContent>(defaultContent);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setContentState(loadContent());
    setHydrated(true);

    // Reflect edits made in another tab (e.g. the /admin editor).
    const onStorage = () => setContentState(loadContent());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setContent = useCallback((next: SiteContent) => {
    setContentState(next);
  }, []);

  const publish = useCallback((next: SiteContent) => {
    setContentState(next);
    saveContent(next);
  }, []);

  const reset = useCallback(() => {
    clearContent();
    setContentState(defaultContent);
  }, []);

  const value = useMemo(
    () => ({ content, hydrated, setContent, publish, reset }),
    [content, hydrated, setContent, publish, reset],
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
}
