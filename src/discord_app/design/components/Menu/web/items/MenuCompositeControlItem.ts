import type { ItemProps } from "@discordapp/aria-hooks/src/useMenuNavigator";
import type * as React from "react";

import type { MenuItemColors } from "../MenuConstants";

export interface MenuCompositeControlItemProps {
  /**
   * Color theme for the composite control item.
   * @default "default"
   */
  color?: keyof MenuItemColors;

  /**
   * Whether the composite control item is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the composite control item is focused.
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
}

/**
 * A menu component for embedding multiple interactive controls as a single menu item.
 */
export type MenuCompositeControlItem = React.FC<
  React.PropsWithChildren<MenuCompositeControlItemProps>
>;
