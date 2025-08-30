import type * as React from "react";

import type { ButtonColors } from "../../Button/web/Button";
import type { RenderModalProps } from "./Modals";

export interface ConfirmModalProps extends RenderModalProps {
  /**
   * The header text of the modal.
   */
  header?: string;

  /**
   * The text for the confirm button. If not provided, no confirm button will be shown.
   */
  confirmText?: string;

  /**
   * The text for the cancel button. If not provided, no cancel button will be shown.
   */
  cancelText?: string;

  /**
   * The class name applied to the modal container.
   */
  className?: string;

  /**
   * Event handler called when the confirm button is clicked.
   */
  onConfirm?: () => Promise<void>;

  /**
   * Event handler called when the cancel button is clicked.
   */
  onCancel?: () => void;

  /**
   * Callback function called when the modal is unmounted.
   */
  onCloseCallback?: () => void;

  /**
   * The class name applied to the body/content of the modal.
   */
  bodyClassName?: string;

  /**
   * Whether the confirm button is in a loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * The color of the confirm button.
   * @default Button.Colors.RED
   * @see {@link ButtonColors}
   */
  confirmButtonColor?: string;

  /**
   * Whether to focus the cancel button instead of the confirm button when the modal opens.
   * @default false
   */
  focusCancel?: boolean;

  /**
   * Impression identifier for tracking modal views.
   */
  impression?: string;
}

/**
 * A confirmation modal component for user action verification.
 * Provides a standardized dialog with customizable header, confirm/cancel buttons and loading states.
 * @example
 * ```tsx
 * <ConfirmModal
 *   transitionState={transitionState}
 *   onClose={onClose}
 *   header="Delete Message"
 *   confirmText="Delete"
 *   cancelText="Cancel"
 *   confirmButtonColor="red"
 *   onConfirm={async () => await deleteMessage()}
 *   onCancel={() => console.log("Cancelled")}>
 *   <Text>Are you sure you want to delete this message?</Text>
 * </ConfirmModal>
 * ```
 */
export type ConfirmModal = React.FC<React.PropsWithChildren<ConfirmModalProps>>;

export interface DeclarativeConfirmModalProps extends ConfirmModalProps {
  /**
   * Whether the modal can be dismissed by clicking outside or pressing escape.
   * @default true
   */
  dismissable?: boolean;
}

/**
 * A declarative confirmation modal component that manages its own lifecycle.
 * Wraps the standard {@link ConfirmModal} with automatic modal management.
 */
export type DeclarativeConfirmModal = React.FC<
  React.PropsWithChildren<DeclarativeConfirmModalProps>
>;
