/**
 * Gets or creates an IntersectionObserver instance for the given options.
 * @param options Configuration options for the intersection observer.
 * @returns The `IntersectionObserver` instance for the given options.
 */
export type GetIntersectionObserver = (options: IntersectionObserverInit) => IntersectionObserver;

/**
 * Starts watching an element for intersection changes with a custom callback.
 * @param observer The `IntersectionObserver` instance to use.
 * @param element The DOM element to observe for intersection changes.
 * @param callback Function to call when the element's intersection status changes.
 */
export type Watch = (
  observer: IntersectionObserver,
  element: Element,
  callback: (entry: IntersectionObserverEntry) => void,
) => void;

/**
 * Stops watching an element for intersection changes and removes its associated callback.
 * @param observer The `IntersectionObserver` instance currently watching the element.
 * @param element The DOM element to stop observing.
 */
export type Unwatch = (observer: IntersectionObserver, element: Element) => void;
