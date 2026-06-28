type Json = Record<string, unknown>;

/**
 * Deep-merge a partial override onto a base object. Arrays and primitives are
 * replaced wholesale; plain objects are merged key by key. Used to layer
 * stored content over the built-in defaults on the server.
 */
export function deepMerge<T>(base: T, override: unknown): T {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    return (override === undefined ? base : (override as T)) ?? base;
  }
  const result: Json = { ...(base as Json) };
  for (const [key, value] of Object.entries(override as Json)) {
    if (value === undefined) continue;
    result[key] = deepMerge((base as Json)[key], value);
  }
  return result as T;
}
