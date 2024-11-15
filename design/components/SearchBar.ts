import type React from "react";

export type SearchBarSizes = Record<"SMALL" | "MEDIUM" | "LARGE", string>;

export interface SearchBarProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /**
   * The value of the search bar.
   */
  query?: string;

  /**
   * Event handler called when the search bar is cleared.
   */
  onClear?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * The placeholder text for the search bar.
   */
  placeholder?: string;

  /**
   * The class name applied to the search icon.
   */
  iconClassName?: string;

  /**
   * Event handler called when a key is pressed down on the input.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * Event handler called when a key is released on the input.
   */
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * Event handler called when a key is pressed and released on the input.
   */
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * Whether the search bar is in a loading state, showing a spinner instead of the search icon.
   * @default false
   */
  isLoading?: boolean;

  /**
   * The search bar size.
   * @default SearchBar.Sizes.SMALL
   * @see {@link SearchBarSizes}
   */
  size?: string;

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

  /**
   * Whether the search icon should be hidden.
   * @default false
   */
  hideSearchIcon?: boolean;
}

export declare class SearchBarComponent extends React.PureComponent<SearchBarProps> {
  /**
   * The ref to the input element.
   */
  public inputRef: React.RefObject<HTMLInputElement>;

  /**
   * The ref to the container element.
   */
  public containerRef: React.RefObject<HTMLDivElement>;

  /**
   * Event handler called when the input value changes.
   */
  public handleOnChange: React.FormEventHandler<HTMLInputElement>;

  /**
   * Makes the input element focused.
   */
  public focus: () => void;

  /**
   * Makes the input element lose focus.
   */
  public blur: () => void;
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
 *   size={SearchBar.Sizes.MEDIUM}
 * />
 * ```
 */
export type SearchBar = typeof SearchBarComponent & {
  Sizes: SearchBarSizes;
};
