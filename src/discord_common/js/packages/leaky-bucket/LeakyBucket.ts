/**
 * A rate limiting implementation using the leaky bucket algorithm.
 * Controls the flow of operations by limiting their execution to a specific rate.
 * @example
 * ```ts
 * // Create a bucket with capacity of 5 operations and refill interval of 10 seconds
 * // This allows 5 operations every 10 seconds (or roughly 1 operation every 2 seconds)
 * const bucket = new LeakyBucket(5, 10000);
 *
 * // Perform rate-limited operations
 * async function performOperations() {
 *   for (let i = 0; i < 10; i++) {
 *     console.log(`Requesting operation ${i}...`);
 *     await bucket.process();
 *     console.log(`Executing operation ${i}`);
 *   }
 * }
 *
 * performOperations();
 * // Output will show operations executing at the controlled rate
 * // with approximately 2 seconds between each operation
 * ```
 */
export declare class LeakyBucket {
  /**
   * @param capacity Maximum number of tokens the bucket can hold. Represents the burst capacity of operations.
   * @param interval Time period in milliseconds over which the capacity is measured.
   *                 For example, capacity of 10 and interval of 1000 means 10 operations per second.
   */
  public constructor(capacity: number, interval: number);

  /**
   * The maximum number of tokens (operations) the bucket can hold.
   * @private
   */
  private _capacity: number;

  /**
   * The current number of tokens in the bucket.
   * @private
   */
  private _tokenCount: number;

  /**
   * Queue of pending operations waiting to be executed.
   * @private
   */
  private _queue: (() => void)[];

  /**
   * Time in milliseconds between adding individual tokens to the bucket.
   * Calculated as interval/capacity to achieve the desired rate.
   * @private
   */
  private _intervalPeriod: number;

  /**
   * Reference to the interval timer that adds tokens to the bucket.
   * Null when no tokens are being added (bucket is full or no pending operations).
   * @private
   */
  private _intervalID: NodeJS.Timeout | null;

  /**
   * Processes the operation queue if tokens are available.
   * Uses setTimeout with 0ms to avoid blocking the event loop.
   * @private
   */
  private _processQueue: () => void;

  /**
   * Adds a token to the bucket and processes the queue if operations are waiting.
   * Called on each interval tick to restore capacity over time.
   * @private
   */
  private _iterate: () => void;

  /**
   * Enqueues an operation to be executed when a token is available.
   * @returns A promise that resolves when the operation can be executed.
   */
  public process: () => Promise<void>;
}
