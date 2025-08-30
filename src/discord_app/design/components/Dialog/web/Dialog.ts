import type * as React from "react";

export interface DialogContextValue {
  /**
   * Whether the current component is rendered within a dialog container.
   */
  inDialog: boolean | undefined;

  /**
   * Function to control focus lock behavior within the dialog.
   */
  setFocusLockDisabled?: (disabled: boolean) => void;
}

/**
 * React context for sharing dialog state throughout the component tree.
 */
export type DialogContext = React.Context<DialogContextValue>;

// TODO: This should be moved in the analytics-utils package
export interface DialogImpression {
  /**
   * Name identifier for the impression event.
   */
  impressionName?: string;

  /**
   * Additional properties to include with the impression.
   */
  impressionProperties?: Record<string, unknown>;
}

export interface DialogProps extends React.ComponentPropsWithoutRef<"div"> {
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

  /**
   * The ref to element that should receive focus when dialog closes.
   */
  returnRef?: React.RefObject<HTMLElement>;
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
export type Dialog = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<DialogProps>> & React.RefAttributes<HTMLDivElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLDivElement, React.PropsWithChildren<DialogProps>>;
};
