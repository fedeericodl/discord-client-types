import type { ActionType } from "./Types";

export type Types = "UPDATE_ITEMS" | "SET_FOCUS_PATH";

export type MenuActionType = {
  [K in Types]: K;
};

export interface MenuItem {
  /**
   * Unique identifier for this menu item.
   */
  key: string;

  /**
   * The nested menu items.
   */
  children: MenuItem[] | undefined;
}

export interface MenuState {
  /**
   * The root list of menu items currently being displayed.
   */
  items: MenuItem[];

  /**
   * An ordered array of keys representing the navigation path from the root menu down to the currently focused item.
   */
  focusPath: string[];

  /**
   * The index (within the currently focused list) of the active/focused menu item.
   * -1 means no item is focused.
   */
  focusIndex: number;
}

export type MenuAction =
  | { type: MenuActionType["UPDATE_ITEMS"]; items: MenuItem[] }
  | { type: MenuActionType["SET_FOCUS_PATH"]; path: string[] }
  | { type: ActionType.NAVIGATE_UP }
  | { type: ActionType.NAVIGATE_DOWN }
  | { type: ActionType.NAVIGATE_IN }
  | { type: ActionType.NAVIGATE_OUT }
  | { type: ActionType.SELECT_FOCUSED_ITEM };

/**
 * A reducer function that updates the menu's navigation state.
 * @param state The current menu state.
 * @param action The action describing how to change the state.
 * @returns The updated menu state after applying the action.
 */
export type MenuReducer = (state: MenuState, action: MenuAction) => MenuState;
