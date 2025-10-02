import type * as React from "react";

export interface HiddenVisuallyProps {
  /**
   * The HTML tag to use for the hidden element.
   * @default "span"
   */
  tag?: keyof React.JSX.IntrinsicElements;

  /**
   * Whether the hidden element should be shown when focused.
   */
  showOnFocus?: boolean;

  /**
   * The class name applied to the hidden element.
   */
  className?: string;
}

/**
 * Hides content visually, but keeps it accessible to screen readers.
 */
export type HiddenVisually = React.FC<React.PropsWithChildren<HiddenVisuallyProps>>;
