import type * as React from "react";

import type { BaseButtonProps, ButtonVariant } from "./BaseButton";

export interface CloseButtonProps extends Omit<BaseButtonProps, "icon" | "text" | "fullWidth"> {
  /**
   * The variant of the button.
   * @default "icon-only"
   * @see {@link ButtonVariant}
   */
  variant?: ButtonVariant;
}

/**
 * A button that displays a close (X) icon.
 * @example
 * ```tsx
 * <CloseButton onClick={() => console.log("Closed!")} />
 * ```
 */
export type CloseButton = React.FC<CloseButtonProps>;
