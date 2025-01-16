import type React from "react";
import type { ScreamingSnakeCase } from "type-fest";
import type { ButtonColors, ButtonLooks } from "./Button/Button";

type Modes = "default" | "success" | "error";

export type CopyInputModes = {
  [K in Modes as ScreamingSnakeCase<K>]: K;
};

export interface CopyInputProps {
  /**
   * The value to be copied to the clipboard.
   */
  value: string;

  /**
   * The mode of the copy input.
   * @default CopyInput.Modes.DEFAULT
   * @see {@link Modes CopyInputModes}
   */
  mode?: Modes;

  /**
   * Whether the input should automatically focus on render.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Whether there should be spell checking on the input.
   * @default false
   */
  spellCheck?: boolean;

  /**
   * The class name applied to the input.
   */
  inputClassName?: string;

  /**
   * The placeholder text for the input.
   */
  placeholder?: string;

  /**
   * The text to display on the button.
   */
  text?: string;

  /**
   * The message to display when the input is hidden.
   */
  hideMessage?: React.ReactNode;

  /**
   * The look of the button.
   * @default CopyInput.ButtonLooks.FILLED
   * @see {@link ButtonLooks}
   */
  buttonLook?: string;

  /**
   * Whether copying is supported.
   * @default false
   */
  supportsCopy?: boolean;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The color of the button.
   * @default CopyInput.ButtonColors.PRIMARY
   * @see {@link ButtonColors}
   */
  buttonColor?: string;

  /**
   * The class name applied to the copy input.
   */
  className?: string;

  /**
   * Event handler called when the value is copied to the clipboard.
   */
  onCopy: (value: string) => void;
}

export declare class CopyInputComponent extends React.PureComponent<
  React.PropsWithChildren<CopyInputProps>
> {
  /**
   * The ref to the input element.
   */
  public inputRef: React.RefObject<HTMLInputElement>;

  /**
   * The ref to the container element.
   */
  public containerRef: React.RefObject<HTMLDivElement>;

  /**
   * Event handler called when the button is clicked.
   */
  public handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Event handler called when the input is clicked.
   */
  public handleInputClick: React.MouseEventHandler<HTMLInputElement>;

  /**
   * Selects the input value.
   */
  public select: () => void;

  /**
   * Renders the input element.
   * @param inputHidden Whether the input is hidden.
   */
  public renderInput: (inputHidden?: boolean) => React.ReactElement;
}

/**
 * An interactive input component designed for copying text values to the clipboard.
 * @example
 * ```tsx
 * <CopyInput value="Sample text to copy" onCopy={handleCopy} />
 * ```
 */
export type CopyInput = typeof CopyInputComponent & {
  Modes: CopyInputModes;
  ButtonColors: ButtonColors;
  ButtonLooks: ButtonLooks;
};
