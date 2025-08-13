import { Logger } from "../logger/Logger";

interface LogGroup {
  /**
   * Sequential index of the log group.
   */
  index: number;

  /**
   * Timestamp when the log group was created, in milliseconds since epoch.
   */
  timestamp: number;

  /**
   * Collection of log entries for this group.
   */
  logs: LogEntry[];

  /**
   * Collection of native log entries for this group.
   */
  nativeLogs: LogEntry[];

  /**
   * Server trace for correlating logs with server-side events.
   */
  serverTrace?: string;
}

interface LogEntry {
  /**
   * Emoji identifier used for visual categorization.
   */
  emoji: string;

  /**
   * Prefix string for hierarchical logging.
   */
  prefix: string;

  /**
   * The main log message.
   */
  log: string;

  /**
   * Time delta from previous log in milliseconds.
   */
  delta?: number;

  /**
   * Timestamp when this log was recorded.
   */
  timestamp?: number;
}

/**
 * A performance monitoring utility for tracking application startup metrics.
 * Records timestamps, logs events, and measures durations of operations during app initialization.
 * @example
 * ```ts
 * const performance = new AppStartPerformance();
 *
 * // Start tracking a complex operation
 * performance.time("🔧", "Initialize Config", () => {
 *   // Perform initialization tasks
 *   loadConfigurations();
 *   setupEnvironment();
 *   return { success: true };
 * });
 *
 * // Mark an important event
 * performance.mark("🚀", "App Ready");
 *
 * // Track an async operation
 * await performance.timeAsync("🔄", "Load User Data", async () => {
 *   const userData = await fetchUserProfile();
 *   return userData;
 * });
 *
 * // Add detailed information about the last operation
 * performance.addDetail("Cache Status", "Hit: 85%");
 *
 * // When startup completes, stop tracing automatically after 15 seconds or explicitly set an end time
 * performance.endTime = Date.now() + 5000; // 5 more seconds of tracing
 * ```
 */
export declare class AppStartPerformance {
  public constructor();

  /**
   * Whether the performance tracing is currently active.
   * @private
   */
  private isTracing_: boolean;

  /**
   * Timestamp when tracing should automatically stop.
   * @private
   */
  private endTime_: number;

  /**
   * Tracks the cumulative time spent on JavaScript imports.
   * Used to detect and log significant changes in import duration.
   */
  public lastImportDuration: number;

  /**
   * Collection of log groups, each containing performance logs for a tracing session.
   */
  public logGroups: LogGroup[];

  /**
   * Reference to the current active log array (points to the first group's logs by default).
   */
  public logs: LogEntry[];

  /**
   * Current prefix string prepended to log messages.
   * Used to create hierarchical logging with indentation.
   */
  public prefix: string;

  /**
   * Checks if performance tracing is currently active.
   * Tracing stops automatically when the end time is reached.
   *
   */
  public get isTracing(): boolean;

  /**
   * Gets the timestamp when tracing will end.
   */
  public get endTime(): number;

  /**
   * Sets the timestamp when tracing should end and enables tracing.
   * @param timestamp The new end time in milliseconds since epoch.
   */
  public set endTime(timestamp: number);

  /**
   * Resumes tracing if it was stopped.
   * Creates a new log group at the beginning of the log groups array.
   */
  public resumeTracing: () => void;

  /**
   * Records a performance mark.
   * @param emoji An emoji identifier for visual categorization.
   * @param message The message describing the mark.
   * @param delta Duration in milliseconds since the previous event.
   */
  public mark: (emoji: string, message: string, delta?: number) => void;

  /**
   * Records a mark and also logs it to the provided logger.
   * @param logger {@link Logger} instance to log the message.
   * @param emoji An emoji identifier for visual categorization.
   * @param message The message describing the mark.
   * @param delta Duration in milliseconds since the previous event.
   */
  public markAndLog: (logger: Logger, emoji: string, message: string, delta?: number) => void;

  /**
   * Adds a log detail about JavaScript import duration if it has changed significantly.
   * Checks if import time has increased by at least 25ms before logging.
   */
  public addImportLogDetail: () => void;

  /**
   * Records a mark with an automatically calculated delta from the previous log entry.
   * @param emoji An emoji identifier for visual categorization.
   * @param message The message describing the mark.
   */
  public markWithDelta: (emoji: string, message: string) => void;

  /**
   * Inserts a mark at a specific historical timestamp in the log.
   * @param emoji An emoji identifier for visual categorization.
   * @param message The message describing the mark.
   * @param timestamp The timestamp to associate with this mark.
   */
  public markAt: (emoji: string, message: string, timestamp: number) => void;

  /**
   * Adds a detail entry to the most recent log.
   * Useful for appending additional information to the previous log entry.
   * @param key The name of the detail.
   * @param value The value or description of the detail.
   */
  public addDetail: (key: string, value: string) => void;

  /**
   * Times a synchronous function execution and logs the duration.
   * @param emoji An emoji identifier for visual categorization.
   * @param operationName Name of the operation being timed.
   * @param operation The function to execute and time.
   * @returns The result returned by the operation function.
   */
  public time: <T>(emoji: string, operationName: string, operation: () => T) => T;

  /**
   * Times an asynchronous function execution and logs the duration.
   * @param emoji An emoji identifier for visual categorization.
   * @param operationName Name of the operation being timed.
   * @param operation The async function to execute and time.
   * @returns A promise resolving to the result of the operation function.
   */
  public timeAsync: <T>(
    emoji: string,
    operationName: string,
    operation: () => Promise<T>,
  ) => Promise<T>;

  /**
   * Attaches server-side trace information to the current log group.
   * @param serverTrace Server-side performance trace data.
   */
  public setServerTrace: (serverTrace: string) => void;
}
