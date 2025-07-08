/**
 * Checks log messages for PII (Personally Identifiable Information).
 */
export type CheckLogForPII = (message: string, ...args: unknown[]) => void;
