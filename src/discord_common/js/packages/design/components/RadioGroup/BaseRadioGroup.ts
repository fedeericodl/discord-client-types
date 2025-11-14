import type * as React from "react";

import type { FieldProps } from "../Forms/Field";
import type { ICON_SIZE } from "../Icon/getIconSize";

export interface StandaloneRadioIndicatorProps {
  /**
   * Whether the radio indicator is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the radio indicator is selected.
   */
  isSelected?: boolean;
}

/**
 * A radio indicator that can be used outside of a radio group.
 */
export type StandaloneRadioIndicator = React.FC<StandaloneRadioIndicatorProps>;

interface IconProps {
  /**
   * The class name applied to the icon.
   */
  className: string;

  /**
   * The size of the icon.
   */
  size: keyof ICON_SIZE;

  /**
   * The color of the icon.
   */
  color: string;

  /**
   * Whether the icon is hidden from screen readers.
   */
  "aria-hidden": boolean;

  /**
   * Whether the icon is focusable.
   */
  focusable: boolean;
}

export interface BaseRadioGroupOption {
  /**
   * The value of the radio option.
   */
  value: string;

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
  leadingIcon?: React.ComponentType<IconProps>;

  /**
   * The name to display for the radio option.
   */
  name: React.ReactNode;
}

export interface BaseRadioGroupProps extends Omit<FieldProps, "children"> {
  /**
   * Event handler called when the selected radio item changes.
   */
  onChange?: (value: string | null) => void;

  /**
   * The radio options to display in the radio group.
   */
  options: BaseRadioGroupOption[];

  /**
   * The value of the selected radio item.
   */
  value?: string | null;

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
 * @example
 * ```tsx
 * const [value, setValue] = React.useState<string | null>(null);
 * const options = [
 *   { value: "option1", name: "Option 1", desc: "This is the first option" },
 *   { value: "option2", name: "Option 2", desc: "This is the second option" },
 *   { value: "option3", name: "Option 3", desc: "This is the third option", disabled: true },
 * ];
 *
 * <BaseRadioGroup
 *   label="Choose an option"
 *   value={value}
 *   onChange={(option) => setValue(option.value)}
 *   options={options}
 * />
 * ```
 */
export type BaseRadioGroup = React.FC<BaseRadioGroupProps>;
