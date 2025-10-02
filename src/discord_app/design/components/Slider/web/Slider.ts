import type * as React from "react";

import type { FormControlProps } from "@app/design/web";

export enum MarkerPositions {
  ABOVE,
  BELOW,
}

export interface SliderProps
  extends Pick<
    FormControlProps,
    "label" | "hideLabel" | "description" | "helperText" | "errorMessage" | "successMessage"
  > {
  /**
   * Initial value of the slider.
   * @default 10
   */
  initialValue?: number;

  /**
   * Minimum value the slider can represent.
   * @default 0
   */
  minValue?: number;

  /**
   * Maximum value the slider can represent.
   * @default 100
   */
  maxValue?: number;

  /**
   * Array of specific values where markers should be displayed.
   */
  markers?: number[];

  /**
   * Whether markers should be distributed evenly.
   */
  equidistant?: boolean;

  /**
   * Custom renderer for marker labels.
   */
  onMarkerRender?: (value: number) => React.ReactNode;

  /**
   * Whether the slider is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the slider should snap to marker positions.
   * @default false
   */
  stickToMarkers?: boolean;

  /**
   * The class name applied to the slider.
   */
  className?: string;

  /**
   * The styles applied to the slider bar.
   */
  barStyles?: React.CSSProperties;

  /**
   * The styles applied to the filled portion of the bar.
   */
  fillStyles?: React.CSSProperties;

  /**
   * Whether to use a smaller variant of the slider.
   */
  mini?: boolean;

  /**
   * Whether to hide the value tooltip.
   */
  hideBubble?: boolean;

  /**
   * Initial default value for reference.
   */
  defaultValue?: number;

  /**
   * Orientation of the slider.
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Custom renderer for the current value.
   */
  onValueRender?: (value: number) => React.ReactNode;

  /**
   * Custom renderer for markers.
   */
  renderMarker?: (value: number) => React.ReactNode;

  /**
   * Custom text for screen readers.
   */
  getAriaValueText?: (value: number) => string;

  /**
   * The class name applied to the bar.
   */
  barClassName?: string;

  /**
   * The class name applied to the grabber.
   */
  grabberClassName?: string;

  /**
   * The styles applied to the grabber.
   */
  grabberStyles?: React.CSSProperties;

  /**
   * Position of markers relative to the bar.
   * @default MarkerPositions.ABOVE
   * @see {@link MarkerPositions}
   */
  markerPosition?: MarkerPositions;

  /**
   * Whether the slider is hidden from screen readers.
   */
  "aria-hidden"?: boolean;

  /**
   * The accessibility label for the slider.
   */
  "aria-label"?: string;

  /**
   * The accessibility identifier for the slider label.
   */
  "aria-labelledby"?: string;

  /**
   * The accessibility identifier for the slider description.
   */
  "aria-describedby"?: string;

  /**
   * Event handler called while dragging.
   */
  asValueChanges?: (value: number) => void;

  /**
   * Event handler called after the value changes.
   */
  onValueChange?: (value: number) => void;

  /**
   * Step value for keyboard navigation.
   * @default 1
   */
  keyboardStep?: number;
}

export interface SliderState {
  /**
   * The current value of the slider.
   */
  value: number;

  /**
   * Whether the slider is active.
   * @default false
   */
  active: boolean;

  /**
   * Whether the slider is focused.
   * @default false
   */
  focused: boolean;

  /**
   * The sorted markers.
   */
  sortedMarkers: number[];

  /**
   * The positions of the markers.
   */
  markerPositions: number[];

  /**
   * The index of the closest marker.
   */
  closestMarkerIndex?: number;

  /**
   * The index of the new closest marker.
   */
  newClosestIndex?: number;

  /**
   * The minimum value of the slider.
   */
  min: number;

  /**
   * The maximum value of the slider.
   */
  max: number;

  /**
   * The range of the slider.
   */
  range: number;

  /**
   * The bounding rectangle of the slider.
   */
  boundingRect?: DOMRect;

  /**
   * The x position of the mouse.
   */
  x?: number;

  /**
   * The initial value when drag operation starts.
   */
  dragStartValue: number | undefined;
}

/**
 * An interactive component that lets users select a value or range by moving a slider thumb along a track.
 * @example
 * ```tsx
 * const [volume, setVolume] = React.useState(50);
 *
 * <Slider
 *   initialValue={volume}
 *   minValue={0}
 *   maxValue={100}
 *   onValueChange={setVolume}
 *   onValueRender={(value) => `${value}%`}
 *   getAriaValueText={(value) => `Volume ${value}%`}
 * />
 * ```
 */
export declare class Slider extends React.PureComponent<
  React.PropsWithChildren<SliderProps>,
  SliderState
> {
  /**
   * The ref to the container element.
   */
  public containerRef: React.RefObject<HTMLDivElement>;

  /**
   * The ref to the grabber element.
   */
  public grabberRef: React.RefObject<HTMLDivElement>;

  /**
   * Updates the grabber position to the specified value.
   * @param value The new value to move the grabber to.
   */
  public moveGrabber: (value: number) => void;

  /**
   * Event handler called when user clicks on the slider container.
   */
  public handleContainerMouseDown: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when keyboard navigation is used.
   */
  public handleKeyDown: React.KeyboardEventHandler<HTMLDivElement>;

  /**
   * Event handler called when user starts dragging the grabber.
   */
  public handleMouseDown: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when user releases the grabber.
   */
  public handleMouseUp: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when user drags the grabber.
   */
  public handleMouseMove: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when the slider gains focus.
   */
  public onFocus: () => void;

  /**
   * Event handler called when the slider loses focus.
   */
  public onBlur: () => void;

  /**
   * Moves the grabber smoothly to a new position.
   */
  public moveSmoothly: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Renders a marker at the specified value.
   * @param value The value to render a marker for.
   */
  public renderMark: (value: number) => React.ReactNode;

  /**
   * Resets the slider state and removes event listeners.
   */
  public reset: () => void;

  /**
   * Scales a raw value to the slider's percentage position.
   * @param value The value to scale.
   */
  public scaleValue: (value: number) => number;

  /**
   * Unscales a percentage position to the corresponding raw value.
   * @param value The percentage to unscale.
   */
  public unscaleValue: (value: number) => number;

  /**
   * Sets focus on the slider.
   */
  public focus: () => void;

  /**
   * Removes focus from the slider.
   */
  public blur: () => void;

  /**
   * Moves the grabber in discrete steps.
   */
  public moveStaggered: React.MouseEventHandler<HTMLDivElement>;
}
