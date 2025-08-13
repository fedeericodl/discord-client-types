import type * as React from "react";

import type { LayerPosition, PositionInfo } from "../../Layers/web/ReferencePositionLayer";
import type { BasePopout, BasePopoutProps } from "./BasePopout";

export enum PopoutAnimation {
  NONE = "1",
  TRANSLATE = "2",
  SCALE = "3",
  FADE = "4",
}

export interface PopoutProps
  extends Pick<BasePopoutProps, "children">,
    Partial<
      Pick<
        BasePopoutProps,
        | "shouldShow"
        | "onRequestOpen"
        | "onRequestClose"
        | "align"
        | "fixed"
        | "useRawTargetDimensions"
        | "onShiftClick"
        | "positionKey"
        | "popoutKey"
        | "preload"
        | "disablePointerEvents"
        | "ignoreModalClicks"
        | "closeOnScroll"
        | "useMouseEnter"
        | "renderPopout"
        | "layerContext"
        | "clickTrap"
        | "targetElementRef"
      >
    > {
  /**
   * The position of the layer relative to the target element.
   * @default "right"
   * @see {@link LayerPosition}
   */
  position?: LayerPosition;

  /**
   * Whether to automatically invert the position if there's insufficient space.
   * @default true
   */
  autoInvert?: boolean;

  /**
   * Whether to nudge the layer alignment to keep it within the viewport.
   * @default true
   */
  nudgeAlignIntoViewport?: boolean;

  /**
   * The spacing (in pixels) between the layer and the target element.
   * @default 8
   */
  spacing?: number;

  /**
   * Type of animation to apply when showing/hiding the popout.
   * @default PopoutAnimation.TRANSLATE
   * @see {@link PopoutAnimation}
   */
  animation?: PopoutAnimation;

  /**
   * Position of the popout relative to its trigger element.
   * Determines animation direction and CSS positioning classes.
   * @see {@link LayerPosition}
   */
  animationPosition?: LayerPosition;
}

/**
 * Main popout component for creating floating UI elements that appear relative to a trigger.
 *
 * Popouts are commonly used for dropdowns, context menus, tooltips, and other overlay content
 * that needs to appear near a specific element. This component builds on {@link BasePopout} by adding
 * automatic CSS animations and simplified configuration.
 * @example
 * ```tsx
 * <Popout
 *   position="bottom"
 *   renderPopout={() => <div>Menu content</div>}>
 *   {(props) => <Button {...props}>Open Menu</Button>}
 * </Popout>
 * ```
 */
export declare class Popout extends React.Component<PopoutProps> {
  /**
   * The ref to the underlying {@link BasePopout} component.
   */
  public ref: React.RefObject<BasePopout>;

  /**
   * Renders popout content.
   * @param positionInfo Information about the current position of the popout.
   * @returns Rendered popout content.
   * @throws Will throw an error if the position information is invalid.
   */
  public renderPopout: (positionInfo: PositionInfo) => React.ReactNode;
}

export interface LazyPopoutProps extends Omit<PopoutProps, "renderPopout"> {
  /**
   * Function that returns a promise resolving to the popout content.
   * Used for lazy loading the popout content.
   */
  renderPopout: () => Promise<React.ReactNode>;
}

/**
 * Popout component that loads content asynchronously with automatic loading states.
 *
 * Similar to the regular {@link Popout} but designed for content that takes time to load,
 * such as data from APIs. Shows a spinner while loading and transitions to the
 * actual content once ready.
 * @example
 * ```tsx
 * <LazyPopout
 *   renderPopout={async () => {
 *     const data = await fetchData();
 *     return <DataView data={data} />;
 *   }}>
 *   {(props) => <Button {...props}>Load Data</Button>}
 * </LazyPopout>
 * ```
 */
export type LazyPopout = React.FC<LazyPopoutProps> & {
  Animation: typeof PopoutAnimation;
};
