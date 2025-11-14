import type * as React from "react";

import type { BaseTooltipProps } from "./BaseTooltip";
import type { UseTooltipProps } from "./useTooltip";

export interface RichTooltipProps
  extends Pick<
      BaseTooltipProps,
      | "position"
      | "align"
      | "spacing"
      | "caretConfig"
      | "layerContext"
      | "anchorRef"
      | "positionKey"
    >,
    UseTooltipProps {
  /**
   * The title of the rich tooltip.
   */
  title?: React.ReactNode;

  /**
   * The body content of the rich tooltip.
   */
  body?: React.ReactNode;

  /**
   * The asset to display alongside the text content.
   */
  asset?: React.ReactNode;

  /**
   * Whether the trigger element should be treated as a container.
   * @default false
   */
  asContainer?: boolean;

  /**
   * The HTML tag to use for the container element.
   * @default "span"
   */
  element?: keyof React.JSX.IntrinsicElements;

  /**
   * Whether the tooltip should be hidden from assistive technologies.
   * @default false
   */
  ariaHidden?: boolean;
}

/**
 * Displays a rich tooltip with a title, body, and optional asset.
 */
export type RichTooltip = React.FC<React.PropsWithChildren<RichTooltipProps>>;
