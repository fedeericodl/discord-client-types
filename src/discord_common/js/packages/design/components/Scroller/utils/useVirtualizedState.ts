import type {
  GetAnchorId,
  ListComputer,
  ListFooterHeight,
  ListHeaderHeight,
  ListRowHeight,
  ListSectionHeight,
  ListState,
} from "./core/ListComputer";
import type { ScrollerState } from "./core/SharedTypes";

export interface VirtualizedStateProps {
  /**
   * Array where each entry is the number of rows in the corresponding section.
   */
  sections: number[];

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
  footerHeight: ListFooterHeight;

  /**
   * Pixel height of the sidebar, if present.
   */
  sidebarHeight: number | undefined;

  /**
   * List header height (fixed value or function).
   */
  listHeaderHeight: ListHeaderHeight | undefined;

  /**
   * Number of items per "chunk" of scrollable space.
   * @default 256
   */
  chunkSize: number | undefined;

  /**
   * Top padding added to the computed content (in pixels).
   * @default 0
   */
  paddingTop: number | undefined;

  /**
   * Bottom padding added to the computed content (in pixels).
   * @default 0
   */
  paddingBottom: number | undefined;

  /**
   * Function returning the latest {@link ScrollerState}.
   */
  getScrollerState: () => ScrollerState;

  /**
   * Function to compute anchor ids for sections/rows.
   */
  getAnchorId?: GetAnchorId;
}

export interface ScrollAnchor {
  /**
   * Unique identifier of the anchor.
   */
  id: string;

  /**
   * The section index where the anchor is located.
   */
  section: number;

  /**
   * The row index (within the section), or `undefined` if the anchor applies to a section-level element (e.g., header).
   */
  row: number | undefined;

  /**
   * Distance (in pixels) between the top of the anchor element and the current scroll offset.
   */
  scrollOffset: number;
}

export interface VirtualizedUseState extends ListState {
  /**
   * The {@link ListComputer} instance handling layout.
   */
  listComputer: ListComputer;

  /**
   * Function to trigger a recalculation of visible items when the scroller crosses into a new chunk of space.
   */
  forceUpdateOnChunkChange: (fromDirtyType: 1 | 2) => void;

  /**
   * The current scroll anchor, or `null` if none is active.
   */
  anchor: ScrollAnchor | null;
}

/**
 * A React hook that manages the virtualized state of a list.
 * @param props The properties for configuring the list and virtualization.
 * @returns An object containing the current state of the list, including visible sections, item coordinates, and methods to force updates.
 */
export type UseVirtualizedState = (props: VirtualizedStateProps) => VirtualizedUseState;

interface VirtualizedAnchorProps {
  /**
   * The ref to the scrollable container element.
   */
  scrollerRef: React.RefObject<HTMLElement>;

  /**
   * Current active scroll anchor.
   */
  anchor: ScrollAnchor | null;

  /**
   * Function returning the latest {@link ScrollerState}.
   */
  getScrollerState: () => ScrollerState;

  /**
   * The {@link ListComputer} instance handling layout.
   */
  listComputer: ListComputer;

  /**
   * Function for generating anchor IDs.
   */
  getAnchorId: GetAnchorId | undefined;

  /**
   * The total computed scrollable height of the list.
   */
  totalHeight: number;
}

/**
 * A React hook that adjusts the scroll position to maintain the anchor element's relative position during layout changes.
 * @param props The properties required to manage the scroll anchor.
 */
export type UseVirtualizedAnchor = (props: VirtualizedAnchorProps) => void;
