import type * as React from "react";

import type { ButtonSize } from "./BaseButton";

export interface ButtonGroupContextValue {
  /**
   * The size of buttons in the group.
   */
  size: ButtonSize | undefined;

  /**
   * Whether the buttons should take the full width of the container.
   */
  fullWidth: boolean | undefined;
}

/**
 * A React context that holds the button group's state.
 */
export type ButtonGroupContext = React.Context<ButtonGroupContextValue>;

/**
 * Hook that allows you to consume the {@link ButtonGroupContext}.
 */
export type UseButtonGroupContext = () => ButtonGroupContextValue;
