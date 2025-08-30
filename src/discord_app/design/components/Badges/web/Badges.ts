import type * as React from "react";

/**
 * Shape variants available for badges.
 */
export type BadgeShapes = Record<"ROUND" | "ROUND_LEFT" | "ROUND_RIGHT" | "SQUARE", string>;

/**
 * Calculates the width of a number badge based on its value.
 * @param value The number to display.
 * @returns Width in pixels (16px for <10, 22px for <100, 30px for >=100).
 */
export type GetBadgeWidthForValue = (value: number) => number;

/**
 * Formats a number for display in a badge (e.g. 1000 -> "1k+").
 * @param value The number to format.
 * @returns Formatted string.
 */
export type GetBadgeCountString = (value: number) => string;

export interface NumberBadgeProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * Numerical value to display in the badge.
   */
  count: number;

  /**
   * Background color of the badge.
   * @default ThemeColors.STATUS_DANGER
   */
  color?: string;

  /**
   * Whether to disable the background color
   * @default false
   */
  disableColor?: boolean;

  /**
   * Shape variant of the badge.
   * @default BadgeShapes.ROUND
   * @see {@link BadgeShapes}
   */
  shape?: string;

  /**
   * Render prop for customizing the badge count display.
   */
  renderBadgeCount?: (count: number) => React.ReactNode;
}

/**
 * A badge that displays a number with automatic formatting.
 */
export type NumberBadge = React.FC<NumberBadgeProps>;

export interface TextBadgeProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * Text content to display.
   */
  text?: React.ReactNode;

  /**
   * Background color of the badge.
   * @default ThemeColors.STATUS_DANGER
   */
  color?: string;

  /**
   * Shape variant of the badge.
   * @default BadgeShapes.ROUND
   * @see {@link BadgeShapes}
   */
  shape?: string;

  /**
   * Whether to disable the background color.
   * @default false
   */
  disableColor?: boolean;
}

/**
 * A badge that displays text content.
 */
export type TextBadge = React.FC<TextBadgeProps>;

export type PremiumBadgeProps = TextBadgeProps;

/**
 * A specialized {@link TextBadge} for premium content.
 */
export type PremiumBadge = React.FC<PremiumBadgeProps>;

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

export interface IconBadgeProps {
  /**
   * The icon to display in the badge.
   */
  icon: React.ComponentType<IconProps>;

  /**
   * The class name applied to the badge.
   */
  className?: string;

  /**
   * Background color of the badge.
   * @default ThemeColors.STATUS_DANGER
   */
  color?: string;

  /**
   * Shape variant of the badge.
   * @default BadgeShapes.ROUND
   * @see {@link BadgeShapes}
   */
  shape?: string;

  /**
   * Whether to disable the background color.
   * @default false
   */
  disableColor?: boolean;

  /**
   * The styles applied to the badge.
   */
  style?: React.CSSProperties;
}

/**
 * A badge that displays an icon.
 */
export type IconBadge = React.FC<IconBadgeProps>;

export interface CircleBadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Background color of the badge.
   * @default ThemeColors.INTERACTIVE_ACTIVE
   */
  color?: string;

  /**
   * Shape variant of the badge.
   * @default BadgeShapes.ROUND
   * @see {@link BadgeShapes}
   */
  shape?: string;

  /**
   * Whether to disable the background color.
   * @default false
   */
  disableColor?: boolean;
}

/**
 * A simple circular badge indicator.
 */
export type CircleBadge = React.FC<CircleBadgeProps>;
