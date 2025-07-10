import type * as React from "react";

export interface TextAreaProps {
  /**
   * Whether the textarea is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The content of the textarea.
   */
  value?: string;

  /**
   * The placeholder text in the textarea.
   */
  placeholder?: string;

  /**
   * Whether the textarea should automatically focus on render.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * The minimum number of characters allowed in the textarea.
   */
  minLength?: number;

  /**
   * The maximum number of characters allowed in the textarea.
   */
  maxLength?: number;

  /**
   * Whether the user can enter more characters than the `maxLength`.
   * @default false
   */
  allowOverflow?: boolean;

  /**
   * Whether there should be spell checking on the textarea.
   * @default false
   */
  spellCheck?: boolean;

  /**
   * Whether the textarea can be resized.
   * @default false
   */
  resizeable?: boolean;

  /**
   * The class name applied to the textarea.
   */
  className?: string;

  /**
   * The id of the textarea.
   */
  id?: string;

  /**
   * The number of rows to display.
   * @default 3
   */
  rows?: number;

  /**
   * Whether the textarea should grow and shrink to fit its content.
   * @default false
   */
  flex?: boolean;

  /**
   * Whether the textarea should automatically adjust its height to fit its content.
   * @default false
   */
  autosize?: boolean;

  /**
   * Whether the completion of the textarea is required.
   * @default false
   */
  required?: boolean;

  /**
   * Event handler called when the content of the textarea is invalid.
   */
  onInvalid?: React.FormEventHandler<HTMLTextAreaElement>;

  /**
   * A ref for the textarea element.
   */
  inputRef?: React.Ref<HTMLTextAreaElement>;

  /**
   * The accessibility identifier for the textarea.
   */
  "aria-labelledby"?: string;

  /**
   * Whether the character count should have padding, considering the remaining character count as well.
   * @default false
   */
  showCharacterCountFullPadding?: boolean;

  /**
   * Whether the character count should be shown.
   * @default false
   */
  showCharacterCount?: boolean;

  /**
   * Whether the remaining character count should be shown.
   * @default false
   */
  showRemainingCharacterCount?: boolean;

  /**
   * The error message to display.
   */
  error?: string;

  /**
   * Event handler called when the textarea changes.
   */
  onChange?: (value: string, name: string) => void;

  /**
   * The name of the textarea.
   */
  name?: string;

  /**
   * Event handler called when the textarea gains focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>, name: string) => void;

  /**
   * Event handler called when the textarea loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>, name: string) => void;

  /**
   * Event handler called when a key is pressed down on the textarea.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;

  /**
   * Whether the textarea is initially "dirty" (i.e. textarea field has been changed).
   * @default false
   */
  defaultDirty?: boolean;
}

export interface TextAreaState {
  /**
   * Whether the textarea is "dirty" (i.e. textarea field has been changed).
   * @default false
   */
  dirty: boolean;
}

/**
 * A text input for entering multiple lines of text.
 * @example
 * ```tsx
 * <TextArea value={value} placeholder="Enter some text" />
 * ```
 */
export declare class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  /**
   * Returns the aria described by for the textarea.
   */
  public getAriaDescribedBy: () => string | undefined;

  /**
   * The change event handler for the textarea.
   */
  public onChange: React.ChangeEventHandler<HTMLTextAreaElement>;

  /**
   * The focus event handler for the textarea.
   */
  public onFocus: React.FocusEventHandler<HTMLTextAreaElement>;

  /**
   * The blur event handler for the textarea.
   */
  public onBlur: React.FocusEventHandler<HTMLTextAreaElement>;

  /**
   * The key down event handler for the textarea.
   */
  public onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;

  /**
   * Returns the padding right of the textarea.
   */
  public getPaddingRight: () => number;

  /**
   * Returns the number of characters left in the textarea.
   */
  public getCharsLeftLength: () => number | null;

  /**
   * Returns whether the textarea is overflowing.
   */
  public getIsOverflowing: () => boolean;

  /**
   * Returns whether the textarea is overflowing.
   */
  public getIsUnderflowing: () => boolean;

  /**
   * Renders the character count on the textarea.
   */
  public renderCharacterCount: () => React.ReactElement | null;

  /**
   * Renders the max length number on the textarea.
   */
  public renderMaxLength: () => React.ReactElement | null;

  /**
   * Returns whether the textarea has an error.
   */
  public hasError: () => boolean;

  /**
   * Returns the error message.
   */
  public getErrorMessage: () => string | null;

  /**
   * Renders the error message.
   */
  public renderErrorMessage: () => React.ReactElement | null;
}
