import type { FormControlProps } from "@discordapp/design/web";
import type * as React from "react";

import type { IconSize } from "../../Icon/IconSize";

interface IconProps {
  /**
   * The class name applied to the icon.
   */
  className: string;

  /**
   * The size of the icon.
   */
  size: keyof IconSize;

  /**
   * The color of the icon.
   */
  color: string;
}

export type BaseRadioGroupOptionValue = string | number;

export interface BaseRadioGroupOption {
  /**
   * The value of the radio option.
   */
  value: BaseRadioGroupOptionValue;

  /**
   * The description to display for the radio option.
   */
  desc?: React.ReactNode;

  /**
   * Whether the radio option is disabled.
   */
  disabled?: boolean;

  /**
   * The icon to display in the radio option.
   */
  icon?: React.ComponentType<IconProps>;

  /**
   * The name to display for the radio option.
   */
  name: React.ReactNode;
}

export interface BaseRadioGroupProps extends Omit<FormControlProps, "children"> {
  /**
   * The default value of the selected radio item.
   */
  defaultValue?: BaseRadioGroupOptionValue | null;

  /**
   * Event handler called when the selected radio item changes.
   */
  onChange?: (value: BaseRadioGroupOptionValue | null) => void;

  /**
   * The radio options to display in the radio group.
   */
  options: BaseRadioGroupOption[];

  /**
   * The value of the selected radio item.
   */
  value?: BaseRadioGroupOptionValue | null;

  /**
   * The size of the radio items.
   * @default "medium"
   */
  size?: "small" | "medium";

  /**
   * Whether the radio group is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The accessibility identifier for the radio group.
   */
  "aria-labelledby"?: string;
}

/**
 * A group of radio buttons that allows the user to select one option from a set.
 */
export type BaseRadioGroup = React.FC<BaseRadioGroupProps>;
