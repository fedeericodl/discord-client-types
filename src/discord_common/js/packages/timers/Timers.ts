/**
 * A utility class to manage timeout operations.
 * @example
 * ```ts
 * const timeout = new Timeout();
 *
 * // Start a timeout that executes after 1000ms
 * timeout.start(1000, () => {
 *   console.log("Timeout completed");
 * });
 *
 * // Check if timeout is running
 * if (timeout.isStarted()) {
 *   console.log("Timeout is active");
 * }
 *
 * // Stop the timeout
 * timeout.stop();
 * ```
 */
export declare class Timeout {
  public constructor();

  /**
   * The reference to the timeout.
   * @private
   */
  private _ref: number | null | undefined;

  /**
   * Starts a new timeout operation.
   * @param delay The delay in milliseconds before the handler is executed.
   * @param handler The function to execute after the delay.
   * @param reset Whether to reset the timeout if it's already running. Defaults to true.
   */
  public start: (delay: number, handler: () => void, reset?: boolean) => void;

  /**
   * Stops the current timeout operation if one is active.
   */
  public stop: () => void;

  /**
   * Returns whether a timeout is currently running.
   */
  public isStarted: () => boolean;
}

/**
 * A utility class for scheduling delayed function calls.
 * @example
 * ```ts
 * // Create a delayed call that executes after 2000ms
 * const delayedCall = new DelayedCall(2000, () => {
 *   console.log("Delayed operation executed");
 * });
 *
 * // Schedule the delayed call
 * delayedCall.delay();
 *
 * // Check if the call is pending
 * if (delayedCall.isDelayed()) {
 *   console.log("Operation pending");
 * }
 *
 * // Cancel the delayed call
 * delayedCall.cancel();
 * ```
 */
export declare class DelayedCall {
  /**
   * @param delay The delay in milliseconds before the handler is executed.
   * @param handler The function to execute after the delay.
   */
  public constructor(delay: number, handler: () => void);

  /**
   * The delay in milliseconds before the handler is executed.
   * @private
   */
  private _delay: number;

  /**
   * The function to execute after the delay.
   * @private
   */
  private _handler: () => void;

  /**
   * The {@link Timeout} instance used to manage the delay.
   * @private
   */
  private _timeout: Timeout;

  /**
   * Sets a new delay for the delayed call.
   * @param delay The new delay in milliseconds.
   * @returns The {@link DelayedCall} instance for method chaining.
   */
  public set: (delay: number) => this;

  /**
   * Schedules the delayed call with the current delay.
   * @param reset Whether to reset the delayed call if it's already running. Defaults to true.
   */
  public delay: (reset?: boolean) => void;

  /**
   * Cancels the delayed call if it's currently scheduled.
   */
  public cancel: () => void;

  /**
   * Returns whether the delayed call is currently scheduled.
   */
  public isDelayed: () => boolean;
}

/**
 * A utility class to manage interval operations.
 * @example
 * ```ts
 * const interval = new Interval();
 *
 * // Start an interval that executes every 500ms
 * interval.start(500, () => {
 *   console.log("Interval executed");
 * });
 *
 * // Check if interval is running
 * if (interval.isStarted()) {
 *   console.log("Interval is active");
 * }
 *
 * // Stop the interval
 * interval.stop();
 * ```
 */
export declare class Interval {
  public constructor();

  /**
   * The reference to the interval.
   * @private
   */
  private _ref: number | null | undefined;

  /**
   * Starts a new interval operation.
   * @param delay The delay in milliseconds between each execution of the handler.
   * @param handler The function to execute at each interval.
   */
  public start: (delay: number, handler: () => void) => void;

  /**
   * Stops the current interval operation if one is active.
   */
  public stop: () => void;

  /**
   * Returns whether an interval is currently running.
   */
  public isStarted: () => boolean;
}

/**
 * A utility function that returns a promise that resolves after a specified duration.
 * @param duration The duration in milliseconds to wait before resolving the promise.
 * @returns A promise that resolves after the specified duration.
 * @example
 * ```ts
 * timeoutPromise(1000).then(() => {
 *   console.log("1 second has passed");
 * });
 * ```
 */
export type TimeoutPromise = (duration: number) => Promise<void>;
