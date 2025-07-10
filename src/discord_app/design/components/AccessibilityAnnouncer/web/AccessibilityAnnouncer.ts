import type { announce, clearAnnouncer } from "@react-aria/live-announcer";

/**
 * An announcer that can be used to announce messages to screen readers.
 * @see {@link https://www.npmjs.com/package/@react-aria/live-announcer @react-aria/live-announcer}
 */
export interface AccessibilityAnnouncer {
  /**
   * Announces the message using screen reader technology.
   * @param message The message to announce.
   * @param assertiveness The assertiveness of the announcement.
   * @param timeout The time in milliseconds to announce the message.
   */
  announce: typeof announce;

  /**
   * Stops all queued announcements.
   * @param assertiveness The assertiveness of the announcement.
   */
  clearAnnouncements: typeof clearAnnouncer;
}
