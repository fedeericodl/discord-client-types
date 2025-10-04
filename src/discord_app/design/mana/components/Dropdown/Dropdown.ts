import type * as React from "react";

import type { BasePopoutProps } from "@app/design/web";

export interface DropdownProps
  extends Pick<BasePopoutProps, "targetElementRef" | "onRequestClose"> {
  /**
   * The height of the dropdown.
   */
  height?: React.CSSProperties["height"];

  /**
   * The width of the dropdown.
   */
  width?: React.CSSProperties["width"];

  /**
   * Whether the dropdown is open.
   */
  isOpen?: boolean;

  /**
   * Whether to render the dropdown in a dialog or inline.
   * @default true
   */
  dialog?: boolean;
}

/**
 * A dropdown component that renders content within a positioned popout container.
 */
export type Dropdown = React.FC<React.PropsWithChildren<DropdownProps>>;
