import type EventEmitter from "events";

/**
 * Type-safe wrapper around {@link EventEmitter} with generic event type constraints.
 * @template EventMap Object type mapping event names to their payload types.
 * @example
 * ```ts
 * interface MyEvents {
 *   "user-login": { userId: string; timestamp: number };
 *   "user-logout": { userId: string };
 *   "error": { message: string; code: number };
 *   "ping": void; // No payload
 * }
 *
 * const emitter = new TypedEventEmitter<MyEvents>();
 *
 * // Type-safe event listening
 * emitter.on("user-login", (data) => {
 *   console.log(`User ${data.userId} logged in at ${data.timestamp}`);
 * });
 *
 * emitter.on("ping", () => {
 *   console.log("Ping received"); // No data parameter needed
 * });
 *
 * // Type-safe event emission
 * emitter.emit("user-login", {
 *   userId: "123",
 *   timestamp: Date.now()
 * }); // Correct types
 *
 * emitter.emit("ping"); // No payload needed
 * ```
 */
export declare class TypedEventEmitter<
  EventMap extends Record<string, unknown> = Record<string, unknown>,
> {
  public constructor();

  /**
   * Internal {@link EventEmitter} instance that handles the actual event logic.
   */
  public emitter: EventEmitter;

  /**
   * Adds a listener function for the specified event.
   * @param event The event name to listen for.
   * @param listener The callback function to execute when event is emitted.
   */
  public on: <K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined ? () => void : (data: EventMap[K]) => void,
  ) => void;

  /**
   * Removes a listener function for the specified event.
   * @param event The event name to remove listener from.
   * @param listener The exact callback function to remove.
   */
  public off: <K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined ? () => void : (data: EventMap[K]) => void,
  ) => void;

  /**
   * Adds a one-time listener function for the specified event.
   * The listener will be called only the next time the event is emitted, then removed.
   * @param event The event name to listen for once.
   * @param listener The callback function to execute once when event is emitted.
   */
  public once: <K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined ? () => void : (data: EventMap[K]) => void,
  ) => void;

  /**
   * Alias for `on()` method. Adds a listener function for the specified event.
   * @param event The event name to listen for.
   * @param listener The callback function to execute when event is emitted.
   */
  public addListener: <K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined ? () => void : (data: EventMap[K]) => void,
  ) => void;

  /**
   * Alias for `off()` method. Removes a listener function for the specified event.
   * @param event The event name to remove listener from.
   * @param listener The exact callback function to remove.
   */
  public removeListener: <K extends keyof EventMap>(
    event: K,
    listener: EventMap[K] extends undefined ? () => void : (data: EventMap[K]) => void,
  ) => void;

  /**
   * Removes all listeners for all events.
   */
  public removeAllListeners: () => void;

  /**
   * Emits an event with type-safe payload validation.
   * @param event The event name to emit.
   * @param data The event payload.
   */
  public emit: <K extends keyof EventMap>(
    event: K,
    ...args: EventMap[K] extends undefined ? [] : [data: EventMap[K]]
  ) => void;

  /**
   * Emits an event without strict type checking on the payload.
   * Useful for dynamic scenarios where event types may not be known at compile time.
   * @param event The event name to emit.
   * @param data The event payload (not type-checked).
   */
  public emitUnsafe: (event: keyof EventMap, ...args: unknown[]) => void;

  /**
   * Returns the number of listeners currently registered for the specified event.
   * @param event The event name to count listeners for.
   * @returns Number of listeners registered for the event.
   */
  public listenerCount: (event: keyof EventMap) => number;
}
