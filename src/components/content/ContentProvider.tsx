"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteContent } from "@/lib/content-types";

type ContentContextValue = { content: SiteContent };

const ContentContext = createContext<ContentContextValue | null>(null);

/**
 * Provides the published content (fetched on the server and passed in as
 * `initial`) to all section components. The public site is the read side; the
 * /admin Content Studio is the write side and talks to the API directly.
 */
export function ContentProvider({
  initial,
  children,
}: {
  initial: SiteContent;
  children: ReactNode;
}) {
  return (
    <ContentContext.Provider value={{ content: initial }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
}
