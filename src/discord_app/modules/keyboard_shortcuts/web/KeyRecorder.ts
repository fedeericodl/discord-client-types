import type * as React from "react";

export type KeyCombo = [number, number, string][];

type Modes = "DEFAULT" | "RECORDING";

export type RecordModes = {
  [K in Modes]: K;
};

export interface KeyRecorderProps {
  /**
   * The mode of the recorder.
   * @see {@link Modes RecordModes}
   */
  mode: Modes;

  /**
   * The key combination value.
   */
  value: KeyCombo;

  /**
   * Whether the recorder is disabled.
   */
  disabled?: boolean;

  /**
   * Function to register native recorder functionality.
   */
  registerNativeRecorder?: (elementId: string, callback: (combo: KeyCombo) => void) => () => void;

  /**
   * Event handler called when a key combination is selected.
   */
  onChange?: (combo: KeyCombo) => void;

  /**
   * Event handler called when the recorder button is clicked.
   */
  onClick?: () => void;

  /**
   * Whether to disable click handling while recording.
   */
  disableOnClickWhileRecording?: boolean;
}

/**
 * A component that records keyboard combinations for use as shortcuts or keybinds.
 */
export declare class KeyRecorder extends React.PureComponent<KeyRecorderProps> {
  /**
   * Unique ID for the input element.
   * @private
   */
  private _inputId: string;

  /**
   * Function to unregister native recorder.
   * @private
   */
  private _unregisterNativeRecorder: (() => void) | null;

  /**
   * Mode when mouse down event occurred.
   * @private
   */
  private _mousedownMode: Modes | null;

  /**
   * The ref to the input element.
   * @private
   */
  private _inputRef: React.RefObject<HTMLInputElement>;

  /**
   * The ref to the container element.
   * @private
   */
  private _containerRef: React.RefObject<HTMLDivElement>;

  /**
   * Sets up the input ref and binds event handlers.
   */
  public setInputRef: React.RefCallback<HTMLInputElement>;

  /**
   * Event handler called when the recorder button is clicked.
   */
  public handleClick: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when the mouse is down on the recorder button.
   */
  public handleMouseDown: () => void;
}
