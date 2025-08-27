export type ListSectionHeight = number | ((section: number) => number);
export type ListRowHeight = number | ((section: number, row: number) => number);
export type ListFooterHeight = number | ((section: number) => number);
export type ListHeaderHeight = number | (() => number);

export interface ListItemSection {
  /**
   * Literal type discriminator for a section header item.
   */
  type: "section";

  /**
   * Section index in the source data.
   */
  section: number;

  /**
   * Absolute index of this item in the flattened visible list.
   */
  listIndex: number;

  /**
   * Distance in pixels from the top of the list container to this item.
   */
  offsetTop: number;

  /**
   * Anchor id used for linking/scrolling to this section.
   */
  anchorId: string | undefined;
}

export interface ListItemRow {
  /**
   * Literal type discriminator for a row item.
   */
  type: "row";

  /**
   * Section index that contains this row.
   */
  section: number;

  /**
   * Row index within its section.
   */
  row: number;

  /**
   * Index among all rows (across sections) before this row.
   */
  rowIndex: number;

  /**
   * Absolute index of this item in the flattened visible list.
   */
  listIndex: number;

  /**
   * Distance in pixels from the top of the list container to this item.
   */
  offsetTop: number;

  /**
   * Anchor id used for linking/scrolling to this row.
   */
  anchorId: string | undefined;
}

export interface ListItemFooter {
  /**
   * Literal type discriminator for a footer item.
   */
  type: "footer";

  /**
   * Section index that this footer belongs to.
   */
  section: number;

  /**
   * Distance in pixels from the top of the list container to this footer.
   */
  offsetTop: number;
}

export type ListItem = ListItemSection | ListItemRow | ListItemFooter;

export interface ListState {
  /**
   * Height (in pixels) of the invisible spacer before the first visible item.
   */
  spacerTop: number;

  /**
   * Total height (in pixels) of the entire list content, including paddings.
   */
  totalHeight: number;

  /**
   * Array of visible items (section headers, rows, footers) with layout info.
   */
  items: ListItem[];
}

export type GetAnchorId = (section: number, row?: number) => string | undefined;

export interface ListComputerProps {
  /**
   * Section header height strategy (fixed value or per-section function).
   */
  sectionHeight: ListSectionHeight;

  /**
   * Row height strategy (fixed value or per-row function).
   */
  rowHeight: ListRowHeight;

  /**
   * Footer height strategy (fixed value or per-section function).
   */
  footerHeight?: ListFooterHeight;

  /**
   * List header height (fixed value or function).
   */
  listHeaderHeight?: ListHeaderHeight;

  /**
   * Top padding added to the computed content (in pixels).
   */
  paddingTop: number;

  /**
   * Bottom padding added to the computed content (in pixels).
   */
  paddingBottom: number;

  /**
   * Array where each entry is the number of rows in the corresponding section.
   */
  sections: number[];

  /**
   * Function to compute anchor ids for sections/rows.
   */
  getAnchorId: GetAnchorId | undefined;
}

/**
 * Returns whether a computed item is a row.
 * @param item The computed item to check.
 */
export type IsListItemRow = (item: ListItem) => boolean;

/**
 * Utility class that computes layout and scrolling information for a sectioned list.
 */
export declare class ListComputer {
  public constructor();

  /**
   * Section header height strategy (fixed value or per-section function).
   */
  public sectionHeight: ListSectionHeight;

  /**
   * Row height strategy (fixed value or per-row function).
   */
  public rowHeight: ListRowHeight;

  /**
   * Footer height strategy (fixed value or per-section function).
   */
  public footerHeight: ListFooterHeight;

  /**
   * List header height (fixed value or function).
   */
  public listHeaderHeight: ListHeaderHeight;

  /**
   * Whether all rows share the same height.
   */
  public uniform: boolean;

  /**
   * Bottom padding applied to computed total height (in pixels).
   */
  public paddingBottom: number;

  /**
   * Top padding applied to computed total height (in pixels).
   */
  public paddingTop: number;

  /**
   * Array of section row counts (number of rows per section).
   */
  public sections: number[];

  /**
   * Function that returns anchor ids for a given section/row.
   */
  public getAnchorId: GetAnchorId;

  /**
   * Merges configuration props into the current instance.
   * @param props Configuration props.
   */
  public mergeProps: (props: ListComputerProps) => void;

  /**
   * Computes and returns the total content height (including paddings, section headers,
   * rows and footers) in pixels.
   */
  public getHeight: () => number;

  /**
   * Returns the height (in pixels) for the given section header.
   * @param section Section index.
   * @returns Height in pixels.
   */
  public getHeightForSection: (section: number) => number;

  /**
   * Returns the height (in pixels) for a specific row in a specific section.
   * @param section Section index.
   * @param row Row index.
   * @returns Height in pixels.
   */
  public getHeightForRow: (section: number, row: number) => number;

  /**
   * Returns the height (in pixels) for the footer of the specified section.
   * @param section Section index.
   * @returns Height in pixels.
   */
  public getHeightForFooter: (section: number) => number;

  /**
   * Returns the configured list header height (in pixels).
   */
  public getListHeaderHeight: () => number;

  /**
   * Compute the visible items between `top` and `bottom` (both pixel offsets),
   * returning the spacer before visible items, the total content height, and the
   * list of visible item descriptors.
   * @param top Top pixel offset.
   * @param bottom Bottom pixel offset.
   * @returns The computed list state.
   */
  public compute: (top: number, bottom: number) => ListState;

  /**
   * Compute the scroll position to bring the target section (and optional row) into view.
   * @param targetSection Target section index.
   * @param targetRow Target row index.
   * @returns A tuple containing the scroll position and item height.
   */
  public computeScrollPosition: (targetSection: number, targetRow?: number) => [number, number];
}
