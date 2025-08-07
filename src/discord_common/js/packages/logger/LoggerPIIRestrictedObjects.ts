/**
 * Checks log messages for PII (Personally Identifiable Information).
 * @throws Will throw an error if PII is detected.
 */
export type CheckLogForPII = (message: string, ...args: unknown[]) => void;
