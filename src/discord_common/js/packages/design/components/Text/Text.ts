import type { TEXT_VARIANT } from "@discordapp/tokens/typography/generated/TextVariants";
import type * as React from "react";

export interface TextProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * The variant of the text.
   * @see {@link TEXT_VARIANT}
   */
  variant?: TEXT_VARIANT;

  /**
   * The HTML tag to use for the text.
   * @default "div"
   */
  tag?: keyof React.JSX.IntrinsicElements;

  /**
   * Whether the text is selectable.
   * @default false
   */
  selectable?: boolean;

  /**
   * The maximum number of lines to display before truncating the text.
   */
  lineClamp?: number;

  /**
   * Whether to use tabular numbers.
   * @default false
   */
  tabularNumbers?: boolean;

  /**
   * Whether to scale the font to the user's settings.
   * @default false
   */
  scaleFontToUserSetting?: boolean;
}

/**
 * Displays text content with various styling options.
 * @example
 * ```tsx
 * <Text variant="text-sm/medium" color="header-secondary">
 *   This is a small text with medium weight and a secondary color.
 * </Text>
 * ```
 */
export type Text = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<TextProps>> & React.RefAttributes<HTMLElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLElement, React.PropsWithChildren<TextProps>>;
};
