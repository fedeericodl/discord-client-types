import type { FocusManager } from "@discordapp/aria-hooks/src/FocusManager";
import type { DragDropActions, DragDropManager, DragDropMonitor } from "dnd-core";

import type { DragAnnouncer } from "./DragAnnouncer";
import type { DragPreview } from "./DragPreviewer";

/**
 * Keyboard navigation controller for drop targets during drag operations.
 * @see {@link https://www.npmjs.com/package/react-dnd-accessible-backend react-dnd-accessible-backend}
 */
export declare class DropTargetNavigator {
  /**
   * @param sourceNode The DOM element being dragged.
   * @param targetNodes Map of target IDs to their corresponding DOM elements.
   * @param manager Drag and drop manager instance for state coordination.
   * @param previewer Visual preview manager for drag feedback.
   * @param announcer Accessibility announcer for screen reader feedback.
   */
  public constructor(
    sourceNode: HTMLElement,
    targetNodes: Map<string, HTMLElement>,
    manager: DragDropManager,
    previewer: DragPreview,
    announcer: DragAnnouncer,
  );

  /**
   * Map of target identifiers to their corresponding DOM elements.
   */
  public targetNodes: Map<string, HTMLElement>;

  /**
   * Drag and drop manager instance for coordinating drag operations.
   */
  public manager: DragDropManager;

  /**
   * Visual preview manager that renders drag feedback.
   */
  public previewer: DragPreview;

  /**
   * Accessibility announcer for providing screen reader feedback.
   */
  public announcer: DragAnnouncer;

  /**
   * Currently focused/hovered drop target element.
   */
  public currentHoveredNode: HTMLElement | null;

  /**
   * Focus manager instance for handling keyboard navigation between targets.
   */
  public focusManager: FocusManager;

  /**
   * Drag and drop actions interface for triggering hover and drop events.
   */
  public actions: DragDropActions;

  /**
   * Drag and drop monitor for querying current drag state.
   */
  public monitor: DragDropMonitor;

  /**
   * Keyboard event handler for arrow key navigation during drag operations.
   * @param event The keyboard event triggered by arrow keys.
   * @returns Promise resolving when the key event is handled.
   */
  public handleDraggedElementKeyDown: (event: KeyboardEvent) => Promise<void>;

  /**
   * Removes event listeners and cleans up navigation state.
   */
  public disconnect: () => void;

  /**
   * Sets focus and hover state on a specific drop target.
   * @param node The drop target element to hover, or null to clear hover.
   */
  public hoverNode: (node: HTMLElement | null) => void;

  /**
   * Gets the next valid drop target in navigation order.
   * @returns Promise resolving to the next drop target element or null.
   */
  public getNextDropTarget: () => Promise<HTMLElement | null>;

  /**
   * Gets the previous valid drop target in navigation order.
   * @returns Promise resolving to the previous drop target element or null.
   */
  public getPreviousDropTarget: () => Promise<HTMLElement | null>;

  /**
   * Gets all valid drop targets sorted in DOM document order.
   * @param nodes Map of target nodes to filter and sort.
   * @returns Array of viable drop target elements in document order.
   */
  public getViableTargets: (nodes: Map<string, HTMLElement>) => HTMLElement[];

  /**
   * Filters target nodes to only those that can accept the current drag item.
   * @param nodes Map of potential target nodes to filter.
   * @returns Array of target elements that can accept the current drag item.
   */
  public getAllowedTargets: (nodes: Map<string, HTMLElement>) => HTMLElement[];
}
