import type React from "react";

interface DotProps {
  /**
   * The color of the dot.
   */
  color?: string | undefined;

  /**
   * The class name applied to the dot.
   */
  className?: string;

  /**
   * Whether to show a background under the dot.
   *
   * @default true
   */
  background?: boolean;
}

export interface RoleDotProps extends DotProps {
  /**
   * The name of the role to display on hover.
   */
  name?: string;

  /**
   * Whether to show a tooltip with the role name on hover.
   *
   * @default true
   */
  tooltip?: boolean;
}

/**
 * Displays a role dot, which is a color representation of a role.
 * Typically used when accessibility options for role colors are enabled.
 */
export type RoleDot = React.FC<RoleDotProps>;

export interface RoleCircleProps {
  /**
   * The color of the role circle.
   */
  color?: string | undefined;

  /**
   * The class name applied to the role circle.
   */
  className?: string;
}

/**
 * Displays a role circle, which is a color representation of a role.
 */
export type RoleCircle = React.FC<RoleCircleProps>;
