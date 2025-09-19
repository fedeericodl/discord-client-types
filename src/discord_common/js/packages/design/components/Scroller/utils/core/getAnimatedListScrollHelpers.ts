import type * as React from "react";

import type { ListComputer } from "./ListComputer";
import type { ManualSpring } from "./ManualSpring";
import type { ScrollerState } from "./SharedTypes";
import type { AnimatedScrollHelperState, ScrollToAPI } from "./getAnimatedScrollHelpers";

export interface ScrollToIndexProps extends ScrollToAPI {
  /**
   * The section index of the item to scroll into view.
   */
  section: number;

  /**
   * The row index within the section (if applicable).
   */
  row?: number;

  /**
   * Extra padding (in pixels) to apply around the scrolled item.
   * @default 0
   */
  padding?: number;
}

export interface AnimatedListScrollHelperState extends AnimatedScrollHelperState {
  /**
   * Returns the pixel position and height of a section/row.
   */
  getScrollPosition: (section: number, row?: number) => [number, number];

  /**
   * Returns whether a given section/row is currently visible in the viewport.
   */
  isItemVisible: (section: number, row?: number, completely?: boolean) => boolean;

  /**
   * Scrolls the list so that a specific section/row index is brought into view.
   */
  scrollToIndex: (props: ScrollToIndexProps) => void;
}

/**
 * Creates an animated scroll helper tailored for list-based UIs.
 * @param nodeRef A ref pointing to the scrollable container.
 * @param getScrollerState Function that returns the current scroll state.
 * @param listComputer A {@link ListComputer} instance used to measure item positions.
 * @param spring The {@link ManualSpring} controlling smooth animations.
 * @returns An object with both generic and list-specific scroll helpers.
 */
export type GetAnimatedListScrollHelpers = (
  nodeRef: React.RefObject<HTMLElement>,
  getScrollerState: () => ScrollerState,
  listComputer: ListComputer,
  spring: ManualSpring,
) => AnimatedListScrollHelperState;
