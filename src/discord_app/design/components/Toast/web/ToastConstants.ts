export enum ToastType {
  MESSAGE = "message",
  SUCCESS = "success",
  FAILURE = "failure",
  CUSTOM = "custom",
  CLIP = "clip",
  LINK = "link",
  FORWARD = "forward",
  INVITE = "invite",
  BOOKMARK = "bookmark",
  CLOCK = "clock",
  AI = "ai",
}

export enum ToastPosition {
  TOP,
  BOTTOM,
}

export interface TOAST_DEFAULT_OPTIONS {
  /**
   * The position of the toast.
   * @default ToastPosition.TOP
   * @see {@link ToastPosition}
   */
  position: ToastPosition;

  /**
   * The component to render in the toast.
   * @default null
   */
  component: null;

  /**
   * The duration the toast should be displayed in milliseconds.
   * @default 3000
   */
  duration: number;
}
