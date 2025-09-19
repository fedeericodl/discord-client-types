export type Contender<T = unknown> = T;

export interface ObservableLockOptions<T = unknown> {
  /**
   * Callback invoked when contention is detected.
   */
  onContention?: (contender: Contender<T>, queue: Contender<T>[]) => void;

  /**
   * Callback invoked when contention is resolved.
   */
  onContentionResolved?: () => void;

  /**
   * Callback invoked when a timeout occurs.
   */
  onTimeout?: (contender: Contender<T>, queue: Contender<T>[]) => void;

  /**
   * Timeout duration in milliseconds.
   */
  timeoutMs?: number;
}

export interface ObservableLock<T = unknown> {
  /**
   * The main lock function. Wraps a task so it executes sequentially.
   */
  <R>(task: () => Promise<R>, contender?: Contender<T>): Promise<R>;

  /**
   * Returns whether the mutex is currently held by any contender.
   */
  isMutexHeld: () => boolean;

  /**
   * Returns the current queue of contenders.
   */
  getLockHolders: () => Contender<T>[];
}

/**
 * Creates an observable mutex lock with contention monitoring and timeout support.
 * Provides a Promise-based lock mechanism that tracks lock holders, detects contention,
 * and includes timeout handling for deadlock prevention.
 * @param options Configuration object with contention callbacks and timeout settings.
 * @returns A lock function with `isMutexHeld` and `getLockHolders` methods attached.
 * @example
 * ```ts
 * // Basic lock with contention monitoring
 * const lock = createObservableLock({
 *   onContention: (holder, queue) => {
 *     console.log(`Lock contention detected. Current holder: ${holder}, Queue: ${queue.length}`);
 *   },
 *   onContentionResolved: () => {
 *     console.log("Lock contention resolved");
 *   },
 *   onTimeout: (holder, queue) => {
 *     console.warn(`Lock timeout for ${holder}. Queue: ${queue.length}`);
 *   },
 *   timeoutMs: 5000
 * });
 *
 * // Use the lock
 * async function criticalSection(taskId) {
 *   await lock(async () => {
 *     console.log(`${taskId} acquired lock`);
 *     await performCriticalWork();
 *     console.log(`${taskId} releasing lock`);
 *   }, taskId);
 * }
 *
 * // Check lock state
 * if (lock.isMutexHeld()) {
 *   console.log("Lock is currently held by:", lock.getLockHolders());
 * }
 *
 * // Multiple concurrent operations
 * Promise.all([
 *   criticalSection("task1"),
 *   criticalSection("task2"),
 *   criticalSection("task3")
 * ]);
 * ```
 */
export type CreateObservableLock = <T = unknown>(
  options: ObservableLockOptions<T>,
) => ObservableLock<T>;
