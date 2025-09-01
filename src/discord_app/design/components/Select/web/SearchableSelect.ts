import type * as React from "react";

import type { LayerPosition } from "../../Layers/web/ReferencePositionLayer";
import type { PopoutProps } from "../../Popout/web/Popout";

// https://www.npmjs.com/package/match-sorter

interface RankingInfo {
  /**
   * The string value of the item that was used for ranking.
   */
  rankedValue: string;

  /**
   * The numerical rank assigned to the item.
   */
  rank: Ranking;

  /**
   * The index of the key (in `keys`) that produced this match.
   */
  keyIndex: number;

  /**
   * The threshold rank applied to this key (if any).
   */
  keyThreshold: Ranking | undefined;
}

type ValueGetterKey<ItemType> = (item: ItemType) => string | string[];
interface IndexedItem<ItemType> {
  /**
   * The original item.
   */
  item: ItemType;

  /**
   * The index of the item in the original list.
   */
  index: number;
}
interface RankedItem<ItemType> extends RankingInfo, IndexedItem<ItemType> {}

type BaseSorter<ItemType> = (a: RankedItem<ItemType>, b: RankedItem<ItemType>) => number;

type Sorter<ItemType> = (matchItems: RankedItem<ItemType>[]) => RankedItem<ItemType>[];

interface KeyAttributesOptions<ItemType> {
  /**
   * The key to match against.
   */
  key?: string | ValueGetterKey<ItemType>;

  /**
   * Minimum ranking required for an item to be considered a match when matching against this key.
   */
  threshold?: Ranking;

  /**
   * Maximum ranking that this key can contribute to.
   */
  maxRanking?: Ranking;

  /**
   * Minimum ranking that this key can contribute to.
   */
  minRanking?: Ranking;
}

type KeyOption<ItemType> = KeyAttributesOptions<ItemType> | ValueGetterKey<ItemType> | string;

interface MatchSorterOptions<ItemType = unknown> {
  /**
   * Keys or fields to use when extracting matchable text from items.
   */
  keys?: readonly KeyOption<ItemType>[];

  /**
   * Minimum ranking required for an item to be considered a match.
   */
  threshold?: Ranking;

  /**
   * Custom function for sorting two ranked items.
   */
  baseSort?: BaseSorter<ItemType>;

  /**
   * Whether to keep diacritic marks (accents) during matching.
   */
  keepDiacritics?: boolean;

  /**
   * Custom function to sort the entire list of ranked items.
   */
  sorter?: Sorter<ItemType>;
}

type Ranking = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

//

export interface SearchableSelectOption {
  /**
   * The value of the option.
   */
  value: string | number;

  /**
   * The label of the option.
   */
  label: string;

  /**
   * The key of the option.
   */
  key?: string | number;
}

export interface SearchableSelectAccessoryOptions {
  /**
   * Whether the accessory is being rendered in a pill.
   */
  inPill: boolean;

  /**
   * Whether the accessory is being rendered in the list.
   */
  inDropdown: boolean;
}

export interface SearchableSelectProps {
  /**
   * The list of options to show, or an async loader function that returns options for a given query.
   */
  options: SearchableSelectOption[] | ((query: string) => Promise<SearchableSelectOption[]>);

  /**
   * The current selected value(s).
   */
  value: string | string[] | number | number[] | undefined;

  /**
   * Event handler called when the selection changes.
   */
  onChange: (value: string | string[] | number | number[] | undefined) => void;

  /**
   * Whether a clear button is shown to clear the selection.
   * @default false
   */
  clearable?: boolean;

  /**
   * Whether to enable multi-selection.
   * @default false
   */
  multi?: boolean;

  /**
   * Whether the dropdown/popout should close after selecting an option.
   * @default true
   */
  closeOnSelect?: boolean;

  /**
   * Callback invoked when the select/popout opens.
   */
  onOpen?: () => void;

  /**
   * Callback invoked when the select/popout closes.
   */
  onClose?: () => void;

  /**
   * The placeholder text shown when no value is selected.
   */
  placeholder?: string;

