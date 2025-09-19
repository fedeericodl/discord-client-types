import type {
  AnimatedListScrollHelperState,
  GetAnchorId,
  ListFooterHeight,
  ListHeaderHeight,
  ListItem,
  ListItemFooter,
  ListItemRow,
  ListItemSection,
  ListRowHeight,
  ListSectionHeight,
  ScrollerComponentBaseProps,
  ScrollerState,
} from "@discordapp/design/components/Scroller/utils";
import type * as React from "react";

export type RenderSectionFunction = (item: ListItemSection) => React.ReactNode;
export type RenderRowFunction = (item: ListItemRow) => React.ReactNode;
export type RenderFooterFunction = (item: ListItemFooter) => React.ReactNode;
export type RenderSidebarFunction = (
  isListVisible: boolean,
  isSidebarVisible: boolean,
) => React.ReactNode;
export type RenderListHeaderFunction = () => React.ReactNode;
export type RenderWrapperFunction = (section: number, children: React.ReactNode) => React.ReactNode;

export interface ListScrollerProps
  extends Omit<ScrollerComponentBaseProps, "paddingFixes" | "onResize" | "children"> {
  /**
   * Callback fired when the container itself is resized.
   * @default null
   */
  onResize?: (() => unknown) | null;

  /**
   * Callback fired when the content inside the scroller is resized.
   * @default null
   */
  onContentResize?: (() => unknown) | null;

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
   * @default 0
   */
  footerHeight?: ListFooterHeight;

  /**
   * Pixel height of the sidebar, if present.
   */
  sidebarHeight?: number;

  /**
   * List header height (fixed value or function).
   * @default 0
   */
  listHeaderHeight?: ListHeaderHeight;

  /**
   * Render function for a section element.
   */
  renderSection?: RenderSectionFunction;

  /**
   * Render function for an individual row.
   */
  renderRow: RenderRowFunction;

  /**
   * Render function for section footers.
   */
  renderFooter?: RenderFooterFunction;

  /**
   * Render function for a sidebar element alongside the list.
   */
  renderSidebar?: RenderSidebarFunction;

  /**
   * Render function for a list-level header element.
   */
  renderListHeader?: RenderListHeaderFunction;

  /**
   * Whether the list header should remain sticky (fixed at the top) while scrolling.
   */
  stickyListHeader?: boolean;

  /**
   * Wrapper render function applied around each section.
   */
  wrapSection?: RenderWrapperFunction;

  /**
   * Function to compute anchor ids for sections/rows.
   */
  getAnchorId?: GetAnchorId | undefined;

  /**
   * Top padding added to the computed content (in pixels).
   */
  paddingTop?: number;

  /**
   * Bottom padding added to the computed content (in pixels).
   */
  paddingBottom?: number;

  /**
   * Whether to use a custom theme for styling.
   * @default false
   */
  customTheme?: boolean;

  /**
   * Number of items per "chunk" of scrollable space.
   */
  chunkSize?: number;

  /**
   * The id for the inner content wrapper.
   */
  innerId?: string;

  /**
   * The accessibility role for the inner content wrapper.
   */
  innerRole?: string;

  /**
   * The accessibility label for the inner content wrapper.
   */
  innerAriaLabel?: string;

  /**
   * The accessibility multiselectable attribute for the inner content wrapper.
   */
  innerAriaMultiselectable?: boolean;

  /**
   * The accessibility orientation attribute for the inner content wrapper.
   */
  innerAriaOrientation?: "horizontal" | "vertical";

  /**
   * The class name applied to the inner content wrapper.
   */
  innerClassName?: string;

  /**
   * The HTML tag to use for the inner content wrapper.
   * @default "div"
   */
  innerTag?: keyof React.JSX.IntrinsicElements;
}

export interface ListScrollerRef extends AnimatedListScrollHelperState {
  /**
   * Returns the DOM node for the scroller container.
   */
  getScrollerNode: () => HTMLDivElement | null;

  /**
   * Returns the current scroller state.
   */
  getScrollerState: () => ScrollerState;

  /**
   * Returns the full list of items.
   */
  getItems: () => ListItem[];

  /**
   * Returns the section and row for a given index.
   */
  getSectionRowFromIndex: (index: number) => [number, number];
}

/**
 * A factory function that creates a highly optimized virtualized `ListScroller` component.
 * Designed to handle tremendous amounts of data with minimal performance impact.
 * Prevents DOM thrashing and minimizes React reconciliation work through advanced virtualization techniques.
 * Includes complex animated scrolling capabilities, section/row/footer rendering, and imperative APIs for programmatic control.
 * @param scrollbarClassName The class name to apply to the scrollbar.
 * @param fadeClassName The class name to apply for the fade effect.
 * @param customThemeClassName The class name to apply for custom theme styling.
 * @param ResizeObserverClass The `ResizeObserver` class to use for observing size changes.
 * @returns A `ListScroller` component with the specified customizations.
 */
export type CreateListScroller = (
  scrollbarClassName: string | undefined,
  fadeClassName: string | undefined,
  customThemeClassName: string | undefined,
  ResizeObserverClass: typeof ResizeObserver,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ListScrollerProps> & React.RefAttributes<ListScrollerRef>
> & {
  render: React.ForwardRefRenderFunction<ListScrollerRef, ListScrollerProps>;
};
