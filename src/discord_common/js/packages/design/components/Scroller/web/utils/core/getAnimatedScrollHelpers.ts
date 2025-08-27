import type * as React from "react";

import type { ManualSpring } from "./ManualSpring";
import type { ScrollerState } from "./SharedTypes";

export interface ScrollToAPI {
  /**
   * Whether the scroll should animate smoothly.
   */
  animate?: boolean;

  /**
   * Callback to run after the scroll completes.
   */
  callback?: (() => unknown) | undefined;
}

export interface ScrollToProps extends ScrollToAPI {
  /**
   * The target scroll position in pixels.
   */
  to: number;
}

export interface ScrollIntoViewRectProps extends ScrollToAPI {
  /**
   * The starting coordinate of the rectangle to scroll into view.
   */
  start: number;

  /**
   * The ending coordinate of the rectangle to scroll into view.
   */
  end: number;

  /**
   * Whether to scroll to the start even if the rectangle is partially visible.
   * @default false
   */
  shouldScrollToStart?: boolean;

  /**
   * Padding around the rectangle when scrolling into view.
   * @default 0
   */
  padding?: number;
}

export interface ScrollIntoViewNodeProps extends ScrollToAPI {
  /**
   * The DOM node to scroll into view.
   */
  node: HTMLElement;

  /**
   * Whether to scroll to the start of the node if partially visible.
   * @default false
   */
  shouldScrollToStart?: boolean;

  /**
   * Padding around the node when scrolling into view.
   * @default 0
   */
  padding?: number;
}

export interface AnimatedScrollHelperState {
  /**
   * The spring controlling smooth scrolling animations.
   */
  spring: ManualSpring;

  /**
   * Scrolls to a specific position with optional animation.
   */
  scrollTo: (props: ScrollToProps) => void;

  /**
   * Allows merging new spring targets with ongoing animations.
   */
  mergeTo: ManualSpring["mergeTo"];

  /**
   * Scrolls a rectangle into view, respecting padding and animation options.
   */
  scrollIntoViewRect: (props: ScrollIntoViewRectProps) => void;

  /**
   * Scrolls a DOM node into view, respecting padding and animation options.
   */
  scrollIntoViewNode: (props: ScrollIntoViewNodeProps) => void;

  /**
   * Scrolls one page up in the scrollable content.
   */
  scrollPageUp: (props?: ScrollToAPI) => void;

  /**
   * Scrolls one page down in the scrollable content.
   */
  scrollPageDown: (props?: ScrollToAPI) => void;

  /**
   * Scrolls to the top of the scrollable content.
   */
  scrollToTop: (props?: ScrollToAPI) => void;

  /**
   * Scrolls to the bottom of the scrollable content.
   */
  scrollToBottom: (props?: ScrollToAPI) => void;

  /**
   * Returns whether the scrollable element is at the top.
   */
  isScrolledToTop: () => boolean;

  /**
   * Returns whether the scrollable element is at the bottom.
   */
  isScrolledToBottom: () => boolean;

  /**
   * Returns the distance in pixels from the top of the scrollable area.
   */
  getDistanceFromTop: () => number;

  /**
   * Returns the distance in pixels from the bottom of the scrollable area.
   */
  getDistanceFromBottom: () => number;
}

/**
 * Function for creating a set of animated scroll helpers for a specific element.
 * @param nodeRef A ref to the scrollable element.
 * @param getScrollerState A function returning the current scroll state of the element.
 * @param spring A {@link ManualSpring} instance used to animate scrolling.
 * @param orientation The scroll orientation, either vertical or horizontal.
 * @returns An object with functions for programmatically controlling scrolling.
 */
export type GetAnimatedScrollHelpers = (
  nodeRef: React.RefObject<HTMLElement>,
  getScrollerState: () => ScrollerState,
  spring: ManualSpring,
  orientation: "vertical" | "horizontal",
) => AnimatedScrollHelperState;
