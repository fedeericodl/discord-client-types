import type { BaseCheckboxProps, FieldProps } from "@discordapp/design/web";
import type * as React from "react";

export type CheckboxGroupOption = BaseCheckboxProps;

export interface CheckboxGroupProps extends Omit<FieldProps, "role" | "children"> {
  /**
   * Event handler called when the selected values change.
   */
  onChange?: (values: string[]) => void;

  /**
   * The options to display in the checkbox group.
   */
  options: CheckboxGroupOption[];

  /**
   * The selected values.
   */
  selectedValues?: string[];

  /**
   * Whether the checkbox group is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * A checkbox group allowing a user to select multiple items from a list of options.
 */
export type CheckboxGroup = React.FC<CheckboxGroupProps>;
