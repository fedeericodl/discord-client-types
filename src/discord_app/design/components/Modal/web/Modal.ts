import type { OpenModal } from "./ModalAPI";
import type { RenderModal } from "./Modals";

export interface ModalProps {
  /**
   * A function that returns the modal content to be rendered.
   */
  renderModal: RenderModal;

  /**
   * Callback invoked when a close request is made.
   */
  onCloseRequest?: () => void;

  /**
   * Callback invoked after the modal has been closed.
   */
  onCloseCallback?: () => void;
}

/**
 * Utility component to render a modal with proper lifecycle management.
 * Makes the modal lifecycle easier to manage, avoiding the need to use {@link OpenModal openModal}.
 * @param props The modal properties.
 * @returns Null since it does not render anything directly.
 * @example
 * ```tsx
 * function ExampleModal({ transitionState, onClose }) {
 *  return <ModalRoot transitionState={transitionState} onClose={onClose}>{...}</ModalRoot>;
 * }
 *
 * <Modal renderModal={(props) => <ExampleModal {...props} />} onCloseRequest={() => console.log("Close requested")} />
 * ```
 */
export type Modal = (props: ModalProps) => null;

export type { ModalContent, ModalFooter, ModalHeader, ModalRoot } from "./ModalComponents";
