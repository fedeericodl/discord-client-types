import type * as React from "react";

export type LayerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "window_center"
  | "overlap_vertical"
  | "overlap_horizontal";

export type LayerAlignment = "left" | "right" | "center" | "top" | "bottom";

/**
 * Returns whether a container element contains a target element, accounting for portal-aware layers.
 * @param container The container element to check containment within
 * @param target The target element to check if it's contained
 */
export type ReferencePortalAwareContains = (container: HTMLElement, target: HTMLElement) => boolean;

export interface LayerRect {
  /**
   * The distance from the top edge of the containing element in pixels.
   */
  top: number;

  /**
   * The distance from the left edge of the containing element in pixels.
   */
  left: number;

  /**
   * The distance from the bottom edge of the containing element in pixels.
   */
  bottom: number;

  /**
   * The distance from the right edge of the containing element in pixels.
   */
  right: number;

  /**
   * The width of the layer element in pixels.
   */
  width: number;

  /**
   * The height of the layer element in pixels.
   */
  height: number;
}

export interface PositionStyleResult {
  /**
   * The styles for positioning the layer.
   */
  style: React.CSSProperties;

  /**
   * The amount of offset or adjustment applied to the position in pixels.
   */
  nudge: number;
}

export interface PositionInfo {
  /**
   * The calculated position of the layer.
   */
  position: LayerPosition;

  /**
   * The amount of offset or adjustment applied to the position in pixels.
   */
  nudge: number;

  /**
   * Whether the layer has been successfully positioned or is still being calculated.
   */
  isPositioned: boolean;
}

export interface ReferencePositionLayerProps {
  /**
   * Whether to use raw target dimensions without ceiling the values.
   */
  useRawTargetDimensions?: boolean;

  /**
   * Whether to nudge the layer alignment to keep it within the viewport.
   * @default false
   */
  nudgeAlignIntoViewport?: boolean;

  /**
   * The alignment of the layer within the specified position.
   * @see {@link LayerAlignment}
   */
  align: LayerAlignment;

  /**
   * The spacing (in pixels) between the layer and the target element.
   * @default 0
   */
  spacing?: number;

  /**
   * The ref to the target element that the layer should be positioned relative to.
   */
  targetRef: React.RefObject<HTMLElement>;

  /**
   * Override the target element's bounding rectangle for positioning calculations.
   */
  overrideTargetRect?: DOMRect;

  /**
   * The position of the layer relative to the target element.
   * @see {@link LayerPosition}
   */
  position: LayerPosition;

  /**
   * Whether to automatically invert the position if there's insufficient space.
   * @default false
   */
  autoInvert?: boolean;

  /**
   * Event handler called when the layer is mounted and positioned.
   */
  onMount?: () => void;

  /**
   * Unique key for position caching and comparison.
   */
  positionKey?: string;

  /**
   * Event handler called when the layer position changes.
   */
  onPositionChange?: (newPosition: LayerPosition) => void;

  /**
   * Event handler called when the layer is unmounted.
   */
  onUnmount?: () => void;

  /**
   * The id attribute for the layer container.
   */
  id?: string;

  /**
   * The class name applied to the layer container.
   */
  className?: string;

  /**
   * Render function that receives positioning information and update callback.
   */
  children: (positionInfo: PositionInfo, updatePosition: () => void) => React.ReactNode;

  /**
   * Whether to use fixed positioning instead of absolute positioning.
   */
  fixed?: boolean;

  /**
   * Whether to disable pointer events on the layer container.
   * @default false
   */
  disablePointerEvents?: boolean;

  /**
   * Whether to enable click trapping for the layer container.
   * @default false
   */
  clickTrap?: boolean;
}

export interface ReferencePositionLayerState {
  /**
   * The current styles for positioning the layer.
   */
  style: React.CSSProperties;

  /**
   * Current position of the layer relative to the target.
   */
  position: LayerPosition | null;

  /**
   * Pixel offset applied to prevent viewport overflow.
   * @default 0
   */
  nudge: number;

  /**
   * Whether the layer has been initially positioned.
   * @default false
   */
  isPositioned: boolean;

  /**
   * Whether a settings layer transition animation is currently running.
   * @default false
   */
  isSettingsLayerTransitioning: boolean;
}

