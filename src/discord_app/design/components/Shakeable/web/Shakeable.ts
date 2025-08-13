import type * as React from "react";

export interface AnimProps {
  /**
   * The duration of the shake animation in milliseconds.
   * @default 300
   */
  duration: number;

  /**
   * The progress of the shake animation.
   * @default 0
   */
  progress: number;

  /**
   * The timestamp of the last frame.
   * @default Date.now()
   */
  last: number;

  /**
   * The intensity of the shake.
   * @default 5
   */
  intensity: number;

  /**
   * The last direction of the shake.
   * @default -1
   */
  lastDirection: number;

  /**
   * The number of frames that have passed.
   * @default 0
   */
  frameCount: number;
}

export type ShakeableProps = React.ComponentPropsWithRef<"div">;

export interface ShakeableState {
  /**
   * Whether the component is shaking.
   * @default false
   */
  shaking: boolean;
}

/**
 * Provides a self-contained shaking animation.
 * It internally manages the shaking state and can be triggered to shake or stop
 * shaking programmatically using its `shake()` and `stop()` methods.
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
 * ```
 */
export declare class Shakeable extends React.Component<
  React.PropsWithChildren<ShakeableProps>,
  ShakeableState
> {
  /**
   * The animation properties used for the shake effect.
   */
  public animProps: AnimProps | undefined;

  /**
   * The animation frame id.
   * @private
   */
  private _animationFrame: number | undefined;

  /**
   * The ref to the container element.
   */
  public ref: React.RefObject<HTMLDivElement>;

  /**
   * The actual animation function implementation.
   * @private
   */
  private _animate: () => void;

  /**
   * The cleanup function for the animation.
   * @private
   */
  private _animationCleanup: () => void;

  /**
   * Returns the default animation properties.
   * @param duration The duration of the shake animation in milliseconds.
   * @param intensity The intensity of the shake.
   */
  public getDefaultAnimProps: (duration?: number, intensity?: number) => AnimProps;

  /**
   * Starts the shaking animation.
   * @param duration The duration of the shake animation in milliseconds.
   * @param intensity The intensity of the shake.
   */
  public shake: (duration?: number, intensity?: number) => void;

  /**
   * Stops the shaking animation.
   */
  public stop: () => void;

  /**
   * The callback function called when the animation completes.
   * @private
   */
  private _animationComplete: () => void;
}
