import type * as React from "react";

import type { SearchIconProps } from "./SearchIcon";

export type SearchBarSizes = "sm" | "md";

export interface SearchBarProps
  extends Omit<SearchIconProps, "hasContent" | "className" | "isLoading"> {
  /**
   * The value of the search bar.
   */
  query: string;

  /**
   * The placeholder text for the search bar.
   */
  placeholder?: string;

  /**
   * Event handler called when a key is pressed down on the input.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * The search bar size.
   * @default "md"
   * @see {@link SearchBarSizes}
   */
  size?: SearchBarSizes;

  /**
   * Whether the search bar is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler called when the input value changes.
   */
  onChange?: (query: string) => void;

  /**
   * Event handler called when the input loses focus.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Event handler called when the input gains focus.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * The auto-complete attribute for the input.
   */
  autoComplete?: React.HTMLInputAutoCompleteAttribute;

  /**
   * Props to be passed to the input element.
   */
  inputProps?: React.ComponentPropsWithoutRef<"input">;
}

/**
 * Provides a search bar for users to input search queries.
 * @example
 * ```tsx
 * const [query, setQuery] = React.useState("");
 *
 * <SearchBar
 *   query={query}
 *   onChange={setQuery}
 *   placeholder="Search..."
 *   onClear={() => setQuery("")}
 * />
 * ```
 */
export type SearchBar = React.FC<SearchBarProps>;
