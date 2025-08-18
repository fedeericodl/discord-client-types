import type { SubmenuProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

export interface MenuSubmenuListItemProps {
  /**
   * The parent item of the submenu item.
   */
  parentItem?: React.ReactNode;

  /**
   * Whether the submenu item is focused.
   */
  isFocused?: boolean;

  /**
   * Props to pass to the submenu.
   */
  menuSubmenuProps: SubmenuProps;

  /**
   * The rows to display in the submenu.
   */
  rows: React.ReactNode[];

  /**
   * The height of each row in the submenu.
   */
  rowHeight: number;

  /**
   * Event handler called when the submenu is scrolled.
   */
  onScroll?: (scrollTop: number) => void;

  /**
   * The class name applied to the submenu list.
   */
  listClassName?: string;
}

/**
 * A menu item component that displays a nested submenu.
 */
export type MenuSubmenuListItem = React.FC<MenuSubmenuListItemProps>;
