export type ManualSpringCallback = (currentValue: number, abort: () => void) => unknown;

export interface ManualSpringProps {
  /**
   * Callback invoked with each computed frame value.
   */
  callback: ManualSpringCallback;

  /**
   * Spring tension (stiffness). Higher values make the spring "stiffer" and converge faster.
   * @default 160
   */
  tension?: number;

  /**
   * Damping/friction applied to the spring. Higher values reduce oscillation.
   * @default 22
   */
  friction?: number;

  /**
   * Mass of the simulated object. Affects acceleration for the same force.
   * @default 1
   */
  mass?: number;

  /**
   * Threshold used to determine rest (when to stop the spring).
   * @default 0.001
   */
  threshold?: number;

  /**
   * Whether the spring should clamp past-target values.
   * @default false
   */
  clamp?: boolean;

  /**
   * Maximum allowed absolute velocity.
   * @default Infinity
   */
  maxVelocity?: number;

  /**
   * Function that returns the `Window` used for `requestAnimationFrame`.
   * @default () => window
   */
  getNodeWindow?: () => Window | null;
}

export interface ManualSpringToProps {
  /**
   * Target value for the spring to animate to.
   */
  to: number;

  /**
   * Explicit starting value.
   */
  from?: number;

  /**
   * Whether to animate to the `to` value.
   * @default false
   */
  animate?: boolean;

  /**
   * Callback invoked once the spring comes to rest after reaching `to`.
   */
  callback?: () => unknown;
}

export type ManualSpringRestCallback = () => unknown;

export interface ManualSpringUpdates {
  /**
   * The updated value (position) of the spring.
   */
  from: number;

  /**
   * The updated velocity of the spring.
   */
  vel: number;

  /**
   * The acceleration of the spring.
   */
  accel: number;
}

/**
 * A small, manual spring simulation that drives a numeric value over time.
 */
export declare class ManualSpring {
  /**
   * @param props The properties for the manual spring.
   */
  public constructor(props: ManualSpringProps);

  /**
   * Stiffness of the spring.
   */
  public tension: number;

  /**
   * Friction applied to velocity.
   */
  public friction: number;

  /**
   * Minimum threshold to determine rest (used with acceleration).
   */
  public threshold: number;

  /**
   * Mass used by the physics calculation.
   */
  public mass: number;

  /**
   * Maximum allowed absolute velocity for the simulation.
   */
  public maxVelocity: number;

  /**
   * Whether to clamp values that cross the target.
   */
  public clamp: boolean;

  /**
   * The frame callback supplied by the consumer.
   */
  public callback: ManualSpringCallback;

  /**
   * Accumulated time remainder for the fixed-step physics integration.
   */
  public accumulator: number;

  /**
   * Current source value (the value being animated from).
   */
  public from: number;

  /**
   * Current target value (the value being animated to).
   */
  public target: number;

  /**
   * Current velocity of the simulated value.
   */
  public vel: number;

  /**
   * Whether the spring is currently animating.
   */
  public animating: boolean;

  /**
   * Timestamp of the last `requestAnimationFrame` tick (or `null` when not started).
   */
  public last: number | null;

  /**
   * The id returned by `requestAnimationFrame` for the next scheduled tick.
   */
  public nextTick: number;

  /**
   * Function that returns the `Window` used for `requestAnimationFrame`/`cancelAnimationFrame`.
   */
  public getNodeWindow: () => Window | null;

  /**
   * Cached Window reference used during animation.
   */
  public nodeWindow: Window | null;

  /**
   * Queue of "rest" callbacks to invoke once the spring finishes.
   */
  public callbacks: ManualSpringRestCallback[];

  /**
   * Start an animation towards `to`. If `animate` is false the spring will
   * immediately jump to the target and invoke the callback (if provided).
   * @param props The properties for the animation.
   * @returns The `ManualSpring` instance when an animation was started or cancelled; otherwise `undefined`.
   */
  public to: (props: ManualSpringToProps) => this | undefined;

  /**
   * Immediately cancel the running animation and reset the value to the `from`.
   * @returns The `ManualSpring` instance for chaining.
   */
  public cancel: () => this;

  /**
   * Initializes timing state and schedules the first frame.
   */
  public start: () => void;

  /**
   * Computes the next velocity, value and instantaneous acceleration using the spring physics equations.
   * @param vel Current velocity.
   * @param from Current value.
   * @returns The updated velocity, value and acceleration.
   */
  public getUpdates: (vel: number, from: number) => ManualSpringUpdates;

  /**
   * Stops the animation and optionally snap to a specific value.
   * @param value Value to snap to and report to the callback.
   */
  public stop: (value: number) => void;

  /**
   * Merges a new target into the current animation, adjusting the current velocity.
   * @param props The new target and callback.
   * @returns The `ManualSpring` instance when the animation was merged; otherwise `undefined`.
   */
  public mergeTo: (props: Pick<ManualSpringToProps, "to" | "callback">) => this | undefined;

  /**
   * Aborts the current animation without calling rest callbacks.
   * This leaves the spring in a non-animating state.
   */
  public abort: () => void;

  /**
   * Advances the physics simulation using a fixed time step loop (FRAME = 1/240)
   * and calls the consumer callback with the interpolated value each frame.
   * @param timestamp `DOMHighResTimeStamp` from `requestAnimationFrame`.
   */
  public update: (timestamp: number) => void;
}
