export type { CssValueToNumber } from "./DOMUtils";

/**
 * Capitalizes the first character of a string while preserving the rest.
 * Useful for formatting names, titles, and user-facing text.
 * @param str The string to capitalize.
 * @returns String with first character uppercase.
 * @example
 * ```ts
 * upperCaseFirstChar("hello world"); // "Hello world"
 * upperCaseFirstChar("HELLO"); // "HELLO"
 * upperCaseFirstChar("a"); // "A"
 * ```
 */
export type UpperCaseFirstChar = (str?: string) => string;

/**
 * Truncates text to a specified length with customizable ellipsis indicator.
 * @param text The text to truncate.
 * @param maxLength Maximum allowed length including ellipsis.
 * @param ellipsis Custom ellipsis string to append when truncating.
 * @returns Truncated text with ellipsis, or original text if under limit.
 * @example
 * ```ts
 * truncateText("Hello world", 8); // "Hello…"
 * truncateText("Short", 10); // "Short" (no truncation needed)
 * ```
 */
export type TruncateText = (text?: string, maxLength?: number, ellipsis?: string) => string;

/**
 * Generates an acronym from a string by taking the first letter of each word.
 * @param name The text to generate an acronym from.
 * @returns Acronym string with first letters of each word.
 * @example
 * ```ts
 * getAcronym("Hello World"); // "HW"
 * getAcronym("John's Pizza Place"); // "JPP" (removes 's)
 * ```
 */
export type GetAcronym = (name?: string) => string;

/**
 * Removes diacritic marks (accents) from text while preserving base characters.
 * @param input The text to strip diacritics from.
 * @returns Text with diacritic marks removed.
 * @example
 * ```ts
 * stripDiacritics("café"); // "cafe"
 * stripDiacritics("naïve"); // "naive"
 * ```
 */
export type StripDiacritics = (input: string) => string;

/**
 * Counts the actual number of grapheme clusters (visible characters) in a string.
 * @param text The string to count grapheme clusters in.
 * @returns Number of visible characters/grapheme clusters.
 * @example
 * ```ts
 * countGraphemeClusters("hello"); // 5
 * countGraphemeClusters("café"); // 4
 * ```
 */
export type CountGraphemeClusters = (text: string) => number;

/**
 * Normalizes text for search and comparison by handling Unicode, diacritics, and case.
 * Performs comprehensive normalization including character decomposition, case conversion, and special character mapping.
 * @param input The text to normalize.
 * @returns Normalized text suitable for search and comparison operations.
 * @example
 * ```ts
 * normalize("Café"); // normalized for comparison
 * normalize("CAFÉ"); // same result as above
 * normalize("cafe"); // same result as above
 * ```
 */
export type Normalize = (input: string) => string;
