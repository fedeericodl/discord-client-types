import type * as React from "react";

import type { ScrollerOrientationTypes } from "./core/SharedTypes";
import type { ScrollbarSpecs } from "./core/getScrollbarSpecs";

export interface PaddingFixProps {
  /**
   * Whether padding fixes should be applied.
   * @default true
   */
  paddingFix?: boolean;

  /**
   * The orientation of the scroll container.
   * @default "vertical"
   */
  orientation?: ScrollerOrientationTypes;

  /**
   * The content direction of the container.
   */
  dir: "ltr" | "rtl";

  /**
   * The class name applied to the scroller.
   */
  className: string | null | undefined;

  /**
   * A ref to the scrollable div element whose padding is being adjusted.
   */
  scrollerRef: React.RefObject<HTMLDivElement>;

  /**
   * The scrollbar dimensions.
   */
  specs: ScrollbarSpecs;
}

/**
 * A React hook that applies padding adjustments to a scrollable container
 * so that content never appears visually "cut off" by the scrollbar.
 * @param props The properties for configuring the padding fixes.
 * @returns A spacer React node or `null`, depending on the orientation.
 */
export type UsePaddingFixes = (props: PaddingFixProps) => React.ReactNode;
