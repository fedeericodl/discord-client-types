import type * as React from "react";

import type { ICON_SIZE } from "../Icon/getIconSize";

interface IconProps {
  /**
   * The class name applied to the icon.
   */
  className: string;

  /**
   * The size of the icon.
   */
  size: keyof ICON_SIZE;

  /**
   * The color of the icon.
   */
  color: string;

  /**
   * Whether the icon is hidden from screen readers.
   */
  "aria-hidden": boolean;

  /**
   * Whether the icon is focusable.
   */
  focusable: boolean;
}

export interface BaseCheckboxProps {
  /**
   * Whether the checkbox is checked.
   */
  checked?: boolean;

  /**
   * Whether the checkbox is checked by default (for uncontrolled checkboxes).
   */
  defaultChecked?: boolean;

  /**
   * A description to display below the label.
   */
  description?: React.ReactNode;

  /**
   * Event handler called when the checked state changes.
   */
  onChange?: (value: boolean) => void;

  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the checkbox is read-only.
   */
  displayOnly?: boolean;

  /**
   * The label to display next to the checkbox.
   */
  label?: React.ReactNode;

  /**
   * The accessibility label for the checkbox.
   */
  labeledBy?: string;

  /**
   * The icon to display next to the checkbox.
   */
  leadingIcon?: React.ComponentType<IconProps>;

  /**
   * The value of the checkbox.
   */
  value?: string | number | boolean;

  /**
   * The variant of the checkbox group.
   * @default "single"
   */
  groupVariant?: "single" | "group";

  /**
   * The type of label to display.
   * @default "primary"
   */
  labelType?: "primary" | "secondary";
}

/**
 * An interactive checkbox element.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <BaseCheckbox value={value} onChange={() => setValue(!value)} />
 * ```
 */
export type BaseCheckbox = React.FC<BaseCheckboxProps>;
