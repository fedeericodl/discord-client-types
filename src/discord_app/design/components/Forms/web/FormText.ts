import type * as React from "react";

type Types = "default" | "description";

export type FormTextTypes = {
  [K in Types as Uppercase<K>]: K;
};

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
