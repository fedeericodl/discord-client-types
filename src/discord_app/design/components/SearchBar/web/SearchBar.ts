import type * as React from "react";

import type { TextInputProps } from "../../TextInput/web/TextInput";

export interface SearchBarProps extends TextInputProps, React.RefAttributes<HTMLInputElement> {
  /**
   * The value of the search bar.
   */
  query: string;

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
 * <SearchBar query={query} onChange={setQuery} />
 * ```
 */
export type SearchBar = React.FC<SearchBarProps>;
