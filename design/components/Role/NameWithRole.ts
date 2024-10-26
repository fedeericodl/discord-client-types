import type React from "react";
import type { Anchor, AnchorProps } from "../Anchor";
import type { RoleDot } from "./RoleDot";

export interface RoleProps {
  /**
   * The style of the role.
   */
  //? Maybe get this type from accessibility
  roleStyle?: "username" | "dot" | "hidden";

  /**
   * The name of the user.
   */
  name: string;

  /**
   * The color of the role.
   */
  color?: string;

  /**
   * The name of the role to display on hover.
   */
  roleName?: string;

  /**
   * The alignment of the dot.
   * @default "left"
   */
  dotAlignment?: "left" | "right";

  /**
   * The class name applied to the role.
   */
  className?: string;
}

export interface NameWithRoleAnchorProps extends Omit<RoleProps, "roleStyle">, AnchorProps {}

/**
 * Displays a name colored by a role or with a {@link RoleDot}, with an {@link Anchor}.
 * @example
 * ```tsx
 * <NameWithRoleAnchor name="John Doe" color="#ff0000" roleName="Admin" onClick={() => console.log("Clicked!")} />
 * ```
 */
export type NameWithRoleAnchor = React.FC<NameWithRoleAnchorProps>;

export type NameWithRoleProps = Omit<RoleProps, "roleStyle">;

/**
 * Displays a name colored by a role or with a {@link RoleDot}.
 * @example
 * ```tsx
 * <NameWithRole name="John Doe" color="#ff0000" roleName="Admin" />
 * ```
 */
export type NameWithRole = React.FC<NameWithRoleProps>;
