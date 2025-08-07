import type * as React from "react";

export interface ColorPickerDefaultButtonProps {
  /**
   * Default color value in integer format.
   */
  color?: number | null;

  /**
   * Event handler called when the color changes.
   */
  onChange?: (color: number | null | undefined) => void;

  /**
   * The current selected color.
   */
  value?: number;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Default color button component for the color picker.
 * Used for resetting to default color values.
 */
export declare class ColorPickerDefaultButton extends React.PureComponent<ColorPickerDefaultButtonProps> {}

export interface ColorPickerCustomButtonProps {
  /**
   * Custom color value in integer format.
   */
  customColor?: number | null;

  /**
   * The current selected color.
   */
  value?: number;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The accessibility label for the button.
   */
  "aria-label"?: string;
}

/**
 * Custom color button component for the color picker.
 * Used for selecting custom colors.
 */
export declare class ColorPickerCustomButton extends React.PureComponent<ColorPickerCustomButtonProps> {}

export interface CustomColorPickerProps {
  /**
   * The current selected color value.
   */
  value?: string | number;

  /**
   * Whether to update the color value immediately.
   * @default false
   */
  eagerUpdate?: boolean;

  /**
   * Event handler called when the color changes.
   */
  onChange: (color: number) => void;

  /**
   * Event handler called when the color picker closes.
   */
  onClose?: () => void;

  /**
   * Suggested color values to display.
   */
  suggestedColors?: string[];

  /**
   * Additional content to display in the middle of the color picker.
   */
  middle?: React.ReactNode;

  /**
   * Additional content to display at the bottom of the color picker.
   */
  footer?: React.ReactNode;

  /**
   * Whether to show the eye dropper tool.
   * @default false
   */
  showEyeDropper?: boolean;

  /**
   * The component type to use as the wrapper.
   */
  wrapperComponentType?: React.ComponentType;

  /**
   * The class name applied to the color picker.
   */
  className?: string;
}

/**
 * A color picker with advanced features such as an eye dropper and suggested colors.
 * @example
 * ```tsx
 * const [color, setColor] = React.useState("#FF0000");
 *
 * <CustomColorPicker
 *   value="#FF0000"
 *   onChange={(color) => setColor(color)}
 *   suggestedColors={["#FF0000", "#00FF00", "#0000FF"]}
 *   showEyeDropper
 * />
 * ```
 */
export type CustomColorPicker = React.MemoExoticComponent<React.FC<CustomColorPickerProps>>;

export interface ColorPickerProps {
  /**
   * The class name applied to the color picker.
   */
  className?: string;

  /**
   * Default color value in integer format.
   */
  defaultColor?: number;

  /**
   * Custom color value in integer format.
   */
  customColor?: number;

  /**
   * An array of color values in integer format.
   */
  colors: number[];

  /**
   * The current selected color value.
   */
  value?: number;

  /**
   * The secondary color value.
   */
  secondaryValue?: number;

  /**
   * Whether the color picker is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler called when the color changes.
   */
  onChange: (color: number) => void;

  /**
   * The default color button component.
   */
  renderDefaultButton: React.FC<ColorPickerDefaultButtonProps>;

  /**
   * The custom color button component.
   */
  renderCustomButton: React.FC<Omit<ColorPickerCustomButtonProps, "aria-label">>;

  /**
   * The class name applied to the color container.
   */
  colorContainerClassName?: string;

  /**
   * Whether to show the color picker in a gradient mode.
   * @default false
   */
  isGradient?: boolean;

  /**
   * The custom color gradient button component.
   */
  renderGradientCustomButton?: React.FC<ColorPickerCustomButtonProps>;

  /**
   * The degrees for the gradient.
   */
  gradientDegrees?: number;
}

/**
 * Main color picker component with presets and custom color support.
 * @example
 * ```tsx
 * const [selectedColor, setSelectedColor] = React.useState(0xFF0000);
 *
 * <ColorPicker
 *   colors={[0xFF0000, 0x00FF00, 0x0000FF]}
 *   defaultColor={0xFF0000}
 *   value={selectedColor}
 *   onChange={setSelectedColor}
 *   renderDefaultButton={(props) => <ColorPickerDefaultButtonComponent {...props} />}
 *   renderCustomButton={(props) => <ColorPickerCustomButtonComponent {...props} />}
 * />
 * ```
 */
export type ColorPicker = React.FC<ColorPickerProps>;
