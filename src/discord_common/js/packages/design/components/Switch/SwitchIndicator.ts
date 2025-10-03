import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface SwitchIndicatorProps {
  /**
   * Whether the switch is checked.
   */
  checked?: boolean;

  /**
   * Whether the switch is disabled.
   */
  disabled?: boolean;

  /**
   * The id for the input element.
   */
  id?: string;

  /**
   * Event handler called when the switch value changes.
   */
  onChange?: (value: boolean) => void;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * Whether the switch has an icon.
   * @default false
   */
  hasIcon?: boolean;

  /**
   * The accessibility description for the switch.
   */
  describedBy?: string;

  /**
   * A ref for the input element.
   */
  innerRef?: React.RefObject<HTMLInputElement | null>;
}

/**
 * Visually represents the state of a switch.
 */
export type SwitchIndicator = React.FC<SwitchIndicatorProps>;
