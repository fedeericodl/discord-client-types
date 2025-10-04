import type * as React from "react";

export type TextAreaAutosizeProps = React.ComponentPropsWithoutRef<"textarea">;

/**
 * A textarea that automatically adjusts its height based on its content.
 */
export type TextAreaAutosize = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TextAreaAutosizeProps> & React.RefAttributes<HTMLTextAreaElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaAutosizeProps>;
};
