import type * as React from "react";

export type SegmentedControlOptionValue = string | number;

export interface SegmentedControlOption {
  /**
   * The value of the option.
   */
  value: SegmentedControlOptionValue;

  /**
   * The key of the option.
   */
  key?: React.Key;

  /**
   * The name of the option.
   */
  name: string;

  /**
   * The tooltip text for the option.
   */
  tooltip?: React.ReactNode | (() => React.ReactNode);

  /**
   * The accessibility label for the tooltip.
   */
  tooltipAriaLabel?: string;
}

export interface SegmentedControlProps {
  /**
   * The options to display in the segmented control.
   */
  options: SegmentedControlOption[];

  /**
   * The value of the selected option.
   */
  value: SegmentedControlOptionValue;

  /**
   * Event handler called when an option is selected.
   */
  onChange: (option: SegmentedControlOption, event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * The look of the segmented control.
   * @default "tab"
   */
  look?: "tab" | "pill";

  /**
   * The class name applied to the segmented control.
   */
  className?: string;

  /**
   * The class name applied to the single option element.
   */
  optionClassName?: string;

  /**
   * Whether the segmented control is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Provides a linear horizontal set of options.
 * @example
 * ```tsx
 * const options = [
 *   { value: "day", name: "Day" },
 *   { value: "week", name: "Week" },
 *   { value: "month", name: "Month" }
 * ];
 *
 * const [value, setValue] = React.useState("week");
 *
 * <SegmentedControl
 *   options={options}
 *   value={value}
 *   onChange={(option) => setValue(option.value)}
 *   look="pill"
 * />
 * ```
 */
export type SegmentedControl = React.FC<SegmentedControlProps>;
