import type * as React from "react";

export type ScrollerOrientationTypes = "vertical" | "horizontal" | "auto";

export interface ScrollerComponentBaseProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Layout direction.
   */
  dir?: "rtl" | "ltr";

  /**
   * Whether padding fixes should be applied.
   * @default true
   */
  paddingFix?: boolean;

  /**
   * Whether to apply a fade effect on the scrollbar.
   * @default false
   */
  fade?: boolean;
}

export interface ScrollerState {
  /**
   * Vertical scroll position in pixels.
   */
  scrollTop: number;

  /**
   * Horizontal scroll position in pixels.
   */
  scrollLeft: number;

  /**
   * Total scrollable content height in pixels.
   */
  scrollHeight: number;

  /**
   * Total scrollable content width in pixels.
   */
  scrollWidth: number;

  /**
   * Visible height of the scroller viewport in pixels.
   */
  offsetHeight: number;

  /**
   * Visible width of the scroller viewport in pixels.
   */
  offsetWidth: number;

  /**
   * Tracks whether the cached measurements are out of date.
   */
  dirty: 0 | 1 | 2;
}
