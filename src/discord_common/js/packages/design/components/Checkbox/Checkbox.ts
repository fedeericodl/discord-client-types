import type * as React from "react";

import type { BaseCheckboxProps } from "./BaseCheckbox";
import type { VoidCheckboxProps } from "./VoidCheckbox";

export type CheckboxProps = BaseCheckboxProps | VoidCheckboxProps;

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

/**
 * An interactive checkbox element.
 */
export type WrappedVoidCheckbox = React.FC<CheckboxProps>;
// unknown name
