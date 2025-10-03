import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface LegacyTextInputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "onChange" | "onFocus" | "onBlur"> {
  /**
   * The class name applied to the input.
   */
  inputClassName?: string;

  /**
   * Whether the input is editable.
   * @default true
   */
  editable?: boolean;

  /**
   * A ref for the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * The prefix element to display in the input.
   */
  prefixElement?: React.ReactNode;

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
 * <LegacyTextInput value={value} placeholder="Enter some text" />
 * ```
 */
export type LegacyTextInput = React.FC<LegacyTextInputProps>;
