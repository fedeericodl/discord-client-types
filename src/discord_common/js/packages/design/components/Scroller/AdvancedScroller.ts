import type { CreateAdvancedScroller } from "./factories/createAdvancedScroller";

/**
 * An `AdvancedScroller` component without the scrollbar.
 */
export type AdvancedScrollerNone = ReturnType<CreateAdvancedScroller>;

/**
 * An `AdvancedScroller` component with thin scrollbars.
 */
export type AdvancedScrollerThin = ReturnType<CreateAdvancedScroller>;

/**
 * An `AdvancedScroller` component with the auto scrollbar size.
 */
export type AdvancedScrollerAuto = ReturnType<CreateAdvancedScroller>;
