export enum JumpTypes {
  ANIMATED = "ANIMATED",
  INSTANT = "INSTANT",
}

export enum RunningProcessFullscreenType {
  UNKNOWN,
  WINDOWED,
  MAXIMIZED,
  BORDERLESS_FULLSCREEN,
  FULLSCREEN,
  MINIMIZED,
}

export enum QueryUserNotificationState {
  QUNS_UNKNOWN = -1,
  QUNS_NOT_PRESENT = 1,
  QUNS_BUSY,
  QUNS_RUNNING_D3D_FULL_SCREEN,
  QUNS_PRESENTATION_MODE,
  QUNS_ACCEPTS_NOTIFICATIONS,
  QUNS_QUIET_TIME,
  QUNS_APP,
}

export interface DEFAULT_OVERLAY_OPTIONS {
  /**
   * Whether the compatibility hook is enabled.
   */
  compatibilityHook: boolean;

  /**
   * Whether the overlay should warn.
   */
  warn: boolean;

  /**
   * Whether the overlay is enabled.
   */
  enabled: boolean;

  /**
   * Whether the overlay is enabled in OOP mode.
   */
  enabledOOP: boolean;

  /**
   * Whether the overlay is allowed to hook into other processes.
   */
  allowHook: boolean;

  /**
   * Whether the overlay is allowed to run in OOP mode.
   */
  supportsOutOfProcessOverlay: boolean;
}
