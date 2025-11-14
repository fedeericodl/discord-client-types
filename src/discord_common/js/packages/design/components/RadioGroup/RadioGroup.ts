import type * as React from "react";

import type { BaseRadioGroupProps } from "./BaseRadioGroup";
import type { VoidRadioGroupProps, VoidRadioIndicatorProps } from "./VoidRadioGroup";

export type RadioGroupProps = BaseRadioGroupProps | VoidRadioGroupProps;

/**
 * A group of radio buttons that allows the user to select one option from a set.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState<string | null>(null);
 * const options = [
 *   { value: "option1", name: "Option 1", desc: "This is the first option" },
 *   { value: "option2", name: "Option 2", desc: "This is the second option" },
 *   { value: "option3", name: "Option 3", desc: "This is the third option", disabled: true },
 * ];
 *
 * <RadioGroup
 *   label="Choose an option"
 *   value={value}
 *   onChange={(option) => setValue(option.value)}
 *   options={options}
 * />
 * ```
 */
export type RadioGroup = React.FC<RadioGroupProps>;

export type RadioGroupIndicatorProps = VoidRadioIndicatorProps;

/**
 * A radio indicator that can be used outside of a radio group.
 */
export type RadioGroupIndicator = React.FC<RadioGroupIndicatorProps>;
