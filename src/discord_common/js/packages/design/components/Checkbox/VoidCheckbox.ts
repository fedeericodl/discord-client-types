import type * as React from "react";

type TypesType = "default" | "inverted" | "ghost" | "row";

export type Types = {
  [K in TypesType as Uppercase<K>]: K;
};

type AlignsType = "top" | "center";

export type Aligns = {
  [K in AlignsType as Uppercase<K>]: K;
};

export type Shapes = Record<"BOX" | "ROUND" | "SMALL_BOX", string>;

export interface VoidCheckboxProps extends VoidCheckboxIndicatorProps {
  /**
   * Whether the checkbox is read-only.
   * @default false
   */
  readOnly?: boolean;

  /**
   * Whether the checkbox is for display only.
   * @default false
   */
  displayOnly?: boolean;

  /**
   * The alignment of the checkbox.
   * @default Aligns.CENTER
   * @see {@link AlignsType CheckboxAligns}
   */
  align?: AlignsType;

  /**
   * Event handler called when the checkbox's value changes. Only applicable when `disabled` prop and `readOnly` prop are false.
   * @default NOOP
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;

  /**
   * Event handler called when the checkbox is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLInputElement>;

  /**
   * The class name applied to the checkbox.
   */
  className?: string;

  /**
   * The class name applied to the inner checkbox.
   */
  innerClassName?: string;

  /**
   * Whether the checkbox position is reversed.
   * @default false
   */
  reverse?: boolean;
}

/**
 * An interactive checkbox element.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <VoidCheckbox type={Types.INVERTED} value={value} onChange={() => setValue(!value)} />
 * ```
 */
export type VoidCheckbox = React.FC<React.PropsWithChildren<VoidCheckboxProps>>;

export interface VoidCheckboxIndicatorProps {
  /**
   * The class name applied to the checkbox indicator.
   */
  indicatorClassName?: string;

  /**
   * The value of the checkbox.
   * @default false
   */
  value?: boolean;

  /**
   * The size of the checkbox.
   * @default 24
   */
  size?: number;

  /**
   * The shape of the checkbox.
   * @default Shapes.BOX
   * @see {@link Shapes}
   */
  shape?: string;

  /**
   * The color of the checkbox border.
   */
  checkboxColor?: string;

  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The type of the checkbox, which determines its appearance.
   * @default Types.DEFAULT
   * @see {@link TypesType CheckboxTypes}
   */
  type?: TypesType;

  /**
   * The color of the checkbox tick. This should be used with the CSS var() function.
   */
  color?: string;

  /**
   * The styles applied to the checkbox.
   */
  style?: React.CSSProperties;
}

/**
 * Visually represents the state of a checkbox.
 */
export type VoidCheckboxIndicator = React.FC<VoidCheckboxIndicatorProps>;
