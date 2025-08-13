import type * as React from "react";

import type { SearchBarProps } from "../../SearchBar/web/SearchBar";
import type { SelectableItem } from "./SelectableItem";

/**
 * Divider component for separating sections within a popout list.
 */
export type PopoutListDivider = React.FC;

/**
 * Empty state component for popout lists with no content.
 */
export type PopoutListEmpty = React.FC<React.PropsWithChildren>;

export type PopoutListSearchBarProps = SearchBarProps;

/**
 * Search bar component specifically designed for popout lists.
 */
export declare class PopoutListSearchBar extends React.PureComponent<PopoutListSearchBarProps> {}

export interface PopoutListProps {
  /**
   * The class name applied to the popout list.
   */
  className?: string;

  /**
   * The accessibility label for the list.
   */
  "aria-label"?: string;
}

export declare class PopoutListComponent extends React.PureComponent<
  React.PropsWithChildren<PopoutListProps>
> {}

/**
 * Composite popout list component with sub-components.
 * @example
 * ```tsx
 * const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
 * const [query, setQuery] = React.useState("");
 *
 * const handleSelect = (item: string) => {
 *   setSelectedItem(item);
 * };
 *
 * const items = ["Option 1", "Option 2", "Option 3"];
 * const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
 *
 * <PopoutList className="my-list" aria-label="Options">
 *   <PopoutList.SearchBar
 *     query={query}
 *     onChange={setQuery}
 *     placeholder="Search options..."
 *     onClear={() => setQuery("")}
 *   />
 *   <PopoutList.Divider />
 *   {filteredItems.map((item) => (
 *     <PopoutList.Item
 *       key={item}
 *       selected={selectedItem === item}
 *       onClick={() => handleSelect(item)}>
 *       {item}
 *     </PopoutList.Item>
 *   ))}
 *   {filteredItems.length === 0 && <PopoutList.Empty>No results found</PopoutList.Empty>}
 * </PopoutList>
 * ```
 */
export type PopoutList = typeof PopoutListComponent & {
  SearchBar: typeof PopoutListSearchBar;
  Item: typeof SelectableItem;
  Divider: PopoutListDivider;
  Empty: PopoutListEmpty;
};
