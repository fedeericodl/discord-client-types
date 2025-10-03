import type * as React from "react";
import type { TagProps as RACTagProps } from "react-aria-components";

import type { TagGraphicType } from "./TagGraphic";
import type { TagGroup } from "./TagGroup";

export interface TagProps extends RACTagProps {
  /**
   * The text label of the tag.
   */
  label: string;

  /**
   * The layout style of the tag.
   */
  layout?: "default" | "inline";

  /**
   * Icon to display alongside the label.
   */
  icon?: TagGraphicType;

  /**
   * The accessibility hint for the tag.
   */
  accessibilityHint?: string;
}

/**
 * A single tag element for use within a {@link TagGroup}.
 */
export type Tag = React.FC<TagProps>;
