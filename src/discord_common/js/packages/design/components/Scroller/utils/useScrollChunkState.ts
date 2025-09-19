import type { ScrollerState } from "./core/SharedTypes";

/**
 * Computes the start and end "chunk" indices for a given scroll state.
 * @param scrollTop Current scroll position in pixels.
 * @param offsetHeight Height of the visible viewport in pixels.
 * @param chunkSize Size of a single chunk in pixels.
 * @returns A tuple containing the start and end chunk indices.
 */
export type GetChunksFromScrollerState = (
  scrollTop: number,
  offsetHeight: number,
  chunkSize: number,
) => [number, number];

export interface ScrollChunkProps {
  /**
   * Pixel size of each chunk segment.
   */
  chunkSize: number;

  /**
   * Function returning the latest {@link ScrollerState}.
   */
  getScrollerState: () => ScrollerState;

  /**
   * Function that triggers a re-render of the consuming component.
   */
  forceUpdate: () => void;
}

export interface ScrollChunkUseState {
  /**
   * Forces a re-render if the current scroll position
   * moves into a different chunk.
   */
  forceUpdateOnChunkChange: (fromDirtyType: 1 | 2) => void;

  /**
   * The index of the first visible chunk (may include one buffer chunk).
   */
  chunkStart: number;

  /**
   * The index of the last visible chunk (may include one buffer chunk).
   */
  chunkEnd: number;

  /**
   * Dirty flag from {@link ScrollerState}, used to skip updates
   * during the first tick or when the state is unreliable.
   */
  dirty: 0 | 1 | 2;
}

/**
 * A React hook that tracks which scroll "chunks" are currently visible,
 * and re-renders the component whenever the active chunk range changes.
 * @param props The properties for configuring the hook.
 * @returns The current chunk state and an update function.
 */
export type UseScrollChunkState = (props: ScrollChunkProps) => ScrollChunkUseState;
