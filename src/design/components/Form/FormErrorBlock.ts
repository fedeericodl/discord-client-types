import type React from "react";

export type FormErrorBlockColors = Record<
  "RED" | "BACKGROUND_TERTIARY" | "BACKGROUND_ACCENT",
  string
>;

export interface FormErrorBlockProps {
  /**
   * The role attribute for the element containing the text.
   */
  role?: string;

  /**
   * The class name applied to the error block.
   */
  className?: string;

  /**
   * Event handler called when the error block is dismissed. If provided, a close button will be shown.
   */
  onDismiss?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * The background color of the error block.
   *
   * @default FormErrorBlockColors.RED
   *
   * @see {@link FormErrorBlockColors}
   */
  backgroundColor?: string;

  /**
   * The icon to be displayed in the error block.
   *
   * @default WarningCircle
   */
  icon?: React.ComponentType;

  /**
   * The class name applied to the icon.
   */
  iconClassName?: string;
}

/**
 * Displays an error block to be used in forms.
 *
 * @example
 * ```tsx
 * <FormErrorBlock>This is a generic error.</FormErrorBlock>
 * ```
 */
export type FormErrorBlock = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<FormErrorBlockProps>> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, React.PropsWithChildren<FormErrorBlockProps>>;
};
