import type { ObjectStorage } from "./Storage";

/**
 * A storage class that utilizes the browser's sessionStorage API.
 * @example
 * ```ts
 * const storage = new SessionStorage();
 *
 * // Set a value that persists during the browser session
 * storage.set("currentUser", { id: 456, name: "User" });
 *
 * // Get the stored value
 * const currentUser = storage.get("currentUser");
 *
 * // Remove the value
 * storage.remove("currentUser");
 * ```
 */
export declare class SessionStorage {
  /**
   * Gets a value from storage by key.
   * @param key The storage key.
   * @param defaultValue The default value if key doesn't exist.
   * @returns The stored value or default value if key is not found.
   */
  public get: <T>(key: string, defaultValue?: T) => T;

  /**
   * Sets a value in storage.
   * @param key The storage key.
   * @param value The value to store.
   */
  public set: (key: string, value: unknown) => void;

  /**
   * Removes a key from storage.
   * @param key The storage key to remove.
   */
  public remove: (key: string) => void;

  /**
   * Clears all data from storage.
   */
  public clear: () => void;
}

/**
 * The storage implementation used for session-based storage needs.
 * At runtime, the system uses {@link SessionStorage} when `window.sessionStorage` is available,
 * otherwise it falls back to {@link ObjectStorage} for environments without session storage access.
 */
// TODO: 'ObjectStorage' is an 'error' type that acts as 'any' and overrides all other types in this union type.
export type impl = SessionStorage; // | ObjectStorage;