/**
 * A component that positions a layer relative to a target element with intelligent positioning.
 * @example
 * ```tsx
 * const targetRef = React.useRef<HTMLButtonElement>(null);
 *
 * <>
 *   <Button ref={targetRef}>Trigger</Button>
 *   <ReferencePositionLayer
 *     targetRef={targetRef}
 *     position="bottom"
 *     align="left"
 *     autoInvert
 *     nudgeAlignIntoViewport
 *     spacing={8}
 *     onPositionChange={(newPosition) => {
 *       console.log("Position changed to:"", newPosition);
 *     }}>
 *     {({ position, nudge, isPositioned }, updatePosition) => (
 *       <div className="tooltip">
 *         <p>Current position: {position}</p>
 *         <p>Nudge offset: {nudge}px</p>
 *         <button onClick={updatePosition}>Update Position</button>
 *       </div>
 *     )}
 *   </ReferencePositionLayer>
 * </>
 * ```
 */
export declare class ReferencePositionLayer extends React.Component<
  ReferencePositionLayerProps,
  ReferencePositionLayerState
> {
  /**
   * The ref to the layer's DOM element for positioning calculations.
   */
  public elementRef: React.RefObject<HTMLDivElement>;

  /**
   * Handler for layer pop start events.
   * Sets the transitioning state to hide the layer during animations.
   */
  public handleLayerPopStart: () => void;

  /**
   * Handler for layer pop complete events and window resize events.
   * Recalculates positioning and clears the transitioning state.
   */
  public handleLayerPopComplete: () => void;

  /**
   * Manually triggers a position recalculation and state update.
   * Useful for responding to external changes that might affect positioning.
   */
  public updatePosition: () => void;

  /**
   * Formats a dimension value.
   * @param value The dimension value to format.
   * @returns The formatted dimension value.
   */
  public formatDimension: (value: number) => number;

  /**
   * Calculates the nudged left alignment position to prevent viewport overflow.
   * @param leftPosition The initial left position.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @returns The adjusted left position accounting for viewport boundaries.
   */
  public nudgeLeftAlignment: (
    leftPosition: number,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
  ) => number;

  /**
   * Calculates the nudged right alignment position to prevent viewport overflow.
   * @param rightPosition The initial right position.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @returns The adjustment offset for right positioning.
   */
  public nudgeRightAlignment: (
    rightPosition: number,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
  ) => number;

  /**
   * Calculates horizontal alignment styles (left, right, center) with nudging.
   * @param targetRect The target element's bounding rectangle.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @param baseStyle The base style object to extend.
   * @returns Object containing the calculated style and nudge offset.
   * @throws Will throw an error if the alignment is unsupported.
   */
  public getHorizontalAlignmentStyle: (
    targetRect: LayerRect,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
    baseStyle: React.CSSProperties,
  ) => PositionStyleResult;

  /**
   * Calculates the nudged top alignment position to prevent viewport overflow.
   * @param topPosition The initial top position.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @returns The adjusted top position accounting for viewport boundaries.
   */
  public nudgeTopAlignment: (
    topPosition: number,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
  ) => number;

  /**
   * Calculates the nudged bottom alignment position to prevent viewport overflow.
   * @param bottomPosition The initial bottom position.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @returns The adjusted bottom position accounting for viewport boundaries.
   */
  public nudgeBottomAlignment: (
    bottomPosition: number,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
  ) => number;

  /**
   * Calculates vertical alignment styles (top, bottom, center) with nudging.
   * @param targetRect The target element's bounding rectangle.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @param baseStyle The base style object to extend.
   * @returns Object containing the calculated style and nudge offset.
   * @throws Will throw an error if the alignment is unsupported.
   */
  public getVerticalAlignmentStyle: (
    targetRect: LayerRect,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
    baseStyle: React.CSSProperties,
  ) => PositionStyleResult;

  /**
   * Calculates the complete positioning style for the layer based on position and alignment.
   * @param position The desired position relative to the target.
   * @param layerElement The layer element for dimension calculations.
   * @param containerElement The container element for boundary calculations.
   * @param fallbackPosition Fallback position for overlap calculations.
   * @returns Object containing the calculated style and nudge offset.
   * @throws Will throw an error if the target ref is invalid.
   */
  public calculatePositionStyle: (
    position: LayerPosition,
    layerElement: HTMLElement,
    containerElement: HTMLElement,
    fallbackPosition?: LayerPosition,
  ) => PositionStyleResult;

  /**
   * Returns the calculated complete layer positioning state including auto-inversion logic.
   */
  public calculateState: () => Pick<ReferencePositionLayerState, "style" | "position" | "nudge">;
}
