import type * as React from "react";

import type { LayerAlignment, LayerPosition } from "@app/design/web";

export interface CaretConfig {
  /**
   * The position of the caret relative to the tooltip.
   */
  position?: Exclude<LayerPosition, "overlap_horizontal" | "overlap_vertical" | "window_center">;

  /**
   * The alignment of the caret within the specified position.
   */
  align?: LayerAlignment | "start" | "end" | "custom";

  /**
   * A custom offset for the caret when `align` is set to `custom`.
   */
  customOffset?: number;
}

export interface TooltipCaretProps {
  /**
   * The configuration for the caret.
   */
  caretConfig: CaretConfig;
}

/**
 * The caret for the tooltips.
 */
export type TooltipCaret = React.FC<TooltipCaretProps>;
