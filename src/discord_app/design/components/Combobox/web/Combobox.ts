import type * as React from "react";

export type ComboboxColors = Readonly<Record<"STANDARD" | "BRAND", string>>;

/**
 * Hook for managing multiple selection state in combobox components.
 * @param value Initial selected values.
 * @returns Current selection set and toggle function for multi-select behavior.
 */
export type UseMultiSelect = (value?: string[]) => [Set<string>, (value: string) => void];

/**
 * Hook for managing single selection state in combobox components.
 * @param value Initial selected value.
 * @returns Current selection set and setter function for single-select behavior.
 */
export type UseSingleSelect = (value?: string) => [Set<string>, (value: string) => void];

export interface ComboboxProps {
  /**
   * The placeholder text for the search bar.
   */
  placeholder?: string;

  /**
   * Render prop that returns filtered items based on search query.
   */
  children?: (searchQuery: string) => React.ReactNode;

  /**
   * Set of currently selected values.
   */
  value?: Set<unknown>;

  /**
   * Event handler called when selection changes.
   */
  onChange?: (value: unknown) => void;

  /**
   * The class name applied to the combobox container.
   */
  className?: string;

  /**
   * The class name applied to the items list container.
   */
  listClassName?: string;

  /**
   * The accessibility label for the combobox.
   */
  "aria-label"?: string;

  /**
   * Whether to allow multiple item selection.
   * @default false
   */
  multiSelect?: boolean;

  /**
   * Whether to automatically focus the search input.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Maximum number of items visible before scrolling is required.
   * @default 5
   */
  maxVisibleItems?: number;

  /**
   * Function to convert item values to strings.
   * @default (value) => String(value)
   */
  itemToString?: (item: unknown) => string;

  /**
   * Whether to display scrollbar for the items list.
   * @default false
   */
  showScrollbar?: boolean;

  /**
   * The text displayed when no items match the search query.
   */
  emptyStateText?: string;

  /**
   * The header text displayed above the empty state message.
   */
  emptyStateHeader?: string;

  /**
   * Event handler called when the search query changes.
   */
  onQueryChange?: (query: string) => void;
}

/**
 * Searchable dropdown component with filtering and selection capabilities.
 *
 * Commonly used for autocomplete inputs, filterable dropdowns,
 * and selection interfaces where users need to search through many options.
 * @example
 * ```tsx
 * const [selected, setSelected] = React.useState(new Set<string>());
 *
 * <Combobox
 *   placeholder="Search users..."
 *   value={selected}
 *   onChange={(value) => {
 *     setSelected((prev) => {
 *       const newSet = new Set(prev);
 *       if (newSet.has(value)) {
 *         newSet.delete(value);
 *       } else {
 *         newSet.add(value);
 *       }
 *       return newSet;
 *     });
 *   }}
 *   multiSelect
 *   maxVisibleItems={8}>
 *   {(query) =>
 *     users
 *       .filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
 *       .map((user) => (
 *         <ComboboxItem key={user.id} value={user.id}>
 *           <ComboboxItem.Label>{user.name}</ComboboxItem.Label>
 *           <ComboboxItem.Checkbox checked={selected.has(user.id)} />
 *         </ComboboxItem>
 *       ))
 *   }
 * </Combobox>
 * ```
 */
export type Combobox = React.FC<ComboboxProps>;

export interface ComboboxItemProps {
  /**
   * Unique value associated with this item.
   */
  value: unknown;

  /**
   * Whether the item is disabled and non-selectable.
   * @default false
   */
  disabled?: boolean;

  /**
   * Color theme for the selected state styling.
   * @default ComboboxItem.Colors.STANDARD
   * @see {@link ComboboxColors}
   */
  selectedColor?: string;

  /**
   * Whether this item is currently selected (overrides context value).
   */
  selected?: boolean;
}

/**
 * Text label component for {@link ComboboxItem} elements.
 */
export type ComboboxItemLabel = React.FC<React.PropsWithChildren>;

/**
 * Icon container component for {@link ComboboxItem} elements.
 */
export type ComboboxItemIcon = React.FC<React.PropsWithChildren>;

export interface ComboboxItemCheckboxProps {
  /**
   * Whether the checkbox appears checked (overrides selection context).
   */
  checked?: boolean;
}

/**
 * Checkbox component for multi-select {@link ComboboxItem} elements.
 * Displays a checkbox that reflects the item's selection state.
 */
export type ComboboxItemCheckbox = React.FC<ComboboxItemCheckboxProps>;

/**
 * Checkmark component for selected {@link ComboboxItem} elements.
 * Shows a checkmark icon when the item is selected.
 */
export type ComboboxItemCheckmark = React.FC;

/**
 * Individual item component for use within Combobox lists.
 * @example
 * ```tsx
 * <ComboboxItem value="user-123">
 *   <ComboboxItem.Label>{user.name}</ComboboxItem.Label>
 *   <ComboboxItem.Checkmark />
 * </ComboboxItem>
 * ```
 */
export type ComboboxItem = React.FC<React.PropsWithChildren<ComboboxItemProps>> & {
  Colors: ComboboxColors;
  Label: ComboboxItemLabel;
  Icon: ComboboxItemIcon;
  Checkbox: ComboboxItemCheckbox;
  Checkmark: ComboboxItemCheckmark;
};
