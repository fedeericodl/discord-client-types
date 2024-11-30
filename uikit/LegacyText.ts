import type React from "react";

export type Colors = Record<
  | "STANDARD"
  | "MUTED"
  | "ERROR"
  | "BRAND"
  | "LINK"
  | "HEADER_PRIMARY"
  | "HEADER_SECONDARY"
  | "STATUS_YELLOW"
  | "STATUS_GREEN"
  | "STATUS_RED"
  | "INTERACTIVE_ACTIVE"
  | "INTERACTIVE_NORMAL"
  | "ALWAYS_WHITE"
  | "CUSTOM",
  string
>;

export type Sizes = Record<
  "SIZE_10" | "SIZE_12" | "SIZE_14" | "SIZE_16" | "SIZE_20" | "SIZE_24" | "SIZE_32",
  string
>;

export type LegacyTextProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    /**
     * The color of the text.
     * @default LegacyText.Colors.STANDARD
     * @see {@link Colors}
     */
    color?: string;

    /**
     * The size of the text.
     * @default LegacyText.Sizes.SIZE_14
     * @see {@link Sizes}
     */
    size?: string;

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
     * Whether the text is strong.
     * @default false
     */
    strong?: boolean;
  };

/**
 * Displays text content with various styling options.
 * @deprecated Use `Text` instead.
 * @template T The HTML tag to use for the text.
 * @example
 * ```tsx
 * <LegacyText size={LegacyText.Sizes.SIZE_20} color={LegacyText.Colors.HEADER_SECONDARY}>
 *  This is a text of size 20 and with a secondary color.
 * </LegacyText>
 * ```
 */
export type LegacyText = (<T extends keyof JSX.IntrinsicElements = "div">(
  props: React.PropsWithChildren<LegacyTextProps<T>>,
) => React.ReactNode) & {
  Colors: Colors;
  Sizes: Sizes;
};
