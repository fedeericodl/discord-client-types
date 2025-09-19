import type * as React from "react";

export type ResizeObserverUpdateCallback = (entry: ResizeObserverEntry, key: string) => unknown;

export interface ResizeObserverSubscriptionProps {
  /**
   * The ref to the HTML element to observe for size changes.
   */
  ref: React.RefObject<HTMLElement>;

  /**
   * Callback function invoked when the element's size changes.
   */
  onUpdate: ResizeObserverUpdateCallback;

  /**
   * The `ResizeObserver` instance used to monitor element size changes.
   */
  resizeObserver: ResizeObserver;

  /**
   * Map that stores listeners for each observed element.
   */
  listenerMap: Map<Element, (entry: ResizeObserverEntry) => unknown>;

  /**
   * Unique identifier for this resize subscription.
   */
  key: string;
}

/**
 * Hook that manages a `ResizeObserver` subscription for a single element.
 * Automatically subscribes to resize events when the component mounts and unsubscribes when it unmounts.
 */
export type UseResizeObserverSubscription = (props: ResizeObserverSubscriptionProps) => void;
