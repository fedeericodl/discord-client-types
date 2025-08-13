/**
 * Returns the current time as a number (timestamp).
 */
export type Now = () => number;

/**
 * Provides timestamp production functionality.
 */
export declare class TimeStampProducerImpl {
  /**
   * Returns the current timestamp as a number.
   */
  public now: () => number;
}

/**
 * Instance of {@link TimeStampProducerImpl} that provides the current timestamp.
 */
export type TimeStampProducer = TimeStampProducerImpl;

/**
 * A utility class to represent and manipulate time durations.
 * Provides methods for creating, comparing, and performing arithmetic on time spans.
 * @example
 * ```ts
 * // Create a time span of 2 hours and 30 minutes
 * const timeSpan = new TimeSpan(2, 30);
 *
 * // Get duration in different units
 * const milliseconds = timeSpan.asMilliseconds(); // 9000000
 * const seconds = timeSpan.asSeconds();           // 9000
 * const minutes = timeSpan.asMinutes();           // 150
 *
 * // Create from static methods
 * const oneHour = TimeSpan.fromHours(1);
 * const twoMinutes = TimeSpan.fromMinutes(2);
 *
 * // Perform arithmetic operations
 * const combined = oneHour.add(twoMinutes);
 * const difference = oneHour.subtract(twoMinutes);
 * ```
 */
export declare class TimeSpanClass {
  /**
   * @param hours Number of hours
   * @param minutes Number of minutes
   * @param seconds Number of seconds
   * @param milliseconds Number of milliseconds
   */
  public constructor(hours?: number, minutes?: number, seconds?: number, milliseconds?: number);

  /**
   * The total time duration in milliseconds.
   */
  public milliseconds: number;

  /**
   * Returns the total duration in milliseconds.
   */
  public asMilliseconds: () => number;

  /**
   * Returns the total duration in seconds.
   */
  public asSeconds: () => number;

  /**
   * Returns the total duration in minutes.
   */
  public asMinutes: () => number;

  /**
   * Returns the total duration in hours.
   */
  public asHours: () => number;

  /**
   * Adds another {@link TimeSpanClass TimeSpan} to this one and returns a new {@link TimeSpanClass TimeSpan}.
   * @param timeSpan The time span to add.
   * @returns A new {@link TimeSpanClass TimeSpan} representing the sum.
   */
  public add: (timeSpan: TimeSpanClass) => TimeSpanClass;

  /**
   * Subtracts another {@link TimeSpanClass TimeSpan} from this one and returns a new {@link TimeSpanClass TimeSpan}.
   * @param timeSpan The time span to subtract.
   * @returns A new {@link TimeSpanClass TimeSpan} representing the difference.
   */
  public subtract: (timeSpan: TimeSpanClass) => TimeSpanClass;

  /**
   * Subtracts another {@link TimeSpanClass TimeSpan} from this one and returns a new {@link TimeSpanClass TimeSpan}.
   * If the result would be negative, returns a zero {@link TimeSpanClass TimeSpan} instead.
   * @param timeSpan The time span to subtract.
   * @returns A new {@link TimeSpanClass TimeSpan} representing the difference or zero if negative.
   */
  public subtractOrZero: (timeSpan: TimeSpanClass) => TimeSpanClass;

  /**
   * Checks whether this {@link TimeSpanClass TimeSpan} is greater than another.
   * @param timeSpan The time span to compare against
   */
  public isGreaterThan: (timeSpan: TimeSpanClass) => boolean;

  /**
   * Checks whether this {@link TimeSpanClass TimeSpan} is greater than or equal to another.
   * @param timeSpan The time span to compare against
   */
  public isGreaterOrEqualTo: (timeSpan: TimeSpanClass) => boolean;
}

export type TimeSpan = typeof TimeSpanClass & {
  /**
   * Creates a new {@link TimeSpanClass TimeSpan} from a duration in milliseconds.
   * @param milliseconds The duration in milliseconds
   * @returns A new {@link TimeSpanClass TimeSpan} instance
   */
  fromMilliseconds: (milliseconds: number) => TimeSpanClass;

  /**
   * Creates a new {@link TimeSpanClass TimeSpan} from a duration in seconds.
   * @param seconds The duration in seconds
   * @returns A new {@link TimeSpanClass TimeSpan} instance
   */
  fromSeconds: (seconds: number) => TimeSpanClass;

  /**
   * Creates a new {@link TimeSpanClass TimeSpan} from a duration in minutes.
   * @param minutes The duration in minutes
   * @returns A new {@link TimeSpanClass TimeSpan} instance
   */
  fromMinutes: (minutes: number) => TimeSpanClass;

  /**
   * Creates a new {@link TimeSpanClass TimeSpan} from a duration in hours.
   * @param hours The duration in hours
   * @returns A new {@link TimeSpanClass TimeSpan} instance
   */
  fromHours: (hours: number) => TimeSpanClass;
};

