import type { Moment } from "moment";
import type * as React from "react";
import type { ReactDatePickerProps } from "react-datepicker";

export interface CalendarPickerProps
  extends Pick<ReactDatePickerProps, "calendarClassName" | "autoFocus" | "onClickOutside"> {
  /**
   * The currently selected date.
   */
  value?: Moment;

  /**
   * The minimum selectable date.
   */
  minDate?: Moment;

  /**
   * The minimum selectable date.
   */
  maxDate?: Moment;

  /**
   * Event handler called when a date is selected.
   */
  onSelect?: (date: Moment, event: React.SyntheticEvent) => void;
}

/**
 * Date selection component that displays an inline calendar.
 * @see {@link https://reactdatepicker.com/ React Date Picker}
 */
export type CalendarPicker = React.FC<CalendarPickerProps>;
