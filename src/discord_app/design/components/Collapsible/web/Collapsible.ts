import type * as React from "react";

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
   */
  isExpanded?: boolean;
}

/**
 * A collapsible component that can be used to hide and show content.
 * @example
 * ```tsx
 * <Collapsible collapsibleContent={<Text>This is open now</Text>}>
 *   {({ onClick }) => (
 *     <Clickable onClick={onClick}>
 *       <Text variant="heading-md/bold" tag="h3">Click me to open this</Text>
 *     </Clickable>
 *   )}
 * </Collapsible>
 * ```
 */
export type Collapsible = React.FC<CollapsibleProps>;
