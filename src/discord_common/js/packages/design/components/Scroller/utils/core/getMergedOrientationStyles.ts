import type * as React from "react";

import type { ScrollerOrientationTypes } from "./SharedTypes";

export type STYLES_VERTICAL = Readonly<{
  overflowY: "scroll";
  overflowX: "hidden";
}>;

export type STYLES_HORIZONTAL = Readonly<{
  overflowX: "scroll";
  overflowY: "hidden";
}>;

export type STYLES_AUTO = Readonly<{
  overflow: "auto";
}>;

/**
 * Returns a style object that combines default overflow rules for the given scroll orientation with any additional custom styles provided.
 * @param style Custom CSS properties to merge with the orientation defaults.
 * @param orientation The scroll orientation to use.
 * @returns A merged style object containing the orientation rules and any overrides.
 */
export type GetMergedOrientationStyles = (
  style: React.CSSProperties | undefined,
  orientation?: ScrollerOrientationTypes,
) => React.CSSProperties;
