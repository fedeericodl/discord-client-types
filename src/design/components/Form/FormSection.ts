import type React from "react";
import type { FormContextValue } from "./FormContext";
import type { FormItem } from "./FormItem";
import type { FormTitleProps, LabelProps } from "./FormTitle";

export type FormSectionProps = Pick<FormTitleProps, "disabled" | "tag"> &
  Pick<LabelProps, "htmlFor"> &
  Partial<Pick<FormContextValue, "titleId">> & {
    /**
     * The class name applied to the section.
     */
    className?: string;

    /**
     * The class name applied to the title.
     */
    titleClassName?: string;

    /**
     * The title of the section.
     */
    title?: React.ReactNode;

    /**
     * The icon to be displayed next to the title.
     */
    icon?: React.ReactNode;
  };

/**
 * A container component that provides a structured layout for form elements.
 * It organizes {@link FormItem}s under a shared title, enhancing the form's readability and usability.
 * It's ideal for forms with multiple fields or complex structures, as it visually separates different sections of the form.
 *
 * @example
 * ```tsx
 * <FormSection title="User Information" tag={FormTitleTags.H1}>
 *  <FormItem title="Username">
 *    {...}
 *  </FormItem>
 *  <FormItem title="Email">
 *    {...}
 *  </FormItem>
 * </FormSection>
 * ```
 */
export type FormSection = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<FormSectionProps>> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, React.PropsWithChildren<FormSectionProps>>;
};
