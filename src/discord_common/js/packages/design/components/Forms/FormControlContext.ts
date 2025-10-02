import type * as React from "react";

export interface FormControlContextValue {
  /**
   * The id for the form control label.
   */
  labelId: string;

  /**
   * The id for the control.
   */
  controlId: string;

  /**
   * The accessibility description for the form.
   */
  describedById: string | undefined;

  /**
   * The id for the error message.
   */
  errorMessageId: string | undefined;

  /**
   * The id for the helper text element.
   */
  helperTextId?: string | undefined;

  /**
   * The id for the description element.
   */
  descriptionId?: string | undefined;
}

/**
 * A React context that holds the form's state.
 */
export type FormControlContext = React.Context<FormControlContextValue | undefined>;
