import type * as React from "react";

export interface FieldContextValue {
  /**
   * The id for the field label.
   */
  labelId: string;

  /**
   * The id for the field.
   */
  controlId: string;

  /**
   * The accessibility description for the field.
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
 * A React context that holds the field's state.
 */
export type FieldContext = React.Context<FieldContextValue | undefined>;
