import type * as React from "react";

import type { FormContextValue } from "./FormContext";
import type { FormSection } from "./FormSection";
import type { FormTitleProps } from "./FormTitle";

export type FormItemProps = FormTitleProps &
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
 * It should be used within a {@link FormSection}, which groups related `FormItem`s together.
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
  React.PropsWithoutRef<React.PropsWithChildren<FormItemProps>> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, React.PropsWithChildren<FormItemProps>>;
};
