import type * as React from "react";

export interface BadgePlainTextType {
  /**
   * The text to display in the badge.
   */
  text: string;
}

export type BadgeType = "new" | "beta" | "early_access" | "free_trial" | BadgePlainTextType;

/**
 * Normalizes the badge type to a consistent format.
 */
export type NormalizeBadgeType = (type: BadgeType) => Pick<BadgeProps, "type">;
// unknown name

export interface BadgeProps {
  /**
   * The type of badge to display.
   */
  type: BadgeType;

  /**
   * The variant of the badge to display.
   * @default "default"
   */
  variant?: "default" | "expressive";
}

/**
 * A badge component to display a small label.
 * @example
 * ```tsx
 * <Badge type="new" />
 * <Badge type={{ text: "Custom" }} />
 * ```
 */
export type Badge = React.FC<BadgeProps>;
