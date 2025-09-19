/**
 * Batches React state updates to improve performance by reducing re-renders.
 * @param callback Function containing React state updates to batch together.
 * @returns The return value from the callback function.
 * @example
 * ```ts
 * // Without batching - triggers 3 separate re-renders
 * function handleClick() {
 *   setCount(count + 1);
 *   setName("John");
 *   setVisible(true);
 * }
 *
 * // With batching - triggers only 1 re-render
 * function handleClickOptimized() {
 *   batchUpdates(() => {
 *     setCount(count + 1);
 *     setName("John");
 *     setVisible(true);
 *   });
 * }
 * ```
 */
export type BatchUpdates = <T>(callback: () => T) => T;
