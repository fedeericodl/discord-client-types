import type * as React from "react";

export interface FileFilter {
  /**
   * Human-readable name for the file filter category.
   */
  name: string;

  /**
   * Array of file extensions allowed for this filter (without dots).
   */
  extensions: string[];
}

export interface FileInputProps {
  /**
   * Whether the file input is disabled and cannot be interacted with.
   * @default false
   */
  disabled?: boolean;

  /**
   * The tab index for keyboard navigation order.
   * @default 0
   */
  tabIndex?: number;

  /**
   * The class name applied to the input element.
   */
  className?: string;

  /**
   * The name attribute for the input element.
   */
  name?: string;

  /**
   * The accessibility label for the input element.
   */
  "aria-label"?: string;

  /**
   * Whether the input element is hidden from screen readers.
   */
  "aria-hidden"?: boolean;

  /**
   * Unique identifier for the input element.
   */
  id?: string;

  /**
   * Array of file filters to restrict allowed file types in the file picker.
   */
  filters?: FileFilter[];

  /**
   * Event handler called when file selection changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Event handler called when the file input is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLInputElement>;

  /**
   * Whether multiple files can be selected simultaneously.
   * @default false
   */
  multiple?: boolean;

  /**
   * Tooltip text displayed when hovering over the file input.
   */
  title?: string;

  /**
   * Custom handler for native click events.
   */
  handleNativeClick?: (props: FileInputProps) => void;
}

/**
 * Invisible file input component for triggering file selection dialogs.
 */
export declare class FileInput extends React.Component<FileInputProps> {
  /**
   * The ref to the input element.
   */
  private _input: HTMLInputElement | null;

  /**
   * Programmatically triggers the file upload dialog.
   */
  public activateUploadDialogue: () => void;

  /**
   * Handles native click events to trigger file selection.
   * Used for integrating with platform-specific file picker implementations.
   */
  public handleNativeClick: () => void;

  /**
   * Handles keyboard events (Space and Enter) to trigger file selection.
   */
  public handleNativeKeyDown: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * Clears the input value on mouse down to ensure `onChange` fires for same file.
   */
  public handleBrowserInputMouseDown: React.MouseEventHandler<HTMLInputElement>;
}
