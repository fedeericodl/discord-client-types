import type { SubmenuProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

export interface MenuSubmenuItemProps {
  /**
   * The class name applied to the submenu item.
   */
  subMenuClassName?: string;

  /**
   * The parent item of the submenu item.
   */
  parentItem?: React.ReactNode;

  /**
   * Whether the submenu item is focused.
   */
  isFocused?: boolean;

  /**
   * Props to pass to the submenu item.
   */
  menuSubmenuProps: SubmenuProps;

  /**
   * Function to render the submenu item.
   */
  renderSubmenu: React.FC;
}

/**
 * A menu component that displays a submenu item when focused.
 */
export type MenuSubmenuItem = React.FC<MenuSubmenuItemProps>;
