import type * as React from "react";

export type FormProps = React.ComponentPropsWithoutRef<"form">;

/**
 * A form component that arranges its children in a vertical stack.
 */
export type Form = React.FC<React.PropsWithChildren<FormProps>>;
