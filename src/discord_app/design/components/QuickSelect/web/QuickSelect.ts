import type * as React from "react";

import type { Popout, PopoutProps, PopoutRenderProps } from "@app/design/web";

export interface QuickSelectOption {
  /**
   * Display text shown in the dropdown and selected state.
   */
  label: string;

  /**
   * The value associated with this option.
   */
  value: unknown;

  /**
   * A unique identifier.
   */
  key?: React.Key;
}

export interface QuickSelectBaseProps {
  /**
   * Text label displayed next to the select input.
   */
  label: string;

  /**
   * Currently selected option object.
   */
  value: QuickSelectOption;

  /**
   * Function to render the selected value.
   */
  renderValue?: (option: QuickSelectOption) => React.ReactNode;

  /**
   * The class name applied to the container.
   */
  className?: string;
}

/**
 * Display component for the collapsed {@link QuickSelect} input.
 */
export declare class QuickSelectBase extends React.PureComponent<QuickSelectBaseProps> {}

export interface QuickSelectProps extends QuickSelectBaseProps {
  /**
   * Additional props passed to the underlying {@link Popout} component.
   */
  popoutProps?: Omit<PopoutProps, "targetElementRef" | "renderPopout" | "children">;

  /**
   * Array of available options to choose from.
   */
  options: QuickSelectOption[];

  /**
   * Function to render each option in the dropdown list.
   */
  renderOption: (option: QuickSelectOption, selected: boolean) => React.ReactNode;

  /**
   * The class name applied to the dropdown popout container.
   */
  popoutClassName?: string;

  /**
   * Whether to enable scrolling for long option lists.
   */
  scroller?: boolean;

  /**
   * Event handler called when a different option is selected.
   */
  onChange?: (option: QuickSelectOption) => void;
}

/**
 * Interactive dropdown select component for choosing from a list of options.
 */
export declare class QuickSelect extends React.PureComponent<QuickSelectProps> {
  /**
   * The ref to the trigger element for popout positioning.
   */
  public ref: React.RefObject<HTMLDivElement>;

  /**
   * Renders the dropdown popout content with option list.
   */
  public renderPopout: React.FC<PopoutRenderProps>;

  /**
   * Handles option selection.
   * @param option The selected option object.
   */
  public handleChange: (option: QuickSelectOption) => void;
}
