/**
 * Returns whether a URL is safe for redirects to prevent open redirect vulnerabilities.
 * @param url The URL string to validate for redirect safety.
 */
export type IsSafeRedirect = (url: string) => boolean;
