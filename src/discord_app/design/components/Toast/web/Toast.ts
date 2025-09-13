import type * as React from "react";

import type { TOAST_DEFAULT_OPTIONS, ToastPosition, ToastType } from "./ToastConstants";

export interface ToastOptions {
  /**
   * The position of the toast.
   */
  position?: ToastPosition;

  /**
   * The component to render in the toast.
   */
  component?: React.ReactNode | null;

  /**
   * The duration the toast should be displayed in milliseconds.
   */
  duration?: number;

  /**
   * The context of the app where the toast is displayed.
   */
  appContext?: string;
}

export interface ToastState {
  /**
   * The message to display in the toast.
   */
  message: string;

  /**
   * The unique identifier of the toast.
   */
  id: string;

  /**
   * The type of the toast.
   * @see {@link ToastType}
   */
  type: ToastType;

  /**
   * The options of the toast.
   */
  options: ToastOptions;
}

/**
 * Creates a new toast.
 *
 * Needs to be added to the toast store, which will handle the toast lifecycle, and the container will render the toast.
 * @param message The message to display in the toast.
 * @param type The type of the toast.
 * @param options The options of the toast. If not provided, the {@link TOAST_DEFAULT_OPTIONS default options} are used.
 * @returns The {@link ToastState state} of the toast.
 * @example
 * ```tsx
 * const toast = createToast("Hello world!", ToastType.SUCCESS);
 * showToast(toast); // Displays the toast
 * ```
 */
export type CreateToast = (message: string, type: ToastType, options?: ToastOptions) => ToastState;

/**
 * Ephemeral feedback message that appears temporarily and automatically dismisses itself (toast).
 * Supports various visual styles through icons and colors to indicate different message types.
 */
export type Toast = React.MemoExoticComponent<React.FC<ToastState>>;
