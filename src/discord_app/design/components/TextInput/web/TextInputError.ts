export interface ErrorValidation {
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

export interface TextInputErrorProps {
  /**
   * The error message to display.
   */
  error?: string;
}

/**
 * Displays an error message.
 * Typically used under any input field.
 * @example
 * ```tsx
 * <TextInputError error="A very generic error." />
 * ```
 */
export type TextInputError = React.FC<TextInputErrorProps>;
