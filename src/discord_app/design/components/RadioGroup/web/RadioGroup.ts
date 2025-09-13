import type * as React from "react";

import type { RadioGroupProps as VoidRadioGroupProps } from "./VoidRadioGroup";

export type RadioGroupProps = VoidRadioGroupProps;

/**
 * A group of radio buttons that allows the user to select one option from a set.
 */
export type RadioGroup = React.FC<RadioGroupProps>;
