import type * as React from "react";

import type { TextProps } from "../Text/Text";

export type HeadingProps = Omit<TextProps, "tag">;

/**
 * A heading component that renders a heading element with the specified level.
 */
export type Heading = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HeadingProps> & React.RefAttributes<HTMLHeadingElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLHeadingElement, HeadingProps>;
};
