/**
 * The Discord epoch timestamp in milliseconds (January 1, 2015 00:00:00 UTC).
 * Used as the base timestamp for all Discord snowflake calculations.
 * Represents the starting point for Discord's distributed ID generation system.
 */
export type DISCORD_EPOCH = 1420070400000;

/**
 * Maximum sequence number value for snowflake generation (4095).
 * Represents the highest value the sequence portion of a snowflake can contain
 * before overflow occurs within a single millisecond.
 */
export type MAX_SNOWFLAKE_SEQ = 4095;

/**
 * Extracts the UNIX timestamp from a Discord snowflake ID.
 * Converts the snowflake's timestamp portion back to milliseconds since Unix epoch.
 * Useful for determining when a Discord entity (message, user, etc.) was created.
 * @param id The snowflake ID string to extract timestamp from.
 * @returns UNIX timestamp in milliseconds when the snowflake was generated.
 * @example
 * ```ts
 * // Extract timestamp from message ID
 * const messageId = "1402577190318772295";
 * const timestamp = extractTimestamp(messageId);
 * const createdAt = new Date(timestamp);
 * console.log("Message created:", createdAt);
 *
 * // Check message age
 * const messageAge = Date.now() - extractTimestamp(messageId);
 * console.log("Message is", messageAge, "ms old");
 * ```
 */
export type ExtractTimestamp = (id: string) => number;

/**
 * Generates a snowflake ID from a UNIX timestamp.
 * Creates a minimal snowflake with only the timestamp portion set, suitable for range queries and timestamp-based operations.
 * @param timestamp UNIX timestamp in milliseconds.
 * @returns Snowflake ID string representing the given timestamp.
 * @example
 * ```ts
 * // Create snowflake for specific time
 * const timestamp = Date.now();
 * const snowflake = fromTimestamp(timestamp);
 *
 * // Create snowflake for start of day
 * const startOfDay = new Date().setHours(0, 0, 0, 0);
 * const dayStartSnowflake = fromTimestamp(startOfDay);
 *
 * // Use for range queries
 * const yesterday = Date.now() - 24 * 60 * 60 * 1000;
 * const afterSnowflake = fromTimestamp(yesterday);
 * ```
 */
export type FromTimestamp = (timestamp: number) => string;

/**
 * Generates a snowflake ID from a timestamp with a sequence number.
 * Creates a complete snowflake including both timestamp and sequence portions, used for generating unique IDs within the same millisecond.
 * @param timestamp UNIX timestamp in milliseconds.
 * @param sequence {@link SnowflakeSequence} instance providing sequence numbers.
 * @returns Complete snowflake ID string with timestamp and sequence.
 * @example
 * ```ts
 * // Generate multiple IDs in same millisecond
 * const sequence = new SnowflakeSequence();
 * const timestamp = Date.now();
 *
 * const id1 = fromTimestampWithSequence(timestamp, sequence);
 * const id2 = fromTimestampWithSequence(timestamp, sequence);
 * const id3 = fromTimestampWithSequence(timestamp, sequence);
 *
 * // All IDs have same timestamp but different sequence numbers
 * console.log(extractTimestamp(id1) === extractTimestamp(id2)); // true
 * ```
 */
export type FromTimestampWithSequence = (timestamp: number, sequence: SnowflakeSequence) => string;

/**
 * Creates a snowflake representing 1 millisecond before the given snowflake.
 * Useful for pagination and range queries when you need to fetch items created before a specific point in time.
 * @param id The reference snowflake ID.
 * @returns Snowflake ID representing 1ms before the input snowflake.
 */
export type AtPreviousMillisecond = (id: string) => string;

/**
 * Creates a snowflake representing 1 millisecond after the given snowflake.
 * Useful for pagination and range queries when you need to fetch items created after a specific point in time.
 * @param id The reference snowflake ID.
 * @returns Snowflake ID representing 1ms after the input snowflake.
 */
export type AtNextMillisecond = (id: string) => string;

/**
 * Calculates the age of a snowflake in milliseconds from current time.
 * Determines how long ago a Discord entity was created by comparing its snowflake timestamp to the current time.
 * @param id The snowflake ID to calculate age for.
 * @returns Age in milliseconds since the snowflake was created.
 */
export type Age = (id: string) => number;

/**
 * Compares two snowflake IDs for chronological ordering.
 * @param idA First snowflake ID to compare.
 * @param idB Second snowflake ID to compare.
 * @returns -1 if `idA` < `idB`, 0 if equal, 1 if `idA` > `idB`
 */
export type Compare = (idA: string | null, idB: string | null) => number;

/**
 * Returns whether a string is likely a valid Discord snowflake ID.
 * @param id The string to validate as a snowflake.
 */
export type IsProbablyAValidSnowflake = (id: string | null) => boolean;

/**
 * Sequence generator for creating unique snowflake IDs within the same millisecond.
 */
export declare class SnowflakeSequence {
  public constructor();

  /**
   * Current sequence number, automatically incremented with each `next()` call.
   * Starts at 0 and increases up to {@link MAX_SNOWFLAKE_SEQ}.
   */
  public seq: number;

  /**
   * Returns the next sequence number and increments the internal counter.
   * @throws {Error} Will throw an error when sequence exceeds {@link MAX_SNOWFLAKE_SEQ}.
   */
  public next: () => number;

  /**
   * Returns whether the next call to `next()` would cause an overflow.
   */
  public willOverflowNext: () => boolean;

  /**
   * Resets the sequence counter back to 0.
   */
  public reset: () => void;
}
