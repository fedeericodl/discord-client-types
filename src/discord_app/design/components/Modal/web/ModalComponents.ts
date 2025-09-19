import type {
  AdvancedScrollerProps,
  AdvancedScrollerRef,
} from "@discordapp/design/components/Scroller/factories/createAdvancedScroller";
import type { UseSpringProps } from "@react-spring/web";
import type * as React from "react";

import type { FlexProps } from "@app/modules/core/web/Flex";

import type { ButtonProps } from "../../Button/web/Button";
import type { DialogProps } from "../../Dialog/web/Dialog";
import type { ListScrollerProps, ListScrollerRef } from "../../List/web/createListScroller";
import type { ModalTransitionState } from "./ModalConstants";

type Sizes = "small" | "medium" | "large" | "dynamic";

export type ModalSize = {
  [K in Sizes as Uppercase<K>]: K;
};

type Animations = "default" | "subtle";

export type ModalAnimation = {
  [K in Animations as Uppercase<K>]: K;
};

export interface ModalRootProps extends Omit<DialogProps, "onAnimationEnd"> {
  /**
   * The current transition state of the modal.
   * @see {@link ModalTransitionState}
   */
  transitionState?: ModalTransitionState;

  /**
   * The size of the modal.
   * @default ModalSize.SMALL
   * @see {@link Sizes ModalSize}
   */
  size?: Sizes;

  /**
   * Whether to enable fullscreen mode on mobile devices.
   * @default true
   */
  fullscreenOnMobile?: boolean;

  /**
   * Whether to hide the modal shadow.
   * @default false
   */
  hideShadow?: boolean;

  /**
   * Event handler called when the modal animation ends.
   * @default NOOP
   */
  onAnimationEnd?: UseSpringProps["onRest"];

  /**
   * The animation type for the modal.
   * @default ModalAnimation.DEFAULT
   * @see {@link Animations ModalAnimation}
   */
  animation?: Animations;

  /**
   * The name of the modal component, for analytics purposes.
   */
  parentComponent?: string;
}

/**
 * The root container component for modals. Provides the main modal structure.
 * @example
 * ```tsx
 * <ModalRoot transitionState={transitionState} size=ModalSize.MEDIUM>
 *   <ModalHeader>My Modal Title</ModalHeader>
 *   <ModalContent>Modal content here</ModalContent>
 *   <ModalFooter>
 *     <Button onClick={onClose}>Close</Button>
 *   </ModalFooter>
 * </ModalRoot>
 * ```
 */
export type ModalRoot = React.FC<React.PropsWithChildren<ModalRootProps>>;

export interface ModalHeaderProps
  extends Pick<FlexProps, "direction" | "justify" | "align" | "wrap" | "className"> {
  /**
   * Whether to show a separator line under the header.
   */
  separator?: boolean;
}

/**
 * The header section component for modals.
 * @example
 * ```tsx
 * <ModalHeader separator>
 *   <Text variant="heading-lg/semibold">Modal Example</Text>
 *   <ModalCloseButton onClick={onClose} />
 * </ModalHeader>
 * ```
 */
export type ModalHeader = React.FC<React.PropsWithChildren<ModalHeaderProps>>;

export interface ModalContentProps extends AdvancedScrollerProps {
  /**
   * The ref to the scroller component.
   */
  scrollerRef?: React.Ref<AdvancedScrollerRef>;

  /**
   * The type of scrollbar to use.
   */
  scrollbarType?: "thin" | "auto" | "none";
}

/**
 * The scrollable content area component for modals.
 * @example
 * ```tsx
 * <ModalContent>
 *   {...}
 *   <Text>Modal content goes here</Text>
 *   {...}
 * </ModalContent>
 * ```
 */
export type ModalContent = React.FC<ModalContentProps>;

export interface ModalFooterProps
  extends Pick<FlexProps, "direction" | "justify" | "align" | "wrap" | "className"> {
  /**
   * Whether to show a separator line above the footer.
   */
  separator?: boolean;
}

/**
 * The footer section component for modals.
 * @example
 * ```tsx
 * <ModalFooter separator>
 *   <Button color="primary" onClick={onSave}>Save</Button>
 *   <Button color="secondary" onClick={onCancel}>Cancel</Button>
 * </ModalFooter>
 * ```
 */
export type ModalFooter = React.FC<React.PropsWithChildren<ModalFooterProps>>;

export interface ModalCloseButtonProps
  extends Pick<ButtonProps, "focusProps" | "onClick" | "innerClassName" | "className"> {
  /**
   * Whether the close button should have a circle background.
   */
  withCircleBackground?: boolean;

  /**
   * Whether the close button should be hidden on fullscreen.
   */
  hideOnFullscreen?: boolean;
}

/**
 * A specialized close button component for modals.
 */
export type ModalCloseButton = React.FC<ModalCloseButtonProps>;

export interface ModalListContentProps extends ListScrollerProps {
  /**
   * The ref to the list scroller component.
   */
  scrollerRef?: React.Ref<ListScrollerRef>;
}

/**
 * A virtualized list content component for modals.
 */
export type ModalListContent = React.FC<ModalListContentProps>;
