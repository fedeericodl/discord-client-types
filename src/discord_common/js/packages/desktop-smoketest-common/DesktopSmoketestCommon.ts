/**
 * A logger class that prefixes log messages with timestamps and a logger name.
 * Provides methods for different log levels that wrap the standard console functions.
 */
export declare class DatedLogger {
  /**
   * @param name A name that identifies this logger in the output.
   */
  public constructor(name: string);

  /**
   * The name of this logger instance.
   * Appears in every log message to identify the source.
   */
  public name: string;

  /**
   * Formats log arguments by adding timestamp and logger name prefix.
   * @param message The main message to log.
   * @param args Additional arguments to pass to the console method.
   * @returns An array of arguments ready to pass to console methods.
   */
  public getConsoleArgs: (message: string, args: string[]) => string[];

  /**
   * Logs a message at the "log" level (general information).
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public log: (message: string, ...args: string[]) => void;

  /**
   * Logs a message at the "info" level (noteworthy but normal operations).
   * @param message The message to log.
   * @param args Additional values to include in the log.
   */
  public info: (message: string, ...args: string[]) => void;

  /**
   * Logs a message at the "warn" level (potential issues or concerning situations).
   * @param message The warning message to log.
   * @param args Additional values to include in the log.
   */
  public warn: (message: string, ...args: string[]) => void;

  /**
   * Logs a message at the "error" level (errors and exceptions).
   * @param message The error message to log.
   * @param args Additional values to include in the log (often error objects).
   */
  public error: (message: string, ...args: string[]) => void;

  /**
   * Generates a timestamp string in ISO format for the current time.
   * @static
   */
  public static getDateTimeString: () => string;
}
