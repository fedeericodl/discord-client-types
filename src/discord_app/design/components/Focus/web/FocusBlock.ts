import type * as React from "react";

/**
 * Hook that manages focus blocking for a container element.
 * Temporarily disables tab navigation for all focusable elements within the container.
 * @param ref Ref to the container element.
 * @param enabled Whether focus blocking is enabled.
 */
export type UseFocusBlock = (ref: React.RefObject<HTMLDivElement>, enabled: boolean) => void;

export interface FocusBlockProps {
  /**
   * The class name applied to the focus block.
   */
  className?: string;

  /**
   * Whether the focus block is enabled.
   */
  enabled?: boolean;
}

/**
 * A component that prevents focus from reaching its child elements.
 */
export type FocusBlock = React.FC<React.PropsWithChildren<FocusBlockProps>>;
