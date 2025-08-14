import type { AccessibilityAnnouncer } from "../../AccessibilityAnnouncer/web/AccessibilityAnnouncer";

/**
 * Accessibility announcer for drag and drop operations.
 * @see {@link https://www.npmjs.com/package/react-dnd-accessible-backend react-dnd-accessible-backend}
 */
export declare class DragAnnouncer {
  /**
   * @param announcer Custom accessibility announcer instance.
   */
  public constructor(announcer?: AccessibilityAnnouncer);

  /**
   * The underlying accessibility announcer instance used for screen reader output.
   */
  public announcer: AccessibilityAnnouncer;

  /**
   * Makes a generic accessibility announcement.
   */
  public announce: (...args: Parameters<AccessibilityAnnouncer["announce"]>) => void;

  /**
   * Announces the start of a drag operation.
   * @param element The DOM element being dragged, or null if no element.
   * @param id Custom ID for the dragged item.
   */
  public announceDrag: (element: HTMLElement | null, id?: string) => void;

  /**
   * Announces hovering over a potential drop target.
   * @param element The drop target element being hovered, or null if none.
   * @param id Custom ID for the drop target.
   */
  public announceHover: (element: HTMLElement | null, id?: string) => void;

  /**
   * Announces successful completion of a drop operation.
   */
  public announceDrop: () => void;

  /**
   * Announces cancellation of a drag operation.
   */
  public announceCancel: () => void;

  /**
   * Clears all pending accessibility announcements.
   */
  public clear: () => void;

  /**
   * Extracts a human-readable name from an element or fallback value.
   * @param element The DOM element to extract name from, or null.
   * @param itemName Fallback name to use if element has no accessible name.
   * @returns The extracted or fallback name, or undefined if none available
   */
  public getName: (element: HTMLElement | null, itemName?: string) => string | undefined;
}
