/**
 * Represents storage that interacts with the browser's `localStorage` API.
 * Provides methods for getting, setting, removing values and other storage operations.
 * @example
 * ```ts
 * const storage = new LocalStorage();
 *
 * // Set a value
 * storage.set("user", { id: 123, name: "User" });
 *
 * // Get a value
 * const user = storage.get("user");
 *
 * // Remove a value
 * storage.remove("user");
 * ```
 */
export declare class LocalStorage {
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

  /**
   * Converts storage to JSON string.
   * @returns JSON string representation of storage.
   */
  public stringify: () => string;

  /**
   * Asynchronously gets raw data from external storage.
   * @param key The storage key.
   * @returns Promise resolving to the stored value or null.
   */
  public asyncGetRaw: (key: string) => Promise<string | null>;

  /**
   * Sets raw data in external storage.
   * @param key The storage key.
   * @param value The value to store as string.
   */
  public setRaw: (key: string, value: string) => void;

  /**
   * Gets a value after refresh.
   * @param key The storage key.
   * @returns Promise resolving to the stored value.
   */
  public getAfterRefresh: <T>(key: string) => Promise<T>;
}

/**
 * Represents an in-memory object-based storage.
 * Provides similar interface to {@link LocalStorage} but keeps data in memory instead of persisting to browser storage.
 * @example
 * ```ts
 * const storage = new ObjectStorage();
 *
 * // Set a value
 * storage.set("preferences", { theme: "dark", fontSize: 14 });
 *
 * // Get a value
 * const preferences = storage.get("preferences");
 *
 * // Get a value with default
 * const settings = storage.get("settings", { notifications: true });
 * ```
 */
export declare class ObjectStorage {
  public constructor();

  /**
   * Storage object containing key-value pairs.
   */
  public storage: Record<string, unknown>;

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

  /**
   * Converts storage to JSON string.
   * @returns JSON string representation of storage.
   */
  public stringify: () => string;

  /**
   * Asynchronously gets raw data from external storage.
   * @param key The storage key.
   * @returns Promise resolving to the stored value or null.
   */
  public asyncGetRaw: (key: string) => Promise<string | null>;

  /**
   * Sets raw data in external storage.
   * @param key The storage key.
   * @param value The value to store.
   */
  public setRaw: (key: string, value: string) => void;

  /**
   * Gets a stored value as a Promise.
   * Useful in contexts where async access is expected.
   * @param key The storage key.
   * @returns Promise resolving to the stored value.
   */
  public getAfterRefresh: <T>(key: string) => Promise<T>;
}

/**
 * The implementation for storage used throughout the application.
 * At runtime, the system uses {@link LocalStorage} when `window.localStorage` is available,
 * otherwise it falls back to {@link ObjectStorage} for environments without browser storage access.
 */
export type impl = LocalStorage | ObjectStorage;
