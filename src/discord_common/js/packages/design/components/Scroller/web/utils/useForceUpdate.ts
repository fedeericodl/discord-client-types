/**
 * A custom hook that provides a function to force a component re-render.
 * @returns A function that when called, forces the component to re-render
 */
export type UseForceUpdate = () => () => void;
