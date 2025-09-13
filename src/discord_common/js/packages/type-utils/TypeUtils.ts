/**
 * Returns the exact value passed to it.
 * Useful for type assertion and preserving literal types.
 * @param value The value to be returned unchanged.
 * @returns The exact same value that was passed in.
 * @example
 * ```ts
 * // Without `exact`, the array is widened to string[]
 * const modes = ["dark", "light"];
 *
 * // With `exact`, the literal types are preserved
 * const exactModes = exact(["dark", "light"]);
 * ```
 */
export type Exact = <const T>(value: T) => T;

/**
 * Returns whether an object has a property with the specified name.
 * Type-safe alternative to the built-in `hasOwnProperty` method.
 * @param obj The object to check.
 * @param prop The property name to check for.
 * @example
 * ```ts
 * const user = { id: 123, name: "User" };
 *
 * if (hasOwnProperty(user, "id")) {
 *   console.log(user.id); // 123
 * }
 * ```
 */
export type HasOwnProperty = (obj: object, prop: PropertyKey) => boolean;

/**
 * Performs an unsafe cast of an object to a different type by changing its prototype.
 * Use with extreme caution as this circumvents TypeScript's type safety.
 * This is useful when restoring class methods on plain objects.
 * @param obj The object to cast.
 * @param targetConstructor The constructor function of the target type.
 * @returns The same object with a new prototype.
 * @example
 * ```ts
 * class User {
 *   constructor(name: string) {}
 *
 *   greet() {
 *     return `Hello, ${this.name}!`;
 *   }
 * }
 *
 * // Simulate loading a plain object (e.g., from JSON)
 * const raw = { name: "Alice" };
 *
 * // TypeScript would not allow calling `greet()` on raw:
 * raw.greet(); // Property 'greet' does not exist
 *
 * // But after casting, we get class methods back
 * const user = dangerouslyCast(raw, User);
 *
 * user.greet(); // "Hello, Alice!"
 * user instanceof User; // true
 * ```
 */
export type DangerouslyCast = <T>(
  obj: unknown,
  targetConstructor: new (...args: unknown[]) => T,
) => T;

export interface AssertUnreachableOptions {
  /**
   * Whether to throw an error if the value is reached.
   * @default true
   */
  andFail?: boolean;
}

/**
 * Ensures that a value of a discriminated union type has been handled exhaustively.
 * Used at the end of switch statements to cause a compile-time error if a case is missed.
 * @param value The value that should be unreachable.
 * @param options The options for the assertion.
 * @throws {Error} Will throw an error if `options.andFail` is true and the value is reached.
 * @example
 * ```ts
 * type Shape = { kind: "circle", radius: number } | { kind: "square", size: number };
 *
 * function getArea(shape: Shape): number {
 *   switch (shape.kind) {
 *     case "circle":
 *       return Math.PI * shape.radius * shape.radius;
 *     case "square":
 *       return shape.size * shape.size;
 *   }
 *
 *   // If all cases are handled, this line is never executed
 *   // If a new shape is added to the type, this will cause a compile error
 *   return assertUnreachable(shape);
 * }
 * ```
 */
export type AssertUnreachable = (value: never, options?: AssertUnreachableOptions) => never;
