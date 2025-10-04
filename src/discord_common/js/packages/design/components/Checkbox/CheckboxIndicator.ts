import type * as React from "react";

import type { BaseCheckboxProps } from "./BaseCheckbox";
import type { VoidCheckboxIndicatorProps } from "./VoidCheckbox";

export type CheckboxIndicatorProps = Pick<BaseCheckboxProps, "checked" | "disabled"> &
  Pick<VoidCheckboxIndicatorProps, "size">;

/**
 * Visually represents the state of a checkbox.
 */
export type CheckboxIndicator = React.FC<CheckboxIndicatorProps>;
