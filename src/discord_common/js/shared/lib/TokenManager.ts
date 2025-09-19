/**
 * Initializes the token manager by loading stored tokens from storage.
 * Performs decryption if tokens were previously encrypted.
 */
export type Init = () => void;

/**
 * Retrieves the analytics token used for telemetry and usage tracking.
 */
export type GetAnalyticsToken = () => string;

/**
 * Retrieves a token by its identifier key.
 * All tokens are returned in decrypted form for immediate use.
 * @param key The token identifier. If not provided, the primary token is returned.
 * @returns The requested token in decrypted form.
 */
export type GetToken = (key?: string) => string;

/**
 * Sets the analytics token used for telemetry and usage tracking.
 * Removes the token if no value is provided.
 * @param token The analytics token to store, or nothing to remove it.
 */
export type SetAnalyticsToken = (token?: string) => void;

/**
 * Sets a token for storage and retrieval.
 * Updates the primary token if no key is specified, otherwise sets a named token.
 * @param newToken The token value to store, or null to remove.
 * @param key Identifier for named tokens.
 */
export type SetToken = (newToken?: string, key?: string) => void;

/**
 * Hides all tokens from storage for security purposes.
 */
export type HideToken = () => void;

/**
 * Restores token visibility in storage after being hidden.
 */
export type ShowToken = () => void;

/**
 * Removes a token from both memory and storage.
 * Removes the primary token if no key is specified, otherwise removes the named token.
 * @param key Optional token identifier, removes primary token if undefined
 * @returns Whether a token was actually removed.
 */
export type RemoveToken = (key?: string) => boolean;

/**
 * Removes the analytics token from both memory and storage.
 */
export type RemoveAnalyticsToken = () => boolean;

/**
 * Forces encryption and storage of all current tokens.
 */
export type EncryptAndStoreTokens = () => void;
