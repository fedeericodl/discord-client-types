export enum ThemeContextFlags {
  MOBILE_DARK_GRADIENT_THEME_ENABLED = 4,
  MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8,
  REDUCED_CONTRAST_ENABLED = 16,
  INCREASED_CONTRAST_ENABLED = 32,
  REDUCE_SATURATION_ENABLED = 64,
}

/**
 * Sets a theme flag.
 * @param flag The current flags value.
 * @param flagToSet The flag to set.
 * @returns The updated flags value.
 */
export type SetThemeFlag = (flag: number, flagToSet: ThemeContextFlags) => number;
