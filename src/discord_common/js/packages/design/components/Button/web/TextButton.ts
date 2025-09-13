import type { TEXT_VARIANT } from "@discordapp/tokens/typography/generated/TextVariants";
import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export type TextButtonVariant = "primary" | "secondary" | "always-white" | "critical";

export interface TextButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * The number of lines to which the text should be clamped.
   * @default 1
   */
  lineClamp?: number;

  /**
   * The text to display inside the text button.
   */
  text?: React.ReactNode;

  /**
   * The variant of the text in the text button.
   * @default "text-md/medium"
   * @see {@link TEXT_VARIANT}
   */
  textVariant?: TEXT_VARIANT;

  /**
   * The variant of the text button.
   * @default "primary"
   * @see {@link TextButtonVariant}
   */
  variant?: TextButtonVariant;
}

/**
 * A button component with text only.
 * @example
 * ```tsx
 * <TextButton onClick={() => console.log("Pressed!")} text="Click me!" />
 * ```
 */
export type TextButton = React.FC<TextButtonProps>;
