import type * as React from "react";

import type { VisibilityObserver } from "./VisibilityObserver";

export interface VisibilitySensorProps {
  /**
   * Controls whether the visibility sensor is actively observing.
   * @default true
   */
  active?: boolean;

  /**
   * Reference to the element that should be observed.
   */
  innerRef?: React.RefObject<HTMLElement>;

  /**
   * Event handler called when the the visibility status changes.
   */
  onChange: (isVisible: boolean) => void;

  /**
   * Margin around the root element used for intersection calculations.
   * Values specified as CSS margin syntax: "top right bottom left".
   * @default "0px 0px 0px 0px"
   */
  rootMargin?: string;

  /**
   * Threshold(s) at which the callback should be invoked.
   * A number between 0 and 1 indicating visibility percentage or an array of such numbers.
   * @default [0, Number.MIN_VALUE]
   */
  threshold?: number | number[];

  /**
   * The element used as viewport for checking visibility.
   * @default null
   */
  root?: Element | Document | null;
}

/**
 * A component that monitors when an element enters or exits the viewport.
 */
export declare class VisibilitySensor extends React.Component<
  React.PropsWithChildren<VisibilitySensorProps>
> {
  /**
   * Unique identifier for the element being observed.
   */
  public elementId: string;

  /**
   * Current visibility state of the observed element.
   */
  public isVisible: boolean;

  /**
   * Returns the unique identifier for the visibility observer instance.
   * The ID combines element ID, rootMargin, and threshold values.
   */
  public getVisibilityObserverId: () => string;

  /**
   * Returns the visibility observer instance associated with this component.
   * Creates a new observer if one doesn't already exist with the same configuration.
   * @returns The {@link VisibilityObserver} instance.
   * @throws Will throw an error if the visibility observer is not found.
   */
  public getVisibilityObserver: () => VisibilityObserver;
}
