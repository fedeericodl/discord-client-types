import type * as React from "react";

export interface JumpSectionHTMLAttributes {
  ["data-jump-section"]: string;
}

/**
 * Hook that provides the data attribute needed for focus jumping.
 */
export type UseFocusJumpSection = () => JumpSectionHTMLAttributes;

export interface FocusJumpSectionProps {
  /**
   * Render prop that receives the focus jump section attributes.
   */
  children: (jumpSectionProps: JumpSectionHTMLAttributes) => React.ReactNode;
}

/**
 * Component for enabling focus jumping functionality.
 * @example
 * ```tsx
 * <FocusJumpSection>
 *   {(jumpSectionProps) => (
 *     <main {...jumpSectionProps}>
 *       <h1>Main Content</h1>
 *       <p>This content area can be navigated to using F6</p>
 *     </main>
 *   )}
 * </FocusJumpSection>
 * ```
 */
export type FocusJumpSection = React.FC<FocusJumpSectionProps>;

/**
 * Hook that manages global focus jumping behavior.
 *
 * Sets up and tears down the global keyboard event listener that handles
 * F6 key presses for focus section jumping. When enabled, listens for
 * the focus section jump key and handles navigation between sections.
 * @param enabled Whether to enable the focus jumping behavior
 */
export type UseFocusJumpSectionManager = (enabled?: boolean) => void;
