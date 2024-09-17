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
  public ref: React.RefObject<HTMLDivElement>;
  public animationFrame: number | undefined;
  public shouldRenderFrame: boolean;
  public animate: () => void;

  public setShaking: (isShaking: boolean) => void;
  public startShaking: () => void;
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