/**
 * A utility class to measure elapsed time, similar to a physical stopwatch.
 * @example
 * ```ts
 * // Create and start a new stopwatch
 * const stopwatch = StopWatch.startNew();
 *
 * // Get elapsed time as a TimeSpan
 * const elapsed = stopwatch.elapsed();
 * console.log(`Operation took ${elapsed.asMilliseconds()} ms`);
 *
 * // Stop the stopwatch
 * stopwatch.stop();
 *
 * // Resume timing
 * stopwatch.start();
 *
 * // Reset the stopwatch
 * stopwatch.reset();
 * ```
 */
export declare class StopWatch {
  /**
   * @param timeStampProducer An optional timestamp producer to use for time measurements.
   */
  public constructor(timeStampProducer?: TimeStampProducer);

  /**
   * The timestamp producer used to measure time.
   */
  public timeStampProducer: TimeStampProducer;

  /**
   * The timestamp when the stopwatch was started.
   * Will be undefined if the stopwatch is not running.
   */
  public startTime: number | undefined;

  /**
   * Accumulated time in milliseconds when the stopwatch is not running.
   * Used to track total elapsed time across multiple start/stop cycles.
   */
  public timePassed: number;

  /**
   * Returns the last elapsed time in milliseconds.
   */
  public get lastElapsed(): number;

  /**
   * Returns the timestamp when the stopwatch was last started.
   */
  public get lastStartTime(): number | undefined;

  /**
   * Starts the stopwatch if it's not already running.
   * If already running, this method has no effect.
   */
  public start: () => void;

  /**
   * Restarts the stopwatch by setting the start time to the current time.
   * Previous elapsed time is not preserved.
   */
  public restart: () => void;

  /**
   * Resets the stopwatch to its initial state.
   * Clears start time and accumulated time.
   */
  public reset: () => void;

  /**
   * Stops the stopwatch if it's running.
   * Accumulated time is updated with the elapsed time since the last start.
   */
  public stop: () => void;

  /**
   * Sets the running state of the stopwatch.
   * @param running Whether to start or stop the stopwatch.
   */
  public toggle: (running: boolean) => void;

  /**
   * Returns the total elapsed time as a {@link TimeSpanClass TimeSpan}.
   * @returns A {@link TimeSpanClass TimeSpan} representing the elapsed time.
   */
  public elapsed: () => TimeSpanClass;

  /**
   * Returns whether the stopwatch is currently running.
   */
  public isRunning: () => boolean;

  /**
   * Creates and starts a new {@link StopWatch} instance.
   * @returns A new, started {@link StopWatch} instance.
   * @static
   */
  public static startNew: () => StopWatch;
}

/**
 * A utility class that tracks duration of enabled state.
 * Manages a stopwatch that runs only when the enabled state is true.
 * @example
 * ```ts
 * // Create a DurationEnabled instance that starts enabled
 * const tracker = new DurationEnabled(true);
 *
 * // Later, disable it to pause duration tracking
 * tracker.value = false;
 *
 * // Check current enabled status
 * if (tracker.value) {
 *   console.log("Currently enabled");
 * }
 *
 * // Re-enable tracking
 * tracker.value = true;
 *
 * // Get total duration in different units
 * console.log(`Enabled for ${tracker.totalDuration()} ms`);
 * console.log(`Enabled for ${tracker.totalDurationSeconds()} seconds`);
 * ```
 */
export declare class DurationEnabled {
  /**
   * @param enabled Initial enabled state. If true, duration tracking starts immediately.
   * @param timeStampProducer Optional timestamp producer to use for time measurements.
   */
  public constructor(enabled: boolean, timeStampProducer?: TimeStampProducer);

  /**
   * The stopwatch used to track duration.
   * Runs only when the enabled state is true.
   */
  public stopwatch: StopWatch;

  /**
   * The current enabled state.
   */
  public state: boolean;

  /**
   * Resets the stopwatch to its initial state.
   * Clears start time and accumulated time.
   */
  public reset: () => void;

  /**
   * Sets the enabled state.
   * @param enabled Whether to enable or disable the instance.
   */
  public set value(enabled: boolean);

  /**
   * Returns the current enabled state.
   */
  public get value(): boolean;

  /**
   * Returns the total duration in milliseconds this instance has been in the enabled state.
   */
  public totalDuration: () => number;

  /**
   * Returns the total duration in seconds this instance has been in the enabled state.
   */
  public totalDurationSeconds: () => number;
}

/**
 * Configuration options for timeout operations.
 */
interface TimeOutOptions {
  /**
   * The maximum duration to wait before timing out.
   */
  timeout: TimeSpanClass;

  /**
   * Interval between condition checks.
   */
  sleep?: TimeSpanClass;
}

/**
 * A utility class for managing timeout operations.
 * @example
 * ```ts
 * // Create and start a timeout of 5 seconds
 * const timeout = TimeOut.startNew(TimeSpan.fromSeconds(5));
 *
 * // Check if the timeout has been reached
 * if (timeout.hasTimedOut()) {
 *   console.log("Operation timed out");
 * }
 *
 * // Wait for a condition with timeout
 * const success = await TimeOut.waitFor(
 *   TimeSpan.fromSeconds(10),
 *   async () => await checkSomeCondition()
 * );
 *
 * if (success) {
 *   console.log("Condition met within timeout");
 * } else {
 *   console.log("Condition not met before timeout");
 * }
 * ```
 */
