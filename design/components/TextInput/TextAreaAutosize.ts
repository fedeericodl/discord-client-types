import type React from "react";

export interface TextAreaAutosizeProps
  extends Omit<React.ComponentPropsWithoutRef<"textarea">, "onResize"> {
  /**
   * Event handler called when the height of the textarea changes.
   */
  onResize?: (height: number | undefined) => void;

  /**
   * Approximate width of each character in pixels.
   * Used as an optimization to avoid recalculating height for short, single-line content that fits within the textarea width.
   */
  fontWidthEstimate?: number;
}

export interface TextAreaAutosizeState {
  /**
   * The height of the textarea.
   */
  height: number | undefined;
}

export interface TextAreaAutosizeNodeStyling {
  /**
   * The CSS style string for the textarea.
   */
  sizingStyle: string;

  /**
   * The padding size of the textarea.
   */
  paddingSize: number;

  /**
   * The border size of the textarea.
   */
  borderSize: number;

  /**
   * The box-sizing of the textarea.
   */
  boxSizing: string;
}

export declare class TextAreaAutosizeComponent extends React.PureComponent<
  TextAreaAutosizeProps,
  TextAreaAutosizeState
> {
  /**
   * The textarea element.
   * @private
   */
  private _textArea?: HTMLTextAreaElement;

  /**
   * Ref callback to store the textarea element.
   */
  public handleSetRef: React.RefCallback<HTMLTextAreaElement>;

  /**
   * Event handler called when the value of the textarea changes.
   */
  public handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;

  /**
   * Calculates and sets the height of the textarea element based on its content.
   */
  public calculateSize: () => void;

  /**
   * Calculates the styling of the textarea node.
   * @param node The textarea node.
   * @returns The node styling.
   */
  public calculateNodeStyling: (node: HTMLTextAreaElement) => TextAreaAutosizeNodeStyling;

  /**
   * Clears the value of the textarea.
   */
  public clear: () => void;

  /**
   * Removes focus from the textarea.
   */
  public blur: () => void;

  /**
   * Sets focus on the textarea.
   */
  public focus: () => void;

  /**
   * Sets the selection range of the textarea.
   * @param start The start position of the selection.
   * @param end The end position of the selection.
   */
  public setSelection: (start: number, end: number) => void;

  /**
   * Returns the start position of the selection in the textarea.
   */
  public get selectionStart(): number;

  /**
   * Returns the end position of the selection in the textarea.
   */
  public get selectionEnd(): number;

  /**
   * Returns the value of the textarea.
   */
  public get value(): string;
}

/**
 * A textarea that automatically adjusts its height based on its content.
 */
export type TextAreaAutosize = typeof TextAreaAutosizeComponent;
