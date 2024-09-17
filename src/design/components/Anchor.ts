import type React from "react";
import type { FocusRingProps } from "react-focus-rings";

export interface AnchorProps extends React.ComponentPropsWithoutRef<"a"> {
  /**
   * Whether to use default underline styles.
   *
   * @default true
   */
  useDefaultUnderlineStyles?: boolean;

  /**
   * Props to be passed to the focus ring.
   */
  focusProps?: FocusRingProps;
}

/**
 * Displays an anchor element.
 *
 * @example
 * ```tsx
 * <Anchor href={"https://dis.gd/help"}>Help & Support</Anchor>
 * ```
 */
export type Anchor = React.FC<React.PropsWithChildren<AnchorProps>>;
