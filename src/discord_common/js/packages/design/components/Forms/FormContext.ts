import type * as React from "react";

export interface FormContextValue {
  /**
   * The spacing between form elements in pixels.
   */
  spacing: number;
}

/**
 * A React context that holds the form's state.
 */
export type FormContext = React.Context<FormContextValue>;
