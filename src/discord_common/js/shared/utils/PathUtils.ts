/**
 * Generates a secure login URL.
 * @param returnPath The path to redirect to after successful login.
 * @param includeHost Whether to include the full host URL in the result.
 * @param params Additional query parameters to append to the login URL.
 * @returns The complete login URL with encoded parameters.
 */
export type GetLoginPath = (
  returnPath: string | null,
  includeHost?: boolean,
  params?: string,
) => string;

/**
 * Wrapper class for path parameters that should not be URL encoded.
 */
export declare class UnescapedPathParam {
  /**
   * @param value The raw value that should not be URL encoded
   */
  constructor(value: string);

  /**
   * The raw unescaped value to include in paths.
   */
  public value: string;

  /**
   * Returns the raw unescaped value as a string.
   */
  public toString: () => string;
}

/**
 * Wraps path generator functions with automatic URL encoding for security.
 * Prevents path injection attacks by encoding all arguments except those marked
 * as {@link UnescapedPathParam} or characters specified as safe.
 * @param paths Object containing path generator functions to wrap.
 * @param safeCharacters Optional array of characters that should not be encoded.
 * @returns New object with wrapped functions that automatically encode arguments.
 */
export type WrapPaths = <T extends Record<string, unknown>>(
  paths: T,
  safeCharacters?: string[],
) => T;
