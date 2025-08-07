export interface InputErrorProps {
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
 * <InputError error="A very generic error." />
 * ```
 */
export type InputError = React.FC<InputErrorProps>;
