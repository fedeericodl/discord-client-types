import type * as React from "react";

/**
 * A map of key names to 'pretty' strings or React elements.
 */
export type PRETTY_KEYS = Record<
  "mod" | "alt" | "pageup" | "pagedown" | "any-character" | "plus" | "return",
  () => string
> &
  Record<"up" | "down" | "left" | "right", () => React.ReactElement>;

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
