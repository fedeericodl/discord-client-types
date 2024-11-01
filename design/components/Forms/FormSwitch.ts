import type React from "react";
import type { SwitchProps } from "../Switch";

export interface FormSwitchProps extends Pick<SwitchProps, "onChange" | "disabled"> {
  /**
   * The value of the switch.
   * @default false
   */
  value?: boolean;

  /**
   * Whether to hide the divider below the container.
   * @default false
   */
  hideBorder?: boolean;

  /**
   * The tooltip text to display when hovering over the switch.
   */
  tooltipNote?: string;

  /**
   * The class name applied to the container.
   */
  className?: string;

  /**
   * The styles applied to the container.
   */
  style?: React.CSSProperties;

  /**
   * The note to display below the switch.
   */
  note?: string;

  /**
   * The text to display when the switch is disabled.
   */
  disabledText?: string;
}

/**
 * An interactive switch component to be used in forms.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <FormSwitch value={value} onChange={() => setValue(!value)} note="This enables notifications.">
 *   Enable Notifications
 * </FormSwitch>
 * ```
 */
export type FormSwitch = React.FC<React.PropsWithChildren<FormSwitchProps>>;
