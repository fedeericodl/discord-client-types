import type React from "react";
import type { FocusRingProps } from "react-focus-rings";

export type ClickableProps<T extends keyof JSX.IntrinsicElements = "div"> =
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
    // TODO: Fix this type.
    innerRef?: React.Ref<JSX.IntrinsicElements[T]>;

    /**
     * Whether key press events will be ignored.
     * @default false
     */
    ignoreKeyPress?: boolean;
  };

export declare class ClickableComponent<
  T extends keyof JSX.IntrinsicElements = "div",
> extends React.Component<React.PropsWithChildren<ClickableProps<T>>> {
  /**
   * The ref to the clickable element.
   */
  public ref?: JSX.IntrinsicElements[T];

  /**
   * Event handler called when a key is pressed down on the clickable element.
   */
  public handleKeyPress: React.KeyboardEventHandler<JSX.IntrinsicElements[T]>;

  /**
   * Ref callback to store the clickable element.
   */
  public setRef: React.RefCallback<JSX.IntrinsicElements[T]>;

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
export type Clickable<T extends keyof JSX.IntrinsicElements = "div"> = typeof ClickableComponent<T>;
