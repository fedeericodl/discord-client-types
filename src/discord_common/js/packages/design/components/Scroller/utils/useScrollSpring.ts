import type * as React from "react";

import type { ManualSpring } from "./core/ManualSpring";

/**
 * A React hook that creates and manages a {@link ManualSpring} instance
 * for animating scroll position of a container.
 * @param scrollerRef A ref pointing to the scrollable container element.
 * @param orientation Scroll direction to control.
 * @returns A configured {@link ManualSpring} instance that can be driven manually to animate the container's scroll offset.
 */
export type UseScrollSpring = (
  scrollerRef: React.RefObject<HTMLDivElement>,
  orientation: "vertical" | "horizontal",
) => ManualSpring;
