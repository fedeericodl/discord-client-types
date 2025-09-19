import type * as React from "react";

import type { StackProps } from "../Stack/Stack";
import type { ButtonSize } from "./BaseButton";

export interface ButtonGroupProps
  extends Pick<StackProps, "justify" | "align" | "padding" | "className" | "wrap"> {
  /**
   * The size of buttons within the group.
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Flex direction of the button group.
   * @default "horizontal"
   */
  direction?: StackProps["direction"];

  /**
   * Whether the buttons inside the group should stretch to fill available width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button group container should take up the full width of its parent.
   * @default false
   */
  fullWidthContainer?: boolean;
}

/**
 * Container component for grouping related buttons with consistent spacing and layout.
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="primary" text="Save" />
 *   <Button variant="secondary" text="Cancel" />
 * </ButtonGroup>
 * ```
 */
export type ButtonGroup = React.FC<React.PropsWithChildren<ButtonGroupProps>>;
