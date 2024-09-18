import type React from "react";

export interface HiddenVisuallyProps<T extends keyof JSX.IntrinsicElements = "span"> {
  /**
   * The id of the hidden element.
   */
  id?: string;

  /**
   * The HTML tag to use for the hidden element.
   * @default "span"
   */
  tag?: T;

  /**
   * Whether the hidden element should be shown when focused.
   * @default false
   */
  showOnFocus?: boolean;
}

/**
 * Hides content visually, but keeps it accessible to screen readers.
 * @template T The HTML tag to use for the hidden element.
 */
export type HiddenVisually<T extends keyof JSX.IntrinsicElements = "span"> = React.FC<
  React.PropsWithChildren<HiddenVisuallyProps<T>>
>;
