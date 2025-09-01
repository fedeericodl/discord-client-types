import type { SpringValue } from "@react-spring/web";
import type * as React from "react";

export interface AnimatedDotsProps {
  /**
   * Radius of each dot in pixels.
   */
  dotRadius: number;

  /**
   * Spring animation value for positioning the dots during transitions.
   */
  dotPosition?: SpringValue<number>;

  /**
   * Color fill for the dots, supports CSS color values.
   * @default "currentColor"
   */
  fill?: string;

  /**
   * Spacing multiplier between dots relative to dot radius.
   * @default 2.5
   */
  spacing?: number;
}

/**
 * Animated loading indicator component with three pulsing dots.
 * @example
 * ```tsx
 * <AnimatedDots dotRadius={4} fill="#5865f2" />
 * ```
 */
export type AnimatedDots = React.MemoExoticComponent<React.FC<AnimatedDotsProps>>;

export interface DotsProps extends React.RefAttributes<SVGSVGElement> {
  /**
   * Radius of each dot in pixels.
   */
  dotRadius: number;

  /**
   * Horizontal position of the dots container.
   */
  x?: string | number;

  /**
   * Vertical position of the dots container.
   */
  y?: string | number;

  /**
   * Whether to hide the dots with fade-out transition.
   * @default false
   */
  hide?: boolean;

  /**
   * Whether to apply theme-based styling.
   * @default false
   */
  themed?: boolean;

  /**
   * The class name applied to the dots container.
   */
  className?: string;
}

/**
 * Container component for animated loading dots with show/hide transitions.
 * @example
 * ```tsx
 * const [loading, setLoading] = React.useState(true);
 *
 * <Dots dotRadius={3} hide={!loading} themed />
 * ```
 */
export type Dots = React.MemoExoticComponent<React.FC<DotsProps>>;
