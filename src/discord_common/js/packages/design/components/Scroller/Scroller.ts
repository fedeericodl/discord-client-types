import type { CreateScroller } from "./factories/createScroller";

/**
 * A `Scroller` component with thin scrollbars.
 */
export type ScrollerThin = ReturnType<CreateScroller>;

/**
 * A `Scroller` component with the auto scrollbar size.
 */
export type ScrollerAuto = ReturnType<CreateScroller>;

/**
 * A `Scroller` component without the scrollbar.
 */
export type ScrollerNone = ReturnType<CreateScroller>;
