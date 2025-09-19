/**
 * Object pool for reusing DOM elements to improve performance and reduce memory allocation.
 * @example
 * ```ts
 * // Create pool for div elements
 * const divPool = new ElementPool(
 *   () => document.createElement("div"),
 *   (element) => {
 *     element.innerHTML = "";
 *     element.className = "";
 *     element.removeAttribute("style");
 *   }
 * );
 *
 * // Get element from pool (creates new one if pool is empty)
 * const element = divPool.getElement();
 * element.textContent = "Hello World";
 * document.body.appendChild(element);
 *
 * // Return element to pool for reuse
 * document.body.removeChild(element);
 * divPool.poolElement(element); // Element is cleaned and stored
 *
 * // Get same element again (reused from pool)
 * const reusedElement = divPool.getElement();
 *
 * // Clear all pooled elements
 * divPool.clearPool();
 * ```
 */
export declare class ElementPool<T extends HTMLElement = HTMLElement> {
  /**
   * @param createElement Function that creates new elements when pool is empty
   * @param cleanElement Function that cleans elements before returning them to pool
   */
  public constructor(createElement: () => T, cleanElement: (element: T) => void);

  /**
   * Internal array storing pooled elements available for reuse.
   * @private
   */
  private _elements: T[];

  /**
   * Factory function that creates new elements when pool is empty.
   * @private
   */
  private _createElement: () => T;

  /**
   * Cleanup function that resets element state before pooling.
   * @private
   */
  private _cleanElement: (element: T) => void;

  /**
   * Retrieves an element from the pool or creates a new one if pool is empty.
   */
  public getElement: () => T;

  /**
   * Returns an element to the pool for future reuse after cleaning it.
   * @param element The HTML element to return to the pool.
   */
  public poolElement: (element: T) => void;

  /**
   * Removes all elements from the pool, clearing the internal storage.
   */
  public clearPool: () => void;
}
