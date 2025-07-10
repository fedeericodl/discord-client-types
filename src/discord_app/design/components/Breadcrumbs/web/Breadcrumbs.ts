import type * as React from "react";

export interface Breadcrumb {
  /**
   * The id of the breadcrumb.
   */
  id: string;

  /**
   * The label of the breadcrumb.
   */
  label: string;
}

export interface BreadcrumbsProps {
  /**
   * Event handler called when a breadcrumb is clicked.
   */
  onBreadcrumbClick?: (breadcrumb: Breadcrumb) => void;

  /**
   * The array of breadcrumbs.
   */
  breadcrumbs: Breadcrumb[];

  /**
   * The class name applied to the breadcrumbs container.
   */
  className?: string;

  /**
   * The id of the active breadcrumb.
   */
  activeId?: string;

  /**
   * Function to render a custom breadcrumb.
   */
  renderCustomBreadcrumb?: (breadcrumb: Breadcrumb, isActive: boolean) => React.ReactNode;

  /**
   * The class name applied to the separator (arrow).
   */
  separatorClassName?: string;
}

/**
 * A navigation aid that allows users to keep track of their location within the application.
 * @example
 * ```tsx
 * <Breadcrumbs
 *   breadcrumbs={[
 *     { id: "1", label: "Home" },
 *     { id: "2", label: "Products" },
 *     { id: "3", label: "Product 1" },
 *   ]}
 *   onBreadcrumbClick={(breadcrumb) => console.log("Breadcrumb clicked", breadcrumb.label)}
 * />
 * ```
 */
export declare class Breadcrumbs extends React.PureComponent<BreadcrumbsProps> {
  /**
   * Renders a single breadcrumb.
   * @param breadcrumb The breadcrumb to render.
   * @param index The index of the breadcrumb.
   */
  public renderBreadcrumb: (breadcrumb: Breadcrumb, index: number) => React.ReactNode;

  /**
   * Event handler called when a breadcrumb is clicked.
   * @param breadcrumb The breadcrumb that was clicked.
   */
  public handleClick: (breadcrumb: Breadcrumb) => void;
}
