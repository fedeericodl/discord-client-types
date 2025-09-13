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
export type GetIconSize = (size: keyof ICON_SIZE) => IconDimensions | null;

export interface ICON_SIZE {
  /**
   * Extra extra small icon size in pixels.
   */
  xxs: number;

  /**
   * Extra small icon size in pixels.
   */
  xs: number;

  /**
   * Small icon size in pixels.
   */
  sm: number;

  /**
   * Medium icon size in pixels.
   */
  md: number;

  /**
   * Large icon size in pixels.
   */
  lg: number;

  /**
   * Custom icon size, undefined by default.
   */
  custom: undefined;

  /**
   * Refresh small icon size in pixels.
   */
  refresh_sm: number;
}
