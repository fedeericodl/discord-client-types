import type * as React from "react";

export type Direction = Record<"VERTICAL" | "HORIZONTAL" | "HORIZONTAL_REVERSE", string>;

export type Justify = Record<"START" | "END" | "CENTER" | "BETWEEN" | "AROUND", string>;

export type Align = Record<"START" | "END" | "CENTER" | "STRETCH" | "BASELINE", string>;

export type Wrap = Record<"NO_WRAP" | "WRAP" | "WRAP_REVERSE", string>;

export interface FlexChildProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   * @default 1
   */
  shrink?: React.CSSProperties["flexShrink"];

  /**
   * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   * @default 1
   */
  grow?: React.CSSProperties["flexGrow"];

  /**
   * Specifies the initial main size of the flex item, before any available space is distributed according to the flex factors.
   * @default "auto"
   */
  basis?: React.CSSProperties["flexBasis"];

  /**
   * Whether the flex item should wrap.
   * @default false
   */
  wrap?: boolean;
}

/**
 * A flexible child element to be used within a Flex container.
 * @example
 * ```tsx
 * <Flex>
 *   <Flex.Child>
 *     This is a flex child.
 *   </Flex.Child>
 * </Flex>
 * ```
 */
export type FlexChild = React.FC<React.PropsWithChildren<FlexChildProps>>;

export interface FlexProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Direction of the flex items.
   * @default Flex.Direction.HORIZONTAL
   * @see {@link Direction}
   */
  direction?: string;

  /**
   * Justification of the flex items.
   * @default Flex.Justify.START
   * @see {@link Justify}
   */
  justify?: string;

  /**
   * Alignment of the flex items.
   * @default Flex.Align.STRETCH
   * @see {@link Align}
   */
  align?: string;

  /**
   * Wrap of the flex items.
   * @default Flex.Wrap.NO_WRAP
   * @see {@link Wrap}
   */
  wrap?: string;

  /**
   * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   * @default 1
   */
  shrink?: React.CSSProperties["flexShrink"];

  /**
   * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   * @default 1
   */
  grow?: React.CSSProperties["flexGrow"];

  /**
   * Specifies the initial main size of the flex item, before any available space is distributed according to the flex factors.
   * @default "auto"
   */
  basis?: React.CSSProperties["flexBasis"];
}

/**
 * The Flex component is a container for arranging elements with flexbox utilities.
 * @example
 * ```tsx
 * <Flex direction={Flex.Direction.VERTICAL}>
 *   <FormTitle>Nice Title</FormTitle>
 *   <Text>Random text</Text>
 * </Flex>
 * ```
 */
export type Flex = React.FC<React.PropsWithChildren<FlexProps>> & {
  Child: FlexChild;
  Direction: Direction;
  Align: Align;
  Justify: Justify;
  Wrap: Wrap;
};
