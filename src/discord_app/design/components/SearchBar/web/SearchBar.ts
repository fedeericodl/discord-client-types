import type * as React from "react";

import type { TextInputProps } from "@app/design/web";

export interface SearchBarProps
  extends Pick<
      TextInputProps,
      | "autoFocus"
      | "placeholder"
      | "onKeyDown"
      | "size"
      | "disabled"
      | "onChange"
      | "onBlur"
      | "onFocus"
      | "autoComplete"
      | "aria-label"
    >,
    React.RefAttributes<HTMLInputElement> {
  /**
   * The value of the search bar.
   */
  query: string;

  /**
   * Event handler called when the clear button is clicked.
   */
  onClear: () => void;

  /**
   * Props to be passed to the input element.
   */
  inputProps?: TextInputProps;
}

/**
 * Provides a search bar for users to input search queries.
 * @example
 * ```tsx
 * const [query, setQuery] = React.useState("");
 *
 * <SearchBar query={query} onChange={setQuery} onClear={() => setQuery("")} />
 * ```
 */
export type SearchBar = React.FC<SearchBarProps>;
