import type { LongPressProps } from "react-aria";

export type PressableProps = LongPressProps;

/**
 * A foundational interaction component that provides accessible press and long press handling.
 * @see {@link https://www.npmjs.com/package/react-aria react-aria}
 */
export type Pressable = React.FC<PressableProps>;
