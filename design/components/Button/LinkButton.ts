import type React from "react";
import type { TextVariant } from "../../../packages/tokens/typography/TextVariants";
import type { TextProps } from "../Text";
import type { FocusRingProps } from "react-focus-rings";

interface IconProps {
  /**
   * The color of the icon.
   */
  color?: string;

  /**
   * The size of the icon.
   */
  size?: string;
}

export interface LinkButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    Pick<TextProps, "lineClamp"> {
  /**
   * The visual style of the button.
   * @default "default"
   */
  variant?: "default" | "white" | "primary" | "destructive" | "link";

  /**
   * The text variant to use for the button's text.
   * @default "text-sm/medium"
   */
  textVariant?: TextVariant;

  /**
   * The text content of the button.
   */
  text?: React.ReactNode;

  /**
   * The icon to display alongside the text.
   */
  icon?: React.ElementType<IconProps>;

  /**
   * The position of the icon relative to the text.
   * @default "end"
   */
  iconPosition?: "start" | "end";

  /**
   * Whether the button should behave as an external link.
   * @default false
   */
  external?: boolean;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;
}

/**
 * A button component styled to look like a link.
 * @example
 * ```tsx
 * <LinkButton
 *   variant="primary"
 *   text="Click Me"
 *   icon={ArrowSmallRightIcon}
 *   iconPosition="start"
 *   onClick={() => console.log("Button clicked!")}
 * />
 *
 * <LinkButton
 *   variant="link"
 *   text="External Link"
 *   external
 *   href="https://example.com"
 * />
 * ```
 */
export type LinkButton = React.FC<LinkButtonProps>;
