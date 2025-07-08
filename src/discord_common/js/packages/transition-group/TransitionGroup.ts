import type * as React from "react";

import type { ChildMapping } from "./TransitionChildMapping";

export type TransitionGroupProps<T extends keyof React.JSX.IntrinsicElements = "span"> =
  React.ComponentPropsWithoutRef<T> & {
    /**
     * React elements to render within the transition group.
     */
    children?: React.ReactElement | React.ReactElement[];

    /**
     * Whether to animate children when they first appear (on mount).
     * @default true
     */
    transitionAppear?: boolean;

    /**
     * Whether to animate children when they are removed.
     * @default true
     */
    transitionLeave?: boolean;

    /**
     * Whether to animate children when they are added after initial mount.
     * @default true
     */
    transitionEnter?: boolean;

    /**
     * Function to modify children before rendering.
     * Use this to inject additional props into child components.
     * @default null
     */
    childFactory?: (child: React.ReactElement) => React.ReactElement;

    /**
     * The HTML element type to render as the container.
     * @default "span"
     */
    component?: T;
  };

export interface TransitionGroupState {
  /**
   * Current mapping of child keys to elements.
   */
  children: ChildMapping;

  /**
   * Whether this is the first render of the component.
   * @default true
   */
  firstRender: boolean;
}

export type TransitionWillLifecycleKey =
  | "componentWillAppear"
  | "componentWillEnter"
  | "componentWillLeave";

export type TransitionDidLifecycleKey =
  | "componentDidAppear"
  | "componentDidEnter"
  | "componentDidLeave";

export declare class TransitionGroupComponent<
  T extends keyof React.JSX.IntrinsicElements = "span",
> extends React.Component<TransitionGroupProps<T>, TransitionGroupState> {
  /**
   * Set of keys for children that are currently transitioning.
   * Used to track which children are in the middle of an animation.
   * @private
   */
  private _currentlyTransitioningKeys: Set<string>;

  /**
   * Array of keys for children that need to perform enter transitions.
   * @private
   */
  private _keysToEnter: string[];

  /**
   * Array of keys for children that need to perform leave transitions.
   * @private
   */
  private _keysToLeave: string[];

  /**
   * Whether the component is currently mounted.
   * @private
   */
  private _isMounted: boolean;

  /**
   * Mapping of child keys to their component references.
   * @private
   */
  private _keyChildMapping: Record<string, React.RefObject<React.ReactElement>>;

  /**
   * Stores a ref to a child component for later use in transitions.
   * @param key The unique key of the child.
   * @param ref The child component reference.
   */
  public addChildRef: (key: string, ref: React.RefObject<React.ReactElement>) => void;

  /**
   * Identifies keys that need to transition and populates the transition arrays.
   * @param a Previous child mapping.
   * @param b Current child mapping.
   * @param keys Array to populate with keys that need transitions.
   * @private
   */
  private _enqueueTransitions: (a: ChildMapping, b: ChildMapping, keys: string[]) => void;

  /**
   * Executes a transition for a specific child component.
   * @param key The child's key.
   * @param will The pre-transition lifecycle method to call.
   * @param did The post-transition lifecycle method to call.
   * @param remove Whether to remove the child after transition (for leave transitions).
   * @private
   */
  private _perform: (
    key: string,
    will: TransitionWillLifecycleKey,
    did: TransitionDidLifecycleKey,
    remove?: boolean,
  ) => void;

  /**
   * Handles completion of a transition.
   * @param key The child's key.
   * @param did The post-transition lifecycle method that completed.
   * @param remove Whether to remove the child (for leave transitions).
   * @private
   */
  private _handleDonePerform: (
    key: string,
    did: TransitionDidLifecycleKey,
    remove?: boolean,
  ) => void;

  /**
   * Initiates an appear transition for a child.
   * @param key The child's key.
   */
  public performAppear: (key: string) => void;

  /**
   * Initiates an enter transition for a child.
   * @param key The child's key.
   */
  public performEnter: (key: string) => void;

  /**
   * Initiates a leave transition for a child.
   * @param key The child's key.
   */
  public performLeave: (key: string) => void;
}

/**
 * A component for managing transitions of a group of elements.
 * @template T The type of HTML element to render as the container.
 */
export type TransitionGroup<T extends keyof React.JSX.IntrinsicElements = "span"> =
  typeof TransitionGroupComponent<T>;
