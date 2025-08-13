export enum ModalTransitionState {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  HIDDEN,
}

export type TRANSITION_DURATION = number;

export type DEFAULT_MODAL_CONTEXT = string;

export type POPOUT_MODAL_CONTEXT = string;

export interface ModalContentContextValue {
  /**
   * The ID of the header.
   */
  headerId: string | undefined;

  /**
   * Indicates whether the header ID is managed by the modal.
   */
  headerIdIsManaged: boolean;
}

/**
 * The context for the modal content.
 */
export type ModalContentContext = React.Context<ModalContentContextValue>;
