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
import type { MenuSwitchItemProps as OriginalMenuSwitchItemProps } from "./items/MenuSwitchItem";

/**
 * Separator component for visually dividing menu items.
 */
export type MenuSeparator = React.FC;

export type MenuGroupProps = React.PropsWithChildren<Omit<OriginalMenuGroupProps, "contents">>;

/**
 * Container component for grouping related menu items.
 * @example
 * ```tsx
 * <MenuGroup label="Group Label">
 *   <MenuItem id="item-1" label="Item 1" />
 *   <MenuCheckboxItem id="checkbox-1" label="Checkbox 1" action={() => console.log("Pressed!")} />
 * </MenuGroup>
 * ```
 */
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

/**
 * The standard clickable item component for menus.
 * @example
 * ```tsx
 * // Standard menu item
 * <MenuItem id="copy" label="Copy" action={() => {...}} />
 *
 * // Custom item with custom content
 * <MenuItem
 *   id="user-profile"
 *   render={({ color }) => (
 *     <div className="user-profile-item">
 *       <Text variant="text-md/semibold">{user.displayName}</Text>
 *       <Text variant="text-sm/normal" color="text-muted">
 *         {user.status}
 *       </Text>
 *     </div>
 *   )}
 * />
 *
 * // Submenu with nested options
 * <MenuItem id="text-formatting" label="Text Formatting">
 *   <MenuItem id="bold" label="Bold" hint="Ctrl+B" action={() => formatText("bold")} />
 *   <MenuItem id="italic" label="Italic" hint="Ctrl+I" action={() => formatText("italic")} />
 *   <MenuItem id="underline" label="Underline" hint="Ctrl+U" action={() => formatText("underline")} />
 *   <MenuSeparator />
 *   <MenuItem id="strikethrough" label="Strikethrough" action={() => formatText("strikethrough")} />
 * </MenuItem>
 * ```
 */
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

/**
 * A checkbox item component for use in menus.
 * It allows users to select one or more options from a set of choices.
 * @example
 * ```tsx
 * <MenuCheckboxItem id="checkbox-1" label="Checkbox 1" action={() => console.log("Pressed!")} />
 * ```
 */
export type MenuCheckboxItem = React.FC<MenuCheckboxItemProps>;

export interface MenuRadioItemProps
  extends Omit<OriginalMenuRadioItemProps, "isFocused" | "menuItemProps"> {
  /**
   * The id of the radio item.
   */
  id: string;
}

/**
 * A radio item component for use in menus.
 * It allows users to select one option from a set of choices.
 * @example
 * ```tsx
 * <MenuRadioItem id="radio-1" label="Radio 1" action={() => {}} />
 * ```
 */
export type MenuRadioItem = React.FC<MenuRadioItemProps>;

export interface MenuSwitchItemProps
  extends Omit<OriginalMenuSwitchItemProps, "isFocused" | "menuItemProps"> {
  /**
   * The id of the switch item.
   */
  id: string;
}

/**
 * A radio item component for use in menus.
 * It allows users to select one option from a set of choices.
 * @example
 * ```tsx
 * <MenuSwitchItem id="switch-1" label="Switch 1" action={() => {}} />
 * ```
 */
export type MenuSwitchItem = React.FC<MenuSwitchItemProps>;

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

/**
 * A menu component for embedding interactive controls within menus.
 * @example
 * ```tsx
 * <MenuControlItem id="control-1">
 *   <Text>Control Item Text</Text>
 * </MenuControlItem>
 * ```
 */
export type MenuControlItem = React.FC<
  | MenuControlItemProps
  | (React.PropsWithChildren<MenuCompositeControlItemProps> & { control?: never })
>;
