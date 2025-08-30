import type * as React from "react";

export type FormErrorBlockColors = Record<
  "RED" | "BACKGROUND_TERTIARY" | "BACKGROUND_ACCENT",
  string
>;

interface IconProps {
  /**
   * The class name applied to the icon.
   */
  className?: string;

  /**
   * The color of the icon.
   */
  color?: string;
}

export interface FormErrorBlockProps {
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
   * @default FormErrorBlockColors.RED
   * @see {@link FormErrorBlockColors}
   */
  backgroundColor?: string;

  /**
   * The icon to be displayed in the error block.
   * @default CircleErrorIcon
   */
  icon?: React.ComponentType<IconProps>;

  /**
   * The class name applied to the icon.
   */
  iconClassName?: string;
}

/**
 * Displays an error block to be used in forms.
 * @example
 * ```tsx
 * <FormErrorBlock>This is a generic error.</FormErrorBlock>
 * ```
 */
export type FormErrorBlock = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<FormErrorBlockProps>> &
    React.RefAttributes<HTMLDivElement>
> & {
  render: React.ForwardRefRenderFunction<
    HTMLDivElement,
    React.PropsWithChildren<FormErrorBlockProps>
  >;
};
