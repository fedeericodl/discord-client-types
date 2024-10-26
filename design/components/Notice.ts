import type React from "react";
import type { AnchorProps } from "./Anchor";

export type NoticeColors = Record<
  | "DEFAULT"
  | "NEUTRAL"
  | "BRAND"
  | "WARNING"
  | "DANGER"
  | "INFO"
  | "STREAMER_MODE"
  | "CUSTOM"
  | "SPOTIFY"
  | "PLAYSTATION"
  | "PREMIUM_TIER_0"
  | "PREMIUM_TIER_1"
  | "PREMIUM_TIER_2",
  string
>;

export interface NoticeButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The class name applied to the button.
   */
  className?: string;

  /**
   * Whether the button has a minor importance.
   * @default false
   */
  minor?: boolean;
}

/**
 * A button that can be used in a notice.
 */
export type NoticeButton = React.FC<React.PropsWithChildren<NoticeButtonProps>>;

export interface PrimaryCTANoticeButtonProps extends NoticeButtonProps {
  /**
   * The type of notice.
   */
  noticeType?: string;

  /**
   * Additional tracking properties.
   */
  // TODO: Complete this when AnalyticsUtils is available.
  additionalTrackingProps?: Record<string, unknown>;
}

/**
 * A primary call-to-action button that can be used in a notice.
 */
export type PrimaryCTANoticeButton = React.FC<React.PropsWithChildren<PrimaryCTANoticeButtonProps>>;

export type NoticeButtonAnchorProps = AnchorProps;

/**
 * A button that can be used in a notice that acts as an anchor.
 */
export type NoticeButtonAnchor = React.FC<React.PropsWithChildren<NoticeButtonAnchorProps>>;

export interface NoticeCloseButtonProps {
  /**
   * Event handler called when the close button is clicked.
   */
  onClick: () => void;

  /**
   * The type of notice.
   */
  noticeType?: string;
}

/**
 * A close button that can be used in a notice.
 */
export type NoticeCloseButton = React.FC<NoticeCloseButtonProps>;

export interface NoticeProps {
  /**
   * The color of the notice.
   * @default NoticeColors.DEFAULT
   * @see {@link NoticeColors}
   */
  color?: string;

  /**
   * The class name applied to the notice.
   */
  className?: string;

  /**
   * The style applied to the notice.
   */
  style?: React.CSSProperties;
}

/**
 * A notice that can be used to display important information to the user.
 * @example
 * ```tsx
 * <Notice color={Notice.Colors.BRAND}>
 *   <NoticeCloseButton onClick={() => console.log("Closed!")} />
 *     This is a notice!
 *   <NoticeButton onClick={() => console.log("Button clicked!")}>Click me!</NoticeButton>
 * </Notice>
 * ```
 */
export type Notice = React.FC<React.PropsWithChildren<NoticeProps>>;
