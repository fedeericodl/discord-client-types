import type * as React from "react";

export interface FieldSetProps extends React.ComponentPropsWithoutRef<"fieldset"> {
  /**
   * The label of the fieldset.
   */
  label?: React.ReactNode;
}

/**
 * A fieldset component that groups related form elements together.
 */
export type FieldSet = React.FC<React.PropsWithChildren<FieldSetProps>>;
