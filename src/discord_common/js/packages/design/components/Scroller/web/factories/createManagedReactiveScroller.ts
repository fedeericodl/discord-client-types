import type * as React from "react";

import type { ScrollerComponentBaseProps } from "../utils";

export interface ManagedReactiveScrollerProps
  extends Omit<ScrollerComponentBaseProps, "paddingFix"> {
  /**
   * Child content to render inside the scrollable container.
   */
  children: React.ReactNode;

  /**
   * The class name applied to the inner scrollable content wrapper.
   */
  contentClassName?: string;

  /**
   * Whether to use a custom theme for styling.
   * @default false
   */
  customTheme?: boolean;
}

/**
 * A factory function for creating advanced `ManagedReactiveScroller` components with reactive resize handling.
 * Creates scrollable containers that automatically respond to content and container size changes using `ResizeObserver`.
 * Use this for complex scrolling scenarios that require dynamic content updates and scroll state awareness.
 * @param scrollbarClassName The class name to apply to the scrollbar.
 * @param ResizeObserverClass The `ResizeObserver` class to use for observing size changes.
 * @returns A `ManagedReactiveScroller` component with the specified customizations.
 */
export type CreateManagedReactiveScroller = (
  scrollbarClassName: string | undefined,
  ResizeObserverClass: typeof ResizeObserver,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ManagedReactiveScrollerProps> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, ManagedReactiveScrollerProps>;
};
