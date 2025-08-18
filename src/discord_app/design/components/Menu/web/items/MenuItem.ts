import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { IconSize } from "../../../Icon/IconSize";
import type { MenuItemColors } from "../MenuConstants";

// TODO: Complete icon types

// cspell:ignore dont
export interface MenuItemProps {
  /**
   * Color theme for the item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * The label text displayed for the item.
   */
  label?: React.FC<MenuItemProps> | React.ReactNode;

  /**
   * The icon displayed for the item.
   */
  icon?: React.ComponentType;

  /**
   * The icon displayed on the left side of the item.
   */
  iconLeft?: React.ComponentType;

  /**
   * The size of the icon displayed on the left side of the item.
   * @default "md"
   */
  iconLeftSize?: keyof IconSize;

  /**
   * The hint text displayed for the item.
   */
  hint?: React.FC<MenuItemProps> | React.ReactNode;

  /**
   * The subtext displayed for the item.
   */
  subtext?: React.ReactNode;

  /**
   * The number of lines to clamp the subtext to.
   */
  subTextLineClamp?: number;

  /**
   * Whether the item has a submenu.
   */
  hasSubmenu?: boolean;

  /**
   * Whether the item is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the item is focused.
   */
  isFocused?: boolean;

  /**
   * Props to pass to the menu item.
   */
  menuItemProps?: ItemProps;

  /**
   * Click handler for the item.
   */
  action?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when closing the menu.
   */
  onClose: () => void;

  /**
   * Event handler called when the item is focused.
   */
  onFocus?: () => void;

  /**
   * The class name applied to the item.
   */
  className?: string;

  /**
   * The class name applied when the item is focused.
   */
  focusedClassName?: string;

  /**
   * The class name applied to the sub menu icon.
   */
  subMenuIconClassName?: string;

  /**
   * Whether to prevent menu closing when shift key is held during action.
   */
  dontCloseOnActionIfHoldingShiftKey?: boolean;

  /**
   * Whether to prevent automatic menu closing after action.
   */
  dontCloseOnAction?: boolean;

  /**
   * Additional properties for the icon component.
   */
  iconProps?: Record<string, unknown>;

  /**
   * Whether the item should have a sparkle effect.
   */
  sparkle?: boolean;
}

/**
 * The standard clickable item component for menus.
 */
export type MenuItem = React.FC<MenuItemProps>;
