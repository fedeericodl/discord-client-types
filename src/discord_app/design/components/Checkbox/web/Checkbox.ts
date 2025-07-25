import type * as React from "react";

type Types = "default" | "inverted" | "ghost" | "row";

export type CheckboxTypes = {
  [K in Types as Uppercase<K>]: K;
};

type Aligns = "top" | "center";

export type CheckboxAligns = {
  [K in Aligns as Uppercase<K>]: K;
};

export type CheckboxShapes = Record<"BOX" | "ROUND" | "SMALL_BOX", string>;

export interface CheckboxIndicatorProps {
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
   * @default Checkbox.Shapes.BOX
   * @see {@link CheckboxShapes}
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
   * @default Checkbox.Types.DEFAULT
   * @see {@link Types CheckboxTypes}
   */
  type?: Types;

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
export type CheckboxIndicator = React.FC<CheckboxIndicatorProps>;

export interface CheckboxProps extends CheckboxIndicatorProps {
  /**
   * Whether the checkbox is read-only.
   * @default false
   */
  readOnly?: boolean;

  /**
   * The alignment of the checkbox.
   * @default Checkbox.Aligns.CENTER
   * @see {@link Aligns CheckboxAligns}
   */
  align?: Aligns;

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

  /**
   * Whether the checkbox is for display only.
   * @default false
   */
  displayOnly?: boolean;

  /**
   * Event handler called when the checkbox is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLInputElement>;

  /**
   * Event handler called when the checkbox's value changes. Only applicable when `disabled` prop and `readOnly` prop are false.
   * @default NOOP
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
}

export declare class CheckboxComponent extends React.PureComponent<
  React.PropsWithChildren<CheckboxProps>
> {}

/**
 * An interactive checkbox element.
 * @example
 * ```tsx
 * const [value, setValue] = React.useState(false);
 *
 * <Checkbox type={Checkbox.Types.INVERTED} value={value} onChange={() => setValue(!value)} />
 * ```
 */
export type Checkbox = typeof CheckboxComponent & {
  Types: CheckboxTypes;
  Shapes: CheckboxShapes;
  Aligns: CheckboxAligns;
};
