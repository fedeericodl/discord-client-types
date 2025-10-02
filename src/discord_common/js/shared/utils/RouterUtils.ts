import type { useHistory } from "react-router-dom";

/**
 * Transitions to the URL specified in the arguments by pushing a new URL onto the history stack.
 * @param path The path to transition to.
 */
export type TransitionTo = (path: string) => void;

interface Router {
  /**
   * The history object from `react-router`.
   * @see {@link https://v5.reactrouter.com/web/api/Link React Router v5}
   */
  history: ReturnType<typeof useHistory>;
}

/**
 * Creates a function that checks if a given route pattern is active based on the current location.
 * Returns a matcher function that can be used to test if a route is currently active.
 * @param router The router object containing the history and current location.
 * @returns A function that takes a path string and returns a boolean indicating if the path is active.
 */
export type IsActiveCreator = (router?: Router) => (path: string) => boolean | undefined;
