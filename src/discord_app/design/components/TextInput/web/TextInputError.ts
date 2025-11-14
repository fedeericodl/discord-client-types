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
