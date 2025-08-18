import type * as React from "react";

import type { MenuProps } from "./Menu";

/**
 * The type of menu item.
 */
export enum MenuItemType {
  DEFAULT = "default",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SLIDER = "slider",
  SEARCH = "search",
  IMAGE_UPLOAD = "image upload",
}

/**
 * A React context that holds the menu's state.
 */
export type OnMenuSelectContext = React.Context<MenuProps["onSelect"] | undefined>;
