import type * as React from "react";

import type { Paginator } from "./Paginator";

type Types = "PAGE" | "GAP" | "BACK" | "NEXT";

export type PaginationTypes = {
  [K in Types as Uppercase<K>]: K;
};

export interface PaginationItem {
  /**
   * The type of pagination item.
   * @see {@link Types PaginationTypes}
   */
  type: Types;

  /**
   * Unique identifier for the pagination item.
   */
  key: string;

  /**
   * Whether the item is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether this item represents the currently selected page.
   * @default false
   */
  selected?: boolean;

  /**
   * The page number this item will navigate to when clicked.
   */
  targetPage?: number;

  /**
   * Callback function to handle navigation when this item is clicked.
   */
  navigateToPage: () => void;
}

export interface PaginationControllerChildrenProps {
  /**
   * List of pagination items to render.
   */
  pages: PaginationItem[];

  /**
   * Whether there are multiple pages available for pagination.
   * @default false
   */
  hasMultiplePages: boolean;
}

export interface PaginationControllerProps {
  /**
   * Total number of pages available for pagination.
   */
  totalPageCount: number;

  /**
   * Maximum number of page buttons to show at once.
   * @default 9
   */
  maxVisiblePages?: number;

  /**
   * Current active page number.
   */
  selectedPage: number;

  /**
   * Whether to hide the last page number in pagination.
   * @default false
   */
  hideMaxPage?: boolean;

  /**
   * Render prop that receives pagination items and multiple pages flag.
   */
  children: React.FC<PaginationControllerChildrenProps>;

  /**
   * Event handler called when a page is selected.
   */
  onPageChange?: (page: number) => void;
}

/**
 * Controller component that manages pagination logic and state.
 * An actual implementation of this controller is the {@link Paginator} component.
 * @example
 * ```tsx
 * <PaginationController
 *   totalPageCount={10}
 *   selectedPage={1}
 *   maxVisiblePages={5}
 *   onPageChange={(page) => console.log(`Navigate to page ${page}`)}>
 *   {({ pages }) => (
 *     // Render your custom pagination UI
 *     <div>
 *       {pages.map((page) => (
 *         <Button
 *           key={page.key}
 *           disabled={page.disabled}
 *           onClick={page.navigateToPage}>
 *           {page.type === PaginationTypes.PAGE ? page.targetPage : page.type}
 *         </Button>
 *       ))}
 *     </div>
 *   )}
 * </PaginationController>
 * ```
 */
export declare class PaginationController extends React.PureComponent<PaginationControllerProps> {
  /**
   * Changes the active page to the specified page number.
   * @param page The page number to navigate to.
   */
  public changePageTo: (page: number) => void;

  /**
   * Navigates to the next page.
   */
  public handleForward: () => void;

  /**
   * Navigates to the previous page.
   */
  public handleBackward: () => void;

  /**
   * Jumps to the specified page number.
   * @param page The page number to navigate to.
   */
  public handleJump: (page: number) => void;

  /**
   * Returns the bounds of the neighboring pages based on the current selected page.
   */
  public getNeighborBounds: () => [number, number];

  /**
   * Generates a list of pagination items based on the current state.
   */
  public getPageList: () => PaginationItem[];
}
