import type { UseBoundStore } from "zustand";

import type { ToastState } from "@app/design/web";

export interface ToastStoreState {
  /**
   * The current toast being displayed.
   */
  currentToast: ToastState | null;

  /**
   * The toasts that have been queued to be displayed.
   */
  queuedToasts: ToastState[] | null;
}

/**
 * Hook to access the toast store.
 */
export type UseToastStore = UseBoundStore<ToastStoreState>;

/**
 * Shows a toast with the given message and type. Saves the toast to the store.
 * @param toast The toast to show.
 */
export type ShowToast = (toast: ToastState) => void;

/**
 * Removes the current toast from the store and displays the next toast in the queue.
 */
export type PopToast = () => void;
