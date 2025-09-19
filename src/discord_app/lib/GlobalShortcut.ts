import type EventEmitter from "events";

import type { KeyCombo } from "@app/modules/keyboard_shortcuts/web/KeyRecorder";

/**
 * Global keyboard shortcut recorder and manager that captures system-wide input events.
 * Emits "change" events when the recorded key combination is modified.
 * @example
 * ```tsx
 * // Create a new shortcut recorder
 * const recorder = new GlobalShortcut();
 *
 * // Listen for changes
 * recorder.on("change", (shortcut) => {
 *   console.log("New combo:", shortcut.toString());
 *   console.log("Raw combo:", shortcut.combo);
 * });
 *
 * // Clean up when done
 * recorder.destroy();
 * ```
 */
export declare class GlobalShortcut extends EventEmitter {
  public constructor();

  /**
   * The current recorded key combination as an array of input events.
   */
  public combo: KeyCombo;

  /**
   * Cleans up the shortcut recorder and removes all event listeners.
   */
  public destroy: () => void;

  /**
   * Returns a human-readable string representation of the current key combination.
   */
  public toString: () => string;

  /**
   * Internal event handler that processes raw input events from the system.
   * @param type The type of input event.
   * @param state The event state.
   * @param code The key or button code.
   */
  private _handleEvent: (type: number, state: number, code: number) => void;
}
