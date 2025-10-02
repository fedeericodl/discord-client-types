import type { Moment } from "moment";
import type * as React from "react";

import type { SearchableSelectProps } from "../../Select/web/SearchableSelect";

export interface TimeInputProps
  extends Omit<
    SearchableSelectProps,
    "ref" | "options" | "value" | "onChange" | "isDisabled" | "onSearchChange" | "onKeyDown"
  > {
  /**
   * The value of the time input.
   */
  value?: Moment;

  /**
   * Event handler called when the value of the time input changes.
   */
  onChange: (value: Moment) => void;

  /**
   * Whether the selected value should not be displayed on the time input.
   */
  hideValue?: boolean;

  /**
   * Whether the time input is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Provides a selectable time field.
 * @example
 * ```tsx
 * const [time, setTime] = React.useState(moment());
 *
 * <TimeInput value={time} onChange={(value) => setTime(value)} />
 */
export type TimeInput = React.FC<TimeInputProps>;
