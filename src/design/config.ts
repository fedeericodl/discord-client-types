/**
 * Represents the design configuration with methods for link interception and tracking screen impressions (mobile app).
 */
export interface DesignConfig {
  /**
   * Function to intercept default link behavior. Used by the `Anchor` component for the `onClick` event handler.
   */
  getDefaultLinkInterceptor: (...args: any) => void;

  /**
   * Function to track screen impressions. Used on the mobile app.
   */
  useTrackNavigatorScreenImpression: (...args: any) => void;
}

/**
 * Updates the {@link DesignConfig design configuration}.
 *
 * @example
 * ```ts
 * setDesignConfig({
 *   getDefaultLinkInterceptor: (href: string) => {
 *     console.log("Intercepted link:", href);
 *     // Do something with the link
 *   }
 * });
 * ```
 */
export type SetDesignConfig = (config: Partial<DesignConfig>) => void;
