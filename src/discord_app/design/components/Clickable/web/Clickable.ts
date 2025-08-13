import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export type ClickableProps<T extends keyof React.JSX.IntrinsicElements = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    /**
     * The HTML tag to use for the clickable element.
     * @default "div"
     */
    tag?: T;

    /**
     * Props to be passed to the focus ring. Only applicable when the component has no context.
     */
    focusProps?: FocusRingProps;

    /**
     * A ref for the clickable element.
     */
    innerRef?: React.Ref<React.ComponentRef<T>>;

    /**
     * Whether key press events will be ignored.
     */
    ignoreKeyPress?: boolean;
  };

export declare class ClickableComponent<
  T extends keyof React.JSX.IntrinsicElements = "div",
> extends React.Component<React.PropsWithChildren<ClickableProps<T>>> {
  /**
   * The ref to the clickable element.
   */
  public ref: React.JSX.IntrinsicElements[T] | undefined;

  /**
   * Event handler called when a key is pressed down on the clickable element.
   */
  public handleKeyPress: React.KeyboardEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Ref callback to store the clickable element.
   */
  public setRef: React.RefCallback<React.JSX.IntrinsicElements[T]>;

  /**
   * Renders a non-interactive clickable element.
   */
  public renderNonInteractive: () => React.ReactElement;

  /**
   * Renders the clickable element with an onClick handler.
   */
  public renderInner: () => React.ReactElement;
}

// TODO: Try to find a way to make the generic working.

/**
 * Versatile component that can be used to make any element clickable.
 * @template T The HTML tag to use for the clickable element.
 * @example
 * ```tsx
 * <Clickable onClick={() => console.log("Clicked!")}>Click me!</Clickable>
 * ```
 */
export type Clickable<T extends keyof React.JSX.IntrinsicElements = "div"> =
  typeof ClickableComponent<T>;
