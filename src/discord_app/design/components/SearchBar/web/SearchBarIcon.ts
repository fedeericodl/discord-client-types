import type * as React from "react";

export interface SearchBarIconProps {
  /**
   * Whether there is content in the search bar. This affects the visibility of the clear icon.
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
   */
  isLoading?: boolean;

  /**
   * The size of the search icon.
   * @default "sm"
   */
  size?: "sm" | "md";
}

/**
 * A component that displays a search icon.
 */
export type SearchBarIcon = React.FC<SearchBarIconProps>;
