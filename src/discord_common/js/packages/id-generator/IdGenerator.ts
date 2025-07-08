import type { BigInteger } from "big-integer";

// cspell:ignore BAAAAAAAA

/**
 * A utility class that generates unique identifiers based on user IDs.
 * Creates Base64-encoded IDs that include user ID, timestamp, and sequence information.
 * @example
 * ```ts
 * // Create an ID generator
 * const generator = new IdGenerator();
 *
 * // Generate a unique ID based on a user ID
 * const userId = "175928847299117063";
 * const uniqueId = generator.generate(userId);
 * console.log(uniqueId); // Outputs a unique Base64 string like "BwACwVoGcQLlSo+r0lM0XpcBAAAAAAAA"
 *
 * // Generate multiple IDs for the same user (each will be unique)
 * const id1 = generator.generate(userId);
 * const id2 = generator.generate(userId);
 * console.log(id1 !== id2); // true - IDs are unique even for the same user
 * ```
 */
export declare class IdGenerator {
  public constructor();

  /**
   * A random 32-bit prefix used to ensure uniqueness across generator instances.
   * @private
   */
  private _randomPrefix: number;

  /**
   * Timestamp when this generator was created, stored as a BigInteger.
   * Used as part of the generated ID to provide temporal uniqueness.
   * @private
   */
  private _creationTime: BigInteger;

  /**
   * An incrementing counter for sequential IDs.
   * Ensures uniqueness for multiple IDs generated in rapid succession.
   * @private
   */
  private _sequenceNumber: number;

  /**
   * Generates a unique identifier based on a user ID.
   * @param id A user ID or other identifier to incorporate into the generated ID.
   * @returns A unique Base64-encoded string identifier.
   */
  public generate: (id: string) => string;
}
