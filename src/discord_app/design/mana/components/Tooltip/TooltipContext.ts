import type * as React from "react";

export interface TooltipContextValue {
  /**
   * Whether the current tooltip is a rich tooltip.
   */
  isRichTooltip: boolean;
}

/**
 * React context for sharing tooltip state throughout the component tree.
 */
export type TooltipContext = React.Context<TooltipContextValue>;

/**
 * Provides the {@link TooltipContext} to its children.
 * Should be used to wrap the component tree that needs access to the {@link TooltipContext}.
 */
export type TooltipProvider = React.FC<React.PropsWithChildren<TooltipContextValue>>;

/**
 * Hook that allows you to consume the {@link TooltipContext}.
 */
export type UseTooltipContext = () => TooltipContextValue;
