type LogFunction = (
  loggerName: string,
  level: string,
  message: unknown,
  ...args: unknown[]
) => void;

export type SetLogFn = (logFunction: LogFunction) => void;

export type SetNativeLogFn = (nativeLogFunction: LogFunction) => void;

export type DefaultLogFn = LogFunction;

/**
 * A flexible logging utility.
 * @example
 * ```ts
 * // Create a logger for a specific component
 * const logger = new Logger("AuthService");
 *
 * // Log at different levels
 * logger.info("User authentication started");
 *
 * try {
 *   // Perform operations...
 *   logger.log("Authentication successful", { userId: "123", permissions: ["read", "write"] });
 * } catch (error) {
 *   logger.error("Authentication failed", error);
 * }
 *
 * // Time an operation
 * const result = logger.time("Database query completed in", () => {
 *   return performDatabaseQuery();
 * });
 *
 * // Log sensitive data when absolutely necessary (avoid if possible)
 * logger.logDangerously("Debug data:", sensitiveObject);
 * ```
 */
export declare class Logger {
  /**
   * @param name The name of the logger that will appear in log messages. Defaults to "default".
   */
  public constructor(name?: string);

  /**
   * The name of this logger instance.
   * Used as a prefix in log messages to identify the source.
   */
  public name: string;

  /**
   * Whether logging to native platform is enabled.
   * When true, logs are sent to both standard and native loggers.
   */
  public nativeLoggerEnabled: boolean;

  /**
   * Enables or disables the native logger.
   * @param enabled Whether to enable native logging.
   */
  public enableNativeLogger: (enabled: boolean) => void;

  /**
   * Logs a message at the "log" level without PII filtering.
   * Only use this for messages that definitely don't contain sensitive data.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public logDangerously: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "log" level.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public log: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "debug" level without PII filtering.
   * Only use this for verbose debugging that definitely doesn't contain sensitive data.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public verboseDangerously: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "debug" level.
   * Used for detailed debugging information.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public verbose: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "info" level.
   * Used for general informational messages.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public info: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "warn" level.
   * Used for warning messages about potential issues.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public warn: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "error" level.
   * Used for error messages and exceptions.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public error: (message: unknown, ...args: unknown[]) => void;

  /**
   * Logs a message at the "trace" level.
   * Used for low-level diagnostic information.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public trace: (message: unknown, ...args: unknown[]) => void;

  /**
   * Times a function execution and logs the duration.
   * @param message Message to log with the timing information.
   * @param operation Function to execute and time.
   * @returns The result of the operation function.
   */
  public time: <T>(message: string, operation: () => T) => T;

  /**
   * Logs a message that only appears in log files, not in the console.
   * Useful for detailed logs that shouldn't clutter the console.
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public fileOnly: (message: unknown, ...args: unknown[]) => void;
}
