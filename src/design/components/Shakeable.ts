import type React from "react";

interface AnimProps {
  /**
   * The duration of the shake animation in milliseconds.
   *
   * @default 300
   */
  duration: number;

  /**
   * The progress of the shake animation.
   */
  progress: number;

  /**
   * The timestamp of the last frame.
   */
  last: number;

  /**
   * The intensity of the shake.
   *
   * @default 5
   */
  intensity: number;

  /**
   * The last direction of the shake.
   */
  lastDirection: number;

  /**
   * The number of frames that have passed.
   */
  frameCount: number;
}

export interface ShakeableProps extends React.ComponentPropsWithRef<"div"> {}

export interface ShakeableState {
  /**
   * Whether the component is shaking.
   *
   * @default false
   */
  shaking: boolean;
}

export declare class ShakeableComponent extends React.Component<
  React.PropsWithChildren<ShakeableProps>,
  ShakeableState
> {
  public animProps: AnimProps | undefined;
  private _animationFrame: number | undefined;
  public ref: React.RefObject<HTMLDivElement>;
  private _animate: () => void;
  private _animationCleanup: () => void;

  public getDefaultAnimProps: (duration?: number, intensity?: number) => AnimProps;
  public shake: (duration?: number, intensity?: number) => void;
  public stop: () => void;
  private _animationComplete: () => void;
}

/**
 * Provides a self-contained shaking animation.
 * It internally manages the shaking state and can be triggered to shake or stop
 * shaking programmatically using its `shake()` and `stop()` methods.
 *
 * @example
 * ```tsx
 * const shakeableRef = useRef<ShakeableComponent>(null);
 *
 * const triggerShake = useCallback(() => {
 *   if (shakeableRef.current) {
 *     shakeableRef.current.shake(1000, 5); // Example duration and intensity
 *   }
 * }, []);
 *
 * return (
 *   <div>
 *     <ShakeableComponent ref={shakeableRef}>
 *       <div>Shakeable Content</div>
 *     </ShakeableComponent>
 *     <Button onClick={triggerShake}>Shake</Button>
 *   </div>
 * );
 */
export type Shakeable = typeof ShakeableComponent;
