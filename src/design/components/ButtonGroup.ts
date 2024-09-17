import type React from "react";

interface Button {
  /**
   * The content of the button.
   */
  content?: React.ReactNode;

  /**
   * The class name applied to the button.
   */
  className?: string;

  /**
   * Event handler called when the button is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Whether the button is disabled.
   *
   * @default false
   */
  disabled?: boolean;
}

interface Buttons {
  /**
   * The button props.
   */
  data: Button;

  /**
   * Whether the button is disabled.
   *
   * @default false
   */
  disabled?: boolean;
}

export interface ButtonGroupProps {
  /**
   * The buttons to be rendered in the button group.
   */
  buttons: Buttons[];

  /**
   * Whether the button group is disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * The class name applied to the button group.
   */
  className?: string;
}

/**
 * A group of buttons.
 *
 * @example
 * ```tsx
 * const buttons = [
 * 	 { data: { content: "Button 1" } },
 * 	 { data: { content: <Text variant="text-xs/normal">Button 2 custom</Text> } },
 * 	 { data: { content: "Button 3 disabled" }, disabled: true }
 * ];
 *
 * <ButtonGroup buttons={buttons} />;
 * ```
 */
export type ButtonGroup = React.FC<ButtonGroupProps>;
