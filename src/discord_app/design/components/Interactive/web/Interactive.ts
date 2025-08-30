import type * as React from "react";

export interface InteractiveProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * The HTML tag to use for the interactive element.
   * @default Clickable
   */
  as?: keyof React.JSX.IntrinsicElements;

  /**
   * Whether the element is muted.
   * @default false
   */
  muted?: boolean;

  /**
   * Whether the element is selected.
   * @default false
   */
  selected?: boolean;
}

/**
 * A versatile component that can be used to make any element interactive.
 */
export type Interactive = React.FC<InteractiveProps>;
