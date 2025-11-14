export interface UseTooltipProps {
  /**
   * The ref to the target element that the tooltip should be positioned relative to.
   */
  targetElementRef?: React.RefObject<HTMLElement>;

  /**
   * Whether the tooltip should be allowed to show.
   * @default true
   */
  shouldShow?: boolean;

  /**
   * The delay in milliseconds before showing the tooltip.
   */
  delay?: number;

  /**
   * Event handler called when the tooltip is shown.
   */
  onTooltipShow?: () => void;

  /**
   * Event handler called when the tooltip is hidden.
   */
  onTooltipHide?: () => void;

  /**
   * Whether to force the tooltip to be open regardless of hover/focus state.
   * @default false
   */
  forceOpen?: boolean;

  /**
   * Whether to show the tooltip only when the target element is overflowing.
   * @default false
   */
  overflowOnly?: boolean;

  /**
   * Whether to hide the tooltip when the target element is clicked.
   * @default true
   */
  hideOnClick?: boolean;
}

export interface TooltipTriggerProps {
  /**
   * Mouse enter event handler for the target element.
   */
  onMouseEnter: React.MouseEventHandler<HTMLElement>;

  /**
   * Mouse leave event handler for the target element.
   */
  onMouseLeave: React.MouseEventHandler<HTMLElement>;

  /**
   * Focus event handler for the target element.
   */
  onFocus: React.FocusEventHandler<HTMLElement>;

  /**
   * Blur event handler for the target element.
   */
  onBlur: React.FocusEventHandler<HTMLElement>;

  /**
   * Context menu event handler for the target element.
   */
  onContextMenu: React.MouseEventHandler<HTMLElement>;

  /**
   * Click event handler for the target element.
   */
  onClick: React.MouseEventHandler<HTMLElement>;
}

export interface UseTooltipResult {
  /**
   * Whether the tooltip is currently visible.
   */
  isVisible: boolean;

  /**
   * Props to spread onto the trigger element to handle tooltip visibility.
   */
  triggerProps: TooltipTriggerProps;
}

/**
 * A hook that provides tooltip visibility state and trigger props.
 * @param props The props to configure the tooltip behavior.
 * @returns An object containing the visibility state and trigger props.
 */
export type UseTooltip = (props: UseTooltipProps) => UseTooltipResult;
