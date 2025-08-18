import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";

export interface MenuRadioItemProps {
  /**
   * Color theme for the radio item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * The label text displayed for the radio item.
   */
  label?: React.FC<MenuRadioItemProps> | React.ReactNode;

  /**
   * Whether the radio item is checked.
   */
  checked?: boolean;

  /**
   * The subtext displayed for the radio item.
   */
  subtext?: React.ReactNode;

  /**
   * Whether the radio item is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the radio item is focused.
   */
  isFocused?: boolean;

  /**
   * Props to pass to the menu item.
   */
  menuItemProps?: ItemProps;

  /**
   * Click handler for the radio item.
   */
  action: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * A radio item component for use in menus.
 * It allows users to select one option from a set of choices.
 */
export type MenuRadioItem = React.FC<MenuRadioItemProps>;
