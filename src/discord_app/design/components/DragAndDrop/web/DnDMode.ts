/**
 * Function to toggle the drag and drop mode.
 * @param value The new state of the drag and drop mode.
 */
export type ToggleDndMode = (value: boolean) => void;

/**
 * Hook to access the drag and drop mode.
 */
export type UseDndMode = () => boolean;

/**
 * Returns whether the application is currently in drag and drop mode.
 */
export type IsInDndMode = () => boolean;
