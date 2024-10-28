import type React from "react";

//? Maybe get raw values from accessibility store

export interface ReducedMotionContextValue {
  /**
   * Whether reduced motion is enabled.
   */
  enabled: boolean;

  /**
   * The raw value of the reduced motion preference.
   */
  rawValue: "auto" | "no-preference" | "reduce";
}

export interface ForcedColorsContextValue {
  /**
   * Whether forced colors are enabled.
   */
  enabled: boolean;

  /**
   * The raw value of the forced colors preference.
   */
  rawValue: "active" | "none";
}

export interface AccessibilityPreferencesContextValue {
  /**
   * Represents the user's preference for reduced motion.
   * Used to determine whether animations and transitions should be minimized or disabled.
   */
  reducedMotion: ReducedMotionContextValue;

  /**
   * Indicates whether the user prefers crossfade transitions.
   */
  prefersCrossfades: boolean;

  /**
   * Represents the user's preference for forced colors.
   * Used to determine whether a high-contrast color scheme should be enforced.
   */
  forcedColors: ForcedColorsContextValue;

  /**
   * Indicates whether link decorations (such as underlines) should always be shown.
   */
  alwaysShowLinkDecorations: boolean;
}

/**
 * A React context that holds the accessibility preferences.
 */
export type AccessibilityPreferencesContext = React.Context<AccessibilityPreferencesContextValue>;
