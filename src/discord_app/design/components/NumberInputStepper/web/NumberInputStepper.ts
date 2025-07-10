import type * as React from "react";

export interface NumberInputStepperProps {
  /**
   * The current value of the number input.
   */
  value: number;

  /**
   * Event handler called when the number input changes.
   */
  onChange: (value: number) => void;

  /**
   * The class name applied to the number input stepper.
   */
  className?: string;

  /**
   * The minimum value allowed for the number input.
   */
  minValue?: number;

  /**
   * The maximum value allowed for the number input.
   */
  maxValue?: number;
}

/**
 * A stepper for increasing or decreasing a number input.
 * @example
 * ```tsx
 * <NumberInputStepper value={5} onChange={(value) => console.log(value, "changed!")} />
 * ```
 */
export type NumberInputStepper = React.FC<NumberInputStepperProps>;
