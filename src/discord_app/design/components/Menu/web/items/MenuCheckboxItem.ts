import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";

export interface MenuCheckboxItemProps {
  /**
   * Color theme for the checkbox item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * The label text displayed for the checkbox item.
   */
  label?: React.FC<MenuCheckboxItemProps> | React.ReactNode;

  /**
   * Whether the checkbox item is checked.
   */
  checked?: boolean;

  /**
   * The subtext displayed for the checkbox item.
   */
  subtext?: React.ReactNode;

  /**
   * Whether the checkbox item is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the checkbox item is focused.
   */
  isFocused?: boolean;

  /**
   * Props to pass to the menu item.
   */
  menuItemProps?: ItemProps;

  /**
   * Click handler for the checkbox item.
   */
  action: React.MouseEventHandler<HTMLDivElement>;

  /**
   * The class name applied to the checkbox item.
   */
  className?: string;

  /**
   * The class name applied when the checkbox item is focused.
   */
  focusedClassName?: string;
}

/**
 * A checkbox item component for use in menus.
 * It allows users to select one or more options from a set of choices.
 */
export type MenuCheckboxItem = React.FC<MenuCheckboxItemProps>;
