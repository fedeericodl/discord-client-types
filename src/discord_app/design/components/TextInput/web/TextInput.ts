import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface TextInputProps
  extends Omit<
    React.ComponentPropsWithoutRef<"input">,
    "size" | "onChange" | "onFocus" | "onBlur"
  > {
  /**
   * Whether the input is editable.
   */
  editable?: boolean;

  /**
   * A ref for the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * The error message to display.
   */
  error?: string;

  /**
   * Whether the input is initially "dirty" (i.e. input field has been changed).
   * @default false
   */
  defaultDirty?: boolean;

  /**
   * The element to display before the input.
   */
  leading?: React.ReactNode;

  /**
   * The element to display after the input.
   */
  trailing?: React.ReactNode;

  /**
   * The event to validate the input on.
   * @default "change"
   */
  validateOn?: string;

  /**
   * The size of the input.
   * @default "md"
   */
  size?: "sm" | "md";

  /**
   * Whether the input is full width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the input can be cleared.
   * @default false
   */
  clearable?: boolean;

  /**
   * The helper text to display below the input.
   */
  helperText?: string;

  /**
   * Whether to show the character count.
   * @default false
   */
  showCharacterCount?: boolean;

  /**
   * The success message to display when the input is valid.
   */
  successMessage?: string;

  /**
   * Event handler called when the input changes.
   */
  onChange?: (value: string, name: string) => void;

  /**
   * Event handler called when the input gains focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>, name: string) => void;

  /**
   * Event handler called when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>, name: string) => void;
}

/**
 * An interactive text input element.
 * @example
 * ```tsx
 * <TextInput value={value} placeholder="Enter some text" />
 * ```
 */
export type TextInput = React.FC<TextInputProps>;
