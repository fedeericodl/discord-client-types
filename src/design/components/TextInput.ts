import type React from "react";
import type { FocusRingProps } from "react-focus-rings";

export type TextInputSizes = Record<"DEFAULT" | "MINI", string>;

export interface InputErrorProps {
  /**
   * The error message to display.
   */
  error?: string;
}

/**
 * Displays an error message.
 * Should be used under an input field.
 *
 * @example
 * ```tsx
 * <InputError error="A very generic error." />
 * ```
 */
export type InputError = React.FC<InputErrorProps>;

export interface TextInputProps
  extends Omit<
    React.ComponentPropsWithoutRef<"input">,
    "size" | "onChange" | "onFocus" | "onBlur"
  > {
  /**
   * The class name applied to the input.
   */
  inputClassName?: string;

  /**
   * The prefix to display in the input.
   */
  inputPrefix?: string;

  /**
   * The size of the input.
   *
   * @default TextInput.Sizes.DEFAULT
   *
   * @see {@link TextInputSizes}
   */
  size?: string;

  /**
   * Whether the input is editable.
   *
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
   *
   * @default false
   */
  defaultDirty?: boolean;
}

export interface TextInputState {
  /**
   * Whether the input is "dirty" (i.e. input field has been changed).
   *
   * @default false
   */
  dirty: boolean;
}

export declare class TextInputComponent extends React.Component<TextInputProps, TextInputState> {
  public hasError: () => boolean;
  public getError: () => string | null;
  public getIsUnderFlowing: () => boolean;
  public getIsOverFlowing: () => boolean;
  public onChange: React.ChangeEventHandler<HTMLInputElement>;
  public onFocus: React.FocusEventHandler<HTMLInputElement>;
  public onBlur: React.FocusEventHandler<HTMLInputElement>;
}

/**
 * An interactive text input element.
 *
 * @example
 * ```tsx
 * <TextInput value={value} placeholder="Enter some text" />
 * ```
 */
export type TextInput = typeof TextInputComponent & {
  Sizes: TextInputSizes;
};
