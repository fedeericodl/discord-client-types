import type React from "react";
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
   * @default false
   */
  checked?: boolean;

  /**
   * Whether the switch is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The class name applied to the switch.
   */
  className?: string;

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
 * return (
 *  <Switch checked={value} onChange={(newValue) => setValue(newValue)} />
 * );
 * ```
 */
export type Switch = React.FC<SwitchProps>;
