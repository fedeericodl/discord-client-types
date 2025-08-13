import type * as React from "react";

import type { PaginationControllerProps, PaginationItem } from "./PaginationController";

export interface PaginatorProps
  extends Pick<PaginationControllerProps, "maxVisiblePages" | "onPageChange" | "hideMaxPage"> {
  /**
   * Current active page number.
   */
  currentPage: number;

  /**
   * Total number of items to be paginated.
   */
  totalCount: number;

  /**
   * Number of items per page.
   */
  pageSize: number;

  /**
   * Whether to disable pagination gap.
   */
  disablePaginationGap?: boolean;

  /**
   * The class name applied to the paginator container.
   */
  className?: string;

  /**
   * Render prop to customize the page wrapper element.
   */
  renderPageWrapper?: (
    pageItem: PaginationItem[],
    pageElement: React.ReactElement,
  ) => React.ReactNode;
}

/**
 * A navigation component that enables browsing through paginated content.
 * Provides a user interface for navigating between pages with, next/previous buttons, numbered page buttons,
 * page gaps (ellipsis) for large page ranges, jump-to-page functionality.
 * @example
 * ```tsx
 * const [currentPage, setCurrentPage] = React.useState(1);
 *
 * <Paginator
 *   currentPage={currentPage}
 *   totalCount={100}
 *   pageSize={10}
 *   onPageChange={(page) => setCurrentPage(page)}
 * />
 * ```
 */
export type Paginator = React.FC<PaginatorProps>;
