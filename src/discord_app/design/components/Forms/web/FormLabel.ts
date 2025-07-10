import type { Text } from "@app/design/web";
import type * as React from "react";

export type FormLabelProps<T extends keyof React.JSX.IntrinsicElements = "div"> = Text<T> & {
  /**
   * Whether the label is displayed as disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether an asterisk (*) is displayed next to the label to indicate that the content following the label is required.
   * @default false
   */
  required?: boolean;
};

/**
 * A text label for a form.
 * @template T The HTML tag to use for the text.
 * @example
 * ```tsx
 * <FormLabel>Title of the form</FormLabel>
 * ```
 */
export type FormLabel = <T extends keyof React.JSX.IntrinsicElements = "div">(
  props: React.PropsWithChildren<FormLabelProps<T>>,
) => React.ReactNode;
