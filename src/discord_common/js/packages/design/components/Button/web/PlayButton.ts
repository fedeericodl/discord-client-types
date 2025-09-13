import type * as React from "react";

import type { BaseButtonProps } from "./BaseButton";

export interface PlayButtonProps
  extends Omit<BaseButtonProps, "icon" | "variant" | "fullWidth" | "rounded"> {
  /**
   * Whether the play button is in a playing state.
   */
  playing?: boolean;
}

/**
 * A button that displays a play icon, which can toggle to a pause icon when in a playing state.
 * @example
 * ```tsx
 * const [playing, setPlaying] = React.useState(false);
 *
 * <PlayButton onClick={() => setPlaying(!playing)} playing={playing} />
 * ```
 */
export type PlayButton = React.FC<PlayButtonProps>;
