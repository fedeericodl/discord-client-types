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
   * @see {@link ToastPosition}
   */
  position: ToastPosition.TOP;

  /**
   * The component to render in the toast.
   */
  component: null;

  /**
   * The duration the toast should be displayed in milliseconds.
   */
  duration: 3000;

  /**
   * The context of the app where the toast is displayed.
   */
  appContext: "APP";
}
