import type React from "react";
import type { TextVariant } from "../../tokens/typography/TextVariants";

export type TextProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    /**
     * The variant of the text.
     * @see {@link TextVariant}
     */
    variant?: TextVariant;

    /**
     * The HTML tag to use for the text.
     * @default "div"
     */
    tag?: T;

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
  };

// TODO: Try to find a way to make the generic working.

/**
 * Displays text content with various styling options.
 * @template T The HTML tag to use for the text.
 * @example
 * ```tsx
 * <Text variant="text-sm/medium" color="header-secondary">
 *   This is a small text with medium weight and a secondary color.
 * </Text>
 * ```
 */
export type Text<T extends keyof JSX.IntrinsicElements = "div"> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<TextProps<T>>> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, React.PropsWithChildren<TextProps<T>>>;
};
