import type * as React from "react";

type Sizes = "xxsmall" | "xsmall" | "small" | "large";

export type ProgressSizes = {
  [K in Sizes as Uppercase<K>]: K;
};

export interface ProgressProps {
  /**
   * The class name applied to the progress bar.
   */
  className?: string;

  /**
   * The percentage of the progress bar.
   * @default 0
   */
  percent?: number | "indeterminate";

  /**
   * The size of the progress bar.
   * @default Progress.Sizes.SMALL
   * @see {@link Sizes ProgressSizes}
   */
  size?: Sizes;

  /**
   * The color of the progress bar.
   * @default "var(--brand-500)"
   */
  foregroundColor?: string;

  /**
   * The background color of the progress bar.
   * @default "var(--background-modifier-active)"
   */
  backgroundColor?: string;

  /**
   * The gradient color of the progress bar.
   */
  foregroundGradientColor?: [string, string];

  /**
   * Whether the progress bar is animated.
   * @default true
   */
  animate?: boolean;
}

/**
 * A visual indicator that displays the progress of an operation or process over time.
 * The bar fills from left to right as progress increases, and can also display
 * an indeterminate state for operations with unknown duration.
 * @example
 * ```tsx
 * // Standard progress bar at 50%
 * <Progress percent={50} />
 *
 * // Indeterminate loading state
 * <Progress percent={Progress.INDETERMINATE} />
 * ```
 */
export type Progress = React.FC<ProgressProps> & {
  Sizes: ProgressSizes;
  INDETERMINATE: "indeterminate";
};
