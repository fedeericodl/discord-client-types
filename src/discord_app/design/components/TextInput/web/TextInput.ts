import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface TextInputProps
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

  /**
   * Whether the input is initially "dirty" (i.e. input field has been changed).
   * @default false
   */
  defaultDirty?: boolean;
}

export interface TextInputState {
  /**
   * Whether the input is "dirty" (i.e. input field has been changed).
   * @default false
   */
  dirty: boolean;
}

/**
 * An interactive text input element.
 * @example
 * ```tsx
 * <TextInput value={value} placeholder="Enter some text" />
 * ```
 */
export declare class TextInput extends React.Component<TextInputProps, TextInputState> {
  /**
   * Returns whether the input has an error.
   */
  public hasError: () => boolean;

  /**
   * Returns the error message.
   */
  public getError: () => string | null;

  /**
   * Returns whether the input is underflowing.
   */
  public getIsUnderFlowing: () => boolean;

  /**
   * Returns whether the input is overflowing.
   */
  public getIsOverFlowing: () => boolean;

  /**
   * The change event handler for the input.
   */
  public onChange: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * The focus event handler for the input.
   */
  public onFocus: React.FocusEventHandler<HTMLInputElement>;

  /**
   * The blur event handler for the input.
   */
  public onBlur: React.FocusEventHandler<HTMLInputElement>;
}
