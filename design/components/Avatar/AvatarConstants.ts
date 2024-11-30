/**
 * Ratio used to calculate avatar height on mobile devices.
 */
export type MOBILE_HEIGHT_RATIO = number;

/**
 * Ratio used to calculate avatar width when user is typing.
 */
export type TYPING_WIDTH_RATIO = number;

/**
 * Radius value for mobile avatar icons.
 */
export type MOBILE_ICON_RADIUS = number;

/**
 * Border radius value for avatar cutout effects.
 */
export type CUTOUT_BORDER_RADIUS = number;

type Sizes =
  | "SIZE_16"
  | "SIZE_20"
  | "SIZE_24"
  | "SIZE_32"
  | "SIZE_40"
  | "SIZE_44"
  | "SIZE_48"
  | "SIZE_56"
  | "SIZE_80"
  | "SIZE_120"
  | "SIZE_152"
  | "DEPRECATED_SIZE_30"
  | "DEPRECATED_SIZE_60"
  | "DEPRECATED_SIZE_100";

export type AvatarSizes = {
  [K in Sizes as Uppercase<K>]: K;
};

type BackdropColors = "black" | "white";

export type StatusBackdropColors = {
  [K in BackdropColors as Uppercase<K>]: K;
};

export enum StatusBackdropOpacity {
  HIGH = 0.7,
  LOW = 0.45,
}

/**
 * Specifications for avatar rendering.
 */
export interface Specs {
  /**
   * Avatar size in pixels.
   */
  size: number;
  /**
   * Status indicator size.
   */
  status: number;
  /**
   * Stroke width.
   */
  stroke: number;
  /**
   * Positioning offset.
   */
  offset: number;
}

/**
 * Map of size variants to their specifications.
 */
export type AvatarSizeSpecs = Readonly<Record<Sizes, Readonly<Specs>>>;

/**
 * Function to get avatar specifications for a given size.
 * @param size Avatar size variant.
 * @returns The avatar specification.
 */
export type GetAvatarSpecs = (size: Sizes) => Readonly<Specs>;

/**
 * Function to get numerical size value from size variant or number.
 * @param size Avatar size variant or number.
 * @returns The avatar size in pixels.
 */
export type GetAvatarSize = (size: Sizes | number) => number;
