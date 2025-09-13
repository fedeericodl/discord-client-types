import type * as React from "react";

import type { BaseButtonProps } from "./BaseButton";

export type ButtonProps = BaseButtonProps;

/**
 * An interactive button element.
 * @example
 * ```tsx
 * <Button onClick={() => console.log("Pressed!")} text="Click me!" />
 * ```
 */
export type Button = React.FC<ButtonProps>;
