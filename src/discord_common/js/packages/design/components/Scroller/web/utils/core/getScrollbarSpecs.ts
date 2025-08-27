export interface ScrollbarSpecs {
  /**
   * The width of the scrollbar in pixels.
   */
  width: number;

  /**
   * The height of the scrollbar in pixels.
   */
  height: number;
}

/**
 * Measures the width and height of the browser's scrollbars for the current environment.
 * @param className Class name to apply to the hidden measurement element.
 * @returns An object containing the scrollbar `width` and `height` in pixels.
 */
export type GetScrollbarSpecs = (className?: string) => ScrollbarSpecs;
