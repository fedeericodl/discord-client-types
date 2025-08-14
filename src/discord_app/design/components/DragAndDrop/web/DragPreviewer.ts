import type { DragDropMonitor } from "dnd-core";

/**
 * Visual preview manager for drag and drop operations.
 * @see {@link https://www.npmjs.com/package/react-dnd-accessible-backend react-dnd-accessible-backend}
 */
export declare class DragPreview {
  /**
   * @param document The document object used to create DOM elements.
   */
  public constructor(document: Document | undefined);

  /**
   * The main container element for the drag preview.
   */
  public container: HTMLElement | undefined;

  /**
   * SVG element that wraps the cloned content.
   */
  public svg: HTMLElement | undefined;

  /**
   * Foreign object element within the SVG.
   */
  public foreignObject: HTMLElement | undefined;

  /**
   * Creates a visual preview by cloning the source element.
   * @param sourceNode The original DOM element being dragged.
   */
  public createDragPreview: (sourceNode: HTMLElement) => void;

  /**
   * Updates the preview position based on current drag state.
   * @param monitor Drag drop monitor providing cursor position and drag state.
   */
  public render: (monitor: DragDropMonitor) => void;

  /**
   * Removes all cloned content from the preview.
   */
  public clear: () => void;
}
