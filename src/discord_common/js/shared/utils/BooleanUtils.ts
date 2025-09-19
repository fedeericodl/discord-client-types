/**
 * Returns the first truthy value from a list of arguments.
 * Useful for providing fallback values and default parameter handling.
 * @param values Variable number of values to check for truthiness.
 * @returns The first truthy value found, or `undefined` if none are truthy.
 * @example
 * ```ts
 * // Basic usage with fallbacks
 * getFirstTruthyValue(null, undefined, "", "default"); // "default"
 * getFirstTruthyValue(0, false, "hello"); // "hello"
 * getFirstTruthyValue("first", "second"); // "first"
 *
 * // With variables
 * const userPreference = null;
 * const systemDefault = "dark";
 * const theme = getFirstTruthyValue(userPreference, systemDefault); // "dark"
 *
 * // Non-string values
 * getFirstTruthyValue(0, [], {}, "fallback"); // [] (empty array is truthy)
 * getFirstTruthyValue(false, 42); // 42
 * ```
 */
export type GetFirstTruthyValue = <T>(...values: T[]) => T | undefined;
