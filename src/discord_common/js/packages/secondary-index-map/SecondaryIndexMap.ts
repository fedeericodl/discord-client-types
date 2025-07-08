/**
 * A specialized map implementation with support for secondary indexes.
 * Provides efficient lookups by both primary key and indexed properties.
 * @template V The type of values stored in the map.
 * @example
 * ```ts
 * // Create a map of users indexed by status
 * const userMap = new SecondaryIndexMap<User>(
 *   // Function to extract index keys from values
 *   (user) => [user.status],
 *   // Function to sort values
 *   (value) => value.name.localeCompare(value.name)
 * );
 *
 * // Add users to the map
 * userMap.set("1", { id: 1, name: "Alice", status: "online" });
 * userMap.set("2", { id: 2, name: "Bob", status: "offline" });
 * userMap.set("3", { id: 3, name: "Charlie", status: "online" });
 *
 * // Get all online users (efficiently using the index)
 * const onlineUsers = userMap.values("online");
 * ```
 */
export declare class SecondaryIndexMap<V> {
  /**
   * @param indexBy Function that returns array of index keys for a given value.
   * @param sortBy Function to determine the sort order of values.
   * @param isEqual Function to compare equality of values (used to detect changes). Default is strict equality.
   */
  public constructor(
    indexBy: (value: V) => string[],
    sortBy: (value: V) => number | string | undefined,
    isEqual?: (a: V, b: V) => boolean,
  );

  /**
   * Extracts index keys from a value.
   * Each index key will create a separate entry in the secondary indexes.
   * @param value The value to extract index keys from.
   * @returns An array of index keys.
   */
  public indexBy: (value: V) => string[];

  /**
   * Sorts values for a given index key.
   * @param value The value to sort.
   * @returns The sort order of the value.
   */
  public sortBy: (value: V) => number | string | undefined;

  /**
   * Compares two values for equality.
   */
  public isEqual: (a: V, b: V) => boolean;

  /**
   * Primary storage mapping keys to values.
   */
  public valueMap: Map<string, V>;

  /**
   * Ordered array of all values in the map.
   */
  public valueArray: V[];

  /**
   * Secondary indexes mapping index keys to arrays of values.
   */
  public valueIndexes: Record<string, V[]>;

  /**
   * Cached copy of valueIndexes for getter.
   */
  public valueIndexesForGetter: Record<string, V[]>;

  /**
   * Flag indicating if the indexes are dirty and need to be regenerated.
   */
  public dirty: boolean;

  /**
   * Version counter that increments on changes to the map.
   * @private
   */
  private _version: number;

  /**
   * Gets the current version of the map.
   */
  public get version(): number;

  /**
   * Returns all secondary indexes.
   * @param mutable Whether to return a mutable copy of the indexes.
   * @returns Record mapping index keys to arrays of values.
   */
  public indexes: (mutable?: boolean) => Record<string, V[]>;

  /**
   * Returns an iterator over all primary keys in the map.
   */
  public keys: () => MapIterator<string>;

  /**
   * Gets values by optional index key.
   * @param indexKey Secondary index key to filter values.
   * @param mutable Whether to return a mutable copy of the values.
   * @returns Array of values matching the index key, or all values if no index key provided.
   */
  public values: (indexKey?: string, mutable?: boolean) => V[];

  /**
   * Gets the number of values in the map or matching a specific index.
   * @param indexKey Secondary index key to count values for.
   * @returns Number of values in the map or matching the index.
   */
  public size: (indexKey?: string) => number;

  /**
   * Removes all entries from the map.
   */
  public clear: () => void;

  /**
   * Checks if a key exists in the map.
   * @param key The key to check.
   * @returns True if the key exists in the map, false otherwise.
   */
  public has: (key: string) => boolean;

  /**
   * Retrieves a value by its primary key.
   * @param key The key to retrieve.
   * @returns The associated value or undefined if not found.
   */
  public get: (key: string) => V | undefined;

  /**
   * Sets or updates a value in the map and updates all indexes.
   * @param key The primary key to set.
   * @param value The value to set, or null to remove the key.
   * @returns Whether the map was changed.
   */
  public set: (key: string, value: V | null) => boolean;

  /**
   * Removes a value from the map and updates all indexes.
   * @param key The key to remove.
   * @returns Whether the map was changed.
   */
  public delete: (key: string) => boolean;

  /**
   * Gets or creates an index array for a given index key.
   * @param indexKey The index key to get an array for.
   * @returns Array of values for the given index key.
   */
  public getIndex: (indexKey: string) => V[];
}
