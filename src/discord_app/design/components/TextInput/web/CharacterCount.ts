import type * as React from "react";

export interface CharacterCountProps {
  /**
   * The current value of the text input.
   */
  value?: string;

  /**
   * The maximum length of the text input.
   */
  maxLength?: number;
}

/**
 * A component that displays the character count of a text input.
 */
export type CharacterCount = React.FC<CharacterCountProps>;
