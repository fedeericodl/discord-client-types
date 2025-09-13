import type * as React from "react";

import type { CheckboxProps as VoidCheckboxProps } from "./VoidCheckbox";

export type CheckboxProps = VoidCheckboxProps;

/**
 * An interactive checkbox element.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <Checkbox value={value} onChange={() => setValue(!value)} />
 * ```
 */
export type Checkbox = React.FC<CheckboxProps>;
