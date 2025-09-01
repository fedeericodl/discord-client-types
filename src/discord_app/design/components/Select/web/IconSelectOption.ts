import type * as React from "react";

import type { IconSize } from "../../Icon/IconSize";
import type { SearchableSelect } from "./SearchableSelect";
import type { Select } from "./Select";

interface IconProps {
  /**
   * The size of the icon.
   */
  size?: keyof IconSize;

  /**
   * The color of the icon.
   */
  color?: string;

  /**
   * The class name applied to the icon.
   */
  className?: string;
}

export interface IconSelectOptionProps {
  /**
   * The title of the option.
   */
  title?: React.ReactNode;

  /**
   * The subtitle of the option.
   */
  subtitle?: React.ReactNode;

  /**
   * The icon to be displayed alongside the option.
   */
  icon?: React.ComponentType<IconProps>;
}

/**
 * Component to be used as a custom option in a select, with the `renderOptionLabel` prop of {@link SearchableSelect} or {@link Select}.
 */
export type IconSelectOption = React.FC<IconSelectOptionProps>;
