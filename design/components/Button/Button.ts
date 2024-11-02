import type React from "react";
import type { FocusRingProps } from "react-focus-rings";
import type { LinkProps } from "react-router-dom";

export type ButtonLooks = Record<"FILLED" | "OUTLINED" | "LINK" | "BLANK", string>;

export type ButtonColors = Record<
  | "BRAND"
  | "BRAND_INVERTED"
  | "RED"
  | "GREEN"
  | "PRIMARY"
  | "LINK"
  | "WHITE"
  | "TRANSPARENT"
  | "CUSTOM",
  string
>;

export type ButtonSizes = Record<
  "NONE" | "TINY" | "SMALL" | "MEDIUM" | "LARGE" | "MIN" | "MAX" | "ICON",
  string
>;

export interface ButtonLinkProps<S = unknown> extends LinkProps<S> {
  /**
   * The appearance of the button.
   * @default Button.Looks.FILLED
   * @see {@link ButtonLooks}
   */
  look?: string;

  /**
   * The color of the button.
   * @default Button.Colors.BRAND
   * @see {@link ButtonColors}
   */
  color?: string;

  /**
   * The size of the button.
   * @default Button.Sizes.MEDIUM
   * @see {@link ButtonSizes}
   */
  size?: string;

  /**
   * Whether the button should take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button should grow to fill its container.
   * @default true
   */
  grow?: boolean;

  /**
   * The class name applied to the inner span of the button.
   */
  innerClassName?: string;
}

/**
 * A button component that acts as a link.
 * @template S The type of state for the button.
 * @example
 * ```tsx
 * <Button.Link to="/channels/@me" look={Button.Looks.LINK} color={Button.Colors.PRIMARY}>
 *   Direct Messages
 * </Button.Link>
 * ```
 * @see {@link https://v5.reactrouter.com/web/api/Link React Router v5}
 */
export type ButtonLink<S = unknown> = React.FC<React.PropsWithChildren<ButtonLinkProps<S>>>;

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The appearance of the button.
   * @default Button.Looks.FILLED
   * @see {@link ButtonLooks}
   */
  look?: string;

  /**
   * The color of the button.
   * @default Button.Colors.BRAND
   * @see {@link ButtonColors}
   */
  color?: string;

  /**
   * The size of the button.
   * @default Button.Sizes.MEDIUM
   * @see {@link ButtonSizes}
   */
  size?: string;

  /**
   * Whether the button should take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button should grow to fill its container.
   * @default true
   */
  grow?: boolean;

  /**
   * Whether the button is in a submitting state. Only applicable when `disabled` prop is false.
   * @default false
   */
  submitting?: boolean;

  /**
   * The class name applied to the button wrapper.
   */
  wrapperClassName?: string;

  /**
   * The class name applied to the inner button.
   */
  innerClassName?: string;

  /**
   * A ref to be passed to the button element.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;

  /**
   * The label to announce when the button starts submitting. Only applicable when `submitting` props is true.
   */
  submittingStartedLabel?: string;

  /**
   * The label to announce when the button finishes submitting. Only applicable when `submitting` props is false.
   */
  submittingFinishedLabel?: string;
}

/**
 * Function that returns a string representing the class name that should be applied to the button based on the provided properties.
 * @param props The props to use to determine the button style.
 * @returns The class name to apply to the button.
 */
export type GetButtonStyle = (
  props: Pick<
    ButtonProps,
    "look" | "color" | "size" | "fullWidth" | "grow" | "submitting" | "disabled"
  >,
) => string;

/**
 * An interactive button element.
 * @example
 * ```tsx
 * <Button
 *   onClick={() => console.log("Pressed!")}
 *   look={Button.Looks.INVERTED}
 *   color={Button.Colors.GREEN}>
 *   Click me!
 * </Button>
 * ```
 */
export type Button = React.FC<React.PropsWithChildren<ButtonProps>> & {
  Looks: ButtonLooks;
  Colors: ButtonColors;
  Sizes: ButtonSizes;
  Link: ButtonLink;
};
