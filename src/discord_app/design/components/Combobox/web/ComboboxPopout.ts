import type * as React from "react";

import type { Combobox, ComboboxProps } from "./Combobox";

export interface ComboboxPopoutProps
  extends Pick<
    ComboboxProps,
    | "children"
    | "placeholder"
    | "value"
    | "onChange"
    | "className"
    | "multiSelect"
    | "emptyStateText"
    | "emptyStateHeader"
    | "onQueryChange"
  > {
  /**
   * Event handler called when the popout is closed.
   */
  onClose?: () => void;
}

/**
 * Popout wrapper component that displays a {@link Combobox} within a dialog container.
 */
export type ComboboxPopout = React.FC<ComboboxPopoutProps>;
