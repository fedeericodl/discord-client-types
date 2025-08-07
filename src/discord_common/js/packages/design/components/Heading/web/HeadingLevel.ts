import type * as React from "react";

export interface HeadingLevelProps {
  /**
   * Component to render as a direct child with its own heading level.
   * When provided, this component receives the current level, and children receive the next level (current + 1).
   */
  component?: React.ReactNode;

  /**
   * Force a specific heading level regardless of the current context.
   */
  forceLevel?: number;
}

/**
 * Provider component that manages semantic heading level hierarchy.
 */
export type HeadingLevel = React.FC<React.PropsWithChildren<HeadingLevelProps>>;

export type HProps = React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

/**
 * Semantic heading component that automatically uses the appropriate heading tag (h1-h6).
 */
export type H = React.FC<HProps>;

/**
 * Hook that consumes the current heading level from context, marks it as used and returns the heading level.
 */
export type UsePrivateHeadingLevel = () => number;
