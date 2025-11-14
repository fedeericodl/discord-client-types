import type * as React from "react";

import type { LayerPosition } from "@app/design/web";

export enum PopoutAnimationTypes {
  TRANSLATE = 1,
  SCALE,
  FADE,
}

export interface PopoutCSSAnimatorProps {
  /**
   * Position of the popout relative to its trigger element.
   * Determines animation direction and CSS positioning classes.
   * @see {@link LayerPosition}
   */
  position?: LayerPosition;

  /**
   * Type of animation to apply when showing/hiding the popout.
   * Automatically falls back to FADE when reduced motion is enabled.
   * @see {@link PopoutAnimationTypes}
   */
  type: PopoutAnimationTypes;
}

/**
 * CSS animation wrapper for popout components.
 *
 * Provides smooth CSS-based animations for popout interfaces with automatic accessibility support.
 * @example
 * ```tsx
 * <PopoutCSSAnimator
 *   type={PopoutCSSAnimator.Types.SCALE}
 *   position="bottom">
 *   <MyPopoutContent />
 * </PopoutCSSAnimator>
 * ```
 */
export type PopoutCSSAnimator = React.FC<React.PropsWithChildren<PopoutCSSAnimatorProps>> & {
  Types: typeof PopoutAnimationTypes;
};
