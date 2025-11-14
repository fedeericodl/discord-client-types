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

/**
 * Returns whether an element is input-like and can receive text input.
 * Checks for `contenteditable` elements, form input elements, and specific input types that accept user text entry.
 * @param element The DOM element to check.
 * @example
 * ```ts
 * isInputLikeElement(document.querySelector('input[type="text"]')); // true
 * isInputLikeElement(document.querySelector("textarea")); // true
 * isInputLikeElement(document.querySelector('input[type="checkbox"]')); // false
 * isInputLikeElement(document.querySelector("button")); // false
 * ```
 */
export type IsInputLikeElement = (element: Element | null) => boolean;

/**
 * Extracts the owner document from an event's target element.
 * @param event The DOM event to extract the document from.
 * @returns The owner document of the event target, or `null` if unavailable.
 * @example
 * ```ts
 * document.addEventListener("click", (event) => {
 *   const doc = eventOwnerDocument(event);
 *   if (doc) {
 *     console.log("Event occurred in:", doc.title);
 *   }
 * });
 * ```
 */
export type EventOwnerDocument = (event: Event) => Document | null;

/**
 * Traverses up the DOM tree from a given element to find the nearest ancestor with a specified class name.
 * @param element The starting DOM element to begin the search from.
 * @param className The class name to search for in ancestor elements.
 * @returns The nearest ancestor element with the specified class name, or `null` if none is found.
 */
export type GetParentElementByClassName = (
  element: Element | null,
  className: string,
) => Element | null;

/**
 * Traverses up the DOM tree from a given element to find the nearest ancestor with a specified attribute.
 * @param element The starting DOM element to begin the search from.
 * @param attributeName The attribute name to search for in ancestor elements.
 * @returns The nearest ancestor element with the specified attribute, or `null` if none is found.
 */
export type GetParentElementByAttribute = (
  element: Element | null,
  attributeName: string,
) => Element | null;
