import type * as React from "react";

import type { FormControlContextValue } from "./FormControlContext";

export interface FormControlProps {
  /**
   * The label for the form.
   */
  label?: React.ReactNode;

  /**
   * Whether to visually hide the label.
   * @default false
   */
  hideLabel?: boolean;

  /**
   * Whether the form is marked as required.
   */
  required?: boolean;

  /**
   * Whether the form is disabled.
   */
  disabled?: boolean;

  /**
   * The description for the form.
   */
  description?: React.ReactNode;

  /**
   * The helper text to display below the form.
   */
  helperText?: React.ReactNode;

  /**
   * The children of the form.
   */
  children: React.ReactNode | ((props: FormControlContextValue) => React.ReactNode);

  /**
   * The error message to display when the form is invalid.
   */
  errorMessage?: React.ReactNode;

  /**
   * The success message to display when the form is valid.
   */
  successMessage?: React.ReactNode;

  /**
   * The trailing content to display after the form.
   */
  trailingContent?: React.ReactNode;

  /**
   * The role of the form element.
   */
  role?: string;

  /**
   * The layout of the form.
   * @default "vertical"
   */
  layout?: "vertical" | "horizontal";

  /**
   * The id of the form element.
   */
  id?: string;
}

/**
 * A wrapper component that provides a styled form.
 */
export type FormControl = React.FC<FormControlProps>;
