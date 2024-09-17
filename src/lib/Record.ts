type RecordUpdater<V> = (value: V) => V;

/**
 * Represents a generic record with a set of methods to manipulate its data.
 * @template RecordData The type of data contained in the record.
 * @example
 * ```ts
 * type ExampleRecordData = {
 *   id: string;
 *   name?: string;
 *   age?: number;
 * };
 *
 * class ExampleRecord extends Record<ExampleRecordData> {
 *   public id: string;
 *   public name: string;
 *   public age?: number;
 *
 *   public constructor(data: ExampleRecordData) {
 *     super(data);
 *     this.id = data.id;
 *     this.name = data.name ?? "John Doe";
 *     this.age = data.age;
 *   }
 * }
 *
 * const example = new ExampleRecord({ id: "1", age: 20 });
 * ```
 */
export declare class Record<RecordData = { [index: string]: unknown }> {
  /**
   * @param data An object containing the initial data for the record. This data is used to initialize the record's properties.
   */
  public constructor(data: RecordData);

  /**
   * Returns a plain JavaScript object representing the record.
   */
  public toJS: () => RecordData;

  /**
   * Sets the value of a key in the record.
   * @param key The key to set.
   * @param value The value to set.
   * @returns The updated `Record` instance.
   */
  public set: <K extends keyof RecordData>(key: K, value: RecordData[K]) => this;

  /**
   * Merges the given data into the record.
   * @param data The data to merge.
   * @returns The updated `Record` instance.
   */
  public merge: (data: RecordData) => this;

  /**
   * Updates the value of a key in the record using an updater function.
   * @param key The key to update.
   * @param defaultValue The default value to use if the key does not exist or the updater function.
   * @param updater The updater function to use.
   * @returns The updated `Record` instance.
   */
  public update: <K extends keyof RecordData>(
    key: K,
    defaultValue: RecordData[K] | RecordUpdater<RecordData[K]>,
    updater?: RecordUpdater<RecordData[K]>,
  ) => this;
}
