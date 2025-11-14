import type * as React from "react";

import type { VoidTooltip } from "@app/design/web";
import type { BaseTooltipProps } from "./BaseTooltip";
import type { UseTooltipProps } from "./useTooltip";

export interface TooltipProps
  extends Pick<
      BaseTooltipProps,
      | "position"
      | "align"
      | "spacing"
      | "layerContext"
      | "anchorRef"
      | "caretConfig"
      | "positionKey"
    >,
    UseTooltipProps {
  /**
   * The text content of the tooltip.
   */
  text?: string;

  /**
   * A keyboard shortcut to display alongside the text.
   */
  keyboardShortcut?: string | string[];

  /**
   * Compatibility prop to support React nodes as text, for migrating from {@link VoidTooltip}.
   */
  __unsupportedReactNodeAsText?: React.ReactNode;

  /**
   * Whether the trigger element should be treated as a container.
   * @default false
   */
  asContainer?: boolean;

  /**
   * The HTML tag to use for the container element.
   * @default "span"
   */
  tag?: keyof React.JSX.IntrinsicElements;

  /**
   * Whether the tooltip should be hidden from assistive technologies.
   * @default false
   */
  ariaHidden?: boolean;
}

/**
 * A tooltip component, which displays additional information when hovering over or focusing on an element.
 */
export type Tooltip = React.FC<React.PropsWithChildren<TooltipProps>>;
