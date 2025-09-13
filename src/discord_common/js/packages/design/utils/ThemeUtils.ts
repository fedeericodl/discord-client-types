import type { Theme } from "../shared/ThemeTypes";

/**
 * Returns whether the given theme is light.
 * @param theme The theme to check.
 */
export type IsThemeLight = (theme: Theme) => boolean;

/**
 * Returns whether the given theme is dark. Considers various dark theme types.
 * @param theme The theme to check.
 */
export type IsThemeDark = (theme: Theme) => boolean;
