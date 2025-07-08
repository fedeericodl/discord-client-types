/**
 * Extracts the ID portion from a fingerprint string.
 * A fingerprint is expected to be in the format "id.additional.parts" where the ID is the first segment.
 * @param fingerprint The fingerprint string to extract the ID from.
 * @returns The extracted ID string, or undefined if the fingerprint doesn't contain an ID.
 */
export type ExtractId = (fingerprint: string) => string | undefined;

/**
 * Safely extracts the ID portion from a fingerprint string, handling undefined or null inputs.
 * A fingerprint is expected to be in the format "id.additional.parts" where the ID is the first segment.
 * @param fingerprint The fingerprint string to extract the ID from, or undefined.
 * @returns The extracted ID string, null if the input is null or undefined, or undefined if extraction fails.
 */
export type MaybeExtractId = (fingerprint: string | undefined) => string | null | undefined;
