/**
 * Returns whether two arrays are shallowly equal.
 * Compares array lengths and each element using strict equality (===).
 * @param prev The previous array to compare.
 * @param next The next array to compare.
 */
export type AreArraysShallowlyEqual = <T>(prev?: T[], next?: T[]) => boolean;

/**
 * Creates a memoized version of a function that caches only the last result.
 * Performs shallow comparison of arguments to determine if recalculation is needed.
 * @param func The function to memoize.
 * @returns Memoized function that caches the last result based on argument equality.
 */
export type CachedFunction = <TArgs extends readonly unknown[], TReturn>(
  func: (...args: TArgs) => TReturn,
) => (...args: TArgs) => TReturn;