  /**
   * The class name applied to the component wrapper.
   */
  wrapperClassName?: string;

  /**
   * The class name applied to the main select element.
   */
  className?: string;

  /**
   * Whether the select is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether to show a processing/loading visual state.
   * @default false
   */
  isProcessing?: boolean;

  /**
   * Maximum number of visible items in the popout before showing a scroll.
   * @default 7
   */
  maxVisibleItems?: number;

  /**
   * Whether to automatically focus the input when the select is opened.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * The position of the popout.
   * @see {@link LayerPosition}
   * @default "bottom"
   */
  popoutPosition?: LayerPosition;

  /**
   * The filtering behavior. If a function is provided, it will be used to filter the provided `options` for the current query.
   * @default true
   */
  filter?:
    | boolean
    | ((options: SearchableSelectOption[], query: string) => SearchableSelectOption[]);

  /**
   * Debounce time in milliseconds for async option loaders / search input.
   */
  debounceTime?: number;

  /**
   * Render prop for the visible label for an option in the list and pills.
   * @default (option) => option.label
   */
  renderOptionLabel?: (option: SearchableSelectOption) => React.ReactNode;

  /**
   * Callback fired when the search query changes in the input.
   */
  onSearchChange?: (value: string) => void;

  /**
   * Render prop for a prefix element for an option.
   * @default () => null
   */
  renderOptionPrefix?: (
    option: SearchableSelectOption,
    options: SearchableSelectAccessoryOptions,
  ) => React.ReactNode;

  /**
   * Render prop for a suffix element for an option.
   * @default () => null
   */
  renderOptionSuffix?: (
    option: SearchableSelectOption,
    options: SearchableSelectAccessoryOptions,
  ) => React.ReactNode;

  /**
   * The accessibility description for the select.
   */
  "aria-describedby"?: string;

  /**
   * Whether the select is in an invalid state.
   */
  "aria-invalid"?: boolean;

  /**
   * The accessibility identifier for the select label.
   */
  "aria-labelledby"?: string;

  /**
   * Whether the select is required.
   */
  "aria-required"?: boolean;

  /**
   * The class name applied to the input element.
   */
  inputClassNames?: string;

  /**
   * Event handler when the select loses focus
   */
  onBlur: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler when the input gains focus.
   */
  onFocus: React.MouseEventHandler<HTMLInputElement>;

  /**
   * Options forwarded to {@link https://www.npmjs.com/package/match-sorter match-sorter} when using the default filtering behavior.
   */
  matchSorterOptions?: MatchSorterOptions<SearchableSelectOption>;

  /**
   * Whether the query in the input should be cleared after selecting an option.
   * @default false
   */
  clearQueryOnSelect?: boolean;

  /**
   * Whether the selected values should not be shown as pills.
   */
  hidePills?: boolean;

  /**
   * Render prop for a custom pill node for a selected option.
   */
  renderCustomPill?: (option: SearchableSelectOption) => React.ReactNode;

  /**
   * The class name applied to the custom pill container.
   */
  customPillContainerClassName?: string;

  /**
   * The layer context to use for the popout.
   */
  popoutLayerContext?: PopoutProps["layerContext"];

  /**
   * Event handler called when a key is pressed down.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface SearchableSelectRef {
  /**
   * Function to close the select.
   */
  close: () => void;
}

/**
 * A searchable select component that allows users to filter and select from a list of options.
 * @example
 * ```tsx
 * const [selected, setSelected] = React.useState<string | undefined>(undefined);
 *
 * <SearchableSelect
 *   options={[
 *     { label: "Apple", value: "apple" },
 *     { label: "Banana", value: "banana" },
 *     { label: "Cherry", value: "cherry" },
 *   ]}
 *   value={selected}
 *   placeholder="Select a fruit..."
 *   onChange={setSelected}
 * />
 * ```
 */
export type SearchableSelect = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SearchableSelectProps> & React.RefAttributes<SearchableSelectRef>
> & {
  render: React.ForwardRefRenderFunction<SearchableSelectRef, SearchableSelectProps>;
};
