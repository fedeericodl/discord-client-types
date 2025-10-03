import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";

export interface MenuSwitchItemProps {
  /**
   * Color theme for the switch item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * The label text displayed for the switch item.
   */
  label?: React.ReactNode;

  /**
   * Whether the switch is checked.
   */
  checked?: boolean;

  /**
   * Whether the switch is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the switch is focused.
   */
  isFocused?: boolean;

  /**
   * Props to pass to the menu item.
   */
  menuItemProps?: ItemProps;

  /**
   * Click handler for the switch item.
   */
  action: (value: boolean) => void;

  /**
   * The class name applied to the menu item.
   */
  className?: string;
}

/**
 * A switch item component for use in menus.
 * It allows users to toggle an option on or off.
 */
export type MenuSwitchItem = React.FC<MenuSwitchItemProps>;
