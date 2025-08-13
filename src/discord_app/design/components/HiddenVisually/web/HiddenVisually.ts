import type * as React from "react";

export interface HiddenVisuallyProps<T extends keyof React.JSX.IntrinsicElements = "span"> {
  /**
   * The HTML tag to use for the hidden element.
   * @default "span"
   */
  tag?: T;

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
 * @template T The HTML tag to use for the hidden element.
 */
export type HiddenVisually = <T extends keyof React.JSX.IntrinsicElements = "span">(
  props: React.PropsWithChildren<HiddenVisuallyProps<T>>,
) => React.ReactNode;
