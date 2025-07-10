import type * as React from "react";

export interface FormDividerProps {
  /**
   * The class name applied to the divider.
   */
  className?: string;

  /**
   * The styles applied to the divider.
   */
  style?: React.CSSProperties;
}

/**
 * Used to divide content in a form.
 */
export type FormDivider = React.FC<FormDividerProps>;
