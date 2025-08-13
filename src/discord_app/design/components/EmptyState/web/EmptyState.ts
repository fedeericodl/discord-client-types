import type * as React from "react";

export interface EmptyStateImageProps {
  /**
   * The URL of the image to display in light mode.
   */
  lightSrc: string;

  /**
   * The URL of the image to display in dark mode.
   */
  darkSrc: string;

  /**
   * The width of the image.
   */
  width: number;

  /**
   * The height of the image.
   */
  height: number;

  /**
   * The horizontal offset of the image.
   */
  offsetX?: number;

  /**
   * The vertical offset of the image.
   */
  offsetY?: number;

  /**
   * The style of the image.
   */
  style?: React.CSSProperties;
}

/**
 * An image for the empty state.
 */
export declare class EmptyStateImage extends React.PureComponent<EmptyStateImageProps> {}

export interface EmptyStateTextProps {
  /**
   * The class name applied to the title.
   */
  className?: string;

  /**
   * The class name applied to the note.
   */
  noteClassName?: string;

  /**
   * The note to display below the title.
   */
  note?: React.ReactNode;

  /**
   * The style applied to the title.
   */
  style?: React.CSSProperties;
}

/**
 * Text for the empty state, including a title and a note.
 */
export type EmptyStateText = React.FC<React.PropsWithChildren<EmptyStateTextProps>>;

export interface EmptyStateProps {
  /**
   * The theme of the empty state.
   */
  theme: "dark" | "light";

  /**
   * The class name applied to the empty state container.
   */
  className?: string;

  /**
   * The style applied to the empty state container.
   */
  style?: React.CSSProperties;
}

/**
 * Used to display an empty state, which is a state where no data is available.
 * Usually used in a list or table when no items are present.
 * @example
 * ```tsx
 * <EmptyState theme="dark">
 *   <EmptyStateImage lightSrc="light.png" darkSrc="dark.png" width={100} height={100} />
 *   <EmptyStateText>No data available.</EmptyStateText>
 * </EmptyState>
 * ```
 */
export type EmptyState = React.FC<React.PropsWithChildren<EmptyStateProps>>;
