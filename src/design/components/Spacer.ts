import type React from "react";

export interface SpacerProps {
  /**
   * The size of the spacer.
   */
  size?: number;

  /**
   * Whether the spacer should be horizontal.
   *
   * @default false
   */
  horizontal?: boolean;
}

/**
 * A spacer that creates space between elements.
 *
 * @example
 * ```tsx
 * <Spacer size={10} horizontal />
 * ```
 */
export type Spacer = React.FC<SpacerProps>;
