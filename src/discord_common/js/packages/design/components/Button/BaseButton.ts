import type { ICON_SIZE, StickerFormat } from "@discordapp/design/web";
import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "icon-only"
  | "color-mix"
  | "input-accessory"
  | "critical-primary"
  | "critical-secondary"
  | "active"
  | "overlay-primary"
  | "overlay-secondary"
  | "expressive";

export type ButtonSize = "xs" | "sm" | "md";

export interface BaseButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    Pick<ButtonIconProps, "icon" | "iconPosition" | "iconOpticalOffsetMargin"> {
  /**
   * The variant of the button.
   * @default "primary"
   * @see {@link ButtonVariant}
   */
  variant?: ButtonVariant;

  /**
   * The size of the button.
   * @default "md"
   * @see {@link ButtonSize}
   */
  size?: ButtonSize;

  /**
   * The text to display inside the button.
   */
  text?: React.ReactNode;

  /**
   * Whether the button should take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * Whether the button is in a loading state.
   */
  loading?: boolean;

  /**
   * Label to display when the button is in a loading state.
   */
  loadingStartedLabel?: string;

  /**
   * Label to display when the button has finished loading.
   */
  loadingFinishedLabel?: string;

  /**
   * Whether the button has rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * The minimum width of the button.
   */
  minWidth?: number | string;

  /**
   * A ref to be passed to the button element.
   */
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

/**
 * The base button component.
 * @example
 * ```tsx
 * <BaseButton onClick={() => console.log("Pressed!")} text="Click me!" />
 * ```
 */
export type BaseButton = React.FC<BaseButtonProps>;

export interface ButtonIconStickerAsset {
  /**
   * The ID of the sticker.
   */
  id: string;

  /**
   * The format of the sticker.
   */
  format_type: StickerFormat;

  /**
   * The description of the sticker.
   */
  description: string;

  /**
   * The name of the sticker.
   */
  name: string;
}

export interface ButtonIconStickerComponentProps {
  /**
   * The size of the sticker to render.
   */
  size: number;

  /**
   * The sticker asset to render.
   */
  sticker: ButtonIconStickerAsset;

  /**
   * Whether the button is currently being interacted with.
   */
  isInteracting: boolean;
}

export interface ButtonIconSticker {
  /**
   * The type of the icon.
   */
  type: "sticker";

  /**
   * The component to render the sticker.
   */
  component: React.ComponentType<ButtonIconStickerComponentProps>;

  /**
   * The sticker asset to render.
   */
  asset: ButtonIconStickerAsset;
}

export interface IconProps {
  /**
   * The color of the icon.
   */
  color: string;

  /**
   * The style of the icon.
   */
  style: React.CSSProperties;

  /**
   * The size of the icon.
   */
  size: keyof ICON_SIZE;

  /**
   * The class name applied to the icon element.
   */
  className: string;
}

export interface ButtonIconIcon {
  /**
   * The type of the icon.
   */
  type: "icon";

  /**
   * The icon component to render.
   */
  asset: React.ComponentType<IconProps>;
}

// TODO: Complete Rive props and asset
export interface ButtonIconRive {
  /**
   * The type of the icon.
   */
  type: "rive";

  /**
   * The Rive component to render.
   */
  asset: React.ComponentType<unknown>;

  /**
   * Props to be passed to the Rive component.
   */
  riveProps?: Record<string, unknown>;
}

export type ButtonIconType =
  | ButtonIconSticker
  | React.ComponentType<IconProps>
  | ButtonIconIcon
  | ButtonIconRive;

export interface ButtonIconProps {
  /**
   * The icon to display inside the button.
   */
  icon: ButtonIconType;

  /**
   * The margin to apply to the icon's optical offset.
   */
  iconOpticalOffsetMargin?: number;

  /**
   * The position of the icon.
   */
  iconPosition?: "start" | "end";

  /**
   * The size of the icon button.
   * @see {@link ButtonSize}
   */
  size?: ButtonSize;

  /**
   * A ref to be passed to the icon element.
   */
  ref?: React.RefObject<HTMLButtonElement>;

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
}

/**
 * An icon to display inside a button.
 */
export type ButtonIcon = React.FC<ButtonIconProps>;
