export interface HSLRaw {
  /**
   * Hue (0-360).
   */
  h: number;

  /**
   * Saturation (0-100).
   */
  s: number;

  /**
   * Lightness (0-100).
   */
  l: number;
}

/**
 * Converts a hexadecimal color string to an integer representation.
 * @param hex The hexadecimal color string.
 * @returns Integer representation of the color.
 * @example
 * ```ts
 * hex2int("#ff0000"); // 16711680 (red)
 * hex2int("#00ff00"); // 65280 (green)
 * hex2int("#0000ff"); // 255 (blue)
 * hex2int("000000"); // 0 (black)
 * ```
 */
export type Hex2Int = (hex: string) => number;

/**
 * Converts an integer color value to hexadecimal string representation.
 * @param colorInt The integer color value to convert.
 * @returns Hexadecimal color string with # prefix.
 * @example
 * ```ts
 * int2hex(16711680); // "#ff0000" (red)
 * int2hex(65280); // "#00ff00" (green)
 * int2hex(255); // "#0000ff" (blue)
 * int2hex(0); // "#000000" (black)
 * ```
 */
export type Int2Hex = (colorInt: number) => string;

/**
 * Converts an integer color to HSL values as raw numeric object.
 * @param colorInt The integer color value to convert
 * @returns Object with hue, saturation, and lightness properties.
 * @example
 * ```ts
 * int2hslRaw(16711680); // { h: 0, s: 100, l: 50 } (red)
 * int2hslRaw(65280); // { h: 120, s: 100, l: 50 } (green)
 * int2hslRaw(255); // { h: 240, s: 100, l: 50 } (blue)
 * int2hslRaw(0); // { h: 0, s: 0, l: 0 } (black)
 * ```
 */
export type Int2HslRaw = (colorInt: number) => HSLRaw;

/**
 * Converts an integer color to HSL CSS string with optional saturation factor and alpha.
 * @param colorInt The integer color value to convert.
 * @param useSaturationFactor Whether to use CSS custom property for saturation.
 * @param saturationMultiplier Custom saturation multiplier (0-1).
 * @param alpha Alpha transparency value (0-1).
 * @returns HSL or HSLA CSS color string.
 * @example
 * ```ts
 * int2hsl(16711680); // "hsla(0, 100%, 50%, 1)" (red)
 * int2hsl(16711680, true); // "hsla(0, calc(var(--saturation-factor, 1) * 100%), 50%, 1)"
 * int2hsl(16711680, false, null, 0.5); // "hsla(0, 100%, 50%, 0.5)" (semi-transparent red)
 * ```
 */
export type Int2Hsl = (
  colorInt: number,
  useSaturationFactor?: boolean,
  saturationMultiplier?: number | null,
  alpha?: number,
) => string;

/**
 * Converts a hexadecimal color string to RGB CSS string with optional alpha.
 * @param hex The hexadecimal color string to convert.
 * @param alpha Alpha transparency value (0-1).
 * @returns RGB or RGBA CSS color string.
 * @example
 * ```ts
 * hex2rgb("#ff0000"); // "rgb(255, 0, 0)" (red)
 * hex2rgb("#00ff00", 0.5); // "rgba(0, 255, 0, 0.5)" (semi-transparent green)
 * ```
 */
export type Hex2Rgb = (hex: string, alpha?: number | null) => string | null;

/**
 * Converts an integer color to RGBA CSS string with optional alpha override.
 * @param colorInt The integer color value to convert.
 * @param alpha Alpha override (0-1), uses embedded alpha if not provided.
 * @returns RGBA CSS color string.
 * @example
 * ```ts
 * int2rgba(16711680); // "rgba(255, 0, 0, 1)" (red)
 * int2rgba(16711680, 0.5); // "rgba(255, 0, 0, 0.5)" (semi-transparent red)
 * int2rgba(65280, 0.8); // "rgba(0, 255, 0, 0.8)" (semi-transparent green)
 * ```
 */
export type Int2Rgba = (colorInt: number, alpha?: number) => string;

/**
 * Calculates the darkness value of a color using weighted RGB luminance.
 * @param color The integer color value to analyze.
 * @returns Darkness value from 0 (bright) to 1 (dark).
 * @example
 * ```ts
 * getDarkness(0x000000); // ~1.0 (black is very dark)
 * getDarkness(0xffffff); // ~0.0 (white is not dark)
 * getDarkness(0xff0000); // ~0.701 (red is moderately dark)
 * getDarkness(0x808080); // ~0.5 (gray is medium darkness)
 *
 * // Usage for text color selection
 * const textColor = getDarkness(backgroundColor) > 0.5 ? "#ffffff" : "#000000";
 * ```
 */
export type GetDarkness = (color: number) => number;

/**
 * Returns whether a string is a valid hexadecimal color format.
 * @param hex The string to validate as hex color.
 */
export type IsValidHex = (hex: string) => boolean;

/**
 * Converts an integer color to RGB component array.
 * @param colorInt The integer color value to convert.
 * @returns Array of [red, green, blue] values (0-255).
 * @example
 * ```ts
 * int2rgbArray(16711680); // [255, 0, 0] (red)
 * int2rgbArray(65280); // [0, 255, 0] (green)
 * int2rgbArray(255); // [0, 0, 255] (blue)
 * int2rgbArray(0); // [0, 0, 0] (black)
 * ```
 */
export type Int2RgbArray = (colorInt: number) => [number, number, number];

/**
 * Calculates the relative luminance of RGB color components.
 * @param r Red component (0-255).
 * @param g Green component (0-255).
 * @param b Blue component (0-255).
 * @returns Relative luminance value (0-1).
 * @example
 * ```ts
 * getLuminance(255, 255, 255); // ~1.0 (white)
 * getLuminance(0, 0, 0); // 0.0 (black)
 * getLuminance(255, 0, 0); // ~0.2126 (red)
 * ```
 */
export type GetLuminance = (r: number, g: number, b: number) => number;

/**
 * Calculates the contrast ratio between two colors for accessibility compliance.
 * @param color1 First integer color value.
 * @param color2 Second integer color value.
 * @returns Contrast ratio (1-21) where higher values indicate better contrast.
 * @example
 * ```ts
 * getContrast(0x000000, 0xffffff); // 21 (black on white - maximum contrast)
 * getContrast(0xffffff, 0xffffff); // 1 (white on white - no contrast)
 * getContrast(0xff0000, 0x00ff00); // ~2.9 (red on green)
 * ```
 */
export type GetContrast = (color1: number, color2: number) => number;
