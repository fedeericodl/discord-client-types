import type { Timeout } from "@discordapp/timers/Timers";
import type { UseTransitionProps } from "@react-spring/web";
import type * as React from "react";

import type { LayerAlignment, LayerPosition } from "@app/design/web";

type Colors = "primary" | "grey" | "brand" | "green" | "red";

export type VoidTooltipColors = {
  [K in Colors as Uppercase<K>]: K;
};

export interface VoidTooltipLayerProps {
  /**
   * The ref to a specific target element.
   * When not provided, uses the previous sibling of the tooltip component.
   */
  targetElementRef?: React.RefObject<HTMLElement>;

  /**
   * The alignment of the tooltip within the specified position.
   * @default "center"
   * @see {@link LayerAlignment}
   */
  align?: LayerAlignment;

  /**
   * The position of the tooltip relative to the target element.
   * @see {@link LayerPosition}
   */
  position?: LayerPosition;

  /**
   * The color theme of the tooltip.
   * @see {@link Colors TooltipColors}
   */
  color?: Colors;

  /**
   * Event handler called when the tooltip is clicked.
   */
  onNonAccessibleClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * The class name applied to the tooltip container.
   */
  tooltipClassName?: string;

  /**
   * The styles applied to the tooltip container.
   */
  tooltipStyle?: React.CSSProperties;

  /**
   * The class name applied to the tooltip content area.
   */
  tooltipContentClassName?: string;

  /**
   * The spacing (in pixels) between the tooltip and the target element.
   * @default 8
   */
  spacing?: number;

  /**
   * The animation styles applied to the tooltip container.
   */
  animationStyle?: React.CSSProperties;

  /**
   * Whether to disable pointer events on the tooltip.
   * @default false
   */
  disableTooltipPointerEvents?: boolean;

  /**
   * Whether to allow tooltip content to overflow its container.
   * @default false
   */
  allowOverflow?: boolean;

  /**
   * The class name applied to the tooltip pointer.
   */
  tooltipPointerClassName?: string;

  /**
   * Unique key for position caching and comparison.
   */
  positionKeyStemOverride?: string;

  /**
   * Marks the tooltip to be ignored by internal tests.
   */
  dataMeticulousIgnore?: string;
}

/**
 * Layer component that renders the actual tooltip with positioning and styling.
 * @example
 * ```tsx
 * const targetRef = React.useRef<HTMLButtonElement>(null);
 *
 * <VoidTooltipLayer
 *   targetElementRef={targetRef}
 *   position="bottom"
 *   align="center"
 *   color="primary"
 *   spacing={8}>
 *   This is a tooltip!
 * </VoidTooltipLayer>
 * ```
 */
export type VoidTooltipLayer = React.FC<React.PropsWithChildren<VoidTooltipLayerProps>>;

export interface VoidTooltipChildrenProps {
  /**
   * Click event handler for the target element.
   */
  onClick: React.MouseEventHandler<HTMLElement>;

  /**
   * Mouse enter event handler for the target element.
   */
  onMouseEnter: React.MouseEventHandler<HTMLElement>;

  /**
   * Mouse leave event handler for the target element.
   */
  onMouseLeave: React.MouseEventHandler<HTMLElement>;

  /**
   * Context menu event handler for the target element.
   */
  onContextMenu: React.MouseEventHandler<HTMLElement>;

  /**
   * Focus event handler for the target element.
   */
  onFocus: React.FocusEventHandler<HTMLElement>;

  /**
   * Blur event handler for the target element.
   */
  onBlur: React.FocusEventHandler<HTMLElement>;

  /**
   * The accessibility label for the tooltip content.
   */
  "aria-label"?: string;
}

