type Types = "WINDOWS" | "OSX" | "LINUX" | "WEB";

export type PlatformTypes = {
  [K in Types]: K;
};

export type IsPlatformEmbedded = boolean;

/**
 * Returns whether the current platform is Windows.
 */
export type IsWindows = () => boolean;

/**
 * Returns whether the current platform is macOS.
 */
export type IsMac = () => boolean;

/**
 * Returns whether the current platform is Linux.
 */
export type IsLinux = () => boolean;

/**
 * Returns whether the current platform is a desktop platform (Windows, macOS, or Linux).
 */
export type IsDesktop = () => boolean;

/**
 * Returns whether the current platform is Web (browser).
 */
export type IsWeb = () => boolean;

/**
 * Returns whether the current platform is Android Chrome.
 */
export type IsAndroidChrome = () => boolean;

/**
 * Returns whether the current platform is Android Web.
 */
export type IsAndroidWeb = () => boolean;

/**
 * Returns whether the current platform is Mac Web.
 */
export type IsMacWeb = () => boolean;

/**
 * Returns whether the current platform is Android.
 */
export type IsAndroid = () => boolean;

/**
 * Returns whether the current platform is iOS.
 */
export type IsIOS = () => boolean;

/**
 * Returns whether the current platform is Oculus Web.
 */
export type IsOculusWeb = () => boolean;

/**
 * Returns whether the current platform prefers deep linking.
 */
export type PlatformPrefersDeepLink = () => boolean;

/**
 * Returns whether the current platform supports activity join.
 */
export type PlatformSupportsActivityJoin = () => boolean;

/**
 * Returns the current platform as a string.
 */
export type GetPlatform = () => Types;

/**
 * Returns the current platform name as a string (e.g., "win32", "darwin", "linux", etc.).
 */
export type GetPlatformName = () => NodeJS.Platform | "";

/**
 * Returns the native platform as a string.
 */
export type GetNativePlatform = () => "ios" | "android" | "web";

/**
 * Returns the operating system as a string (e.g., "windows", "ios", "android", "macos", "linux", etc.) or undefined if it cannot be determined.
 */
export type GetOS = () =>
  | "android"
  | "linux"
  | "ios"
  | "windows mobile"
  | "windows"
  | "blackberry"
  | "macos"
  | undefined;