export declare class TimeOut {
  /**
   * @param timeout The maximum duration before timing out.
   */
  public constructor(timeout: TimeSpanClass);

  /**
   * The maximum duration before timing out.
   */
  public timeout: TimeSpanClass;

  /**
   * The stopwatch used to track elapsed time.
   */
  public watch: StopWatch;

  /**
   * Returns whether the timeout duration has been reached.
   * @throws Will throw an error if {@link TimeOut.start} has not been called.
   */
  public hasTimedOut: () => boolean;

  /**
   * Starts the timeout tracking.
   */
  public start: () => void;

  /**
   * Creates and starts a new {@link TimeOut} instance.
   * @param timeout The maximum duration before timing out.
   * @returns A new, started {@link TimeOut} instance.
   * @static
   */
  public static startNew: (timeout: TimeSpanClass) => TimeOut;

  /**
   * Waits for a condition to be met with a timeout.
   * Periodically checks the condition until it returns true or the timeout is reached.
   * @param options Either a {@link TimeSpan} representing the timeout duration or a {@link TimeOutOptions} object.
   * @param condition An async function that returns true when the condition is met.
   * @returns A promise that resolves to true if the condition was met, or false if the timeout was reached.
   * @static
   */
  public static waitFor: (
    options: TimeSpanClass | TimeOutOptions,
    condition: () => Promise<boolean>,
  ) => Promise<boolean>;
}

/**
 * Pauses execution for the specified duration.
 * @param duration Either a number of milliseconds or a {@link TimeSpanClass TimeSpan}.
 * @returns A promise that resolves after the specified duration.
 * @example
 * ```ts
 * // Sleep for 2 seconds
 * await sleep(2000);
 *
 * // Sleep using a TimeSpan
 * await sleep(TimeSpan.fromSeconds(2));
 * ```
 */
export type Sleep = (duration: number | TimeSpanClass) => Promise<void>;

export enum TimeUnits {
  NONE = "NONE",
  SECONDS = "SECONDS",
  MINUTES = "MINUTES",
  HOURS = "HOURS",
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
}

/**
 * Converts a time value from minutes to the specified time unit.
 * @param minutes The time value in minutes to convert.
 * @param targetUnit The target time unit to convert to.
 * @returns The converted time value in the target unit.
 * @example
 * ```ts
 * // Convert 120 minutes to hours
 * const hours = convertMinutesToGivenTimeUnit(120, TimeUnits.HOURS); // 2
 *
 * // Convert 60 minutes to seconds
 * const seconds = convertMinutesToGivenTimeUnit(60, TimeUnits.SECONDS); // 3600
 *
 * // Convert 1440 minutes (1 day) to days
 * const days = convertMinutesToGivenTimeUnit(1440, TimeUnits.DAYS); // 1
 * ```
 */
export type ConvertMinutesToGivenTimeUnit = (minutes: number, targetUnit: TimeUnits) => number;

/**
 * Mapping of time units to their maximum values in minutes.
 */
export type TimeUnitMax = { unit: TimeUnits; max: number }[];

/**
 * Determines the most appropriate time unit for a given time value in minutes.
 * The selected unit will be the largest unit where the converted value is at least 1 and matches the filter function.
 * @param minutes Time value in minutes.
 * @param filterFn Function to filter acceptable time units.
 * @returns The most appropriate time unit or null if no matching unit is found.
 * @example
 * ```ts
 * // Find appropriate unit for 90 minutes, allowing any unit
 * const unit = getTimeUnit(90, () => true); // "HOURS"
 *
 * // Find appropriate unit for 90 minutes, only allowing days or larger
 * const largeUnit = getTimeUnit(90, (unit) =>
 *   [TimeUnits.DAYS, TimeUnits.WEEKS, TimeUnits.MONTHS, TimeUnits.YEARS].includes(unit)
 * ); // null (90 minutes is less than a day)
 * ```
 */
export type GetTimeUnit = (
  time: number,
  predicate: (unit: TimeUnits) => boolean,
) => TimeUnits | null;

/**
 * Converts a time value in minutes to the most appropriate unit and value.
 * Returns an object containing the selected unit and the converted time value.
 * @param minutes Time value in minutes.
 * @param allowedUnits Array of time units that are acceptable for the conversion.
 * @returns An object containing the selected unit and converted time value.
 * @example
 * ```ts
 * // Convert 90 minutes to the most appropriate unit
 * getTimeAndUnit(90, [TimeUnits.MINUTES, TimeUnits.HOURS]);
 * // { unit: "HOURS", time: 1 }
 *
 * // Convert 90 minutes, but only allow minutes
 * getTimeAndUnit(90, [TimeUnits.MINUTES]);
 * // { unit: "MINUTES", time: 90 }
 * ```
 */
export type GetTimeAndUnit = (
  minutes?: number,
  allowedUnits?: TimeUnits[],
) => { unit: TimeUnits | null; time: number | null };
