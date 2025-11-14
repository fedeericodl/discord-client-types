import type * as React from "react";

import type { ButtonColors } from "@app/design/components/Button/web/Button";
import type { RenderModalProps } from "@app/design/components/Modal/web/Modals";

export interface AlertProps extends RenderModalProps {
  /**
   * The body content of the alert modal.
   */
  body?: React.ReactNode;

  /**
   * The text for the cancel button. If not provided, no confirm button will be shown.
   */
  cancelText?: string;

  /**
   * The class name applied to the modal container.
   */
  className?: string;

  /**
   * The color of the confirm button.
   * @see {@link ButtonColors}
   */
  confirmColor?: string;

  /**
   * The text for the confirm button. If not provided, no confirm button will be shown.
   */
  confirmText?: string;

  /**
   * The text for the secondary confirm button. If not provided, no secondary confirm button will be shown.
   */
  secondaryConfirmText?: string;

  /**
   * Event handler called when the cancel button is clicked.
   */
  onCancel?: () => void | Promise<void>;

  /**
   * Event handler called when the confirm button is clicked.
   */
  onConfirm?: () => void | Promise<void>;

  /**
   * Event handler called when the secondary confirm button is clicked.
   */
  onConfirmSecondary?: () => void | Promise<void>;

  /**
   * The title content of the alert modal.
   */
  title?: React.ReactNode;

  /**
   * The class name applied to the title element.
   */
  titleClassName?: string;
}

/**
 * A modal alert component for displaying important messages and confirmations to users.
 * @example
 * ```tsx
 * <Alert
 *   title="Delete Item"
 *   body="Are you sure you want to delete this item? This action cannot be undone."
 *   confirmText="Delete"
 *   cancelText="Cancel"
 *   confirmColor="danger"
 *   onConfirm={async () => await deleteItem()}
 *   onCancel={() => console.log("Cancelled")}
 *   {...modalProps}
 * />
 * ```
 */
export type Alert = React.FC<AlertProps>;
