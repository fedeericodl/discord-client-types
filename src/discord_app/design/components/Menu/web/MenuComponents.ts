import type * as React from "react";

import type { MenuCheckboxItemProps as OriginalMenuCheckboxItemProps } from "./items/MenuCheckboxItem";
import type { MenuCompositeControlItemProps as OriginalMenuCompositeControlItemProps } from "./items/MenuCompositeControlItem";
import type { MenuControlItemProps as OriginalMenuControlItemProps } from "./items/MenuControlItem";
import type { MenuCustomItemProps as OriginalMenuCustomItemProps } from "./items/MenuCustomItem";
import type { MenuGroupProps as OriginalMenuGroupProps } from "./items/MenuGroup";
import type { MenuItemProps as OriginalMenuItemProps } from "./items/MenuItem";
import type { MenuRadioItemProps as OriginalMenuRadioItemProps } from "./items/MenuRadioItem";
import type { MenuSubmenuItemProps as OriginalMenuSubmenuItemProps } from "./items/MenuSubmenuItem";
import type { MenuSubmenuListItemProps as OriginalMenuSubmenuListItemProps } from "./items/MenuSubmenuListItem";

export type MenuSeparator = React.FC;

export type MenuGroupProps = React.PropsWithChildren<Omit<OriginalMenuGroupProps, "contents">>;

export type MenuGroup = React.FC<MenuGroupProps>;

export interface MenuItemProps
  extends Omit<OriginalMenuItemProps, "hasSubmenu" | "isFocused" | "menuItemProps" | "onClose"> {
  /**
   * The id of the menu item.
   */
  id: string;
}

export interface MenuCustomItemProps
  extends Omit<
    OriginalMenuCustomItemProps,
    "children" | "isFocused" | "menuItemProps" | "onClose"
  > {
  /**
   * The id of the custom item.
   */
  id: string;

  /**
   * Function that renders custom content.
   */
  render: OriginalMenuCustomItemProps["children"];

  /**
   * Whether the custom item is navigable.
   */
  navigable?: boolean;
}

export interface MenuSubmenuItemProps
  extends Omit<
      OriginalMenuSubmenuItemProps,
      "parentItem" | "isFocused" | "menuSubmenuProps" | "renderSubmenu"
    >,
    MenuItemProps {}

export interface MenuSubmenuListItemProps
  extends Pick<OriginalMenuSubmenuListItemProps, "listClassName">,
    MenuItemProps {
  /**
   * The height of each row in the submenu.
   */
  childRowHeight: OriginalMenuSubmenuListItemProps["rowHeight"];

  /**
   * Event handler called when the submenu is scrolled.
   */
  onChildrenScroll: OriginalMenuSubmenuListItemProps["onScroll"];
}

export type MenuItem = React.FC<
  | MenuItemProps
  | MenuCustomItemProps
  | React.PropsWithChildren<MenuSubmenuItemProps>
  | React.PropsWithChildren<MenuSubmenuListItemProps>
>;

export interface MenuCheckboxItemProps
  extends Omit<OriginalMenuCheckboxItemProps, "isFocused" | "menuItemProps"> {
  /**
   * The id of the checkbox item.
   */
  id: string;
}

export type MenuCheckboxItem = React.FC<MenuCheckboxItemProps>;

export interface MenuRadioItemProps
  extends Omit<OriginalMenuRadioItemProps, "isFocused" | "menuItemProps"> {
  /**
   * The id of the radio item.
   */
  id: string;
}

export type MenuRadioItem = React.FC<MenuRadioItemProps>;

export interface MenuControlItemProps
  extends Omit<OriginalMenuControlItemProps, "isFocused" | "menuItemProps" | "onClose"> {
  /**
   * The id of the control item.
   */
  id: string;
}

export interface MenuCompositeControlItemProps
  extends Omit<OriginalMenuCompositeControlItemProps, "isFocused" | "menuItemProps" | "onClose"> {
  /**
   * The id of the composite control item.
   */
  id: string;

  /**
   * Whether the control item is interactive.
   */
  interactive?: boolean;
}

export type MenuControlItem = React.FC<
  | MenuControlItemProps
  | (React.PropsWithChildren<MenuCompositeControlItemProps> & { control?: never })
>;
