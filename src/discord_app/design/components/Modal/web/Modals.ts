import type * as React from "react";

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
