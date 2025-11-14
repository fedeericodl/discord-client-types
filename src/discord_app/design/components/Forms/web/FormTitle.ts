import type * as React from "react";

import type { FormContextValue } from "./FormContext";

interface CommonFormTitleProps extends Partial<Pick<FormContextValue, "error" | "errorId">> {
  /**
   * The HTML tag to use for the title. This is applied to its class name.
   * @default "h5"
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "legend";

  /**
   * Whether the title is displayed as disabled.
   */
  disabled?: boolean;

  /**
   * Whether an asterisk (*) is displayed next to the title to indicate that the content following the title is required.
   * @default false
   */
  required?: boolean;
}

export interface FormTitleHeadingProps
  extends CommonFormTitleProps,
    Omit<React.ComponentPropsWithoutRef<"h1">, "title"> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5";
}
export interface FormTitleLegendProps
  extends CommonFormTitleProps,
    Omit<React.ComponentPropsWithoutRef<"legend">, "title"> {
  tag?: "legend";
}

export type FormTitleProps = FormTitleHeadingProps | FormTitleLegendProps;

/**
 * A title for a form. The HTML tag for the title can be automatically selected based on the previous heading levels.
 * @example
 * ```tsx
 * <FormTitle tag="h1">Title of the form</FormTitle>
 * ```
 */
export type FormTitle = React.FC<React.PropsWithChildren<FormTitleProps>>;
