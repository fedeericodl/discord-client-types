import type * as React from "react";

import type { ClickableProps } from "@app/design/web";

export interface NavItemTo<S = unknown> {
  /**
   * The URL to navigate to.
   */
  pathname?: string;

  /**
   * Data to associate with the new location.
   */
  state: S;
}

export interface NavItemProps<S = unknown> extends ClickableProps {
  /**
   * The background style of the nav item.
   * @default "always"
   */
  backgroundStyle?: "always" | "on-hover";

  /**
   * The icon to display in the nav item.
   */
  icon?: string;

  /**
   * The name of the nav item.
   */
  name?: string;

  /**
   * The accessibility label for the nav item.
   */
  ariaLabel?: string;

  /**
   * The location to navigate to when the nav item is clicked.
   */
  to?: string | NavItemTo<S>;

  /**
   * The selected state of the nav item.
   * @default false
   */
  selected?: boolean;
}

/**
 * A navigational component that represents a single item within a navigation menu.
 * This is used in the guilds sidebar.
 * @template S The type of state for the nav item.
 */
export type NavItem = <S = unknown>(
  props: React.PropsWithChildren<NavItemProps<S>>,
) => React.ReactElement;
