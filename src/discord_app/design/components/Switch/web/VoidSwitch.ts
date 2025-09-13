import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface SwitchProps {
  /**
   * The id for the input element.
   */
  id?: string;

  /**
   * Event handler called when the switch value changes.
   */
  onChange?: (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The value of the switch.
   */
  checked?: boolean;

  /**
   * Whether the switch is disabled.
   */
  disabled?: boolean;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * A ref for the input element.
   */
  innerRef?: React.Ref<HTMLInputElement>;
}

/**
 * An interactive switch component.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <Switch checked={value} onChange={setValue} />
 * ```
 */
export type Switch = React.FC<SwitchProps>;
