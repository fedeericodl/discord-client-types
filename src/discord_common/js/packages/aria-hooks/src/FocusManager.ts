export interface FocusManagerOptions {
  /**
   * Function that returns all focusable elements in the managed area.
   */
  getFocusableElements: () => HTMLElement[];

  /**
   * Function that returns the currently active (focused) element.
   */
  getActiveElement: () => HTMLElement | null;

  /**
   * Function to scroll to the start of the focusable area.
   * Called when wrapping focus from end to beginning.
   */
  scrollToStart?: () => Promise<void>;

  /**
   * Function to scroll to the end of the focusable area.
   * Called when wrapping focus from beginning to end.
   */
  scrollToEnd?: () => Promise<void>;
}

export interface FocusOptions {
  /**
   * The element to start navigation from.
   * If not provided, uses the currently active element.
   */
  from?: HTMLElement;

  /**
   * Whether to wrap focus when reaching the boundaries.
   */
  wrap?: boolean;
}

export interface FocusManager {
  /**
   * Gets the next focusable element in the navigation order.
   * @param options Navigation options including starting element and wrap behavior.
   * @returns A promise resolving to the next focusable element or null.
   */
  getNextFocusableElement: (options?: FocusOptions) => Promise<HTMLElement | null>;

  /**
   * Gets the previous focusable element in the navigation order.
   * @param options Navigation options including starting element and wrap behavior.
   * @returns A promise resolving to the previous focusable element or null.
   */
  getPreviousFocusableElement: (options?: FocusOptions) => Promise<HTMLElement | null>;

  /**
   * Returns the first focusable element in the managed area.
   */
  getFirstFocusableElement: () => HTMLElement | null;

  /**
   * Returns the last focusable element in the managed area.
   */
  getLastFocusableElement: () => HTMLElement | null;
}

/**
 * Creates a focus management utility for handling keyboard navigation within a container.
 * Provides methods to navigate between focusable elements with support for wrapping and custom scrolling behavior.
 * @see {@link https://github.com/discord/react-dnd-accessible-backend react-dnd-accessible-backend}
 * @param options Configuration options for the focus manager.
 * @returns A {@link FocusManager} object with navigation methods.
 */
export type CreateFocusManager = (options: FocusManagerOptions) => FocusManager;
