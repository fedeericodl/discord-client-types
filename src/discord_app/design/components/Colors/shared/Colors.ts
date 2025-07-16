import type { Color } from "chroma-js";

/**
 * WCAG (Web Content Accessibility Guidelines) contrast ratio standards.
 * These ratios define minimum contrast requirements for different content types.
 */
export interface WCAGContrastRatios {
  /**
   * Minimum contrast ratio for non-text elements (3:1).
   */
  NonText: number;

  /**
   * Minimum contrast ratio for normal text (4.5:1).
   */
  Text: number;

  /**
   * Minimum contrast ratio for high contrast text (7:1).
   */
  HighContrastText: number;
}

export interface ContrastOptions {
  /**
   * Target contrast ratio to achieve.
   */
  contrastRatio?: number;

  /**
   * Tolerance range around the target contrast ratio.
   */
  tolerance?: number;

  /**
   * Base color to calculate contrast against.
   */
  base?: string | number | Color;
}

/**
 * Adjusts a color to meet a specific contrast ratio against a base color.
 * Uses an iterative approach to brighten or darken the color until the target contrast is achieved.
 * @param color The color to adjust.
 * @param options Configuration options for contrast adjustment.
 * @returns An RGBA string of the adjusted color that meets the contrast requirements.
 * @example
 * ```ts
 * // Get a color that contrasts well with white background
 * const accessibleColor = getContrastingColor("#888888", {
 *   base: "#ffffff",
 *   contrastRatio: WCAGContrastRatios.Text
 * }); // "rgba(91, 91, 91, 1)"
 *
 * // Ensure good contrast for text on a dark background
 * const textColor = getContrastingColor("#cccccc", {
 *   base: "#333333",
 *   contrastRatio: WCAGContrastRatios.HighContrastText,
 *   tolerance: 1
 * }); // "rgba(204, 204, 204, 1)"
 *
 * // Use default settings (3:1 contrast ratio)
 * const defaultContrast = getContrastingColor("#ff6b6b"); // "rgba(143, 0, 26, 1)"
 * ```
 */
export type GetContrastingColor = (
  color: string | number | Color,
  options?: ContrastOptions,
) => string;

/**
 * Darkens a color by a specified amount.
 * @param color The color to darken.
 * @param factor The amount to darken the color (higher values = darker).
 * @returns An RGBA string of the darkened color.
 * @example
 * ```ts
 * // Darken a blue color
 * const darkerBlue = darkenColor("#4285f4", 1); // "rgba(0, 89, 193, 1)"
 *
 * // Slightly darken for hover effects
 * const buttonHover = darkenColor("#28a745", 0.5); // "rgba(0, 143, 46, 1)"
 * ```
 */
export type DarkenColor = (color: string | number | Color, f: number) => string;

/**
 * Brightens a color by a specified amount.
 * @param color The color to brighten.
 * @param factor The amount to brighten the color (higher values = brighter).
 * @returns An RGBA string of the brightened color.
 * @example
 * ```ts
 * // Brighten a dark color for better visibility
 * const lighterColor = brightenColor("#333333", 2); // "rgba(137, 137, 137, 1)"
 *
 * // Create a subtle highlight effect
 * const highlight = brightenColor("#dc3545", 0.3); // "rgba(237, 70, 82, 1)"
 * ```
 */
export type BrightenColor = (color: string | number | Color, f: number) => string;
