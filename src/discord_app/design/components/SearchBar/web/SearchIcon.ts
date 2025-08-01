import type * as React from "react";

import type { SearchBarSizes } from "./SearchBar";

export interface SearchIconProps {
  /**
   * Whether there is content in the search bar. This affects the visibility of the clear icon.
   * @default false
   */
  hasContent?: boolean;

  /**
   * Event handler called when the search bar is cleared.
   */
  onClear?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * The class name applied to the search icon.
   */
  className?: string;

  /**
   * Whether the search icon is in a loading state, showing a spinner instead of the search icon.
   * @default false
   */
  isLoading?: boolean;

  /**
   * The size of the search icon.
   * @default "sm"
   * @see {@link SearchBarSizes}
   */
  size?: SearchBarSizes;
}

/**
 * A component that displays a search icon.
 */
export type SearchIcon = React.FC<SearchIconProps>;
