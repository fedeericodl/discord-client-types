import type * as React from "react";

import type { FormControlProps, LayerPosition, PopoutProps } from "@app/design/web";

export type SelectOptionValue = string | number | null | undefined;

export interface UseSingleSelectStateProps<T extends SelectOptionValue> {
  /**
   * The currently selected value.
   */
  value: T | null;

  /**
   * Callback function called when the selection changes.
   */
  onChange: (value: T | null) => void;

  /**
   * Function to convert a value into a serialized value.
   * @default (value) => String(value)
   */
  serialize?: (value: T) => SelectOptionValue;
}

export interface SelectionHookResult<T extends SelectOptionValue> {
  /**
   * Function to select a specific value.
   */
  select: (value: T) => void;

  /**
   * Function to check if a value is currently selected.
   */
  isSelected: (value: T) => boolean;

  /**
   * Function to clear the current selection.
   */
  clear: () => void;

  /**
   * Function to serialize a value into a serialized value.
   */
  serialize: (value: T) => SelectOptionValue;
}

/**
 * Hook for managing single selection state with helper functions.
 * Provides the necessary utilities for single-value selections.
 * Automatically handles selection logic and serialization.
 * @param props The properties for configuring the selection state.
 * @returns An object containing selection utilities.
 */
export type UseSingleSelectState = <T extends SelectOptionValue>(
  props: UseSingleSelectStateProps<T>,
) => SelectionHookResult<T>;

export interface UseVariableSelectProps<T extends SelectOptionValue> {
  /**
   * The currently selected values as a Set.
   */
  value: Set<T> | null;

  /**
   * Callback function called when the selection changes.
   */
  onChange: (value: Set<T>) => void;

  /**
   * Function that determines how selection interactions are handled.
   */
  onSelectInteraction: (value: T, currentValues: Set<T> | null) => SelectInteractionResult<T>;

  /**
   * Function to convert the value into a serialized value.
   * @default (value) => String(value)
   */
  serialize?: (value: T) => SelectOptionValue;
}

/**
 * Hook for managing variable selection state with custom interaction logic.
 * Supports multi-select, toggle, and custom selection behaviors.
 * @param props The properties for configuring the selection state.
 * @returns An object containing selection utilities.
 */
export type UseVariableSelect = <T extends SelectOptionValue>(
  props: UseVariableSelectProps<T>,
) => SelectionHookResult<T>;

export interface SelectInteractionResult<T extends SelectOptionValue> {
  /**
   * The new set of selected values after the interaction.
   */
  newValues: Set<T>;

  /**
   * Whether the selection was changed.
   */
  updated: boolean;
}

/**
 * Selection function for multi-select behavior.
 * Adds values to selection if not present, removes if already selected.
 * Allows multiple items to be selected simultaneously.
 * @param value The value to select or deselect.
 * @param currentValues The current set of selected values.
 * @returns An object containing the new set of selected values and whether an update occurred.
 */
export type MultiSelect = <T extends SelectOptionValue>(
  value: T,
  currentValues: Set<T> | null,
) => SelectInteractionResult<T>;

/**
 * Selection function for toggle behavior.
 * Clears all selections when clicking a selected item, otherwise selects only the clicked item.
 * Useful for single-selection with deselect capability.
 * @param value The value to select or deselect.
 * @param currentValues The current set of selected values.
 * @returns An object containing the new set of selected values and whether an update occurred.
 */
export type ToggleSelect = <T extends SelectOptionValue>(
  value: T,
  currentValues: Set<T> | null,
) => SelectInteractionResult<T>;

/**
 * Selection function for single-select behavior within a Set.
 * Only allows one item to be selected at a time, replacing previous selections.
 * Does not trigger updates if the same item is clicked again.
 * @param value The value to select.
 * @param currentValues The current set of selected values.
 * @returns An object containing the new set of selected values and whether an update occurred.
 */
export type SingleSelectFn = <T extends SelectOptionValue>(
  value: T,
  currentValues: Set<T> | null,
) => SelectInteractionResult<T>;
// ? Need to call it like this because there is already a SingleSelect type

export interface SelectOption<T extends SelectOptionValue = SelectOptionValue> {
  /**
   * The value of the option.
   */
  value: T;

  /**
   * The label of the option.
   */
  label: string;

  /**
   * Whether the option is disabled.
   */
  disabled?: boolean;

  /**
   * Whether selecting this option should prevent the popout from closing.
   */
  preventCloseOnSelect?: boolean;

  /**
   * The key of the option.
   */
  key?: string | number;
}

type ExtractOptionValue<T> = T extends readonly SelectOption<infer U>[] ? U : never;
type SelectValue<T, Clearable extends boolean> = Clearable extends true ? T | null : T;

export interface SelectProps<
  TOptions extends readonly SelectOption[] = readonly SelectOption[],
  TClearable extends boolean = false,
