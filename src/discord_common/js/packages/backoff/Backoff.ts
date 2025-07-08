/**
 * A utility class for implementing exponential backoff with optional jitter.
 * Useful for retry mechanisms, reconnection attempts, or any scenario requiring progressive delays between attempts.
 * @example
 * ```ts
 * // Create a backoff strategy starting at 500ms with max 10000ms
 * const backoff = new Backoff(500, 10000);
 *
 * function attemptConnection() {
 *   try {
 *     // Try to connect...
 *     const success = connect();
 *
 *     if (success) {
 *       console.log("Connection successful!");
 *       backoff.succeed(); // Reset the backoff
 *     } else {
 *       // Connection failed, retry with backoff
 *       const nextDelay = backoff.fail(() => attemptConnection());
 *       console.log(`Connection failed. Retrying in ${nextDelay}ms...`);
 *     }
 *   } catch (error) {
 *     // Handle error and retry with backoff
 *     const nextDelay = backoff.fail(() => attemptConnection());
 *     console.log(`Error: ${error.message}. Retrying in ${nextDelay}ms...`);
 *   }
 * }
 *
 * // Start the first connection attempt
 * attemptConnection();
 * ```
 */
export declare class Backoff {
  /**
   * @param min The minimum (starting) delay in milliseconds. Must be greater than 0.
   * @param max The maximum delay in milliseconds. If null, defaults to 10 multiplied by `min`.
   * @param jitter Whether to apply random jitter to the delay to avoid thundering herd problems.
   * @throws Will throw an error if min is less than or equal to 0.
   */
  public constructor(min?: number, max?: number | null, jitter?: boolean);

  /**
   * The minimum (starting) delay in milliseconds.
   * @default 500
   */
  public min: number;

  /**
   * The maximum delay in milliseconds.
   * @default null
   */
  public max: number | null;

  /**
   * Whether to apply random jitter to the delay calculation.
   * Delay will be multiplied by a random factor between 0 and 1.
   * @default true
   */
  public jitter: boolean;

  /**
   * The current delay in milliseconds.
   * @private
   */
  private _current: number;

  /**
   * Reference to the current timeout, if any.
   * @private
   */
  private _timeoutId: NodeJS.Timeout | null | undefined;

  /**
   * The callback function to execute when the timeout completes.
   * @private
   */
  private _callback: (() => void) | null | undefined;

  /**
   * The number of consecutive failures.
   * @private
   */
  private _fails: number;

  /**
   * Gets the number of consecutive failures that have occurred.
   */
  public get fails(): number;

  /**
   * Gets the current delay value in milliseconds.
   */
  public get current(): number;

  /**
   * Returns whether a backoff timeout is currently pending.
   * @default false
   */
  public get pending(): boolean;

  /**
   * Resets the backoff after a successful operation.
   * Cancels any pending timeout, resets failure count to 0, and resets the current delay to the minimum value.
   */
  public succeed: () => void;

  /**
   * Records a failure and calculates the next backoff delay.
   * If a callback is provided, it will be executed after the calculated delay.
   * @param callback Function to execute after the backoff period.
   * @returns The calculated delay in milliseconds.
   * @throws Will throw an error if a different callback is already pending.
   */
  public fail: (callback?: () => void) => number;

  /**
   * Cancels any pending timeout and clears the callback.
   */
  public cancel: () => void;
}
