import type * as React from "react";

import type { MenuItemType } from "../MenuContext";

export interface MenuSearchControlProps {
  /**
   * The current query string.
   */
  query: string;

  /**
   * Event handler called when the query string changes.
   */
  onChange: (query: string) => void;

  /**
   * Whether the search control is in a loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the search control is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The placeholder text for the search control.
   */
  placeholder?: string;

  /**
   * The accessibility label for the input.
   */
  "aria-label"?: string;

  /**
   * Event handler called when the control item is interacted with.
   */
  onInteraction?: (type: MenuItemType) => void;
}

/**
 * A menu control that can be used to display a search input in a menu.
 * @example
 * ```tsx
 * const [query, setQuery] = React.useState("");
 *
 * <MenuControlItem id="example-control" control={(props, ref) => (
 *   <MenuSearchControl {...props} ref={ref} query={query} onChange={setQuery} />
 * )}>
 * ```
 */
export type MenuSearchControl = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MenuSearchControlProps> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, MenuSearchControlProps>;
};
