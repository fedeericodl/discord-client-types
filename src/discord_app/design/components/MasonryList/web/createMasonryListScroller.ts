import type {
  AnimatedScrollHelperState,
  MasonryListCoordsMap,
  MasonryListGetItemHeight,
  MasonryListGetItemKey,
  MasonryListGetSectionHeight,
  MasonryListGrid,
  MasonryListPadding,
  MasonryListUnitCoords,
  ScrollerComponentBaseProps,
  ScrollerState,
} from "@discordapp/design/components/Scroller/web/utils";
import type * as React from "react";

export interface MasonryListScrollerRef extends AnimatedScrollHelperState {
  /**
   * Returns the DOM node for the scroller container.
   */
  getScrollerNode: () => HTMLDivElement | null;

  /**
   * Returns the 2D grid representation (array per column) of item keys that were assigned to each column.
   */
  getItemGrid: () => MasonryListGrid;

  /**
   * Returns the map of item keys to their computed position and size.
   */
  getCoordsMap: () => MasonryListCoordsMap;

  /**
   * Returns the current scroller state.
   */
  getScrollerState: () => ScrollerState;
}

export type RenderSection = (
  section: number,
  coords: MasonryListUnitCoords,
  sectionKey: string,
) => React.ReactNode;
export type RenderItem = (
  section: number,
  item: number,
  coords: MasonryListUnitCoords,
  itemKey: string,
) => React.ReactNode;

export interface MasonryListScrollerProps extends ScrollerComponentBaseProps {
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
  getSectionHeight?: MasonryListGetSectionHeight;

  /**
   * Number of items per scroll chunk.
   */
  chunkSize?: number;

  /**
   * Render function for sections.
   */
  renderSection?: RenderSection;

  /**
   * Render function for items.
   */
  renderItem: RenderItem;

  /**
   * Function that returns props for a section.
   */
  getSectionProps: (sectionIndex: number) => React.ComponentPropsWithoutRef<"div">;

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
  sectionGutter?: number;

  /**
   * Global padding around the grid.
   */
  padding?: number | MasonryListPadding;

  /**
   * Vertical-only padding override (top and bottom).
   */
  paddingVertical?: number;

  /**
   * Horizontal-only padding override (left and right).
   */
  paddingHorizontal?: number;

  /**
   * Maximum available width (in pixels).
   */
  maxContentWidth?: number;

  /**
   * Render function for accessories above the list content.
   */
  renderAccessory?: (totalHeight: number) => React.ReactNode;

  /**
   * Function called when item visibility changes.
   */
  onItemVisibilityChange?: (section: number, index: number, added: boolean) => void;
}

/**
 * A factory function that creates a highly optimized virtualized `MasonryListScroller` component.
 * Designed for rendering items in a masonry grid layout with variable heights.
 * @param scrollbarClassName The class name to apply to the scrollbar.
 * @param fadeClassName The class name to apply for the fade effect.
 * @param ResizeObserverClass The `ResizeObserver` class to use for observing size changes.
 * @returns A `MasonryListScroller` component with the specified customizations.
 */
export type CreateMasonryListScroller = (
  scrollbarClassName: string | undefined,
  fadeClassName: string | undefined,
  ResizeObserverClass: typeof ResizeObserver,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MasonryListScrollerProps> & React.RefAttributes<MasonryListScrollerRef>
> & {
  render: React.ForwardRefRenderFunction<MasonryListScrollerRef, MasonryListScrollerProps>;
};
