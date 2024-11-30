import type React from "react";

export enum TransitionStates {
  MOUNTED,
  ENTERED,
  YEETED,
}

export interface TransitionGroupProps<T> {
  /**
   * Array of items to be rendered with transitions.
   */
  items: T[];

  /**
   * Function to render each item with its transition state.
   */
  renderItem: (
    key: string,
    item: T,
    state: TransitionStates,
    cleanUp: () => void,
  ) => React.ReactNode;

  /**
   * Function to get a unique key for each item.
   */
  getItemKey: (item: T) => string;

  /**
   * Function to wrap the rendered children with a parent element.
   */
  wrapChildren?: (children: React.ReactNode[], items: T[]) => React.ReactNode;

  /**
   * Delay in milliseconds before cleaning up removed items.
   */
  lazyCleanUpDelay?: number;
}

/**
 * A component that manages mount, update, and unmount transitions for a dynamic list of items.
 * Note that the `TransitionGroup` component does not handle the animation itself.
 * @template T The type of items in the list.
 * @example
 * ```tsx
 * const [list, setList] = React.useState<string[]>([]);
 *
 * <Button
 *   onClick={() => {
 *     const newItem = `Item ${list.length + 1}`;
 *     setList((prev) => [...prev, newItem]);
 *   }}>
 *   Add Item
 * </Button>
 * <TransitionGroup
 *   items={list}
 *   getItemKey={(item) => item}
 *   renderItem={(key, item, state, cleanUp) => {
 *     let style = {};
 *     if (state === TransitionStates.MOUNTED) {
 *       style = { opacity: 0, transition: "opacity 0.5s" };
 *     } else if (state === TransitionStates.ENTERED) {
 *       style = { opacity: 1, transition: "opacity 0.5s" };
 *     } else {
 *       style = { opacity: 0, transition: "opacity 0.5s" };
 *       setTimeout(cleanUp, 500); // Call cleanUp after the transition ends
 *     }
 *     return (
 *       <Flex key={key} style={style}>
 *         <Button
 *           color={Button.Colors.RED}
 *           size={Button.Sizes.MIN}
 *           onClick={() => setList(list.filter((i) => i !== item))}>
 *           X
 *         </Button>
 *         <Text>{item}</Text>
 *       </Flex>
 *     );
 *   }}
 * />
 * ```
 */
export type TransitionGroup = <T>(props: TransitionGroupProps<T>) => React.ReactElement;
