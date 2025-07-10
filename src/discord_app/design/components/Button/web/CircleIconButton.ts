import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export type CircleIconButtonColors = Record<"TERTIARY" | "SECONDARY" | "PRIMARY", string>;

export type CircleIconButtonSizes = Record<"SIZE_24" | "SIZE_32" | "SIZE_36", string>;

export interface CircleIconButtonProps {
  /**
   * The class name applied to the button.
   */
  className?: string;

  /**
   * The tooltip text.
   */
  tooltip?: string;

  /**
   * The color of the button.
   * @see {@link CircleIconButtonColors}
   */
  color?: string;

  /**
   * The size of the button.
   * @default CircleIconButtonSizes.SIZE_32
   * @see {@link CircleIconButtonSizes}
   */
  size?: string;

  /**
   * The icon to display in the button.
   */
  icon?: React.ReactNode;

  /**
   * Event handler called when the mouse button is pressed down on the button.
   */
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when the button is clicked.
   */
  onClick: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;
}

/**
 * An interactive circular button with an icon.
 * @example
 * ```tsx
 * <CircleIconButton
 *   color={CircleIconButtonColors.TERTIARY}
 *   size={CircleIconButtonSizes.SIZE_24}
 *   icon={<HomeIcon />}
 *   tooltip="Click here"
 *   onClick={() => console.log("Button clicked!")}
 * />
 * ```
 */
export type CircleIconButton = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CircleIconButtonProps> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, CircleIconButtonProps>;
};
