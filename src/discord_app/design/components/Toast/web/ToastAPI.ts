import type { UseBoundStore } from "zustand";

import type { ToastState } from "./Toast";

export interface ToastStoreState {
  /**
   * The current toast being displayed.
   */
  currentToastMap: Map<string, ToastState>;

  /**
   * The toasts that have been queued to be displayed.
   */
  queuedToastsMap: Map<string, ToastState[]>;
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
 * @param context The context of the app where the toast is displayed. If not provided, defaults to the default app context.
 */
export type PopToast = (context?: string) => void;
