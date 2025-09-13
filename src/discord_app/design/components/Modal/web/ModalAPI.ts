import type * as React from "react";
import type { UseBoundStore } from "zustand";

import type { BackdropStyles } from "../../Backdrop/web/Backdrop";
import type { DEFAULT_MODAL_CONTEXT, POPOUT_MODAL_CONTEXT } from "./ModalConstants";
import type { RenderModal } from "./Modals";

export type AnyModalContext = POPOUT_MODAL_CONTEXT | DEFAULT_MODAL_CONTEXT;

/**
 * Returns the modal context of the currently interacting modal.
 */
export type GetInteractingModalContext = () => AnyModalContext;

/**
 * Determines the appropriate modal context based on the current application context.
 * @param context The current application context.
 * @returns The corresponding modal context.
 */
export type ModalContextFromAppContext = (context: string) => AnyModalContext;

export interface ModalData extends Omit<OpenModalOptions, "contextKey" | "modalKey"> {
  /**
   * A unique key identifying the modal.
   */
  key: string;

  /**
   * A function that returns the modal content to be rendered.
   */
  render: RenderModal;

  /**
   * Callback invoked when a close request is made.
   */
  onCloseRequest: () => void;
}

export type ModalsStoreState = Record<AnyModalContext, ModalData[]>;

/**
 * Hook to access the modals store.
 */
export type UseModalsStore = UseBoundStore<ModalsStoreState>;

export interface OpenModalOptions {
  /**
   * The context in which the modal should be opened.
   */
  contextKey?: AnyModalContext;

  /**
   * A unique key to identify the modal. If not provided, a unique ID will be generated.
   */
  modalKey?: string;

  /**
   * Whether the modal can be dismissed by clicking outside or pressing the escape key.
   */
  dismissable?: boolean;

  /**
   * Callback invoked when a close request is made.
   */
  onCloseRequest?: () => void;

  /**
   * Callback invoked after the modal has been closed.
   */
  onCloseCallback?: () => void;

  /**
   * Whether the modal should open instantly without animation.
   */
  instant?: boolean;

  /**
   * The component to render as the modal layer.
   */
  Layer?: React.ComponentType;

  /**
   * The style of the backdrop to use for the modal.
   * @see {@link BackdropStyles}
   */
  backdropStyle?: keyof BackdropStyles;

  /**
   * Determines how the modal should behave in relation to other open modals.
   * @default "replace"
   */
  stackingBehavior?: "stack" | "replace" | "replaceAll";

  /**
   * Whether the next modal should stack by default.
   */
  stackNextByDefault?: boolean;
}

/**
 * Loads and opens a modal asynchronously.
 *
 * Similar to the regular {@link OpenModal openModal} but designed for content that takes time to load.
 * @param render A function that returns a promise resolving to the modal content to be rendered.
 * @param options Configuration options for opening the modal.
 * @returns A promise that resolves to a unique key identifying the opened modal.
 */
export type OpenModalLazy = (
  render: () => Promise<RenderModal>,
  options?: OpenModalOptions,
) => Promise<string>;

/**
 * Opens a modal.
 * @param render A function that returns the modal content to be rendered.
 * @param options Configuration options for opening the modal.
 * @param context The context in which the modal should be opened. If not provided, it will be determined based on the current application context.
 * @returns A unique key identifying the opened modal.
 * @example
 * ```tsx
 * function ExampleModal({ transitionState, onClose }) {
 *  return <ModalRoot transitionState={transitionState} onClose={onClose}>{...}</ModalRoot>;
 * }
 *
 * openModal((props) => <ExampleModal {...props} />);
 */
export type OpenModal = (
  render: RenderModal,
  options?: OpenModalOptions,
  context?: AnyModalContext,
) => string;

/**
 * Closes a modal by its unique key.
 * @param key The unique key identifying the modal to be closed.
 * @param context The context from which to close the modal. If not provided, it will be determined based on the current application context.
 * @returns Whether the modal was successfully closed.
 */
export type CloseModal = (key: string, context?: AnyModalContext) => boolean;

/**
 * Closes a modal by its unique key across all contexts.
 * @param key The unique key identifying the modal to be closed.
 */
export type CloseModalAllContexts = (key: string) => void;
// unknown name

/**
 * Updates an existing modal's content and callbacks.
 * @param key The unique key identifying the modal to be updated.
 * @param render A function that returns the new modal content to be rendered.
 * @param onCloseRequest New callback for when a close request is made. If not provided, the existing callback will be used.
 * @param onCloseCallback New callback for after the modal has been closed. If not provided, the existing callback will be used.
 * @param context The context in which the modal exists. If not provided, it will be determined based on the current application context.
 */
export type UpdateModal = (
  key: string,
  render: RenderModal,
  onCloseRequest?: () => void,
  onCloseCallback?: () => void,
  context?: AnyModalContext,
) => void;

/**
 * Selector to check if any modal is open across all contexts.
 * @param state The current state of the modals store.
 * @returns Whether any modal is currently open.
 */
export type HasAnyModalOpenSelector = (state: ModalsStoreState) => boolean;

/**
 * Returns whether any modal is currently open across all contexts.
 */
export type HasAnyModalOpen = () => boolean;

/**
 * Hook to determine if any modal is currently open across all contexts.
 */
export type UseHasAnyModalOpen = () => boolean;

/**
 * Hook to determine if a specific modal is at the top of the stack in its context.
 * @param key The unique key identifying the modal to check.
 * @returns Whether the specified modal is at the top of its context's stack.
 */
export type UseIsModalAtTop = (key: string) => boolean;

/**
 * Closes all modals across all contexts.
 */
export type CloseAllModals = () => void;

/**
 * Closes all modals within a specific context.
 * @param context The context from which to close all modals. If not provided, it will be determined based on the current application context.
 */
export type CloseAllModalsInContext = (context?: AnyModalContext) => void;
// unknown name

/**
 * Selector to check if a specific modal is open.
 * @param state The current state of the modals store.
 * @param key The unique key identifying the modal to check.
 * @param context The context in which to check for the modal. If not provided, defaults to the default modal context.
 * @returns Whether the specified modal is currently open in the given context.
 */
export type HasModalOpenSelector = (
  state: ModalsStoreState,
  key: string,
  context?: AnyModalContext,
) => boolean;

/**
 * Checks if a specific modal is open.
 * @param key The unique key identifying the modal to check.
 * @param context The context in which to check for the modal. If not provided, defaults to the default modal context.
 * @returns Whether the specified modal is currently open in the given context.
 */
export type HasModalOpen = (key: string, context?: AnyModalContext) => boolean;

/**
 * Hook to determine if a specific modal is open.
 * @param key The unique key identifying the modal to check.
 * @param context The context in which to check for the modal. If not provided, defaults to the default modal context.
 * @returns Whether the specified modal is currently open in the given context.
 */
export type UseHasModalOpen = (key: string, context?: AnyModalContext) => boolean;
// unknown name
