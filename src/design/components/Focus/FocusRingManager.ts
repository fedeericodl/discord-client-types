/**
 * Manages the state and behavior of focus rings within the application.
 * @see {@link https://github.com/discord/focus-rings Focus Rings}
 */
export interface FocusRingManager {
  /**
   * Initializes the `FocusRingManager` by setting up a change listener on the `AccessibilityStore`.
   * This listener toggles focus ring visibility and animation tracking based on the keyboard mode status.
   */
  init: () => void;
}
