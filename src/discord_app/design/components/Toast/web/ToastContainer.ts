import type * as React from "react";

import type { UseToastStore } from "./ToastAPI";

export interface ToastContainerProps {
  /**
   * The context of the app where the toast container is used.
   */
  appContext?: string;
}

/**
 * The container used to display toasts. Used to work with the {@link UseToastStore toast store}.
 */
export type ToastContainer = React.FC<ToastContainerProps>;
