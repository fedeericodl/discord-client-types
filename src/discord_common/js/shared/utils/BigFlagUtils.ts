/**
 * Custom BigInt implementation for environments without native BigInt support.
 */
declare class HighLow {
  /**
   * @param parts Array of 16-bit integer parts representing the value.
   * @param str Cached string representation.
   */
  public constructor(parts: number[], str?: string);

  /**
   * Array of 16-bit integer parts representing the 64-bit value.
   * Stored in big-endian format with most significant parts first.
   */
  public parts: number[];

  /**
   * Cached string representation of the HighLow value.
   */
  public str: string | undefined;

  /**
   * Creates a {@link HighLow} instance from a decimal string representation.
   * @param decimalString The decimal number as a string.
   * @returns New {@link HighLow} instance representing the decimal value.
   */
  public static fromString: (decimalString: string) => HighLow;

  /**
   * Creates a {@link HighLow} instance with a single bit set at the specified position.
   * @param bitPosition The zero-based position of the bit to set (0-63).
   * @returns New {@link HighLow} instance with only the specified bit set.
   */
  public static fromBit: (bitPosition: number) => HighLow;

  /**
   * Extracts a specified number of bits from a {@link HighLow} value as an unsigned integer.
   * @param bitWidth The number of bits to extract (maximum 32 for safe conversion).
   * @param value The {@link HighLow} instance to extract bits from.
   * @returns Unsigned integer representation of the extracted bits.
   */
  public static asUintN: (bitWidth: number, value: HighLow) => number;

  /**
   * Performs bitwise AND operation with another {@link HighLow} instance.
   * @param other The {@link HighLow} instance to AND with.
   * @returns New {@link HighLow} instance containing the AND result.
   */
  public and: (other: HighLow) => HighLow;

  /**
   * Performs bitwise OR operation with another HighLow instance.
   * @param other The {@link HighLow} instance to OR with.
   * @returns New {@link HighLow} instance containing the OR result.
   */
  public or: (other: HighLow) => HighLow;

  /**
   * Performs bitwise XOR operation with another {@link HighLow} instance.
   * @param other The {@link HighLow} instance to XOR with.
   * @returns New {@link HighLow} instance containing the XOR result.
   */
  public xor: (other: HighLow) => HighLow;

  /**
   * Performs bitwise NOT operation, inverting all bits.
   */
  public not: () => HighLow;

  /**
   * Returns whether this {@link HighLow} instance is equal to another {@link HighLow} instance.
   * @param other The {@link HighLow} instance to compare with.
   */
  public equals: (other: HighLow) => boolean;

  /**
   * Converts and returns the {@link HighLow} value to its decimal string representation.
   */
  public toString: () => string;

  /**
   * Returns the string representation for JSON serialization.
   */
  public toJSON: () => string;
}

type BigFlag = bigint | HighLow;

/**
 * Returns whether a value is a {@link BigFlag}.
 * @param value The value to check for BigFlag type.
 */
export type IsBigFlag = (value: unknown) => value is BigFlag;

/**
 * Deserializes a string or number into a {@link BigFlag} for bitwise operations.
 * @param value String, number, or existing BigFlag to deserialize.
 * @returns BigFlag representation of the input value.
 */
export type Deserialize = (value: string | number | BigFlag) => BigFlag;

/**
 * Performs bitwise AND operation between two {@link BigFlag BigFlags} (intersection).
 * @param flags First BigFlag operand.
 * @param mask Second BigFlag operand (filter mask).
 * @returns BigFlag with bits set only where both operands have bits set.
 */
export type Filter = (flags?: BigFlag, mask?: BigFlag) => BigFlag;

/**
 * Performs bitwise NOT operation on a {@link BigFlag} (inversion).
 * @param flags The BigFlag to invert.
 * @returns BigFlag with all bits inverted.
 */
export type Invert = (flags?: BigFlag) => BigFlag;

/**
 * Returns whether two {@link BigFlag BigFlags} are exactly equal.
 * @param flagsA First BigFlag to compare.
 * @param flagsB Second BigFlag to compare.
 */
export type Equals = (flagsA?: BigFlag | null, flagsB?: BigFlag | null) => boolean;

/**
 * Combines multiple {@link BigFlag BigFlags} using bitwise OR operation (union).
 * @param flags Variable number of BigFlags to combine
 * @returns Single BigFlag containing all bits from input flags
 */
export type Combine = (...flags: BigFlag[]) => BigFlag;

/**
 * Returns whether a {@link BigFlag} contains all specified flag bits.
 * @param flags The BigFlag to test for presence of bits.
 * @param testFlags The BigFlag containing bits to test for.
 */
export type Has = (flags: BigFlag, testFlags: BigFlag) => boolean;

/**
 * Returns whether a {@link BigFlag} contains any of the specified flag bits.
 * @param flags The BigFlag to test for presence of any bits.
 * @param testFlags The BigFlag containing bits to test for.
 */
export type HasAny = (flags: BigFlag, testFlags: BigFlag) => boolean;

/**
 * Adds flag bits to an existing {@link BigFlag} using bitwise OR operation.
 * @param flags The base BigFlag to add bits to.
 * @param bitsToAdd The BigFlag containing bits to add.
 * @returns New BigFlag with additional bits set.
 */
export type Add = (flags: BigFlag, bitsToAdd: BigFlag) => BigFlag;

/**
 * Removes flag bits from an existing {@link BigFlag} using bitwise operations.
 * @param flags The base BigFlag to remove bits from.
 * @param bitsToRemove The BigFlag containing bits to remove.
 * @returns New BigFlag with specified bits removed.
 */
export type Remove = (flags: BigFlag, bitsToRemove: BigFlag) => BigFlag;

/**
 * Creates a {@link BigFlag} with a single bit set at the specified position.
 * @param bitPosition The zero-based bit position to set (0-63 for 64-bit flags).
 * @returns BigFlag with only the specified bit set.
 */
export type GetFlag = (bitPosition: number) => BigFlag;

/**
 * Converts a {@link BigFlag} to an unsigned integer with specified bit width.
 * @param bitWidth The number of bits to extract (max 32 for safe integer conversion).
 * @param flags The BigFlag to convert to unsigned integer.
 * @returns Unsigned integer representation of the specified bits.
 */
export type AsUintN = (bitWidth: number, flags: BigFlag) => number;
