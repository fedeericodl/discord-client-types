import type { BaseCheckboxProps, FormControlProps } from "@discordapp/design/web";
import type * as React from "react";

export type CheckboxGroupOption = BaseCheckboxProps;

export interface CheckboxGroupProps extends Pick<FormControlProps, "label"> {
  /**
   * Event handler called when the selected values change.
   */
  onChange?: (values: string[]) => void;

  /**
   * The options to display in the checkbox group.
   */
  options: CheckboxGroupOption[];

  /**
   * Whether the checkbox group is disabled.
   */
  disabled?: boolean;

  /**
   * The selected values.
   */
  value?: string[];
}

/**
 * A checkbox group allowing a user to select multiple items from a list of options.
 */
export type CheckboxGroup = React.FC<CheckboxGroupProps>;
