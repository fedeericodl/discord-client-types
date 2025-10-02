import type * as React from "react";

import type { Stack } from "../../Stack/Stack";
import type {
  AnimatedScrollHelperState,
  ScrollerComponentBaseProps,
  ScrollerOrientationTypes,
  ScrollerState,
} from "../utils";

export interface AdvancedScrollerProps extends Omit<ScrollerComponentBaseProps, "paddingFix"> {
  /**
   * Child content to render inside the scrollable container.
   */
  children: React.ReactNode;

  /**
   * The scroll orientation: vertical or horizontal.
   * @default "vertical"
   */
  orientation?: ScrollerOrientationTypes;

  /**
   * The overflow behavior for the non-scrolling axis.
   * @default "scroll"
   */
  overflow?: "hidden" | "scroll" | "auto";

  /**
   * Whether to use a custom theme for styling.
   * @default false
   */
  customTheme?: boolean;

  /**
   * Spacing between stack items.
   */
  gap?: number;

  /**
   * Whether to use the {@link Stack} component for layout.
   */
  experimental_useStack?: boolean;
}

export interface AdvancedScrollerRef extends AnimatedScrollHelperState {
  /**
   * Returns the DOM node for the scroller container.
   */
  getScrollerNode: () => HTMLDivElement | null;

  /**
   * Returns the current scroller state.
   */
  getScrollerState: () => ScrollerState;
}

/**
 * A factory function for creating flexible `AdvancedScroller` components with enhanced capabilities.
 * Creates scrollable containers with queryable scroll state and programmable scroll positioning.
 * Includes built-in padding fixes, orientation support, optional {@link Stack} integration for layout,
 * and animated scrolling helpers. Use this when you need control over scroll behavior and state.
 * @param scrollbarClassName The class name to apply to the scrollbar.
 * @param fadeClassName The class name to apply for the fade effect.
 * @param customThemeClassName The class name to apply for custom theme styling.
 * @returns An `AdvancedScroller` component with the specified customizations.
 */
export type CreateAdvancedScroller = (
  scrollbarClassName?: string,
  fadeClassName?: string,
  customThemeClassName?: string,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<AdvancedScrollerProps> & React.RefAttributes<AdvancedScrollerRef>
> & {
  render: React.ForwardRefRenderFunction<AdvancedScrollerRef, AdvancedScrollerProps>;
};
