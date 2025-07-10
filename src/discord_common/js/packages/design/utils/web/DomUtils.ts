/**
 * Returns whether a value is a DOM element, optionally of a specific element type.
 * @param element The value to check.
 * @param elementType Optional constructor function to check against (e.g., HTMLDivElement).
 * @example
 * ```ts
 * // Check if something is specifically a div element
 * if (isElement(someValue, HTMLDivElement)) {
 *   console.log("This is a div element");
 * }
 * ```
 */
export type IsElement = (element: Element | null, elementType?: typeof Element) => boolean;

/**
 * Converts a CSS value string to a number by parsing it as an integer.
 * Handles removing units (px, em, etc.) and returns 0 for invalid values.
 * @param cssValue The CSS value string to convert (e.g., "10px", "1.5em").
 * @returns The numeric value as an integer, or 0 if the value cannot be parsed.
 * @example
 * ```ts
 * cssValueToNumber("20px"); // 20
 * cssValueToNumber("1.5rem"); // 1
 * cssValueToNumber("auto"); // 0
 * ```
 */
export type CssValueToNumber = (cssValue: string) => number;
