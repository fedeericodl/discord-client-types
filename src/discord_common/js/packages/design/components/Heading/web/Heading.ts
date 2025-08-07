import type * as React from "react";

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps<T extends HeadingLevels> = React.ComponentPropsWithoutRef<T> & {
  /**
   * The variant of the heading element.
   */
  variant?: T;
};

// TODO: Try to find a way to make the generic working.

export type Heading<T extends HeadingLevels> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HeadingProps<T>> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, HeadingProps<T>>;
};
