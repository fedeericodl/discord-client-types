import type * as React from "react";

interface PressEvent {
  /**
   * The pointer type that triggered the press event.
   */
  pointerType: "mouse" | "pen" | "touch" | "keyboard" | "virtual";

  /**
   * The target element of the press event.
   */
  target: Element;

  /**
   * Whether the shift keyboard modifier was held during the press event.
   */
  shiftKey: boolean;

  /**
   * Whether the ctrl keyboard modifier was held during the press event.
   */
  ctrlKey: boolean;

  /**
   * Whether the meta keyboard modifier was held during the press event.
   */
  metaKey: boolean;

  /**
   * Whether the alt keyboard modifier was held during the press event.
   */
  altKey: boolean;

  /**
   * X position relative to the target.
   */
  x: number;

  /**
   * Y position relative to the target.
   */
  y: number;
}

// cspell:ignore longpress longpressend longpressstart
interface LongPressEvent extends PressEvent {
  /**
   * The type of long press event being fired.
   */
  type: "longpressstart" | "longpressend" | "longpress";
}

interface LongPressProps {
  /**
   * Whether long press events should be disabled.
   */
  isDisabled?: boolean;

  /**
   * Handler that is called when a long press interaction starts.
   */
  onLongPressStart?: (e: LongPressEvent) => void;

  /**
   * Handler that is called when a long press interaction ends, either
   * over the target or when the pointer leaves the target.
   */
  onLongPressEnd?: (e: LongPressEvent) => void;

  /**
   * Handler that is called when the threshold time is met while
   * the press is over the target.
   */
  onLongPress?: (e: LongPressEvent) => void;

  /**
   * The amount of time in milliseconds to wait before triggering a long press.
   * @default 500ms
   */
  threshold?: number;

  /**
   * A description for assistive technology users indicating that a long press
   * action is available, e.g. "Long press to open menu".
   */
  accessibilityDescription?: string;
}

export type PressableProps = LongPressProps;

/**
 * A foundational interaction component that provides accessible press and long press handling.
 * @see {@link https://www.npmjs.com/package/react-aria react-aria}
 */
export type Pressable = React.FC<PressableProps>;
