import type { BaseIconButtonProps } from "@discordapp/design/web";
import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

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

// TODO: Complete this with TagGroup from Mana
export interface TextInputAccessoryTags {
  /**
   * The type of accessory.
   */
  type: "tags";

  /**
   * The label for the tags.
   */
  label: string;

  /**
   * The items to display as tags.
   */
  items: { id: string; label: string }[];

  /**
   * Event handler called when a tag is removed.
   */
  onRemove: (set: Set<string>) => void;
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
  size: string;

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
   * The helper text to display below the input.
   */
  helperText?: React.ReactNode;

  /**
   * Whether to show the character count.
   * @default false
   */
  showCharacterCount?: boolean;

  /**
   * The success message to display when the input is valid.
   */
  successMessage?: React.ReactNode;

  /**
   * The label to display above the input.
   */
  label?: React.ReactNode;

  /**
   * The description to display below the label.
   */
  description?: React.ReactNode;

  /**
   * Whether to visually hide the label.
   */
  hideLabel?: boolean;

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
