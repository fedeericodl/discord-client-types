import type * as React from "react";

import type { MenuItemType } from "../MenuContext";
import type { MenuControlRef } from "../items/MenuControlItem";

export interface MenuSliderControlProps {
  /**
   * The current value of the slider.
   */
  value?: number;

  /**
   * Minimum value the slider can represent.
   * @default 0
   */
  minValue?: number;

  /**
   * Maximum value the slider can represent.
   * @default 100
   */
  maxValue?: number;

  /**
   * Event handler called when the slider value changes.
   */
  onChange?: (value: number) => void;

  /**
   * Event handler called when the control item is interacted with.
   */
  onInteraction?: (type: MenuItemType) => void;

  /**
   * Custom renderer for the current value.
   */
  renderValue?: (value: number) => React.ReactNode;

  /**
   * The accessibility label for the slider.
   */
  "aria-label"?: string;
}

/**
 * A menu control that can be used to display a slider in a menu.
 * @example
 * ```tsx
 * <MenuControlItem id="example-control" control={(props, ref) => (
 *   <MenuSliderControl {...props} ref={ref} value={50} onChange={(value) => console.log(value)} />
 * )}>
 * ```
 */
export type MenuSliderControl = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MenuSliderControlProps> & React.RefAttributes<MenuControlRef>
> & {
  render: React.ForwardRefRenderFunction<MenuControlRef, MenuSliderControlProps>;
};
