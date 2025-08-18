import type * as React from "react";

export interface MenuInteractiveCompositeControlProps {
  /**
   * The class name applied to the container.
   */
  className?: string;
}

/**
 * A composite control that can be used to create interactive custom menu controls.
 * @example
 * ```tsx
 * <MenuControlItem id="example-control" control={(props, ref) => (
 *   <MenuInteractiveCompositeControl {...props} ref={ref}>
 *     <Text>This is an example</Text>
 *   </MenuInteractiveCompositeControl>
 * )}>
 * ```
 */
export type MenuInteractiveCompositeControl = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<MenuInteractiveCompositeControlProps>> &
    React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<
    unknown,
    React.PropsWithChildren<MenuInteractiveCompositeControlProps>
  >;
};
