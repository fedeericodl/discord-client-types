import type {
  FileInput as SharedFileInput,
  FileInputProps as SharedFileInputProps,
} from "@discordapp/common/components/FileInput";
import type * as React from "react";

export type FileInputProps = SharedFileInputProps;

/**
 * Invisible file input component for triggering file selection dialogs.
 */
export declare class FileInput extends React.Component<FileInputProps> {
  /**
   * The ref to the file input component.
   * @private
   */
  private _ref: React.RefObject<SharedFileInput>;

  /**
   * Sets the ref to the file input component.
   */
  public setRef: (ref: SharedFileInput) => void;

  /**
   * Programmatically triggers the file upload dialog.
   */
  public activateUploadDialogue: () => void;
}
