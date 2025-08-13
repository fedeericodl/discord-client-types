import type * as React from "react";

import type { PopoutRenderProps } from "../../Popout/web/BasePopout";
import type { QuickSelectOption, QuickSelectProps } from "./QuickSelect";

export interface SearchableQuickSelectProps
  extends Pick<
    QuickSelectProps,
    "label" | "value" | "popoutProps" | "renderValue" | "className" | "popoutClassName"
  > {
  /**
   * Array of available items to search through and select from.
   */
  items: QuickSelectOption[];

  /**
   * Function to render each item in the filtered search results.
   */
  renderItem: (item: QuickSelectOption, index: number) => React.ReactNode;

  /**
   * Placeholder text displayed in the search input field.
   */
  placeholder?: string;

  /**
   * Event handler called when an item is selected from the search results.
   */
  onChange: (option: QuickSelectOption) => void;
}

/**
 * Searchable dropdown select component with fuzzy search filtering.
 */
export declare class SearchableQuickSelect extends React.PureComponent<SearchableQuickSelectProps> {
  /**
   * The ref to the trigger element for popout positioning.
   */
  public ref: React.RefObject<HTMLDivElement>;

  /**
   * Filters items based on search term using fuzzy search matching.
   * @param searchTerm Current search input value for filtering.
   * @returns Array of rendered item components matching the search.
   */
  public renderItems: (searchTerm: string) => React.ReactNode[];

  /**
   * Renders the search popout with input field and filtered results.
   */
  public renderPopout: React.FC<PopoutRenderProps>;
}
