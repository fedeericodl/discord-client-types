import type { TextVariant } from "@discordapp/tokens/typography/generated/TextVariants";
import type * as React from "react";

export enum HelpMessageTypes {
  WARNING,
  INFO,
  ERROR,
  POSITIVE,
  PREVIEW,
}

export interface HelpMessageProps {
  /**
   * The content to display in the help message.
   */
  children: React.ReactNode;

  /**
   * The type of the message. This determines the icon and color of the message.
   * @see {@link HelpMessageTypes}
   */
  messageType: HelpMessageTypes;

  /**
   * The class name applied to the help message.
   */
  className?: string;

  /**
   * The color of the text in the help message.
   * @default "text-normal"
   */
  textColor?: string;

  /**
   * The variant of the text in the help message.
   * @default "text-sm/medium"
   */
  textVariant?: TextVariant;
}

/**
 * Displays a help message with an icon representing its given type.
 * @example
 * ```tsx
 * <HelpMessage messageType={HelpMessageTypes.INFO}>
 *   This is an info message.
 * </HelpMessage>
 * ```
 */
export type HelpMessage = React.FC<HelpMessageProps>;
