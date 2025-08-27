/**
 * Returns the unique key for a section.
 * @param section The section index.
 * @returns The section key.
 */
export type GetMasonryListSectionKey = (section: number) => string;

/**
 * Returns the unique key for a section header.
 * @param section The section index.
 * @returns The section header key.
 */
export type GetMasonryListSectionHeaderKey = (section: number) => string;

/**
 * Returns the section index from a section key.
 * @param sectionKey The section key.
 * @returns The section index.
 */
export type GetMasonryListSectionIndex = (sectionKey: string) => number;

export interface MasonryListUnitCoords {
  /**
   * Positioning mode for the unit.
   */
  position: "absolute" | "sticky";

  /**
   * Top offset (in pixels) from the top of the list container.
   */
  top: number;

  /**
   * Left offset (in pixels) from the container when layout direction is LTR.
   */
  left?: number;

  /**
   * Right offset (in pixels) from the container when layout direction is RTL.
   */
  right?: number;

  /**
   * Computed width (in pixels) of the unit.
   */
  width: number;

  /**
   * Computed height (in pixels) of the unit.
   */
  height: number;
}

export type MasonryListVisibleSections = Record<string, [string, number, number][]>;

export type MasonryListCoordsMap = Record<string, MasonryListUnitCoords | undefined>;
export type MasonryListGrid = string[][];
export type MasonryListGetItemKey = (section: number, item: number) => string;
export type MasonryListGetSectionHeight = (section: number) => number;
export type MasonryListGetItemHeight = (
  section: number,
  item: number,
  columnWidth: number,
) => number;

export interface MasonryListGridCoords {
  /**
   * Section index where the item is placed.
   */
  section: number;

  /**
   * Row index where the item is placed.
   */
  row: number;

  /**
   * Column index where the item is placed.
   */
  column: number;
}

export interface MasonryListGridData {
  /**
   * Associates each item key with its logical grid location, including the section, row, and column where the item is placed.
   */
  coordinates: Record<string, MasonryListGridCoords>;

  /**
   * Array of numeric row boundaries where each index corresponds to a section.
   */
  boundaries: number[];
}

export interface MasonryListComputerState {
  /**
   * Holds the computed position and size for each item, where the key is the item identifier and the value is its unit coordinates.
   */
  coordsMap: MasonryListCoordsMap;

  /**
   * Supplemental grid metadata produced during a full compute.
   */
  gridData: MasonryListGridData;

  /**
   * Tracks the currently visible items grouped by section key.
   * For each section, the value is an array of tuples containing the item key, section index, and row index.
   */
  visibleSections: MasonryListVisibleSections;

  /**
   * Total computed scrollable height of the entire masonry content (including paddings).
   */
  totalHeight: number;
}

export interface MasonryListPadding {
  /**
   * Top padding (in pixels).
   */
  top?: number;

  /**
   * Bottom padding (in pixels).
   */
  bottom?: number;

  /**
   * Left padding (in pixels).
   */
  left?: number;

  /**
   * Right padding (in pixels).
   */
  right?: number;
}

export interface MasonryListComputerProps {
  /**
   * Array where each element is the number of items in that section.
   */
  sections?: number[];

  /**
   * Number of columns to lay items into.
   */
  columns?: number;

  /**
   * Spacing (in pixels) between individual items (horizontal and vertical gutter).
   */
  itemGutter?: number;

  /**
   * Whether the gutters at the grid edges are removed (affects column positioning).
   */
  removeEdgeItemGutters?: boolean;

  /**
   * Function that returns the unique key for an item.
   */
  getItemKey?: MasonryListGetItemKey;

  /**
   * Function that returns the height (in pixels) for an item given its section, index and computed column width.
   */
  getItemHeight?: MasonryListGetItemHeight;

  /**
   * Function that returns the height (in pixels) for a section header.
   */
  getSectionHeight?: MasonryListGetSectionHeight;

  /**
   * Available width (in pixels) used to compute column sizes and placements.
   */
  bufferWidth?: number;

  /**
   * Global padding around the grid.
   */
  padding?: number | MasonryListPadding | null;

  /**
   * Vertical-only padding override (top and bottom).
   */
  paddingVertical?: number | null;

  /**
   * Horizontal-only padding override (left and right).
   */
  paddingHorizontal?: number | null;

  /**
   * Left margin offset applied to section/container coordinates.
   */
  marginLeft?: number | null;

  /**
   * Extra spacing between sections.
   */
  sectionGutter?: number | null;

  /**
   * Layout direction. Affects whether `left` or `right` is used for position calculations.
   */
  dir?: "ltr" | "rtl";
}

/**
 * A layout utility class that computes where every item in a Masonry grid should be placed
 * and which items are visible inside a given scroll window.
 */
export declare class MasonryListComputer {
  public constructor();

