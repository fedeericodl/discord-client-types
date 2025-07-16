/**
 * Subscribes a callback function to focus state changes for a specific element key.
 * The callback will be invoked whenever the focus state changes for the associated element.
 * @param elementId A unique identifier for the element to monitor.
 * @param callback The function to call when focus state changes occur.
 * @returns A cleanup function that removes the subscription when called.
 */
export type AddFocusSubscriber = (
  elementId: string,
  callback: (id: string, isFocused: boolean) => void,
) => () => void;

/**
 * Notifies all subscribers of a focus state change for a specific element key.
 * @param elementId The unique identifier for the element that changed focus state.
 * @param id The ID of the element that received or lost focus.
 * @param isFocused Whether the element gained focus (true) or lost focus (false).
 */
export type NotifyFocusSubscribers = (elementId: string, id: string, isFocused: boolean) => void;
