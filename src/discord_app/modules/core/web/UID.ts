import type * as React from "react";

/**
 * Generates a unique identifier string with an optional prefix.
 * @param prefix The prefix to prepend to the unique ID. Defaults to "uid_".
 * @returns A unique string identifier.
 */
export type Uid = (prefix?: string) => string;

/**
 * A React hook that generates and preserves a unique identifier for the component's lifetime.
 * The UID is generated once when the component mounts and remains constant across re-renders.
 */
export type UseUID = () => string;

export interface UIDProps {
  /**
   * A render prop function that receives the generated UID.
   */
  children: (uid: string) => React.ReactNode;
}

/**
 * A React component that provides a unique identifier to its children.
 * Useful when you need a UID but prefer the render prop pattern over hooks.
 */
export type UID = React.FC<UIDProps>;
