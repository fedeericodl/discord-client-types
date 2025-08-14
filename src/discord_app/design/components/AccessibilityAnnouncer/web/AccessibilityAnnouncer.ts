type Assertiveness = "assertive" | "polite";
type Message = string | { "aria-labelledby": string };

type announce = (message: Message, assertiveness?: Assertiveness, timeout?: number) => void;
type clearAnnouncer = (assertiveness: Assertiveness) => void;

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
  announce: announce;

  /**
   * Stops all queued announcements.
   * @param assertiveness The assertiveness of the announcement.
   */
  clearAnnouncements: clearAnnouncer;
}
