import type * as React from "react";

import type { MenuItemType } from "./MenuContext";

export interface InteractionMenuItemProps {
  /**
   * The type of the menu item.
   */
  type: MenuItemType;
}

export interface MenuProps {
  /**
   * A unique identifier for the menu.
   */
  navId: string;

  /**
   * Specifies the menu variant.
   * @default "flexible"
   */
  variant?: "fixed" | "flexible";

  /**
   * Whether to hide the scroller in the menu.
   * @default false
   */
  hideScroller?: boolean;

  /**
   * The class name applied to the menu.
   */
  className?: string;

  /**
   * The items to display in the menu. Can be a single menu item or a group of menu items.
   */
  children: React.ReactElement | React.ReactElement[];

  /**
   * The function called when the menu is closed.
   */
  onClose: () => void;

  /**
   * The function called when an item in the menu is clicked.
   */
  onSelect?: () => void;

  /**
   * The function called when the menu is interacted with. This is often used for analytics.
   */
  onInteraction?: (props: InteractionMenuItemProps) => void;

  /**
   * The accessibility label for the menu.
   */
  "aria-label"?: string;
}

/**
 * The base component of a menu (context menu).
 * @example
 * ```tsx
 * <Menu navId="example-context" onClose={ContextMenuActionCreators.closeContextMenu}>
 *   <MenuItem id="example-item-1" label="Item 1" action={() => console.log("Pressed!")} />
 *   <MenuItem id="example-item-2" label="Item 2" />
 *   <MenuSeparator />
 *   <MenuItem id="example-item-3" label="Item 3" />
 * </Menu>
 * ```
 */
export type Menu = React.FC<MenuProps>;

/**
 * A menu spinner, indicating a loading state within a menu.
 */
export type MenuSpinner = React.FC;
