import type * as React from "react";

export interface DnDKeyboardHelpBarProps {
  /**
   * The class name applied to the help bar container.
   */
  className?: string;
}

/**
 * Help bar component displaying keyboard shortcuts for drag and drop operations.
 */
export type DnDKeyboardHelpBar = React.FC<DnDKeyboardHelpBarProps>;
