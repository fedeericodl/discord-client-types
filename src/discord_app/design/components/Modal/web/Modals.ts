import type * as React from "react";

import type { ModalTransitionState } from "./ModalConstants";

export interface RenderModalProps {
  /**
   * The current transition state of the modal.
   * @see {@link ModalTransitionState}
   */
  transitionState: ModalTransitionState | null;

  /**
   * Callback invoked when the modal requests to be closed.
   */
  onClose: () => Promise<void>;
}

export type RenderModal = React.FC<RenderModalProps>;

/**
 * Hook that returns the current modal context type based on the application context.
 */
export type UseModalContext = () => string;

/**
 * Root component that manages and renders all active modals in the application.
 * Handles modal stacking, backdrop rendering, transitions, and keyboard events.
 * Automatically manages layer ordering and modal visibility states through the modal context.
 */
export type Modals = React.FC;
