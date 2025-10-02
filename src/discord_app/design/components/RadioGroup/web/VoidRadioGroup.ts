import type * as React from "react";

import type { FormControlProps, LayerPosition } from "@app/design/web";
import type { IconSize } from "../../Icon/IconSize";

export type VoidRadioGroupSizes = Record<"NOT_SET" | "NONE" | "SMALL" | "MEDIUM", string>;

interface IconProps {
  /**
   * The class name applied to the icon.
   */
  className?: string;

  /**
   * The size of the icon.
   */
  size?: keyof IconSize;

  /**
   * The color of the icon.
   */
  color?: string;
}

export interface VoidRadioIndicatorProps {
  /**
   * Whether the radio indicator is checked.
   */
  checked?: boolean;

  /**
   * The class name applied to the radio indicator.
   */
  radioItemIconClassName?: string;

  /**
   * The icon to display in the radio indicator.
   */
  icon?: React.ComponentType<IconProps>;

  /**
   * Whether the radio indicator is disabled.
   */
  disabled?: boolean;
}

/**
 * Visually represents the state of a radio indicator.
 */
export type VoidRadioIndicator = React.FC<VoidRadioIndicatorProps>;

export interface HookVoidRadioGroupProps {
  /**
   * The orientation of the radio group.
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Whether the radio group is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * The accessibility identifier for the radio group.
   */
  labelledBy?: string;
}

export interface HookVoidRadioGroup {
  /**
   * The role of the radio group element.
   */
  role: string;

  /**
   * Event handler called when a key is pressed down on the radio group.
   */
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;

  /**
   * The ref for the radio group element.
   */
  ref: React.RefObject<HTMLDivElement>;

  /**
   * The accessibility identifier for the radio group.
   */
  "aria-labelledby": string;

  /**
   * The accessibility orientation of the radio group.
   */
  "aria-orientation": "horizontal" | "vertical";

  /**
   * Whether the radio group is disabled.
   */
  "aria-disabled": boolean;
}

/**
 * Hook that manages keyboard navigation and accessibility attributes for radio group controls.
 * Useful for making a custom radio group.
 */
export type UseVoidRadioGroup = (props: HookVoidRadioGroupProps) => HookVoidRadioGroup;

export interface HookVoidRadioItemProps {
  /**
   * The role of the radio item element.
   */
  isSelected?: boolean;

  /**
   * The label for the radio item.
   */
  label?: string;
}

export interface HookVoidRadioItem {
  /**
   * The role of the radio item element.
   */
  role: string;

  /**
   * The tab index of the radio item element.
   */
  tabIndex: number;

  /**
   * The accessibility label for the radio item.
   */
  "aria-label": string;

  /**
   * The accessibility state of the radio item.
   */
  "aria-checked": boolean;
}

/**
 * Hook that returns the necessary attributes for an individual radio button element.
 * Useful for making a custom radio button.
 */
export type UseVoidRadioItem = (props: HookVoidRadioItemProps) => HookVoidRadioItem;

export interface RadioGroupOption
  extends Pick<VoidRadioIndicatorProps, "radioItemIconClassName" | "icon"> {
  /**
   * The value of the radio option.
   */
  value: string | number;

  /**
   * The class name applied to the radio bar.
   */
  radioBarClassName?: string;

  /**
   * Whether the radio option is disabled.
   */
  disabled?: boolean;

  /**
   * The content that is displayed when the radio option is selected.
   */
  collapsibleContent?: React.ReactNode;

  /**
   * The text of the tooltip that appears when hovering over the radio option.
   */
  tooltipText?: React.ReactNode | (() => React.ReactNode);

  /**
   * The position of the tooltip relative to the radio option.
   * @see {@link LayerPosition}
   */
  tooltipPosition?: LayerPosition;

  /**
   * The color of the radio bar.
   */
  color?: string;

  /**
   * The name to display for the radio option.
   */
  name: React.ReactNode;

  /**
   * The description to display for the radio option.
   */
  desc?: string;
}

export interface RadioGroupProps {
  /**
   * The class name applied to the name and description of a radio item.
   */
  itemInfoClassName?: string;

  /**
   * The class name applied to the name of a radio item.
   */
  itemTitleClassName?: string;

  /**
   * The class name applied to the radio item.
   */
  radioItemClassName?: string;

  /**
   * The class name applied to the, if available, collapsible content of a radio item.
   */
  collapsibleClassName?: string;

  /**
   * The class name applied to the radio group.
   */
  className?: string;

  /**
   * The value of the selected radio item.
   */
  value?: string | number | null;

  /**
   * The size of the radio item.
   * @default RadioGroupSizes.MEDIUM
   * @see {@link VoidRadioGroupSizes}
   */
  size?: string;

  /**
   * The position of the radio indicator.
   * @default "left"
   */
  radioPosition?: "left" | "right";

  /**
   * Event handler called when the selected radio item changes.
   * @default NOOP
   */
  onChange?: (option: RadioGroupOption) => void;

  /**
   * Whether the radio group is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The radio options to display in the radio group.
   */
  options?: RadioGroupOption[];

  /**
   * The accessibility identifier for the radio group.
   */
  "aria-labelledby"?: string;

  /**
   * The orientation of the radio group.
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Whether the radio group has a transparent background.
   */
  withTransparentBackground?: boolean;
}

export type VoidRadioGroupProps = RadioGroupProps &
  Pick<FormControlProps, "label" | "description" | "required">;

/**
 * A group of radio buttons that allows the user to select one option from a set.
 */
export type VoidRadioGroup = React.FC<VoidRadioGroupProps>;
