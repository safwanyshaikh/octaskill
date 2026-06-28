import "server-only";

/**
 * Editor password, enforced on the server for every write. Set ADMIN_PASSWORD
 * in the environment for production; falls back to a demo value otherwise.
 */
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Indian@321";

export function isAuthorized(req: Request): boolean {
  const provided = req.headers.get("x-admin-password");
  return Boolean(provided) && provided === ADMIN_PASSWORD;
}
