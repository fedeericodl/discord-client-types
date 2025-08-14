import type {
  Backend,
  DragDropActions,
  DragDropManager,
  DragDropMonitor,
  Identifier,
  Unsubscribe,
  XYCoord,
} from "dnd-core";
import type { DragAnnouncer } from "./DragAnnouncer";
import type { DragPreview } from "./DragPreviewer";
import type { DropTargetNavigator } from "./DropTargetNavigator";

interface KeyboardBackendContext {
  /**
   * Window object for global event handling.
   */
  window?: Window;

  /**
   * Document object for DOM manipulation.
   */
  document?: Document;
}

interface KeyboardBackendOptions {
  /**
   * Callback invoked when drag and drop mode changes.
   */
  onDndModeChanged?: (enabled: boolean) => void;

  /**
   * Custom accessibility announcer for drag operations.
   */
  announcer?: DragAnnouncer;
}

/**
 * Returns whether a keyboard event should initiate a drag operation.
 * @param event The keyboard event to evaluate.
 * @param withUntrusted Whether to allow untrusted events.
 */
export type IsDragTrigger = (event: KeyboardEvent, withUntrusted?: boolean) => boolean;

/**
 * Keyboard-driven drag and drop backend for accessibility compliance.
 * @see {@link https://www.npmjs.com/package/react-dnd-accessible-backend react-dnd-accessible-backend}
 */
export declare class KeyboardBackend implements Backend {
  /**
   * @param manager Drag and drop manager for coordinating operations.
   * @param context Browser context providing window and document access.
   * @param options Configuration for behavior and callbacks.
   */
  public constructor(
    manager: DragDropManager,
    context: KeyboardBackendContext,
    options?: KeyboardBackendOptions,
  );

  /**
   * Drag and drop manager instance for state coordination.
   */
  public manager: DragDropManager;

  /**
   * Actions interface for triggering drag and drop events.
   */
  public actions: DragDropActions;

  /**
   * Monitor interface for querying current drag state.
   */
  public monitor: DragDropMonitor;

  /**
   * Browser context providing access to window and document APIs.
   */
  public context: KeyboardBackendContext;

  /**
   * Configuration options controlling backend behavior.
   */
  public options?: KeyboardBackendOptions;

  /**
   * Map of source identifiers to their corresponding DOM elements.
   */
  public sourceNodes: Map<Identifier, HTMLElement>;

  /**
   * Map of preview identifiers to their corresponding DOM elements.
   */
  public sourcePreviewNodes: Map<string, HTMLElement>;

  /**
   * Map of preview identifiers to their configuration options.
   */
  public sourcePreviewNodeOptions: Map<string, unknown>;

  /**
   * Map of target identifiers to their corresponding DOM elements.
   */
  public targetNodes: Map<string, HTMLElement>;

  /**
   * Navigation controller for keyboard movement between drop targets.
   * @private
   */
  private _navigator: DropTargetNavigator | undefined;

  /**
   * Visual preview manager for drag feedback.
   * @private
   */
  private _previewer: DragPreview;

  /**
   * Accessibility announcer for screen reader feedback.
   * @private
   */
  private _announcer: DragAnnouncer;

  /**
   * Whether this is the first event to handle trusted event check.
   */
  private _handlingFirstEvent: boolean;

  /**
   * Global keyboard event handler for cancel operations.
   * @param event Keyboard event that triggered the cancel operation.
   */
  public handleGlobalKeyDown: (event: KeyboardEvent) => void;

  /**
   * Gets the client offset position for a drag source element.
   * @param sourceId Unique identifier for the drag source.
   * @returns Client offset position.
   */
  public getSourceClientOffset: (sourceId: string) => XYCoord;

  /**
   * Handles initiation of drag operations from keyboard triggers.
   * @param sourceId Unique identifier for the drag source.
   * @param event Keyboard event that triggered the drag start.
   */
  public handleDragStart: (sourceId: string, event: KeyboardEvent) => void;

  /**
   * Handles drop operations triggered by keyboard events.
   * @param event Keyboard event that triggered the drop action.
   */
  public handleDrop: (event: KeyboardEvent) => void;

  /**
   * Initializes the backend and sets up global event listeners.
   */
  public setup: () => void;

  /**
   * Removes event listeners and cleans up backend state.
   */
  public teardown: () => void;

  /**
   * Updates the drag and drop mode state.
   * @param enabled Whether drag and drop mode is currently active.
   */
  public setDnDMode: (enabled: boolean) => void;

  /**
   * Returns performance profiling information about connected nodes.
   * @returns Object containing counts of connected nodes by type.
   */
  public profile: () => Record<string, number>;

  /**
   * Connects a DOM element as a draggable source.
   * @param sourceId Unique identifier for the drag source.
   * @param node DOM element that can be dragged.
   * @returns Cleanup function to disconnect the source.
   */
  public connectDragSource: (sourceId: string, node: HTMLElement) => Unsubscribe;

  /**
   * Connects a DOM element as a drag preview.
   * @param sourceId Identifier for the associated drag source.
   * @param node DOM element to use for preview generation.
   * @param options Configuration options for preview behavior.
   * @returns Cleanup function to disconnect the preview.
   */
  public connectDragPreview: (sourceId: string, node: HTMLElement, options: unknown) => Unsubscribe;

  /**
   * Connects a DOM element as a drop target.
   * @param targetId Unique identifier for the drop target.
   * @param node DOM element that can receive drops.
   * @returns Cleanup function to disconnect the target.
   */
  public connectDropTarget: (targetId: string, node: HTMLElement) => Unsubscribe;

  /**
   * Ends the current drag operation and cleans up state.
   * @param event Keyboard event that triggered the end
   */
  public endDrag: (event?: KeyboardEvent) => void;

  /**
   * Whether a backend instance is currently set up.
   * @static
   */
  public static isSetUp: boolean;
}

/**
 * Factory function for creating keyboard backend instances.
 * Provides a standardized way to instantiate the backend with proper configuration.
 */
export type CreateKeyboardBackendFactory = (
  manager: DragDropManager,
  context: KeyboardBackendContext,
  options?: KeyboardBackendOptions,
) => KeyboardBackend;
