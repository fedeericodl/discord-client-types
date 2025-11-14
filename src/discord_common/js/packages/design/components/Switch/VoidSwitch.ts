import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

import type { FieldProps } from "../Forms/Field";

export interface VoidSwitchProps
  extends Omit<
    FieldProps,
    "disabled" | "layout" | "layoutConfig" | "auxiliaryContentPosition" | "children"
  > {
  /**
   * Event handler called when the switch value changes.
   */
  onChange?: (value: boolean) => void;

  /**
   * Whether the switch is checked.
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
  innerRef?: React.RefObject<HTMLInputElement>;
}

/**
 * An interactive switch component.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <VoidSwitch label="Example Switch" description="This is an example switch" checked={value} onChange={setValue} />
 * ```
 */
export type VoidSwitch = React.FC<VoidSwitchProps>;
