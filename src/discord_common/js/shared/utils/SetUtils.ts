/**
 * Compares and returns whether two Sets are equal in terms of their elements.
 * @param setA The first Set to compare.
 * @param setB The second Set to compare.
 * @example
 * ```ts
 * // Equal sets
 * const set1 = new Set([1, 2, 3]);
 * const set2 = new Set([3, 2, 1]);
 * areSetsEqual(set1, set2); // true (order doesn't matter)
 *
 * // Same reference
 * const set3 = new Set([1, 2]);
 * areSetsEqual(set3, set3); // true (reference equality)
 *
 * // Different sizes
 * const set4 = new Set([1, 2]);
 * const set5 = new Set([1, 2, 3]);
 * areSetsEqual(set4, set5); // false
 *
 * // Different elements
 * const set6 = new Set(["a", "b"]);
 * const set7 = new Set(["a", "c"]);
 * areSetsEqual(set6, set7); // false
 *
 * // Empty sets
 * areSetsEqual(new Set(), new Set()); // true
 * ```
 */
export type AreSetsEqual = <T>(setA: Set<T>, setB: Set<T>) => boolean;

/**
 * Converts any iterable or null/undefined value to a Set in-place with safe handling.
 * @param value The value to convert to a Set.
 * @returns A Set containing the elements from the input.
 * @example
 * ```ts
 * // Array to Set
 * toSetInplace([1, 2, 3, 2]); // Set(3) {1, 2, 3}
 *
 * // Existing Set (returned as-is)
 * const existingSet = new Set([1, 2]);
 * toSetInplace(existingSet) === existingSet; // true (same reference)
 *
 * // String to Set
 * toSetInplace("hello"); // Set(4) {"h", "e", "l", "o"}
 *
 * // Other iterables
 * toSetInplace(new Map([["a", 1], ["b", 2]])); // Set(2) {["a", 1], ["b", 2]}
 * ```
 */
export type ToSetInplace = <T>(value: Iterable<T> | null | undefined) => Set<T>;
