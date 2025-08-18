import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";

export interface MenuCustomItemChildrenProps {
  /**
   * Color theme for the custom item.
   * @default "default"
   */
  color: keyof MenuItemColors;

  /**
   * Whether the custom item is disabled.
   * @default false
   */
  disabled: boolean;

  /**
   * Whether the custom item is focused.
   * @default false
   */
  isFocused: boolean;
}

// cspell:ignore dont
export interface MenuCustomItemProps {
  /**
   * Function that renders custom content.
   */
  children: React.FC<MenuCustomItemChildrenProps>;

  /**
   * Color theme for the custom item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * Whether the custom item is focused.
   * @default false
   */
  isFocused?: boolean;

  /**
   * Whether the custom item is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to apply standard menu item styling to the container.
   */
  keepItemStyles?: boolean;

  /**
   * Props to pass to the menu item.
   */
  menuItemProps?: ItemProps;

  /**
   * Click handler for the custom item.
   */
  action?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Whether to prevent menu closing when shift key is held during action.
   */
  dontCloseOnActionIfHoldingShiftKey?: boolean;

  /**
   * Whether to prevent automatic menu closing after action.
   */
  dontCloseOnAction?: boolean;

  /**
   * Event handler called when closing the menu.
   */
  onClose: () => void;
}

/**
 * Flexible menu item component for custom content rendering.
 */
export type MenuCustomItem = React.FC<MenuCustomItemProps>;
