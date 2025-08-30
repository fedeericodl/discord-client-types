import type * as React from "react";

import type { ScrollerComponentBaseProps, ScrollerOrientationTypes } from "../utils";

export interface ScrollerProps extends ScrollerComponentBaseProps {
  /**
   * Child content to render inside the scrollable container.
   */
  children: React.ReactNode;

  /**
   * The scroll orientation: vertical or horizontal.
   * @default "vertical"
   */
  orientation?: ScrollerOrientationTypes;
}

/**
 * A factory function for creating customized `Scroller` components with optional styling.
 * Creates bare-bones scrollable containers that handle content overflow with minimal overhead.
 * Includes built-in padding fixes and supports both vertical and horizontal scrolling.
 * Most use cases should use the components created by this factory for simple scroll behavior.
 * @param scrollbarClassName The class name to apply to the scrollbar.
 * @param fadeClassName The class name to apply for the fade effect.
 * @returns A `Scroller` component with the specified customizations.
 */
export type CreateScroller = (
  scrollbarClassName?: string,
  fadeClassName?: string,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ScrollerProps> & React.RefAttributes<HTMLDivElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLDivElement, ScrollerProps>;
};
