import type React from "react";

export type StrokeSizes = Readonly<{
  SMALL: 1;
  MEDIUM: 2;
  LARGE: 4;
}>;

export interface ProgressCircleProps {
  /**
   * The thickness of the circle's stroke.
   * @default ProgressCircle.StrokeSizes.MEDIUM
   * @see {@link StrokeSizes}
   */
  strokeSize?: StrokeSizes[keyof StrokeSizes];

  /**
   * The progress value, represented as a percentage from 0 to 100.
   * Values are automatically clamped within this range.
   */
  percent: number;

  /**
   * Custom color for the progress arc.
   * @default "currentColor"
   */
  colorOverride?: string;

  /**
   * Custom background color for the circle.
   */
  background?: string;

  /**
   * The class name applied to the progress circle.
   */
  className?: string;
}

export declare class ProgressCircleComponent extends React.Component<
  React.PropsWithChildren<ProgressCircleProps>
> {
  /**
   * Renders the circle element.
   */
  public renderCircle: () => React.ReactElement;
}

/**
 * A circular progress indicator that visualizes progress in a radial format.
 * Useful for compact spaces, loading indicators, and dashboard statistics.
 * Supports customizable stroke thickness, colors, and can contain child elements
 * in its center.
 * @example
 * ```tsx
 * // Basic usage
 * <ProgressCircle percent={75} />
 *
 * // With custom styling and content
 * <ProgressCircle
 *   percent={80}
 *   strokeSize={ProgressCircle.StrokeSizes.LARGE}
 *   colorOverride="#ff0000">
 *   80%
 * </ProgressCircle>
 * ```
 */
export type ProgressCircle = typeof ProgressCircleComponent & {
  StrokeSizes: StrokeSizes;
};
