export enum ToastType {
  MESSAGE,
  SUCCESS,
  FAILURE,
  CUSTOM,
  CLIP,
  LINK,
  FORWARD,
  BOOKMARK,
  CLOCK,
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
