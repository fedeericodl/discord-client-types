import type * as React from "react";

/**
 * A utility class that detects when components enter or exit the viewport.
 */
export declare class VisibilityObserver {
  /**
   * @param options Configuration options for the IntersectionObserver.
   */
  public constructor(options?: IntersectionObserverInit);

  /**
   * The underlying IntersectionObserver instance.
   * @private
   */
  private _observer: IntersectionObserver | undefined;

  /**
   * Configuration options for the IntersectionObserver.
   * @private
   */
  private _options: IntersectionObserverInit;

  /**
   * Maps DOM elements to their associated React components.
   * @private
   */
  private _nodes: WeakMap<HTMLElement, React.ComponentClass>;

  /**
   * Maps React components to their associated DOM elements.
   * @private
   */
  private _components: WeakMap<React.ComponentClass, HTMLElement>;

  /**
   * Tracks which components are currently visible.
   * @private
   */
  private _visibleComponents: WeakSet<React.ComponentClass>;

  /**
   * Event handler called when the IntersectionObserver that processes visibility changes.
   * @private
   */
  private _handleEntries: IntersectionObserverCallback;

  /**
   * Returns whether a component is currently visible in the viewport.
   * @param component The React component to check for visibility.
   */
  public isVisible: (component: React.ComponentClass) => boolean;

  /**
   * Starts observing a component's visibility using its DOM reference.
   * @param component The React component to observe.
   * @param ref React ref object containing the DOM element to track.
   */
  public observe: (component: React.ComponentClass, ref: React.RefObject<HTMLElement>) => void;

  /**
   * Stops observing a component's visibility.
   * @param component The React component to stop observing.
   */
  public unobserve: (component: React.ComponentClass) => void;
}
