import type * as React from "react";

export interface KeyComboProps {
  /**
   * The shortcut to display.
   */
  shortcut: string | string[];

  /**
   * Whether the combo should be dimmed.
   * @default false
   */
  dim?: boolean;

  /**
   * The class name applied to the key combo.
   */
  className?: string;

  /**
   * The class name applied to each key.
   */
  keyClassName?: string;
}

/**
 * Displays a keyboard shortcut.
 * @example
 * ```jsx
 * <KeyCombo shortcut="mod+alt+return" />
 * ```
 */
export type KeyCombo = React.FC<KeyComboProps>;
