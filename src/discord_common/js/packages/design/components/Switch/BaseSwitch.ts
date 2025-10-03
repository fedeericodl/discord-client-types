import type * as React from "react";

import type { FormControlProps } from "../Forms/FormControl";
import type { SwitchIndicatorProps } from "./SwitchIndicator";

export type BaseSwitchProps = Omit<FormControlProps, "disabled" | "layout" | "children"> &
  Pick<SwitchIndicatorProps, "checked" | "disabled" | "onChange" | "focusProps" | "hasIcon">;

/**
 * An interactive switch component.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <BaseSwitch label="Example Switch" description="This is an example switch" checked={value} onChange={setValue} />
 * ```
 */
export type BaseSwitch = React.FC<BaseSwitchProps>;
