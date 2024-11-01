import type React from "react";

export interface FormContextValue {
  /**
   * The id for the title.
   */
  titleId: string | undefined;

  /**
   * The id for the error message.
   */
  errorId: string | undefined;

  /**
   * The error message to display.
   */
  error: string | undefined;

  /**
   * Whether the form is focused.
   */
  isFocused: boolean | undefined;

  /**
   * Sets the form as focused.
   */
  setIsFocused: () => void | React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * Whether the form has been submitted.
   */
  hasValue: boolean | undefined;

  /**
   * Sets the form as having a value.
   */
  setHasValue: () => void | React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * A React context that holds the form's state.
 */
export type FormContext = React.Context<FormContextValue>;

/**
 * Hook that allows you to consume the {@link FormContext}.
 */
export type UseFormContext = () => FormContextValue;

/**
 * Provides the {@link FormContext} to its children.
 * Should be used to wrap the component tree that needs access to the {@link FormContext}.
 */
export type FormContextProvider = React.FC<React.PropsWithChildren<FormContextValue>>;
