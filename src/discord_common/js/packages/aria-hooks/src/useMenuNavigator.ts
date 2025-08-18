import type * as React from "react";
import type { MenuAction, MenuItem } from "./MenuReducer";

export interface UseMenuNavigatorProps {
  /**
   * A unique identifier for the menu.
   */
  navId: string;

  /**
   * The list of menu items to display at the root level.
   */
  items: MenuItem[];

  /**
   * The initial path of focused items, represented as an array of keys.
   * Empty array means no item is initially focused.
   */
  initialFocusPath: string[];

  /**
   * Callback triggered when the user selects a menu item.
   */
  onSelect?: (focusPath: string[]) => void;

  /**
   * Whether the menu navigation is enabled.
   * If false, keyboard and mouse navigation will be ignored.
   * @default true
   */
  enabled?: boolean;

  /**
   * Callback to close the menu.
   */
  closeMenu?: () => void;

  /**
   * Whether the menu starts in "keyboard navigation" mode.
   * @default false
   */
  defaultIsUsingKeyboardNavigation?: boolean;
}

export interface ContainerProps {
  /**
   * The role for the container.
   */
  role: string;

  /**
   * The id for this container.
   */
  id: string;

  /**
   * The tab index for the container.
   */
  tabIndex: number;

  /**
   * Event handler called when a keyboard event occurs on the menu container.
   */
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;

  /**
   * Event handler called when the menu container gains focus.
   */
  onFocus: React.FocusEventHandler<HTMLElement>;

  /**
   * Event handler called when the menu container loses focus.
   */
  onBlur: React.FocusEventHandler<HTMLElement>;

  /**
   * Event handler called when the pointer leaves the menu container area.
   */
  onMouseLeave: React.MouseEventHandler<HTMLElement>;

  /**
   * The accessibility attribute pointing to the currently active descendant item.
   */
  "aria-activedescendant"?: string;
}

export interface GetSubmenuPropsOptions {
  /**
   * The navigation path for the submenu, represented as an array of item keys.
   */
  path: string[];
}

export interface SubmenuProps {
  /**
   * The role for the submenu.
   */
  role: string;

  /**
   * The tab index for the submenu.
   */
  tabIndex: number;

  /**
   * The accessibility attribute pointing to the currently active descendant item in this submenu.
   */
  "aria-activedescendant"?: string;

  /**
   * Index of the currently focused item within this submenu.
   */
  focusIndex: number;

  /**
   * Whether the user is navigating the menu using the keyboard.
   */
  isUsingKeyboardNavigation: boolean;
}

export interface GetItemPropsOptions {
  /**
   * The navigation path for this item, represented as an array of item keys.
   */
  path: string[];

  /**
   * Whether this item has a nested submenu.
   * @default false
   */
  hasSubmenu?: boolean;

  /**
   * Whether this item is focusable and navigable.
   * @default true
   */
  navigable?: boolean;

  /**
   * The role for the item.
   */
  role?: string;
}

export interface ItemProps {
  /**
   * Whether the submenu is currently expanded.
   * Only present if the item has a submenu.
   */
  "aria-expanded"?: boolean;

  /**
   * Whether the item has a submenu.
   */
  "aria-haspopup"?: boolean;

  /**
   * The role for the menu item.
   */
  role: string;

  /**
   * The id for this menu item.
   */
  id: string;

  /**
   * The tab index for the menu item.
   */
  tabIndex: number;

  /**
   * Event handler called when the item receives focus.
   */
  onFocus: () => void;

  /**
   * Event handler called when the pointer moves over the item.
   */
  onMouseEnter: () => void;
}

export interface UseMenuNavigatorResult {
  /**
   * Dispatch function for sending actions to the menu reducer.
   */
  dispatch: React.Dispatch<MenuAction>;

  /**
   * Generates props for the root menu container element.
   */
  getContainerProps: () => ContainerProps;

  /**
   * Generates props for a submenu container element.
   */
  getSubmenuProps: (options: GetSubmenuPropsOptions) => SubmenuProps;

  /**
   * Generates props for an individual menu item.
   */
  getItemProps: (options: GetItemPropsOptions) => ItemProps;

  /**
   * Checks if a given focus path matches the currently focused path.
   */
  isFocused: (path: string[]) => boolean;

  /**
   * Whether the menu is currently being navigated with a keyboard.
   */
  isUsingKeyboardNavigation: boolean;
}

/**
 * React hook that manages keyboard and mouse navigation for a menu system.
 * @param props Configuration options for the menu navigation system.
 * @returns An object containing navigation state helpers and prop generators.
 */
export type UseMenuNavigator = (props: UseMenuNavigatorProps) => UseMenuNavigatorResult;
