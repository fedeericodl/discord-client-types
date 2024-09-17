import type React from "react";
import type { ScreamingSnakeCase } from "type-fest";

type Types =
  | "wanderingCubes"
  | "chasingDots"
  | "pulsingEllipsis"
  | "spinningCircle"
  | "spinningCircleSimple"
  | "lowMotion";

export type SpinnerTypes = {
  [K in Types as ScreamingSnakeCase<K>]: K;
};

interface CommonSpinnerProps {
  /**
   * The type of spinner to display.
   * @default SpinnerTypes.WANDERING_CUBES
   * @see {@link Types SpinnerTypes}
   */
  type?: Types;

  /**
   * Whether the spinner is animated.
   * @default true
   */
  animated?: boolean;

  /**
   * The class name applied to each element of the spinner.
   */
  itemClassName?: string;
}

interface SpinningCircleProps extends CommonSpinnerProps, React.ComponentPropsWithoutRef<"div"> {
  type?: Extract<Types, "spinningCircle" | "spinningCircleSimple">;
}
interface OtherSpinnerProps extends CommonSpinnerProps, React.ComponentPropsWithoutRef<"span"> {
  type?: Exclude<Types, "spinningCircle" | "spinningCircleSimple">;
}

export type SpinnerProps = SpinningCircleProps | OtherSpinnerProps;

/**
 * Visual indicator for loading state.
 * @example
 * ```tsx
 * <Spinner type={Spinner.Type.SPINNING_CIRCLE} />
 * ```
 */
export type Spinner = React.FC<SpinnerProps> & {
  Type: SpinnerTypes;
};
