import type * as React from "react";

export type StackProps<T extends keyof React.JSX.IntrinsicElements = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    /**
     * The HTML tag to use for the stack.
     * @default "div"
     */
    as?: T;

    /**
     * Spacing between stack items.
     * @default 8
     */
    gap?: number;

    /**
     * Flex direction of the stack.
     * @default "vertical"
     */
    direction?: "vertical" | "vertical-reverse" | "horizontal" | "horizontal-reverse";

    /**
     * Cross-axis alignment of children.
     * @default "stretch"
     */
    align?: "start" | "end" | "center" | "stretch" | "baseline";

    /**
     * Whether children should wrap onto multiple lines when there’s not enough space.
     * @default false
     */
    wrap?: boolean;

    /**
     * Padding applied to the stack container.
     * @default 0
     */
    padding?: number | string | Record<string, number | string>;

    /**
     * Whether the stack should take up the full width of its container.
     * @default true
     */
    fullWidth?: boolean;
  };

/**
 * A flexible layout component that arranges its children in a stack
 * (vertical or horizontal) with configurable spacing, alignment, wrapping, and padding.
 * @example
 * ```tsx
 * <Stack direction="horizontal" gap={4} align="center" padding={2}>
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 *   <Button>Button 3</Button>
 * </Stack>
 * ```
 */
export type Stack<T extends keyof React.JSX.IntrinsicElements = "div"> =
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.PropsWithChildren<StackProps<T>>> & React.RefAttributes<unknown>
  > & {
    render: React.ForwardRefRenderFunction<unknown, React.PropsWithChildren<StackProps<T>>>;
  };
