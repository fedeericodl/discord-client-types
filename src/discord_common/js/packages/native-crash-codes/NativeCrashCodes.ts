/**
 * Generates a human-readable description for a Windows exception code.
 * For negative values (Windows exception codes), converts to hex and looks up the type.
 * For positive values, simply returns the string representation of the number.
 * @param code The exception code
 * @returns A formatted description string containing both the hex code and exception type.
 */
export type GetExceptionDescription = (code: number) => string;

/**
 * Retrieves the symbolic name for a Windows exception code.
 * Converts the numeric code to its hexadecimal form and looks up the corresponding exception type name.
 * @param code The exception code.
 * @returns The exception type name if recognized, otherwise the hex code.
 */
export type GetExceptionCode = (code: number) => string;
