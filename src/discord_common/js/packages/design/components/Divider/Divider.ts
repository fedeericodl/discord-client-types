import type * as React from "react";

export interface DividerProps {
  /**
   * The class name applied to the divider.
   */
  className?: string;

  /**
   * The gap size.
   */
  gap?: string | number;
}

/**
 * Used to divide content.
 */
export type Divider = React.FC<DividerProps>;
