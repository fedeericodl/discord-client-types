/**
 * Creates a promise that resolves after a specified delay.
 * @template T The type to resolve with.
 * @param delay The delay duration in milliseconds.
 * @returns A promise that resolves after the specified delay.
 */
export type PausedPromise = <T = void>(delay: number) => Promise<T>;

/**
 * Sets a custom function to check for online connectivity before retrying imports.
 * @param fn A function that returns a promise resolving when online.
 */
export type SetAwaitOnline = (fn: () => Promise<void>) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ImportWithRetryOptions<T = any> {
  /**
   * Function that returns a promise for the module.
   */
  createPromise: () => Promise<T>;

  /**
   * The webpack module ID for checking if the module exists in cache.
   */
  webpackId: string | number;
}

/**
 * Imports a module with automatic retry functionality.
 * If the import fails, it will retry with exponential backoff and check for network connectivity between attempts.
 * @template T The type of module to import.
 * @param options Configuration options for the import operation.
 * @returns A promise resolving to the imported module.
 * @throws {Error} Will throw an error if all retry attempts fail or if the module exists in webpack cache but failed to load.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ImportWithRetry = <T = any>(options: ImportWithRetryOptions<T>) => Promise<T>;
