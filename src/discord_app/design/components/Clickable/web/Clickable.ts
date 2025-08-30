import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface ClickableProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * The HTML tag to use for the clickable element.
   * @default "div"
   */
  tag?: keyof React.JSX.IntrinsicElements;

  /**
   * Props to be passed to the focus ring. Only applicable when the component has no context.
   */
  focusProps?: FocusRingProps;

  /**
   * A ref for the clickable element.
   */
  innerRef?: React.Ref<HTMLElement>;

  /**
   * Whether key press events will be ignored.
   */
  ignoreKeyPress?: boolean;
}

/**
 * Versatile component that can be used to make any element clickable.
 * @example
 * ```tsx
 * <Clickable onClick={() => console.log("Clicked!")}>Click me!</Clickable>
 * ```
 */
export declare class Clickable extends React.Component<React.PropsWithChildren<ClickableProps>> {
  /**
   * The ref to the clickable element.
   */
  public ref: HTMLElement | undefined;

  /**
   * Event handler called when a key is pressed down on the clickable element.
   */
  public handleKeyPress: React.KeyboardEventHandler<HTMLElement>;

  /**
   * Ref callback to store the clickable element.
   */
  public setRef: React.RefCallback<HTMLElement>;

  /**
   * Renders a non-interactive clickable element.
   */
  public renderNonInteractive: () => React.ReactElement;

  /**
   * Renders the clickable element with an onClick handler.
   */
  public renderInner: () => React.ReactElement;
}
