export interface ShallowEqualOptions {
  /**
   * Whether to warn when comparing large objects.
   * @default false
   */
  shouldWarnLargeObjects?: boolean;

  /**
   * Custom logging function for warnings.
   */
  logCallback?: (message: string) => void;
}

/**
 * Compares two objects for shallow equality.
 * Objects are considered equal if they have the same keys and the same values for each key.
 * @template T The type of objects being compared.
 * @template K The type of keys to ignore (string literal union).
 * @param a First object to compare.
 * @param b Second object to compare.
 * @param ignore Array of keys to ignore during comparison.
 * @param options Additional comparison options.
 * @returns Whether the objects are shallowly equal.
 * @example
 * ```ts
 * // Basic comparison
 * shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
 * shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
 *
 * // Ignoring specific keys
 * shallowEqual(
 *   { a: 1, b: 2, timestamp: 12345 },
 *   { a: 1, b: 2, timestamp: 67890 },
 *   ["timestamp"]
 * ); // true - timestamp key is ignored
 * ```
 */
export type ShallowEqual = <T extends object>(
  a: T,
  b: T,
  ignore?: keyof T[],
  options?: ShallowEqualOptions,
) => boolean;

/**
 * Compares two arrays for shallow equality.
 * Arrays are considered equal if they have the same length and the same values at each index.
 * Values are compared with strict equality (===).
 * @template T The type of array elements.
 * @param a First array to compare.
 * @param b Second array to compare.
 * @param options Additional comparison options.
 * @returns Whether the arrays are shallowly equal.
 * @example
 * ```ts
 * // Basic array comparison
 * areArraysShallowEqual([1, 2, 3], [1, 2, 3]); // true
 * areArraysShallowEqual([1, 2, 3], [1, 2, 4]); // false
 * areArraysShallowEqual([1, 2, 3], [1, 2]); // false
 * ```
 */
export type AreArraysShallowEqual = <T>(a: T[], b: T[], options?: ShallowEqualOptions) => boolean;
