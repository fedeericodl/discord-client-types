import type { useFocusLock } from "focus-layers";
import type * as React from "react";

/**
 * Hook to manage focus locking within a specific container element.
 * @see {@link https://github.com/discord/focus-layers Focus Layers}
 */
export type UseFocusLock = typeof useFocusLock;

export interface FocusLockProps {
  /**
   * The ref of the container element to lock focus within.
   */
  containerRef: React.RefObject<HTMLElement>;
}

/**
 * A component that locks focus within a specified container element.
 */
export type FocusLock = React.FC<React.PropsWithChildren<FocusLockProps>>;
