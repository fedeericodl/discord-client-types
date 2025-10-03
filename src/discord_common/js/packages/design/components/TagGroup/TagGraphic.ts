import type * as React from "react";

import type { ICON_SIZE } from "../Icon/getIconSize";
import type { Tag } from "./Tag";

export interface TagGraphicRole {
  /**
   * The type of the graphic.
   */
  type: "role";

  /**
   * The color of the role dot.
   */
  color?: React.CSSProperties["backgroundColor"];
}

export interface TagGraphicAvatarOrImage {
  /**
   * The type of the graphic.
   */
  type: "avatar" | "image";

  /**
   * The source URL of the avatar image.
   */
  src: string;
}

interface IconProps {
  /**
   * The size of the icon.
   */
  size: keyof ICON_SIZE;
}

export type TagGraphicType =
  | TagGraphicRole
  | TagGraphicAvatarOrImage
  | React.ComponentType<IconProps>;

export interface TagGraphicProps {
  /**
   * The graphic to display.
   */
  graphic: TagGraphicType;

  /**
   * The layout style of the tag.
   */
  layout?: "default" | "inline";
}

/**
 * An icon, avatar, image, or role color dot to display within a {@link Tag}.
 */
export type TagGraphic = React.FC<TagGraphicProps>;
