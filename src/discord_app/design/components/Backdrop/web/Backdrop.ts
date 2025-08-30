import type * as React from "react";

type Styles = "DARK" | "LIGHTBOX" | "IMMERSIVE" | "SUBTLE" | "BLUR" | "TOP_RADIAL";

export type BackdropStyles = {
  [K in Styles as Uppercase<K>]: K;
};

export interface BackdropProps {
  /**
   * The style of the backdrop.
   * @default BackdropStyles.SUBTLE
   * @see {@link Styles BackdropStyles}
   */
  backdropStyle?: Styles;

  /**
   * Whether the backdrop is instant, with no fade-in animation.
   * @default false
   */
  backdropInstant?: boolean;

  /**
   * The additional z-index to add to the backdrop.
   * @default 0
   */
  zIndexBoost?: number;

  /**
   * The component to render as the backdrop layer. Creates a new div by default.
   */
  LayerComponent?: React.ComponentType<React.PropsWithChildren>;

  /**
   * Whether the backdrop is visible.
   */
  isVisible?: boolean;

  /**
   * The function called when the backdrop is closed (clicked).
   */
  onClose?: () => void;
}

/**
 * Semi-transparent layer that covers the entire screen or a specific element, used to focus the user's attention on a specific element or action.
 */
export type Backdrop = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<BackdropProps> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, BackdropProps>;
};
