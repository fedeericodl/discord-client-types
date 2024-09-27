import type React from "react";
import type { Clickable } from "./Clickable/Clickable";

export type InteractiveProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    /**
     * The HTML tag to use for the interactive element. Defaults to the {@link Clickable} component.
     * @default "div"
     */
    as?: T;

    /**
     * Whether the element is muted.
     * @default false
     */
    muted?: boolean;

    /**
     * Whether the element is selected.
     * @default false
     */
    selected?: boolean;
  };

/**
 * A versatile component that can be used to make any element interactive.
 * @template T The HTML tag to use for the interactive element.
 */
export type Interactive = <T extends keyof JSX.IntrinsicElements = "div">(
  props: InteractiveProps<T>,
) => React.ReactNode;
