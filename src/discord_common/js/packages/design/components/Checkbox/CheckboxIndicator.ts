import type * as React from "react";

import type { BaseCheckboxProps } from "./BaseCheckbox";

export type CheckboxIndicatorProps = Pick<BaseCheckboxProps, "checked" | "disabled">;

/**
 * Visually represents the state of a checkbox.
 */
export type CheckboxIndicator = React.FC<CheckboxIndicatorProps>;
