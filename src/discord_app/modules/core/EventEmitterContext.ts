import type EventEmitter from "events";
import type * as React from "react";

/**
 * A no-op `EventEmitter` implementation.
 */
export declare class DefaultEventEmitter extends EventEmitter {
  /**
   * Adds a listener for the specified event (no-op implementation).
   * @override
   */
  public on: () => this;

  /**
   * Adds a one-time listener for the specified event (no-op implementation).
   * @override
   */
  public once: () => this;

  /**
   * Adds a listener for the specified event (no-op implementation).
   * @override
   */
  public addListener: () => this;

  /**
   * Removes a listener for the specified event (no-op implementation).
   * @override
   */
  public removeListener: () => this;

  /**
   * Emits an event with the given arguments (no-op implementation).
   * @override
   */
  public emit: () => boolean;
}

/**
 * A React context for sharing an EventEmitter instance throughout the component tree.
 */
export type EventEmitterContext = React.Context<EventEmitter>;

/**
 * Provider component for the `EventEmitter` context.
 * Use this to provide a real `EventEmitter` instance to child components.
 */
export type EventEmitterProvider = React.Provider<EventEmitter>;

/**
 * Consumer component for the `EventEmitter` context.
 * Use this to access the `EventEmitter` instance in child components.
 */
export type EventEmitterConsumer = React.Consumer<EventEmitter>;
