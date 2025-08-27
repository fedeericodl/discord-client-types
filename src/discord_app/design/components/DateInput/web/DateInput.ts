import type * as React from "react";

import type { CalendarPickerProps } from "../../CalendarPicker/web/CalendarPicker";

export interface DateInputProps extends Pick<CalendarPickerProps, "value" | "minDate" | "maxDate"> {
  /**
   * Event handler called when a date is selected.
   */
  onSelect: (date: Date) => void;

  /**
   * The format of the date.
   * @default "ll"
   */
  dateFormat?: string;

  /**
   * Whether the date input is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * An interactive date input that displays a calendar picker when clicked.
 * @example
 * ```tsx
 * const [date, setDate] = React.useState(moment());
 *
 * <DateInput
 *   value={date}
 *   onSelect={(date) => setDate(date)}
 * />
 * ```
 */
export type DateInput = React.FC<DateInputProps>;
