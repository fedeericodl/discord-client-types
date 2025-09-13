import type * as React from "react";
import type { FocusRingProps } from "react-focus-rings";

import type { ButtonIconProps } from "./BaseButton";

export type ToggleIconButtonVariant =
  | "secondary"
  | "tertiary"
  | "overlay-secondary"
  | "overlay-tertiary";

export interface ToggleIconButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    Pick<ButtonIconProps, "size" | "icon" | "iconOpticalOffsetMargin"> {
  /**
   * The variant of the toggle icon button.
   * @default "secondary"
   * @see {@link ToggleIconButtonVariant}
   */
  variant?: ToggleIconButtonVariant;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * Whether the button is in a pressed state.
   * @default false
   */
  pressed?: boolean;

  /**
   * The ref of the button element.
   */
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

/**
 * A button component with an icon that can be toggled on and off.
 * @example
 * ```tsx
 * const [pressed, setPressed] = useState(false);
 *
 * <ToggleIconButton
 *   onClick={() => setPressed(!pressed)}
 *   icon={pressed ? ChevronLargeUpIcon : ChevronLargeDownIcon}
 *   pressed={pressed}
 * />
 */
export type ToggleIconButton = React.FC<ToggleIconButtonProps>;
