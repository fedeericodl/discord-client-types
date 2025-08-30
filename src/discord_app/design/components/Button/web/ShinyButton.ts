import type * as React from "react";

import type { ButtonProps } from "./Button";

type Sizes = "default" | "small";

export type ShineSizes = {
  [K in Sizes as Uppercase<K>]: K;
};

export interface ShineProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * The size of the shine.
   * @default ShinyButton.ShineSizes.DEFAULT
   * @see {@link Sizes ShineSizes}
   */
  shineSize?: Sizes;

  /**
   * Whether the shine animation is paused.
   */
  shinePaused?: boolean;
}

/**
 * Visual component that renders an animated shine effect overlay.
 */
export declare class Shine extends React.PureComponent<ShineProps> {}

export interface ShinyButtonProps
  extends ButtonProps,
    Pick<ShineProps, "shineSize" | "shinePaused"> {
  /**
   * Whether the shine animation should be shown.
   */
  pauseAnimation?: boolean;

  /**
   * The class name applied to the shine.
   */
  buttonShineClassName?: string;

  /**
   * Whether the shine should only be visible on hover.
   */
  onlyShineOnHover?: boolean;
}

/**
 * Button featuring a customizable shine animation effect on it.
 */
export type ShinyButton = React.FC<React.PropsWithChildren<ShinyButtonProps>> & {
  ShineSizes: ShineSizes;
};