  /**
   * Tracks the currently visible items grouped by section key.
   * For each section, the value is an array of tuples containing the item key, section index, and row index.
   */
  public visibleSections: MasonryListVisibleSections;

  /**
   * Supplemental grid metadata produced during a full compute.
   */
  public gridData: MasonryListGridData;

  /**
   * Holds the computed position and size for each item, where the key is the item identifier and the value is its unit coordinates.
   */
  public coordsMap: MasonryListCoordsMap;

  /**
   * Current numeric heights for each column including padding offsets.
   */
  public columnHeights: number[];

  /**
   * Computed width (in pixels) for a single column, based on `bufferWidth`, gutters and padding.
   */
  public columnWidth: number;

  /**
   * Total computed scrollable height of the entire masonry content (including paddings).
   */
  public totalHeight: number;

  /**
   * 2D grid representation (array per column) of item keys that were assigned to each column.
   */
  public itemGrid: MasonryListGrid;

  /**
   * Temporary counter used while computing layout to track the current logical row.
   */
  public currentRow: number;

  /**
   * Index of the last column an item was placed into during compute.
   */
  public lastColumnIndex: number;

  /**
   * Whether a full layout recomputation is required.
   */
  public needsFullCompute: boolean;

  /**
   * Available width (in pixels) used to compute column sizes and placements.
   */
  public bufferWidth: number;

  /**
   * Array where each element is the number of items in that section.
   */
  public sections: number[];

  /**
   * Number of columns to lay items into.
   */
  public columns: number;

  /**
   * Spacing (in pixels) between individual items (horizontal and vertical gutter).
   */
  public itemGutter: number;

  /**
   * Whether the gutters at the grid edges are removed (affects column positioning).
   */
  public removeEdgeItemGutters: boolean;

  /**
   * Extra spacing between sections.
   */
  public sectionGutter: number | null;

  /**
   * Global padding around the grid.
   */
  public padding: number | MasonryListPadding | null;

  /**
   * Vertical-only padding override (top and bottom).
   */
  public paddingVertical: number | null;

  /**
   * Horizontal-only padding override (left and right).
   */
  public paddingHorizontal: number | null;

  /**
   * Left margin offset applied to section/container coordinates.
   */
  public marginLeft: number | null;

  /**
   * Layout direction. Affects whether `left` or `right` is used for position calculations.
   */
  public dir: "ltr" | "rtl";

  /**
   * Function that returns the unique key for an item.
   */
  public getItemKey: MasonryListGetItemKey;

  /**
   * Function that returns the height (in pixels) for an item given its section, index and computed column width.
   */
  public getItemHeight: MasonryListGetItemHeight;

  /**
   * Function that returns the height (in pixels) for a section header.
   */
  public getSectionHeight: MasonryListGetSectionHeight;

  /**
   * Returns the padding to use for the given direction.
   * @param direction One of "left" | "right" | "top" | "bottom".
   * @returns The padding (in pixels) for that direction.
   */
  public getPadding: (direction: "left" | "right" | "top" | "bottom") => number;

  /**
   * Returns the computed left padding.
   */
  public getPaddingLeft: () => number;

  /**
   * Returns the computed right padding.
   */
  public getPaddingRight: () => number;

  /**
   * Returns the computed top padding.
   */
  public getPaddingTop: () => number;

  /**
   * Returns the computed bottom padding.
   */
  public getPaddingBottom: () => number;

  /**
   * Returns the gutter (spacing) to use between sections.
   */
  public getSectionGutter: () => number;

  /**
   * Merges new configuration props into the `MasonryListComputer` instance.
   * @param props Configuration props.
   */
  public mergeProps: (props: MasonryListComputerProps) => void;

  /**
   * Performs a full layout computation.
   */
  public computeFullCoords: () => void;

  /**
   * Computes which items/sections intersect the given buffer window and populate `visibleSections`.
   * @param bufferTop Top pixel of the render buffer.
   * @param bufferBottom Bottom pixel of the render buffer.
   */
  public computeVisibleSections: (bufferTop: number, bufferBottom: number) => void;

  /**
   * Returns the maximum column height from the supplied array or from the instance's `columnHeights`.
   * @param columnHeights Column heights array.
   * @returns The maximum column height (in pixels).
   */
  public getMaxColumnHeight: (columnHeights?: number[]) => number;

  /**
   * Returns the current computed state relevant to rendering.
   */
  public getState: () => MasonryListComputerState;
}

/**
 * Synchronizes differences between two section/item maps and calls a callback for changes.
 * @param prev Previous mapping of sections to item triples `[key, section, index]`.
 * @param next Next mapping of sections to item triples `[key, section, index]`.
 * @param onItemVisibilityChange Callback called for each diffed item.
 */
export type VisitMasonryListVisibleSectionsDifference = (
  prev: MasonryListVisibleSections,
  next: MasonryListVisibleSections,
  onItemVisibilityChange: (section: number, index: number, added: boolean) => void,
) => void;
