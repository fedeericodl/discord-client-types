import type * as React from "react";

export interface UseTooltipRefResult {
  /**
   * The ref callback to be assigned to the trigger element.
   */
  triggerRef: React.RefCallback<HTMLElement | null>;

  /**
   * The ref to the target element that the tooltip should be positioned relative to.
   */
  targetElementRef: React.RefObject<HTMLElement | null>;
}

/**
 * A hook that provides refs for the tooltip trigger and target elements.
 * @param targetElementRef A ref to the target element that the tooltip should be positioned relative to.
 * @returns An object containing the trigger ref callback and the target element ref.
 */
export type UseTooltipRef = (
  targetElementRef?: React.RefObject<HTMLElement>,
) => UseTooltipRefResult;
