import type React from "react";
import type { Shakeable } from "./Shakeable";

export interface ShakerProps {
  /**
   * Whether the component is shaking.
   * @default true
   */
  isShaking?: boolean;

  /**
   * The class name applied to the container.
   */
  className?: string;

  /**
   * The intensity of the shake.
   * @default 5
   */
  intensity?: number;
}

export declare class ShakerComponent extends React.Component<React.PropsWithChildren<ShakerProps>> {
  /**
   * The ref to the container element.
   */
  public ref: React.RefObject<HTMLDivElement>;

  /**
   * The animation frame id.
   */
  public animationFrame: number | undefined;

  /**
   * Whether the component should render the next frame.
   */
  public shouldRenderFrame: boolean;

  /**
   * The actual animation function implementation.
   */
  public animate: () => void;

  /**
   * Sets the shaking state of the component.
   * @param isShaking Whether the component should shake.
   */
  public setShaking: (isShaking: boolean) => void;

  /**
   * Starts the shaking animation.
   */
  public startShaking: () => void;

  /**
   * Stops the shaking animation.
   */
  public stopShaking: () => void;
}

/**
 * Applies a shaking animation to its children based on external props.
 * The shaking behavior is controlled by the `isShaking` prop.
 *
 * Unlike {@link Shakeable}, `Shaker` relies on the parent component to trigger the
 * shaking effect. If `isShaking` is `true`, the component will automatically
 * start shaking and stop when the prop is `false`.
 * @example
 * ```tsx
 * const [isShaking, setIsShaking] = React.useState(false);
 *
 * <Shaker isShaking={isShaking}>
 *  <Text onClick={() => setIsShaking(!isShaking)}>Click me to shake!</Text>
 * </Shaker>
 */
export type Shaker = typeof ShakerComponent;
