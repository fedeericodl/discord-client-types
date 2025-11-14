import type * as React from "react";

import type {
  LayerAlignment,
  LayerPosition,
  LayerProps,
  ReferencePositionLayerProps,
} from "@app/design/web";
import type { CaretConfig } from "./TooltipCaret";

export interface BaseTooltipProps
  extends Pick<ReferencePositionLayerProps, "spacing" | "positionKey">,
    LayerProps {
  /**
   * Whether the tooltip is visible.
   */
  isVisible?: boolean;

  /**
   * Whether the tooltip is rendered in the DOM.
   */
  isRendered?: boolean;

  /**
   * The ref to the target element that the tooltip should be positioned relative to.
   */
  targetElementRef: React.RefObject<HTMLElement>;

  /**
   * The ref to the anchor element that the tooltip should be positioned relative to.
   */
  anchorRef?: React.RefObject<HTMLElement>;

  /**
   * The id of the tooltip element.
   */
  id?: string;

  /**
   * The content of the tooltip.
   */
  content?: React.ReactNode;

  /**
   * The position of the tooltip relative to the target element.
   * @default "top"
   */
  position?: Exclude<LayerPosition, "overlap_horizontal" | "overlap_vertical" | "window_center">;

  /**
   * The alignment of the tooltip within the specified position.
   * @default "center"
   */
  align?: LayerAlignment;

  /**
   * Configuration for the caret.
   */
  caretConfig?: CaretConfig;

  /**
   * The style of the tooltip's animation.
   */
  animationStyle?: React.CSSProperties;
}

/**
 * The base tooltip component that handles positioning and rendering of the tooltip.
 */
export type BaseTooltip = React.FC<BaseTooltipProps>;
