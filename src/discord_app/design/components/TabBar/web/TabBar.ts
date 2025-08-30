import type { FocusManager } from "@discordapp/aria-hooks/src/FocusManager";
import type * as React from "react";

export type TabBarTypes = "side" | "top" | "top-pill";

export interface TabBarHeaderProps {
  /**
   * The class name applied to the header.
   */
  className?: string;

  /**
   * Event handler called when the header is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Whether the associated content is expanded.
   */
  "aria-expanded"?: boolean;

  /**
   * The accessibility attribute specifying which element this header controls.
   */
  "aria-controls"?: string;
}

/**
 * A header for organizing tabs into sections.
 */
export type TabBarHeader = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<TabBarHeaderProps>> &
    React.RefAttributes<HTMLDivElement>
> & {
  render: React.ForwardRefRenderFunction<
    HTMLDivElement,
    React.PropsWithChildren<TabBarHeaderProps>
  >;
};

export interface TabBarSeparatorProps {
  /**
   * The styles applied to the separator.
   */
  style?: React.CSSProperties;
}

/**
 * A visual separator for organizing tabs into groups.
 */
export type TabBarSeparator = React.FC<TabBarSeparatorProps>;

export type TabBarPanelProps = React.ComponentPropsWithoutRef<"div">;

/**
 * A panel component that contains the content for a tab.
 */
export type TabBarPanel = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<TabBarPanelProps>> &
    React.RefAttributes<HTMLDivElement>
> & {
  render: React.ForwardRefRenderFunction<HTMLDivElement, React.PropsWithChildren<TabBarPanelProps>>;
};

export type TabBarLooks = "brand" | "grey";

export interface TabBarItemProps {
  /**
   * Custom color for the tab item.
   */
  color?: string;

  /**
   * Unique identifier for this tab item.
   */
  id?: string;

  /**
   * The id of the currently selected tab item.
   */
  selectedItem?: string;

  /**
   * The visual style type.
   * @see {@link TabBarTypes}
   */
  itemType?: TabBarTypes;

  /**
   * The class name applied to the tab item.
   */
  className?: string;

  /**
   * Visual variant for the tab item.
   */
  variant?: "destructive";

  /**
   * Whether the tab item is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler called when the context menu is opened on the tab item.
   */
  onContextMenu?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * The ref to the clickable element.
   */
  clickableRef?: React.RefObject<HTMLDivElement>;

  /**
   * The ref to the inner clickable element.
   */
  clickableInnerRef?: React.RefObject<HTMLDivElement>;

  /**
   * Visual appearance theme for the tab item.
   * @default "grey"
   * @see {@link TabBarLooks}
   */
  look?: TabBarLooks;

  /**
   * Whether to disable default item styling.
   * @default false
   */
  disableItemStyles?: boolean;

  /**
   * The accessibility label for the tab item.
   */
  "aria-label"?: string;

  /**
   * Event handler called when the tab item is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Event handler called when this tab item is selected.
   */
  onItemSelect?: (id: string) => void;
}

export interface TabBarItemState {
  /**
   * Whether the tab item is currently being hovered.
   * @default false
   */
  hover: boolean;

  /**
   * Whether the tab item is currently being pressed/active.
   * @default false
   */
  active: boolean;
}

/**
 * Individual tab item component.
 */
export declare class TabBarItem extends React.Component<
  React.PropsWithChildren<TabBarItemProps>,
  TabBarItemState
> {
  /**
   * Handles click events on the tab item.
   */
  public handleClick: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Handles mouse down events for visual feedback.
   */
  public handleMouseDown: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Handles mouse up events to reset active state.
   */
  public handleMouseUp: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Handles mouse over events to show hover state.
   */
  public handleMouseOver: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Handles mouse out events to reset hover and active states.
   */
  public handleMouseOut: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Returns the appropriate styles for the current tab item state.
   */
  public getStyle: () => React.CSSProperties | undefined;
}

export interface TabBarProps {
  /**
   * The class name applied to the tab bar.
   */
  className?: string;

  /**
   * The type of tab bar layout.
   * @default "side"
   * @see {@link TabBarTypes}
   */
  type?: TabBarTypes;

  /**
   * The styles applied to the tab bar.
   */
  style?: React.CSSProperties;

  /**
   * The accessibility label for the tab bar.
   */
  "aria-label"?: string;

  /**
   * The orientation of the tab bar.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * The id of the currently selected tab item.
   */
  selectedItem?: string;

  /**
   * Event handler called when a tab item is selected.
   */
  onItemSelect?: (id: string) => void;

  /**
   * Visual theme for all tab items.
   * @default "grey"
   * @see {@link TabBarLooks}
   */
  look?: TabBarLooks;
}

export declare class TabBarComponent extends React.Component<React.PropsWithChildren<TabBarProps>> {
  /**
   * The ref to the container element.
   */
  public tabBarRef: React.RefObject<HTMLDivElement>;

  /**
   * Focus management utility for handling keyboard navigation.
   */
  public focusManager: FocusManager;

  /**
   * Renders child elements with additional props passed down from the {@link TabBarComponent TabBar}.
   * @param child The child element to render.
   * @returns The child element or null if not a valid React element.
   */
  public renderChildren: (child: React.ReactElement) => React.ReactElement | null;

  /**
   * Determines which focusable element to navigate to based on keyboard input.
   * @param event The keyboard event that triggered navigation.
   * @returns Promise resolving to the target element or null if no navigation should occur.
   */
  public getNodeForKeydownEvent: (event: React.KeyboardEvent) => Promise<HTMLElement | null>;

  /**
   * Handles keyboard navigation within the {@link TabBarComponent TabBar}.
   */
  public handleKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
}

/**
 * A flexible tab navigation component that provides accessible tab functionality.
 * @example
 * ```tsx
 * const [selectedTab, setSelectedTab] = React.useState("profile");
 *
 * <TabBar
 *   className="dashboard-tabs"
 *   type="top"
 *   look="brand"
 *   selectedItem={selectedTab}
 *   onItemSelect={(tabId) => {
 *     setSelectedTab(tabId);
 *   }}>
 *   <TabBar.Item id="profile">Profile</TabBar.Item>
 *   <TabBar.Item id="activity">Activity</TabBar.Item>
 *   <TabBar.Item id="settings">Settings</TabBar.Item>
 * </TabBar>
 * ```
 */
export type TabBar = typeof TabBarComponent & {
  Header: TabBarHeader;
  Item: typeof TabBarItem;
  Separator: TabBarSeparator;
  Panel: TabBarPanel;
};
