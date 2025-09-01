import type * as React from "react";

export interface SequencerProps {
  /**
   * The current active step number.
   */
  step: number;

  /**
   * Array of all possible step numbers.
   */
  steps: number[];

  /**
   * Custom key to override the default step-based key for React transitions.
   */
  overrideKey?: string;

  /**
   * The class name applied to the outer transition group container.
   */
  className?: string;

  /**
   * The class name applied to the inner measurement container.
   */
  innerClassName?: string;

  /**
   * The class name applied to the animated node during transitions
   */
  animatedNodeClassName?: string;

  /**
   * The class name applied to the static node when animation is complete.
   */
  staticClassName?: string;

  /**
   * Horizontal margin (in pixels) applied to the sides during transitions.
   */
  sideMargin?: number;

  /**
   * Vertical margin (in pixels) applied to top and bottom during transitions.
   */
  verticalMargin?: number;

  /**
   * Whether the sequencer should fill the parent container's full height.
   * @default false
   */
  fillParent?: boolean;

  /**
   * Type of motion animation to use during step transitions.
   * @default "slide"
   */
  animationMotionType?: "slide" | "lift";
}

/**
 * Animated step sequencer component for creating smooth transitions between different content steps.
 */
export declare class Sequencer extends React.Component<React.PropsWithChildren<SequencerProps>> {
  /**
   * Record storing the measured heights for each step.
   */
  public stepHeights: Record<number, number>;

  /**
   * The previous step number before the current transition.
   */
  public prevStep: number | null;

  /**
   * Array of previous step numbers.
   */
  public prevSteps: number[];

  /**
   * Returns the base height for animations from the previous step.
   */
  public getBaseHeight: () => number;

  /**
   * Calculates the animation direction based on step order.
   * Returns 1 for forward direction, -1 for backward direction.
   */
  public getDirection: () => number;

  /**
   * Sets the height for the current step after measurement.
   * @param height The measured height of the current step's content.
   */
  public setHeight: (height: number) => void;

  /**
   * Updates the previous step tracking variables.
   */
  public setPrevSteps: () => void;
}
