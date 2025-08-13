import type * as React from "react";

// TODO: Apparently SelectableItemProps can have other props, see the PhoneField component for example.

export interface SelectableItemProps {
  /**
   * Whether the item is currently selected.
   */
  selected?: boolean;

  /**
   * Custom color for the item.
   */
  color?: string;

  /**
   * The class name applied to the item container.
   */
  className?: string;

  /**
   * The styles applied to the item container.
   */
  style?: React.CSSProperties;

  /**
   * Event handler called when item is clicked or activated via keyboard.
   */
  onClick?: (props: Omit<SelectableItemProps, "onClick">) => void;
}

export interface SelectableItemState {
  /**
   * The computed text color.
   */
  color: string;
}

/**
 * Selectable item component for use in popouts.
 */
export declare class SelectableItem extends React.PureComponent<
  React.PropsWithChildren<SelectableItemProps>,
  SelectableItemState
> {
  /**
   * Keyboard event handler for accessibility support.
   */
  public handleKeyUp: React.KeyboardEventHandler<HTMLDivElement>;

  /**
   * Event handler called when the item is clicked.
   */
  public handleClick: () => void;
}
