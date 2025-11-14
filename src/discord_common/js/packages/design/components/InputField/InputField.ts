import type * as React from "react";

export interface InputFieldValidation {
  /**
   * The error message to display.
   */
  errorMessage: string | null;

  /**
   * Whether there is an error.
   */
  hasError: boolean;

  /**
   * Function to set whether validation should occur.
   */
  setShouldValidate: (shouldValidate: boolean) => void;
}

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
  validation?: InputFieldValidation;

  /**
   * The class name applied to the input field wrapper.
   */
  containerClassName?: string;
}

/**
 * A wrapper component for input fields that handles styling and state.
 */
export type InputField = React.FC<React.PropsWithChildren<InputFieldProps>>;
