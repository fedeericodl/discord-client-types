import type { CreateMasonryListScroller } from "./createMasonryListScroller";

/**
 * A `MasonryList` component with thin scrollbars.
 */
export type MasonryListThin = ReturnType<CreateMasonryListScroller>;

/**
 * A `MasonryList` component with the auto scrollbar size.
 */
export type MasonryListAuto = ReturnType<CreateMasonryListScroller>;
