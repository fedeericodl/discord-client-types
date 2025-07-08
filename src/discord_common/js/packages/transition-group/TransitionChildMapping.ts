import type * as React from "react";

export type ChildMapping = Record<string, React.ReactElement>;

/**
 * Maps React children elements to an object keyed by their keys.
 * @param children React children to transform into a mapping.
 * @returns An object where keys are React element keys and values are the elements.
 */
export type GetChildMapping = (
  children?: React.ReactElement | React.ReactElement[],
) => ChildMapping;

/**
 * Merges two child mappings, preserving entering and exiting states.
 * @param prev Previous mapping of children (from previous render).
 * @param next Current mapping of children (from current render).
 * @returns A merged mapping that contains keys from both previous and current children.
 */
export type MergeChildMappings = (prev?: ChildMapping, next?: ChildMapping) => ChildMapping;
