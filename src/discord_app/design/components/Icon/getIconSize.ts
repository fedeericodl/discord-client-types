import type { IconSize } from "./IconSize";

interface IconDimensions {
  /**
   * Width of the icon in pixels.
   */
  width: number;

  /**
   * Height of the icon in pixels.
   */
  height: number;
}

/**
 * Function that returns the width and height of an icon for the given size.
 * @param size The size of the icon.
 * @returns The width and height of the icon, or null if the size is not recognized.
 */
export type GetIconSize = (size: keyof IconSize) => IconDimensions | null;
