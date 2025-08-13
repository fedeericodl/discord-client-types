import type * as React from "react";

export type FormTextTypes = Record<
  | "DEFAULT"
  | "INPUT_PLACEHOLDER"
  | "DESCRIPTION"
  | "LABEL_BOLD"
  | "LABEL_SELECTED"
  | "LABEL_DESCRIPTOR"
  | "ERROR"
  | "SUCCESS",
  string
>;

export interface FormTextProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The type of the text, which determines its appearance.
   * @default FormText.Types.DEFAULT
   * @see {@link FormTextTypes}
   */
  type?: string;

  /**
   * Whether the text is displayed as disabled.
   */
  disabled?: boolean;

  /**
   * Whether the text is selectable. Only applicable when `disabled` prop is false.
   */
  selectable?: boolean;
}

/**
 * A text component for forms.
 * @example
 * ```tsx
 * <FormText type={FormText.Types.DESCRIPTION}>This is a description.</FormText>
 * ```
 */
export type FormText = React.FC<React.PropsWithChildren<FormTextProps>> & {
  Types: FormTextTypes;
};
