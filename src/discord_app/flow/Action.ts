export enum DevToolsFocusedPidsTrackMode {
  TRACK_FOCUS = "track_focus",
  UNTRACK_FOCUS = "untrack_focus",
}

export enum OverlayForcedRenderMode {
  UNSET = "UNSET",
  IN_PROCESS_V2 = "IN_PROCESS_V2",
  OUT_OF_PROCESS_V3 = "OUT_OF_PROCESS_V3",
  OUT_OF_PROCESS_V3_LIMITED_INTERACTION = "OUT_OF_PROCESS_V3_LIMITED_INTERACTION",
}

export enum OverlayMethod {
  Disabled,
  Hook,
  OutOfProcess,
  OutOfProcessLimitedInteraction,
}

export enum OverlayState {
  INITIALIZING = "initializing",
  OVERLAY_DISABLED = "overlay_disabled",
  WAITING_FOR_SCREEN_TYPE_RESOLUTION = "waiting_for_screen_type_resolution",
  WAITING_FOR_MODULE_TRACKING = "waiting_for_module_tracking",
  WAITING_FOR_OVERLAY_OPEN = "waiting_for_overlay_open",
  OVERLAY_RENDERING = "overlay_rendering",
  OVERLAY_CRASHED = "overlay_crashed",
  OVERLAY_CRASHED_DISABLED = "overlay_crashed_disabled",
}