> extends Pick<
    FormControlProps,
    "label" | "description" | "helperText" | "errorMessage" | "successMessage"
  > {
  /**
   * The list of options to show.
   */
  options: TOptions;

  /**
   * The placeholder text shown when no value is selected.
   */
  placeholder?: string;

  /**
   * The class name applied to the select container.
   */
  className?: string;

  /**
   * Whether the select is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Maximum number of visible items in the popout before showing a scroll.
   * @default 7
   */
  maxVisibleItems?: number;

  /**
   * Whether to automatically focus the input when the select is opened.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * The width of the popout.
   * If "auto", the width will be determined by the content.
   * If not provided, the width will match the select width.
   */
  popoutWidth?: number | "auto";

  /**
   * Whether a clear button is shown to clear the selection.
   * @default false
   */
  clearable?: TClearable;

  /**
   * Size variant of the select.
   * @default "md"
   */
  size?: "sm" | "md";

  /**
   * Visual variant of the select component.
   * @default "filled"
   */
  variant?: "filled" | "text-only";

  /**
   * Callback invoked when the select/popout closes.
   */
  onClose?: () => void;

  /**
   * Callback invoked when the select/popout opens.
   */
  onOpen?: () => void;

  /**
   * Render prop for the visible label for an option.
   * @default (option) => option?.label
   */
  renderOptionLabel?: (option: TOptions[number] | null) => React.ReactNode;

  /**
   * Render prop for the visible value shown in the select when options are selected.
   * @default (options) => options.map((o) => o.label).join(", ")
   */
  renderOptionValue?: (options: TOptions[number][]) => React.ReactNode;

  /**
   * The class name applied to the popout container.
   */
  popoutClassName?: string;

  /**
   * The position of the popout.
   * @see {@link LayerPosition}
   * @default "bottom"
   */
  popoutPosition?: LayerPosition;

  /**
   * The layer context to use for the popout.
   */
  popoutLayerContext?: PopoutProps["layerContext"];

  /**
   * The class name applied to each option in the popout.
   */
  optionClassName?: string;

  /**
   * Whether the popout should close when an option is selected.
   */
  closeOnSelect?: boolean;

  /**
   * Function to select a value. Provided by selection state hooks.
   */
  select: (value: ExtractOptionValue<TOptions>) => void;

  /**
   * Function to check if a value is selected. Provided by selection state hooks.
   */
  isSelected: (value: ExtractOptionValue<TOptions>) => boolean;

  /**
   * Function to serialize values. Provided by selection state hooks.
   */
  serialize: (value: ExtractOptionValue<TOptions>) => SelectOptionValue;

  /**
   * Function to clear all selections. Provided by selection state hooks.
   */
  clear?: () => void;

  /**
   * Whether to hide the option icon.
   * @default false
   */
  hideIcon?: boolean;

  /**
   * Whether to show a processing/loading visual state.
   * @default false
   */
  isProcessing?: boolean;

  /**
   * The accessibility label for the select.
   */
  "aria-label"?: string;

  /**
   * The accessibility identifier for the select.
   */
  "aria-labelledby"?: string;
}

/**
 * Flexible select component with customizable selection behavior.
 * Supports single and multi-select modes through selection state hooks.
 * @example
 * ```tsx
 * const options = [
 *   { value: "option1", label: "Option 1" },
 *   { value: "option2", label: "Option 2" },
 *   { value: "option3", label: "Option 3" },
 * ];
 *
 * // Single select
 * const [selectedValue, setSelectedValue] = React.useState(null);
 * const selectState = useSingleSelectState({
 *   value: selectedValue,
 *   onChange: setSelectedValue
 * });
 *
 * <Select options={options} {...selectState} />
 *
 * // Multi select
 * const [selectedValues, setSelectedValues] = React.useState(new Set());
 * const selectState = useVariableSelect({
 *   value: selectedValues,
 *   onChange: setSelectedValues,
 *   onSelectInteraction: multiSelect
 * });
 *
 * <Select options={options} {...selectState} />
 * ```
 */
export type Select = <
  TOptions extends readonly SelectOption[] = readonly SelectOption[],
  TClearable extends boolean = false,
>(
  props: SelectProps<TOptions, TClearable>,
) => React.ReactElement;

export interface SingleSelectProps<
  TOptions extends readonly SelectOption[] = readonly SelectOption[],
  TClearable extends boolean = false,
> extends Omit<SelectProps<TOptions, TClearable>, keyof SelectionHookResult<SelectOptionValue>> {
  /**
   * The currently selected value.
   */
  value: SelectValue<ExtractOptionValue<TOptions>, TClearable>;

  /**
   * Callback function called when the selection changes.
   */
  onChange: (value: SelectValue<ExtractOptionValue<TOptions>, TClearable>) => void;
}

/**
 * Simplified single-selection select component with built-in state management.
 * Automatically manages single selection logic without requiring selection state hooks.
 * @example
 * ```tsx
 * const options = [
 *  { value: "option1", label: "Option 1" },
 *  { value: "option2", label: "Option 2" },
 *  { value: "option3", label: "Option 3" },
 * ];
 * const [value, setValue] = React.useState(null);
 *
 * <SingleSelect options={options} value={value} onChange={setValue} />
 * ```
 */
export type SingleSelect = <
  TOptions extends readonly SelectOption[] = readonly SelectOption[],
  TClearable extends boolean = false,
>(
  props: SingleSelectProps<TOptions, TClearable>,
) => React.ReactElement;
