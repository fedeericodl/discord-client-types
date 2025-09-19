import type * as React from "react";

import type { GlobalShortcut } from "@app/lib/GlobalShortcut";
import type { KeyCombo, RecordModes } from "@app/modules/keyboard_shortcuts/web/KeyRecorder";

export interface KeybindRecorderProps {
  /**
   * The default key combination value.
   */
  defaultValue?: KeyCombo;

  /**
   * Event handler called when the key combination changes.
   */
  onChange?: (combo: KeyCombo) => void;

  /**
   * Whether the recorder is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface KeybindRecorderState {
  /**
   * The current key combination codes.
   */
  codes: KeyCombo;

  /**
   * The current mode of the recorder.
   */
  mode: keyof RecordModes;
}

/**
 * A component that records keyboard combinations for use as shortcuts or keybinds.
 * @example
 * ```tsx
 * <KeybindRecorder
 *   onChange={(combo) => console.log("New combination:", combo)}
 *   defaultValue={[[1, 65, 0]]} // Represents 'A' key
 * />
 * ```
 */
export declare class KeybindRecorder extends React.PureComponent<
  KeybindRecorderProps,
  KeybindRecorderState
> {
  /**
   * The ref to the input element.
   * @private
   */
  // ? This is never assigned, should be a HTMLInputElement
  private _input: undefined;

  /**
   * Instance to the global shortcut recorder.
   */
  public gs: GlobalShortcut | undefined;

  /**
   * Whether the component is mounted.
   * @private
   */
  private _mounted: boolean;

  /**
   * Starts recording key combinations.
   */
  public recordStart: () => void;

  /**
   * Stops recording key combinations.
   */
  public recordEnd: () => void;

  /**
   * Toggles between recording and default modes.
   */
  public toggleRecordMode: () => void;

  /**
   * Handles keyboard combination changes.
   */
  public handleComboKeys: (combo: KeyCombo, keys: number[], event: KeyboardEvent) => void;

  /**
   * Handles global shortcut changes.
   */
  public handleGSChange: (gs: GlobalShortcut) => void;

  /**
   * Handles native input changes.
   */
  public handleNativeChange: (combo: KeyCombo) => void;

  /**
   * Cleans up resources when the component is unmounted.
   */
  public cleanUp: () => void;

  /**
   * Handles changes to the key combination.
   */
  public handleComboChange: (combo: KeyCombo) => void;
}
