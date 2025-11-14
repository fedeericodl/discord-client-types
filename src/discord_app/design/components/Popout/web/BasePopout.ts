import type { LayerProps } from "@discordapp/design/components/Layer/Layer";
import type { Timeout } from "@discordapp/timers/Timers";
import type * as React from "react";

import type {
  LayerPosition,
  PositionInfo,
  ReferencePositionLayer,
  ReferencePositionLayerProps,
} from "@app/design/web";
import type { LoadingPopout } from "./LoadingPopout";

export type POPOUT_PREVENT_CLOSE = symbol;

export interface BasePopoutChildrenProps {
  /**
   * Event handler called when the mouse button is pressed down.
   */
  onMouseDown: () => Promise<void>;

  /**
   * Event handler called when the mouse enters the trigger element.
   */
  onMouseEnter?: () => void;

  /**
   * Event handler called when a key is pressed down.
   */
  onKeyDown: (event: React.KeyboardEvent) => void;

  /**
   * Event handler called when the popout is clicked.
   */
  onClick: (event?: React.MouseEvent) => void;

  /**
   * The accessibility attribute indicating the ID of the popout.
   */
  "aria-controls": string;

  /**
   * The accessibility attribute indicating whether the popout is shown.
   */
  "aria-expanded": boolean;
}

export interface BasePopoutChildrenState {
  /**
   * Whether the popout is currently shown.
   */
  isShown: boolean;

  /**
   * The current position of the popout.
   */
  position: LayerPosition;
}

export interface PopoutRenderProps extends PositionInfo {
  /**
   * Updates the position of the popout.
   */
  updatePosition: () => void;

  /**
   * Closes the popout.
   */
  closePopout: (event?: MouseEvent) => void;

  /**
   * Sets the popout reference.
   */
  setPopoutRef: (element?: HTMLElement | null) => void;
}

export interface BasePopoutProps
  extends Pick<
      ReferencePositionLayerProps,
      | "position"
      | "align"
      | "nudgeAlignIntoViewport"
      | "useRawTargetDimensions"
      | "spacing"
      | "autoInvert"
      | "fixed"
      | "positionKey"
      | "disablePointerEvents"
      | "clickTrap"
    >,
    Partial<LayerProps> {
  /**
   * Whether the popout should be shown.
   */
  shouldShow?: boolean;

  /**
   * Prevents popout from closing when modals are clicked.
   * Useful for popouts that should persist through modal interactions.
   */
  ignoreModalClicks?: boolean;

  /**
   * Scroll behavior for the popout when the page scrolls.
   */
  scrollBehavior?: "close" | "sticky";

  /**
   * Reference to the DOM element that triggers the popout.
   */
  targetElementRef?: React.RefObject<HTMLElement>;

  /**
   * Render prop providing trigger element props and popout state.
   */
  children: (props: BasePopoutChildrenProps, state: BasePopoutChildrenState) => React.ReactNode;

  /**
   * Whether to use mouse hover trigger instead of click activation.
   */
  useMouseEnter?: boolean;

  /**
   * Unique identifier for this popout instance.
   */
  popoutKey?: string;

  /**
   * Function that renders the actual popout content.
   * Receives control methods for closing and positioning.
   */
  renderPopout: React.FC<PopoutRenderProps>;

  /**
   * Component displayed while asynchronous content loads.
   * @default LoadingPopout
   * @see {@link LoadingPopout}
   */
  loadingComponent?: React.ComponentType;

  /**
   * Event handler called when popout requests to close.
   */
  onRequestClose?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | undefined,
    context?: string,
  ) => void;

  /**
   * Event handler called for shift+click interactions.
   */
  onShiftClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * Event handler called when popout requests to open.
   */
  onRequestOpen?: () => void;

  /**
   * Asynchronous function for preloading popout content.
   */
  preload?: () => Promise<void>;

  /**
   * Whether to close the popout when clicking outside of it.
   * @default true
   */
  closeOnClickOutside?: boolean;
}

export interface BasePopoutState {
  /**
   * Whether the popout is currently visible.
   * @default false
   */
  shouldShowPopout: boolean;

  /**
   * Whether the popout is currently in a loading state.
   * @default false
   */
  isLoading: boolean;

  /**
   * Last rendered position value for the popout.
   */
  renderedPosition: LayerPosition;

  /**
   * Incremental key triggering position recalculation.
   * @default 0
   */
  resizeKey: number;

  /**
   * Whether to display a loading UI.
   * @default false
   */
  shouldShowLoadingState: boolean;
}

/**
 * Foundation component for creating interactive popout interfaces with comprehensive event handling and positioning.
 *
 * Manages the complete lifecycle of popout interactions including trigger events, positioning calculations,
 * loading states, and accessibility features.
 * @example
 * ```tsx
 * const triggerRef = React.useRef<HTMLButtonElement>(null);
 *
 * <BasePopout
 *   targetElementRef={triggerRef}
 *   position="bottom"
 *   spacing={8}
 *   renderPopout={({ closePopout }) => (
 *     <div style={{ padding: 16, background: "white", borderRadius: 4 }}>
 *       <Text>Popout content here</Text>
 *       <Button onClick={() => closePopout()}>Close</Button>
 *     </div>
 *   )}>
 *   {(triggerProps, { isShown }) => (
 *     <Button ref={triggerRef} {...triggerProps}>
 *       {isShown ? "Close Menu" : "Open Menu"}
 *     </Button>
 *   )}
 * </BasePopout>
 * ```
 */
