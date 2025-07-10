import type * as React from "react";
import type { CustomPicker } from "react-color";

/**
 * A component that wraps a color picker created using the CustomPicker HOC from the `react-color` library.
 * This allows for the creation of highly customizable color pickers with additional functionality.
 * @see {@link https://www.npmjs.com/package/react-color React Color}
 */
export type ColorPickerControl = React.MemoExoticComponent<ReturnType<typeof CustomPicker>>;
