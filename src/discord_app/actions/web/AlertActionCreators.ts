import type { AlertProps } from "@app/components/modals/Alert";
import type { AnyModalContext } from "@app/design/components/Modal/web/ModalAPI";

// TODO: Complete `confirmVariant` with Button variants from Mana

export interface ShowProps
  extends Pick<
    AlertProps,
    | "title"
    | "body"
    | "confirmColor"
    | "confirmText"
    | "cancelText"
    | "onConfirm"
    | "onCancel"
    | "secondaryConfirmText"
    | "onConfirmSecondary"
    | "className"
    | "titleClassName"
  > {
  /**
   * The variant of the confirm button.
   */
  confirmVariant?: string;

  /**
   * Callback invoked after the modal has been closed.
   */
  onCloseCallback?: () => void;

  /**
   * The context in which the modal should be opened.
   */
  contextKey?: AnyModalContext;
}

/**
 * Opens an alert modal with customizable content and action buttons.
 * @param props Configuration options for the alert modal.
 * @example
 * ```tsx
 * // Simple confirmation
 * show({
 *   title: "Delete File",
 *   body: "This action cannot be undone.",
 *   confirmText: "Delete",
 *   cancelText: "Cancel",
 *   onConfirm: () => deleteFile(),
 *   onCancel: () => console.log("Cancelled")
 * });
 * ```
 */
export type Show = (props: ShowProps) => void;

/**
 * NOOP function.
 */
export type Close = () => void;

/**
 * Opens a confirmation alert and returns a Promise that resolves to the user's choice.
 * Provides a simplified API for yes/no confirmations without requiring callback management.
 * Automatically includes cancel button with "Cancel" text and resolves true for confirm, false for cancel.
 * @param props Configuration options for the confirmation modal.
 * @example
 * ```tsx
 * // Simple async confirmation
 * const userConfirmed = await confirm({
 *   title: "Delete Account",
 *   body: "This will permanently delete your account and all data.",
 *   confirmText: "Delete Account",
 * });
 *
 * if (userConfirmed) {
 *   await deleteAccount();
 *   console.log("Account deleted");
 * } else {
 *   console.log("Deletion cancelled");
 * }
 *
 * // Use in conditional logic
 * if (await confirm({ title: "Save Changes?", body: "You have unsaved work." })) {
 *   saveWork();
 * }
 * ```
 */
export type Confirm = (
  props: Omit<ShowProps, "onConfirm" | "cancelText" | "onCancel">,
) => Promise<boolean>;
