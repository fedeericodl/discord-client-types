import type React from "react";
import type { ButtonProps } from "./Button";

type Sizes = "default" | "small";

export type ShineSizes = {
  [K in Sizes as Uppercase<K>]: K;
};

export interface ShineProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The class name applied to the shine.
   */
  className?: string;

  /**
   * The size of the shine.
   * @default ShinyButton.ShineSizes.DEFAULT
   * @see {@link Sizes ShineSizes}
   */
  shineSize?: string;

  /**
   * Whether the shine animation is paused.
   * @default false
   */
  shinePaused?: boolean;
}

export declare class ShineComponent extends React.PureComponent<ShineProps> {}

/**
 * Visual component that renders an animated shine effect overlay.
 */
export type Shine = typeof ShineComponent;

export interface ShinyButtonProps
  extends ButtonProps,
    Pick<ShineProps, "shineSize" | "shinePaused"> {
  /**
   * Whether the shine animation should be shown.
   * @default false
   */
  pauseAnimation?: boolean;

  /**
   * The class name applied to the shine.
   */
  buttonShineClassName?: string;

  /**
   * Whether the shine should only be visible on hover.
   * @default false
   */
  onlyShineOnHover?: boolean;
}

/**
 * Button featuring a customizable shine animation effect on it.
 */
export type ShinyButton = React.FC<React.PropsWithChildren<ShinyButtonProps>> & {
  ShineSizes: ShineSizes;
};
