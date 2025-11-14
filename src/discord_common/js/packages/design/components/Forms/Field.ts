import type * as React from "react";

import type { BadgeType } from "../Badge/Badge";
import type { ICON_SIZE } from "../Icon/getIconSize";
import type { FieldContextValue } from "./FieldContext";

export type ExtractedFieldProps = Pick<
  FieldProps,
  | "label"
  | "hideLabel"
  | "badge"
  | "icon"
  | "required"
  | "disabled"
  | "description"
  | "helperText"
  | "id"
  | "errorMessage"
  | "successMessage"
  | "layout"
>;

export interface GetFieldPropsResult<T> {
  /**
   * The extracted field props.
   */
  fieldProps: ExtractedFieldProps;

  /**
   * The additional props passed in.
   */
  props: T;
}

/**
 * A utility type for extracting field props and additional props.
 */
export type GetFieldProps = <T extends object>(
  props: ExtractedFieldProps & T,
) => GetFieldPropsResult<T>;

interface IconProps {
  /**
   * Whether the icon is hidden from screen readers.
   */
  "aria-hidden": boolean;

  /**
   * The size of the icon.
   */
  size: keyof ICON_SIZE;

  /**
   * The class name applied to the icon.
   */
  className: string;
}

export interface FieldLayoutConfig {
  /**
   * The width of the control column in horizontal layouts.
   */
  horizontalControlColumnWidth?: string;
}

export interface FieldProps<TRole extends string = string>
  extends React.RefAttributes<
    TRole extends "group" | "radiogroup" ? HTMLFieldSetElement : HTMLDivElement
  > {
  /**
   * The label for the field.
   */
  label?: React.ReactNode;

  /**
   * Whether to visually hide the label.
   * @default false
   */
  hideLabel?: boolean;

  /**
   * Whether the field is marked as required.
   */
  required?: boolean;

  /**
   * Whether the field is disabled.
   */
  disabled?: boolean;

  /**
   * The description for the field.
   */
  description?: React.ReactNode;

  /**
   * The helper text to display below the field.
   */
  helperText?: React.ReactNode;

  /**
   * The children of the field.
   */
  children: React.ReactNode | ((props: FieldContextValue) => React.ReactNode);

  /**
   * The error message to display when the field is invalid.
   */
  errorMessage?: React.ReactNode;

  /**
   * The success message to display when the field is valid.
   */
  successMessage?: React.ReactNode;

  /**
   * The role of the field element.
   */
  role?: TRole;

  /**
   * The layout of the field.
   * @default "vertical"
   */
  layout?: "vertical" | "horizontal" | "horizontal-responsive";

  /**
   * The layout configuration for the field.
   */
  layoutConfig?: FieldLayoutConfig;

  /**
   * The badge to display next to the label.
   */
  badge?: BadgeType;

  /**
   * The icon to display in the field.
   * @default null
   */
  icon?: React.ComponentType<IconProps>;

  /**
   * The id of the field element.
   */
  id?: string;

  /**
   * Whether the label is interactive.
   * @default false
   */
  interactiveLabel?: boolean;

  /**
   * The position of the auxiliary content.
   * @default "under-control"
   */
  auxiliaryContentPosition?: "under-control" | "under-label";

  /**
   * The trailing content to display after the field.
   */
  trailingAuxiliaryContent?: React.ReactNode;
}

/**
 * A wrapper component that provides a styled field.
 */
export type Field = <TRole extends string = string>(props: FieldProps<TRole>) => React.ReactElement;
