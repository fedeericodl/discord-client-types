import type { Theme } from "../../../packages/shared/config/colors/ThemeTypes";

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

/**
 * Returns the class name for the given theme.
 * @param theme The theme to get the class name for.
 */
export type GetThemeClass = (theme: Theme | undefined) => string | undefined;
