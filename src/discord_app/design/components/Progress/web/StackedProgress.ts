import type * as React from "react";

type Sizes = "xsmall" | "small" | "large";

export type StackedProgressSizes = {
  [K in Sizes as Uppercase<K>]: K;
};

export interface StackedProgressProps {
  /**
   * The class name applied to the stacked progress container.
   */
  className?: string;

  /**
   * Array of percentage values for each progress segment.
   * Each value represents a segment's width relative to the total width.
   * Values are automatically clamped between 0 and 100.
   */
  percents: number[];

  /**
   * Size variant of the progress bar.
   * @default StackedProgress.Sizes.SMALL
   * @see {@link Sizes StackedProgressSizes}
   */
  size?: Sizes;

  /**
   * Array of colors for each progress segment.
   * Each color corresponds to a segment in the percents array.
   * @default ["var(--brand-500)"]
   */
  foregroundColors?: string[];

  /**
   * Background color of the unfilled portion.
   * @default "var(--background-modifier-active)"
   */
  backgroundColor?: string;

  /**
   * Whether to animate transitions between progress values.
   * @default true
   */
  animate?: boolean;
}

/**
 * A progress bar component that can display multiple segments of progress stacked together.
 * @example
 * ```tsx
 * <StackedProgress
 *   percents={[30, 40]}
 *   foregroundColors={["#ff0000", "#00ff00"]}
 * />
 * ```
 */
export type StackedProgress = React.FC<StackedProgressProps> & {
  Sizes: StackedProgressSizes;
};
