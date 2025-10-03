import type * as React from "react";

import type { CheckboxProps } from "./Checkbox";

export type HoistedStylesCheckboxProps = CheckboxProps & {
  /**
   * The class name applied to the checkbox container element.
   */
  className?: string;

  /**
   * Whether to render only the checkbox indicator.
   * @default false
   */
  isIndicator?: boolean;
};

/**
 * An interactive checkbox element that uses hoisted styles.
 */
export type HoistedStylesCheckbox = React.FC<HoistedStylesCheckboxProps>;
