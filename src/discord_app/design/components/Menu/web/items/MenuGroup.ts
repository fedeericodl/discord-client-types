import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";

export interface MenuGroupProps {
  /**
   * Content to render within the group.
   */
  contents?: React.ReactNode;

  /**
   * The label text displayed above the group.
   */
  label?: React.ReactNode;

  /**
   * The class name applied to the group.
   */
  className?: string;

  /**
   * Color theme for the group label text.
   * @default "default"
   */
  color?: keyof MenuItemColors;
}

/**
 * Container component for grouping related menu items.
 */
export type MenuGroup = React.FC<MenuGroupProps>;
