import type * as React from "react";

import type { SwitchProps } from "../../Switch/web/Switch";

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
  tooltipNote?: React.ReactNode | (() => React.ReactNode);

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
  note?: React.ReactNode;

  /**
   * The text to display when the switch is disabled.
   */
  disabledText?: string;

  /**
   * The ref to the container element.
   */
  containerRef?: React.Ref<HTMLDivElement>;
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
