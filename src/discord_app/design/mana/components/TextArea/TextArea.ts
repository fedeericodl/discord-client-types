import type { FormControlProps } from "@discordapp/design/web";
import type * as React from "react";

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<"textarea">,
    Pick<
      FormControlProps,
      "label" | "hideLabel" | "description" | "helperText" | "successMessage"
    > {
  /**
   * Whether the textarea should automatically adjust its height based on content.
   * @default false
   */
  autosize?: boolean;

  /**
   * The error message to display.
   */
  error?: string;

  /**
   * Whether the textarea is initially "dirty" (i.e. textarea field has been changed).
   */
  defaultDirty?: boolean;

  /**
   * Whether the character count should be shown.
   */
  showCharacterCount?: boolean;

  /**
   * Whether the remaining character count should be shown.
   */
  showRemainingCharacterCount?: boolean;

  /**
   * A ref to the textarea element.
   */
  inputRef?: React.Ref<HTMLTextAreaElement>;
}

/**
 * A text input for entering multiple lines of text.
 * @example
 * ```tsx
 * <TextArea label="Text Area Example" description="This is a description for the text area." value={value} placeholder="Enter some text" />
 * ```
 */
export type TextArea = React.FC<TextAreaProps>;
