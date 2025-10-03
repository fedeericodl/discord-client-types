import type { BaseIconButtonProps, FormControlProps, TagGroupProps } from "@discordapp/design/web";
import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

import type { IconSize } from "../../Icon/IconSize";

export interface TextInputAccessoryIcon extends BaseIconButtonProps {
  /**
   * The tooltip to display on hover.
   */
  tooltip?: string;
}

export interface TextInputAccessoryButton {
  /**
   * The button element to display.
   */
  button: React.ReactNode;
}

export interface TextInputAccessoryTags extends TagGroupProps {
  /**
   * The type of accessory.
   */
  type: "tags";
}

export interface TextInputAccessoryImage {
  /**
   * The type of accessory.
   */
  type: "image";

  /**
   * The source URL of the image.
   */
  src: string;
}

// TODO: Complete icon types
interface IconProps {
  /**
   * The size of the icon.
   */
  size: keyof IconSize;

  /**
   * The color of the icon.
   */
  color: string;
}

export type TextInputAccessory =
  | string
  | TextInputAccessoryIcon
  | TextInputAccessoryButton
  | TextInputAccessoryTags
  | TextInputAccessoryImage
  | React.ComponentType<IconProps>;

export interface TextInputClearable {
  /**
   * Whether to always show the clear button.
   */
  show: boolean;
}

export interface TextInputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size" | "onChange" | "onFocus" | "onBlur">,
    Pick<
      FormControlProps,
      "helperText" | "successMessage" | "label" | "description" | "hideLabel" | "required" | "id"
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
  error?: React.ReactNode;

  /**
   * Whether the input is initially "dirty" (i.e. input field has been changed).
   * @default false
   */
  defaultDirty?: boolean;

  /**
   * The element to display before the input.
   */
  leading?: TextInputAccessory;

  /**
   * The element to display after the input.
   */
  trailing?: TextInputAccessory;

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
  clearable?: boolean | TextInputClearable;

  /**
   * Whether to show the character count.
   * @default false
   */
  showCharacterCount?: boolean;

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
   * Event handler called when the input is cleared.
   */
  onClear?: (event: React.MouseEventHandler<HTMLElement>) => void;
}

/**
 * An interactive text input element.
 * @example
 * ```tsx
 * <TextInput value={value} placeholder="Enter some text" />
 * ```
 */
export type TextInput = React.FC<TextInputProps>;

export type InputProps = React.ComponentPropsWithoutRef<"input">;

/**
 * Wrapper around the native input element.
 */
export type Input = React.FC<InputProps>;