export interface VoidTooltipProps
  extends Omit<VoidTooltipLayerProps, "onNonAccessibleClick" | "animationStyle"> {
  /**
   * The text content to display in the tooltip.
   */
  text?: React.ReactNode | (() => React.ReactNode);

  /**
   * Whether the tooltip should be shown.
   * @default true
   */
  shouldShow?: boolean;

  /**
   * Whether to force the tooltip to remain open regardless of other conditions.
   * @default false
   */
  forceOpen?: boolean;

  /**
   * Render function that receives event handlers to apply to the target element.
   */
  children: (props: VoidTooltipChildrenProps) => React.ReactNode;

  /**
   * The accessibility label for the tooltip content.
   */
  "aria-label"?: string;

  /**
   * The position of the tooltip relative to the target element.
   * @default "top"
   * @see {@link LayerPosition}
   */
  position?: LayerPosition;

  /**
   * The color theme of the tooltip.
   * @default Tooltip.Colors.PRIMARY
   * @see {@link Colors TooltipColors}
   */
  color?: Colors;

  /**
   * Event handler called when animation transitions complete.
   */
  onAnimationRest?: UseTransitionProps["onRest"];

  /**
   * Whether the tooltip should be clickable on mobile devices.
   */
  clickableOnMobile?: boolean;

  /**
   * Whether to hide the tooltip when the target element is clicked.
   * @default true
   */
  hideOnClick?: boolean;

  /**
   * Delay in milliseconds before showing the tooltip.
   */
  delay?: number;

  /**
   * Whether to only show the tooltip when the target content overflows.
   * @default false
   */
  overflowOnly?: boolean;

  /**
   * Event handler called when the tooltip is shown.
   */
  onTooltipShow?: () => void;

  /**
   * Event handler called when the tooltip is hidden.
   */
  onTooltipHide?: () => void;
}

export interface VoidTooltipState {
  /**
   * Whether the tooltip should currently be displayed.
   * @default false
   */
  shouldShowTooltip: boolean;
}

export declare class VoidTooltipComponent extends React.Component<
  VoidTooltipProps,
  VoidTooltipState
> {
  /**
   * {@link Timeout} instance for managing delayed tooltip display.
   */
  public showTimeout: Timeout;

  /**
   * The ref to the target DOM element for tooltip positioning.
   */
  public domElementRef: React.RefObject<HTMLElement | null>;

  /**
   * Whether the component has successfully found its target DOM element.
   */
  public hasDomElement: boolean;

  /**
   * The ref to a hidden sibling element used for DOM element discovery.
   */
  public siblingDomRef: React.RefObject<HTMLSpanElement>;

  /**
   * Event handler for mouse enter events on the target element.
   */
  public handleMouseEnter: () => void;

  /**
   * Event handler for mouse leave events on the target element.
   */
  public handleMouseLeave: () => void;

  /**
   * Event handler for focus events on the target element.
   */
  public handleFocus: () => void;

  /**
   * Event handler for blur events on the target element.
   */
  public handleBlur: () => void;

  /**
   * Event handler for click events on the target element.
   */
  public handleClick: () => void;

  /**
   * Event handler for context menu events on the target element.
   */
  public handleContextMenu: () => void;

  /**
   * Finds and sets the target DOM element for tooltip positioning.
   * @throws {Error} Will throw an error if no valid DOM element can be found.
   */
  public setDomElement: () => void;

  /**
   * Returns whether the tooltip should be displayed based on current props and state.
   * @param props The props to check.
   * @param state The state to check.
   */
  public shouldShowTooltip: (props: VoidTooltipProps, state: VoidTooltipState) => boolean;

  /**
   * Returns the animated tooltip layer when conditions are met.
   */
  public renderTooltip: () => React.ReactNode;

  /**
   * Shows the tooltip.
   */
  public show: () => void;

  /**
   * Hides the tooltip immediately by stopping any pending show timer.
   */
  public hide: () => void;

  /**
   * Toggles the tooltip visibility state and triggers appropriate callbacks.
   * @param shouldShow Whether the tooltip should be shown.
   */
  public toggleShow: (shouldShow: boolean) => void;
}

/**
 * A tooltip component, which displays additional information when hovering over or focusing on an element.
 * Uses a render prop pattern to provide event handlers that should be applied to the target element.
 * @example
 * ```tsx
 * <VoidTooltip text="Save your changes" position="bottom" color="green">
 *   {(props) => (
 *     <Button {...props}>Save</Button>
 *   )}
 * </VoidTooltip>
 * ```
 */
export type VoidTooltip = typeof VoidTooltipComponent & {
  Colors: VoidTooltipColors;
};

export interface VoidTooltipContainerProps extends Omit<VoidTooltipProps, "children"> {
  /**
   * The class name applied to the container.
   */
  className?: string;

  /**
   * The HTML tag to use for the container element.
   * @default "div"
   */
  element?: React.JSX.IntrinsicElements;
}

/**
 * Convenience wrapper component that renders a tooltip around a specific HTML element.
 * This component simplifies tooltip usage by automatically creating the target element
 * and applying the necessary event handlers, eliminating the need for render props.
 * @example
 * ```tsx
 * <VoidTooltipContainer text="Click to save" element="button" className="save-btn">
 *   Save Changes
 * </VoidTooltipContainer>
 * ```
 */
export type VoidTooltipContainer = React.FC<React.PropsWithChildren<VoidTooltipContainerProps>>;
