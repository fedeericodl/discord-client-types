import type * as React from "react";

import type { FormContextValue } from "./FormContext";
import type { FormTitleProps } from "./FormTitle";

export type FormItemProps = Omit<FormTitleProps, "errorId"> &
  Partial<Pick<FormContextValue, "titleId">> & {
    /**
     * The class name applied to the title.
     */
    titleClassName?: string;

    /**
     * The title of the form item.
     */
    title?: React.ReactNode;
  };

/**
 * Lets you wrap other elements in a form, such as inputs, checkboxes, and buttons.
 * @example
 * ```tsx
 * <FormItem title="Title name">
 *  {...}
 *  <Button>Random button</Button>
 *  {...}
 * </FormItem>
 * ```
 */
export type FormItem = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<FormItemProps>> &
    React.RefAttributes<HTMLDivElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLDivElement, React.PropsWithChildren<FormItemProps>>;
};
