import type { TextProps } from "@discordapp/design/components/Text/web/Text";
import type * as React from "react";

export interface FormLabelProps extends TextProps {
  /**
   * Whether the label is displayed as disabled.
   */
  disabled?: boolean;

  /**
   * Whether an asterisk (*) is displayed next to the label to indicate that the content following the label is required.
   * @default false
   */
  required?: boolean;
}

/**
 * A text label for a form.
 * @example
 * ```tsx
 * <FormLabel>Title of the form</FormLabel>
 * ```
 */
export type FormLabel = React.FC<React.PropsWithChildren<FormLabelProps>>;
