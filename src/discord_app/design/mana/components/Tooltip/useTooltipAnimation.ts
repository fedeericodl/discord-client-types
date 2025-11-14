import type { TransitionFn, UseTransitionProps } from "@react-spring/web";

export interface UseTooltipAnimationProps {
  /**
   * Whether the tooltip should be shown.
   */
  shouldShow: boolean;

  /**
   * Callback invoked when the tooltip has exited.
   */
  onExitComplete?: () => void;

  /**
   * Event handler called when animation transitions complete.
   */
  onAnimationRest?: UseTransitionProps["onRest"];
}

interface TooltipAnimationTransitionProps {
  /**
   * The scale of the tooltip.
   */
  scale: number;

  /**
   * The opacity of the tooltip.
   */
  opacity: number;
}

/**
 * A hook that provides animation for tooltips.
 * @param props The properties for the tooltip animation.
 * @returns A transition function for animating the tooltip.
 */
export type UseTooltipAnimation = (
  props: UseTooltipAnimationProps,
) => TransitionFn<boolean, TooltipAnimationTransitionProps>;
