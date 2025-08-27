import type * as React from "react";

import type { ScrollerState } from "./core/SharedTypes";

export interface CachedScrollerUseState {
  /**
   * A ref to attach to the scrollable div.
   */
  scrollerRef: React.RefObject<HTMLDivElement>;

  /**
   * A ref holding the cached {@link ScrollerState}.
   */
  scrollerState: React.RefObject<ScrollerState>;

  /**
   * Function to get the latest {@link ScrollerState}, updating the cache if dirty.
   */
  getScrollerState: () => ScrollerState;
}

/**
 * A React hook that provides a ref to a scrollable container and a cached
 * representation of its scroll state.
 * @returns An object containing the scroller ref, cached state ref, and a function to get the latest state.
 */
export type UseCachedScrollerState = () => CachedScrollerUseState;
