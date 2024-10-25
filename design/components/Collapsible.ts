import type React from "react";

export interface CollapsibleChildrenProps {
  /**
   * Event handler called when the collapsible is clicked.
   */
  onClick: () => void;
}

export interface CollapsibleProps {
  /**
   * The children of the collapsible.
   */
  children: React.FC<CollapsibleChildrenProps>;

  /**
   * The class name applied to the collapsible container.
   */
  className?: string;

  /**
   * The content that will be displayed when the collapsible is expanded.
   */
  collapsibleContent?: React.ReactNode;

  /**
   * Whether the collapsible is expanded or not.
   * @default false
   */
  isExpanded?: boolean;
}

/**
 * A collapsible component that can be used to hide and show content.
 * @example
 * ```tsx
 * <Collapsible>
 *   {({ onClick }) => (
 *     <Button onClick={onClick}>Click me</Button>
 *   )}
 * </Collapsible>
 */
export type Collapsible = React.FC<CollapsibleProps>;
