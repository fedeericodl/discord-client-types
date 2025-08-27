import type {
  MasonryListComputer,
  MasonryListComputerState,
  MasonryListGetItemHeight,
  MasonryListGetItemKey,
  MasonryListGetSectionHeight,
  MasonryListPadding,
} from "./core/MasonryListComputer";
import type { ScrollerState } from "./core/SharedTypes";

export interface VirtualizedMasonryProps {
  /**
   * Array where each element is the number of items in that section.
   */
  sections: number[];

  /**
   * Number of columns to lay items into.
   */
  columns: number;

  /**
   * Function that returns the unique key for an item.
   */
  getItemKey: MasonryListGetItemKey;

  /**
   * Function that returns the height (in pixels) for an item given its section, index and computed column width.
   */
  getItemHeight: MasonryListGetItemHeight;

  /**
   * Function that returns the height (in pixels) for a section header.
   */
  getSectionHeight?: MasonryListGetSectionHeight | undefined;

  /**
   * Number of items per scroll chunk.
   * @default 250
   */
  chunkSize?: number;

  /**
   * Function returning the latest {@link ScrollerState}.
   */
  getScrollerState: () => ScrollerState;

  /**
   * Maximum available width (in pixels) used to compute column sizes and placements.
   */
  maxBufferWidth?: number | undefined;

  /**
   * Spacing (in pixels) between individual items (horizontal and vertical gutter).
   */
  itemGutter: number;

  /**
   * Whether to remove gutters on the edges of the grid.
   */
  removeEdgeItemGutters?: boolean;

  /**
   * Spacing between sections.
   */
  sectionGutter?: number | undefined;

  /**
   * Global padding around the grid.
   */
  padding?: number | MasonryListPadding | undefined;

  /**
   * Vertical-only padding override (top and bottom).
   */
  paddingVertical?: number | undefined;

  /**
   * Horizontal-only padding override (left and right).
   */
  paddingHorizontal?: number | undefined;

  /**
   * Layout direction. Affects whether `left` or `right` is used for position calculations.
   */
  dir: "ltr" | "rtl";
}

export interface VirtualizedMasonryUseState extends MasonryListComputerState {
  /**
   * The {@link MasonryListComputer} instance handling layout.
   */
  masonryComputer: MasonryListComputer;

  /**
   * Function to force re-render when scroll chunk boundaries change.
   */
  forceUpdateOnChunkChange: (dirtyType: 1 | 2) => void;

  /**
   * Function to trigger a manual re-render of the component.
   */
  forceUpdate: () => void;
}

/**
 * A React hook that manages the state of a virtualized masonry grid layout.
 * @param props The properties for configuring the masonry layout and virtualization.
 * @returns An object containing the current state of the masonry layout, including visible sections, item coordinates, and methods to force updates.
 */
export type UseVirtualizedMasonryState = (
  props: VirtualizedMasonryProps,
) => VirtualizedMasonryUseState;
