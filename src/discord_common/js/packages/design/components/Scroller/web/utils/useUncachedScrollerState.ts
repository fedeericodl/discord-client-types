import type * as React from "react";

import type { ScrollerState } from "./core/SharedTypes";

export interface UncachedScrollerUseState {
  /**
   * A ref pointing to the scrollable container element.
   */
  scrollerRef: React.RefObject<HTMLDivElement>;

  /**
   * Function returning the latest {@link ScrollerState}.
   */
  getScrollerState: () => ScrollerState;
}

/**
 * A React hook that exposes a ref to a scrollable container and a method for retrieving its current scroll metrics.
 * @returns An object containing the scroller ref and a function to get the latest state.
 */
export type UseUncachedScrollerState = () => UncachedScrollerUseState;
