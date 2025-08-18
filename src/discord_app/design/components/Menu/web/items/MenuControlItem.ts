import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";
import type { MenuItemType } from "../MenuContext";

export interface MenuControlProps {
  /**
   * Event handler called when closing the menu.
   */
  onClose: () => void;

  /**
   * Whether the control item is disabled.
   */
  disabled: boolean | undefined;

  /**
   * Whether the control item is focused.
   */
  isFocused: boolean | undefined;

  /**
   * Event handler called when the control item is interacted with.
   */
  onInteraction: (type: MenuItemType) => void;
}

export interface MenuControlRef {
  /**
   * Function called when the control item is focused.
   */
  focus: () => void;

  /**
   * Function called when the control item loses focus.
   */
  blur: () => void;

  /**
   * Function called when the control item is activated.
   */
  activate: () => boolean;
}

export interface MenuControlItemProps {
  /**
   * Color theme for the control item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * The label text displayed above the item.
   */
  label?: React.ReactNode;

  /**
   * Function that renders the control item.
   */
  control: (props: MenuControlProps, ref: React.RefObject<MenuControlRef>) => React.ReactNode;

  /**
   * Whether the control item is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the control item is focused.
   */
  isFocused?: boolean;

  /**
   * Whether to show the default focus outline.
   * @default false
   */
  showDefaultFocus?: boolean;

  /**
   * Props to pass to the menu item.
   */
  menuItemProps?: ItemProps;

  /**
   * Event handler called when closing the menu.
   */
  onClose: () => void;
}

/**
 * A menu component for embedding interactive controls within menus.
 */
export type MenuControlItem = React.FC<MenuControlItemProps>;
