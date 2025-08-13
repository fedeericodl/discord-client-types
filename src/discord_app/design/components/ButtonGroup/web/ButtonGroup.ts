import type * as React from "react";

export interface ButtonData {
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
   */
  disabled?: boolean;
}

export interface Buttons {
  /**
   * The button props.
   */
  data: ButtonData;

  /**
   * Whether the button is disabled.
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
   */
  disabled?: boolean;

  /**
   * The class name applied to the button group.
   */
  className?: string;
}

/**
 * A group of buttons.
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
