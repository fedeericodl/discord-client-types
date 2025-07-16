import type * as React from "react";

import type { FormContextValue } from "./FormContext";

export type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "label" | "legend";

export type FormTitleTags = {
  [K in Tags as Uppercase<K>]: K;
};

interface CommonFormTitleProps extends Partial<Pick<FormContextValue, "error" | "errorId">> {
  /**
   * The HTML tag to use for the title. This is applied to its class name.
   * @default FormTitleTags.H5
   * @see {@link Tags FormTitleTags}
   */
  tag?: Tags;

  /**
   * Whether the title is faded.
   * @default false
   */
  faded?: boolean;

  /**
   * Whether the title is displayed as disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether an asterisk (*) is displayed next to the title to indicate that the content following the title is required.
   * @default false
   */
  required?: boolean;
}

// ! HACK: This is a workaround instead of using generics.

export interface HeadingProps
  extends CommonFormTitleProps,
    Omit<React.ComponentPropsWithoutRef<"h1">, "title"> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5";
}
export interface LabelProps
  extends CommonFormTitleProps,
    Omit<React.ComponentPropsWithoutRef<"label">, "title"> {
  tag?: "label";
}
export interface LegendProps
  extends CommonFormTitleProps,
    Omit<React.ComponentPropsWithoutRef<"legend">, "title"> {
  tag?: "legend";
}

export type FormTitleProps = HeadingProps | LabelProps | LegendProps;

/**
 * A title for a form. The HTML tag for the title can be automatically selected based on the previous heading levels.
 * @example
 * ```tsx
 * <FormTitle tag={FormTitleTags.H1}>Title of the form</FormTitle>
 * ```
 */
export type FormTitle = React.FC<React.PropsWithChildren<FormTitleProps>>;
