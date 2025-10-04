import type { FileFilter } from "@discordapp/common/components/FileInput";
import type * as React from "react";

import type { FileInput, FileInputProps } from "@app/components/common/FileUpload";

type ImageUploadCallback = (data: string, file: File) => void;

/**
 * Returns file filters for image uploads.
 */
export type GetFilters = () => FileFilter[];

/**
 * Processes an image file.
 * @param file The image file to process.
 * @param callback The callback to invoke with the processed image data and file.
 * @param errorCallback The callback to invoke if an error occurs during processing.
 */
export type ProcessImage = (
  file: File,
  callback: ImageUploadCallback,
  errorCallback: () => void,
) => void;

export interface ImageInputProps
  extends Pick<
    FileInputProps,
    "multiple" | "disabled" | "className" | "tabIndex" | "aria-label" | "filters" | "onClick"
  > {
  /**
   * Event handler called when a selected file exceeds the maximum allowed size.
   */
  onFileSizeError?: (maxSize: number, fileSize: number) => void;

  /**
   * The maximum allowed file size in bytes.
   * @default Infinity
   */
  maxFileSizeBytes?: number;

  /**
   * Event handler called when a file is successfully read.
   */
  onChange: ImageUploadCallback;
}

export declare class ImageInput extends React.PureComponent<ImageInputProps> {
  /**
   * The ref to the file input component.
   * @private
   */
  private _ref: React.RefObject<FileInput>;

  /**
   * Whether the component is currently mounted.
   * @private
   */
  private _isMounted: boolean;

  /**
   * Handler for file input change events.
   */
  public handleFileChange: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Handler for reading files.
   * @param data The file data.
   * @param file The File object.
   */
  public handleFileRead: ImageUploadCallback;

  /**
   * Handler for file read errors, returning a promise that resolves when done.
   */
  public handleFileError: () => Promise<void>;

  /**
   * Programmatically triggers the file upload dialog.
   */
  public activateUploadDialogue: () => void;
}
