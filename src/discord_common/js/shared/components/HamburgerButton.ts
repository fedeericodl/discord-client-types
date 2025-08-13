import type * as React from "react";

export interface HamburgerButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Whether the button is in the open state.
   * @default false
   */
  open?: boolean;
}

/**
 * A button with three horizontal lines, typically used to represent a menu.
 */
export type HamburgerButton = React.FC<HamburgerButtonProps>;
