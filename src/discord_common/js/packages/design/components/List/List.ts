import type { CreateListScroller } from "./createListScroller";

/**
 * A `List` component with thin scrollbars.
 */
export type ListThin = ReturnType<CreateListScroller>;

/**
 * A `List` component with the auto scrollbar size.
 */
export type ListAuto = ReturnType<CreateListScroller>;

/**
 * A `List` component without the scrollbar.
 */
export type ListNone = ReturnType<CreateListScroller>;

export type { ListThin as List };
