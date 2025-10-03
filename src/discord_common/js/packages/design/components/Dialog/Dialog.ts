import type { ImpressionNames } from "@discordapp/analytics-utils/AnalyticsSchema";
import type * as React from "react";

import type { JumpSectionHTMLAttributes } from "../Focus/FocusJumpSection";

export interface DialogContextValue {
  /**
   * The props for the first focusable item within the dialog.
   */
  firstFocusableItemProps: JumpSectionHTMLAttributes | undefined;
}

/**
 * React context for sharing dialog state throughout the component tree.
 */
export type DialogContext = React.Context<DialogContextValue>;

// TODO: This should be moved in the analytics-utils package
export interface DialogImpression {
  /**
   * Name identifier for the impression event.
   * @see {@link ImpressionNames}
   */
  impressionName?: ImpressionNames;

  /**
   * Additional properties to include with the impression.
   */
  impressionProperties?: Record<string, unknown>;
}

export interface TrackingProps {
  /**
   * Type identifier for analytics impression tracking.
   */
  impressionType?: string;

  /**
   * Analytics impression configuration for tracking dialog views.
   */
  impression?: DialogImpression;

  /**
   * Whether to disable automatic analytics tracking.
   */
  disableTrack?: boolean;
}

export interface DialogProps
  extends React.ComponentPropsWithoutRef<"div">,
    React.RefAttributes<HTMLDivElement> {
  /**
   * The ref to element that should receive focus when dialog closes.
   */
  returnRef?: React.RefObject<HTMLElement>;

  /**
   * Whether the dialog is a modal.
   * @default true
   */
  modal?: boolean;

  /**
   * Callback ref to access the dialog DOM element.
   */
  setDialogRef?: React.RefCallback<HTMLDivElement>;

  /**
   * Analytics impression configuration for tracking dialog views.
   */
  trackingProps?: DialogImpression;
}

/**
 * Modal dialog component with focus management.
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = React.useState(false);
 * const triggerRef = React.useRef<HTMLButtonElement>(null);
 *
 * <Dialog returnRef={triggerRef}>
 *   <Heading>Dialog Title</Heading>
 *   <Text>Dialog content goes here</Text>
 *   <Button onClick={() => setIsOpen(false)}>Close</Button>
 * </Dialog>
 * ```
 */
export type Dialog = React.FC<DialogProps>;
