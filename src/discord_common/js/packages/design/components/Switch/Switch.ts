import type * as React from "react";

import type { VoidSwitchProps } from "./VoidSwitch";

export type SwitchProps = VoidSwitchProps;

/**
 * An interactive switch component.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <Switch checked={value} onChange={setValue} />
 * ```
 */
export type Switch = React.FC<SwitchProps>;
