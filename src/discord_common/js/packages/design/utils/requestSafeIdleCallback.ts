/**
 * Safe wrapper function for requesting idle callbacks with automatic fallback.
 * Uses native `requestIdleCallback` when available, otherwise falls back to `setTimeout`.
 * @param callback The function to call when the browser is idle.
 * @param options Optional configuration for the idle callback.
 * @returns A cancellation function to clean up both idle callbacks and timeouts.
 */
export type RequestSafeIdleCallback = (
  callback: IdleRequestCallback,
  options?: IdleRequestOptions,
) => () => void;

/**
 * Function to set the origin window for idle callback operations.
 * @param win The window object to use as the origin.
 */
export type SetOriginWindow = (win: Window) => void;
