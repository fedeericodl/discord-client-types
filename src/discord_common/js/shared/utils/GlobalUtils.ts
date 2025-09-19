/**
 * Returns the global object for the current JavaScript environment.
 * Attempts to detect and return the appropriate global object (globalThis, window, global, self)
 * based on availability in different environments.
 * Falls back to an empty object if no global object is found.
 */
export type GetGlobalObject = () => typeof globalThis | typeof window;
