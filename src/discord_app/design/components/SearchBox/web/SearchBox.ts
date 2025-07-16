import type * as React from "react";

import type { SearchBar } from "../../SearchBar/web/SearchBar";
import type { TextInputProps } from "../../TextInput/web/TextInput";

export interface SearchBoxProps
  extends Pick<
    TextInputProps,
    | "autoFocus"
    | "placeholder"
    | "inputClassName"
    | "onChange"
    | "onFocus"
    | "onBlur"
    | "onKeyPress"
  > {
  /**
   * The label for the search box.
   */
  label?: string;

  /**
   * The value of the search box.
   */
  searchTerm?: string;

  /**
   * The class name applied to the search box.
   */
  className?: string;

  /**
   * Whether the search box should have autocomplete enabled.
   * @default false
   */
  autoComplete?: boolean;

  /**
   * A ref for the search box element.
   */
  forwardedRef?: React.Ref<HTMLInputElement>;

  /**
   * The class name applied to the close icon.
   */
  closeIconClassName?: string;

  /**
   * The class name applied to the search icon.
   */
  searchIconClassName?: string;

  /**
   * The call-to-action text.
   */
  cta?: string;

  /**
   * Event handler called when the search box is cleared.
   */
  onClear?: () => void;
}

export declare class SearchBoxComponent extends React.Component<SearchBoxProps> {
  /**
   * The ref to the text input element.
   * @private
   */
  private _textInputRef: React.RefObject<HTMLInputElement>;

  /**
   * The ref to the container element.
   * @private
   */
  private _containerRef: React.RefObject<HTMLDivElement>;

  /**
   * Event handler called when the search box is cleared.
   */
  public handleClear: () => void;
}

/**
 * Text input enhanced for search functionality.
 * Unlike {@link SearchBar}, `SearchBox` takes much space and is used as a core element of a search-based page.
 * @example
 * ```tsx
 * const [query, setQuery] = React.useState("");
 *
 * <SearchBox
 *   searchTerm={query}
 *   placeholder="Find anything..."
 *   onChange={setQuery}
 *   onClear={() => setQuery("")}
 * />
 * ```
 */
export type SearchBox = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SearchBoxProps> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, SearchBoxProps>;
};
