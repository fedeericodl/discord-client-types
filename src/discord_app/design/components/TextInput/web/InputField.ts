import type * as React from "react";

import type { ErrorValidation } from "./TextInputError";

export interface InputFieldProps
  extends React.AllHTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  /**
   * The HTML tag to use for the container.
   */
  as?: keyof React.JSX.IntrinsicElements;

  /**
   * Whether the input field should take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * The validation state of the input field.
   */
  validation?: ErrorValidation;

  /**
   * The class name applied to the input field wrapper.
   */
  containerClassName?: string;
}

/**
 * A wrapper component for input fields that handles styling and state.
 */
export type InputField = React.FC<React.PropsWithChildren<InputFieldProps>>;
