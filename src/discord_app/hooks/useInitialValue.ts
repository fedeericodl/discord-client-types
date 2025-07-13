/**
 * A React hook that captures and returns the initial value passed to it.
 * The returned value remains constant throughout the component's lifecycle,
 * even if the input value changes on subsequent renders.
 *
 * This is useful when you need to preserve the first value that was passed
 * to a component, such as initial props or computed values that should not
 * change after the first render.
 * @template T The type of the value to capture.
 * @param value The initial value to capture and preserve.
 * @returns The initial value, which remains constant across re-renders.
 */
export type UseInitialValue = <T>(value: T) => T;