export declare class BasePopout extends React.Component<BasePopoutProps, BasePopoutState> {
  /**
   * Reference to the DOM element that triggers the popout.
   */
  public domElementRef: React.RefObject<HTMLElement>;

  /**
   * Reference to the positioning layer component.
   */
  public layerRef: React.RefObject<ReferencePositionLayer>;

  /**
   * Reference to the popout content element.
   */
  public popoutRef: React.RefObject<HTMLElement>;

  /**
   * `ResizeObserver` instance monitoring popout size changes.
   */
  public resizeObserver?: ResizeObserver;

  /**
   * Unique identifier for this popout instance.
   */
  public popoutId: string;

  /**
   * Timeout controlling loading state display delay.
   */
  public loadingTimeout: Timeout;

  /**
   * Timeout managing click event validation.
   */
  public validClickTimeout: Timeout;

  /**
   * Whether the popout is currently in a valid click state.
   */
  public isValidClickStart: boolean;

  /**
   * Dispatches popout show event.
   */
  public handlePopoutShow: () => void;

  /**
   * Dispatches popout hide event.
   */
  public handlePopoutHide: () => void;

  /**
   * Configures popout element reference and initializes resize observation.
   * Sets up automatic position recalculation when popout content size changes.
   * @param element Popout content element or null for cleanup.
   */
  public handleSetPopoutRef: (element: HTMLElement | null) => void;

  /**
   * Renders popout content with loading state handling.
   * @param positionInfo Information about the current position of the popout.
   * @param updatePosition Function to trigger position recalculation.
   * @returns Rendered popout content or loading component.
   */
  public renderPopout: (positionInfo: PositionInfo, updatePosition: () => void) => React.ReactNode;

  /**
   * Closes the popout.
   * @param event Event that triggered the close action.
   */
  public close: (event?: MouseEvent) => void;

  /**
   * Handles click interactions on the trigger element.
   * @param event Mouse click event from the trigger.
   */
  public handleClick: (event?: React.MouseEvent) => void;

  /**
   * Handles mouse enter events when hover trigger mode is enabled.
   */
  public handleMouseEnter: () => void;

  /**
   * Executes asynchronous content preloading with loading state management.
   * @returns Promise resolving when preload operation completes.
   */
  public handlePreload: () => Promise<void>;

  /**
   * Handles keyboard events for accessibility-driven preloading.
   * @param event Keyboard event from the trigger element.
   */
  public handleKeyboardPreload: (event: React.KeyboardEvent) => void;

  /**
   * Processes document mouse down events for click-outside detection.
   * @param event Document-level mouse down event.
   */
  public handleDocumentMouseDown: (event: MouseEvent) => void;

  /**
   * Processes document mouse up events to complete click-outside detection.
   * Closes popout when valid click-outside sequence is detected.
   * @param event Document-level mouse up event.
   */
  public handleDocumentMouseUp: (event: MouseEvent) => void;

  /**
   * Updates rendered position state when positioning system reports changes.
   * @param position New position value from the positioning system.
   */
  public handlePopoutPositionChange: (position: LayerPosition) => void;

  /**
   * Handles scroll events to close popout when scroll-close is enabled.
   * Provides immediate popout closure on any scroll activity.
   * @param event Scroll event from the document.
   */
  public handleScroll: (event: Event) => void;

  /**
   * Handles escape key presses to close the popout.
   * @param event Keyboard event from the document.
   */
  public handleEscapeClose: (event?: KeyboardEvent) => void;

  /**
   * Handles scroll events to maintain popout position when sticky-scroll is enabled.
   */
  public handleStickyScroll: () => void;

  /**
   * Determines popout visibility based on props and state priority.
   * @param props The component props.
   * @param state The component state.
   * @returns Whether the popout should be visible.
   */
  public shouldShowPopout: (props: BasePopoutProps, state: BasePopoutState) => boolean;

  /**
   * Retrieves and validates the trigger DOM element.
   * @returns Valid DOM element or null if not found.
   */
  public getDomElement: () => HTMLElement | null;

  /**
   * Returns different action types for standard vs modal-aware closing.
   */
  public get closeAction(): string;

  /**
   * Establishes event listeners and subscriptions for active popout.
   * Sets up document-level event handling for click-outside detection and scrolling.
   */
  public setupShowPopout: () => void;

  /**
   * Removes all event listeners and subscriptions when popout becomes inactive.
   */
  public unsubscribe: () => void;

  /**
   * Renders the positioned layer containing the popout when visible.
   * Handles loading state logic and integrates with the layer positioning system.
   * @returns Layer component with positioned popout or null when hidden.
   */
  public renderLayer: () => React.ReactNode;

  /**
   * Updates internal visibility state.
   * @param show Whether the popout should be shown or hidden.
   */
  public toggleShow: (show: boolean) => void;
}
