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
     *
     * ! FIX ME
     */
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
  public ref?: JSX.IntrinsicElements[T];
  public handleKeyPress: React.KeyboardEventHandler<JSX.IntrinsicElements[T]>;
  public setRef: React.RefCallback<JSX.IntrinsicElements[T]>;

  public renderNonInteractive: () => React.ReactElement;
  public renderInner: () => React.ReactElement;
}

// TODO: Try to find a way to make the generic working.

/**
 * Versatile component that can be used to make any element clickable.
 * @template T The HTML tag to use for the clickable element.
 * @example
 * ```tsx
 * <Clickable onClick={() => console.log("Clicked!")}>
 *   Click me!
 * </Clickable>
 * ```
 */
export type Clickable<T extends keyof JSX.IntrinsicElements = "div"> = typeof ClickableComponent<T>;
