import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

import type { ClickableProps } from "./Clickable";

export interface ClickableContainerProps {
  /**
   * The HTML tag to use for the container element.
   * @default "div"
   */
  tag?: keyof React.JSX.IntrinsicElements;

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
  onClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when the mouse enters the container.
   */
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when the container is double clicked.
   */
  onDoubleClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when the context menu is opened on the container.
   */
  onContextMenu?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when a key is pressed down on the clickable element.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;

  /**
   * Event handler called when the clickable element gains focus.
   */
  onFocus?: React.FocusEventHandler<HTMLElement>;

  /**
   * Event handler called when the clickable element loses focus.
   */
  onBlur?: React.FocusEventHandler<HTMLElement>;

  /**
   * Event handler called when the mouse enters the container.
   */
  onMouseOver?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when the mouse button is pressed down on the clickable element.
   */
  onMouseDown?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when the mouse leaves the container.
   */
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;

  /**
   * Props to be passed to the clickable component.
   */
  buttonProps?: ClickableProps;

  /**
   * The accessibility label for the clickable element.
   */
  "aria-label"?: string;

  /**
   * The accessibility description for the clickable element.
   */
  "aria-describedby"?: string;
}

/**
 * Versatile container component that can be used to make any element clickable.
 * @example
 * ```tsx
 * <ClickableContainer
 *   onClick={() => console.log("Container clicked")}
 *   onDoubleClick={() => console.log("Container double-clicked")}>
 *   <p>This is a clickable container with interactive events.</p>
 * </ClickableContainer>
 * ```
 */
export type ClickableContainer = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<ClickableContainerProps>> &
    React.RefAttributes<HTMLElement>
> & {
  render: React.ForwardRefRenderFunction<
    HTMLElement,
    React.PropsWithChildren<ClickableContainerProps>
  >;
};
