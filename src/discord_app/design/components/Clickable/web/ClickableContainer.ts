import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface ClickableContainerProps<T extends keyof React.JSX.IntrinsicElements = "div"> {
  /**
   * The HTML tag to use for the container element.
   * @default "div"
   */
  tag?: T;

  /**
   * The class name applied to the container.
   */
  className?: string;

  /**
   * The style applied to the container.
   */
  style?: React.CSSProperties;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * Event handler called when the container is clicked.
   */
  onClick?: React.MouseEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the container is double clicked.
   */
  onDoubleClick?: React.MouseEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the context menu is opened on the container.
   */
  onContextMenu?: React.MouseEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when a key is pressed down on the clickable element.
   */
  onKeyDown?: React.KeyboardEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the clickable element gains focus.
   */
  onFocus?: React.FocusEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the clickable element loses focus.
   */
  onBlur?: React.FocusEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the mouse enters the container.
   */
  onMouseOver?: React.MouseEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the mouse button is pressed down on the clickable element.
   */
  onMouseDown?: React.MouseEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Event handler called when the mouse leaves the container.
   */
  onMouseLeave?: React.MouseEventHandler<React.JSX.IntrinsicElements[T]>;

  /**
   * Props to be passed to the clickable component.
   */
  buttonProps?: ClickableContainerProps<T>;

  /**
   * The accessibility label for the clickable element.
   */
  "aria-label"?: string;
}

/**
 * Versatile container component that can be used to make any element clickable.
 * @template T The HTML tag to use for the clickable container.
 * @example
 * ```tsx
 * <ClickableContainer
 *   onClick={() => console.log("Container clicked")}
 *   onDoubleClick={() => console.log("Container double-clicked")}>
 *   <p>This is a clickable container with interactive events.</p>
 * </ClickableContainer>
 * ```
 */
export type ClickableContainer<T extends keyof React.JSX.IntrinsicElements = "div"> =
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.PropsWithChildren<ClickableContainerProps<T>>> &
      React.RefAttributes<unknown>
  > & {
    render: React.ForwardRefRenderFunction<
      unknown,
      React.PropsWithChildren<ClickableContainerProps<T>>
    >;
  };
