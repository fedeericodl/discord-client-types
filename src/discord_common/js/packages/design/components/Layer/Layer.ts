import type * as React from "react";

export type LayerClassName = string;

export type LayerContextValue = [HTMLElement | null, (element: HTMLElement | null) => void];

export interface LayerProviderProps {
  /**
   * The context object for layer management.
   */
  layerContext: React.Context<LayerContextValue>;
}

export interface LayerProviderState {
  /**
   * The current layer container DOM element.
   */
  layerContainerElement: HTMLElement | null;
}

/**
 * Provider component that manages the layer system state.
 */
export declare class LayerProvider extends React.Component<
  React.PropsWithChildren<LayerProviderProps>,
  LayerProviderState
> {
  /**
   * Updates the layer container element reference.
   * @param element The new container element or null.
   */
  public setLayerContainerElement: (element: HTMLElement | null) => void;

  /**
   * Cached function that creates the context value tuple.
   * @param element The current layer container element.
   * @returns Tuple containing the element and setter function.
   */
  public getContextValue: (element: HTMLElement | null) => LayerContextValue;
}

export interface LayerContainerProps {
  /**
   * The context object for layer management.
   */
  layerContext: React.Context<LayerContextValue>;

  /**
   * The class name applied to the layer container.
   */
  className?: string;
}

/**
 * Container component that serves as the target for layer portals.
 */
export type LayerContainer = React.FC<LayerContainerProps>;

/**
 * Finds the parent layer container element for a given DOM element.
 * @param element The DOM element to start searching from.
 * @returns The parent layer container element.
 * @throws {Error} Will throw an error if no parent layer container is found.
 */
export type GetParentLayerContainer = (element: HTMLElement) => HTMLElement | null;

export interface LayerProps {
  /**
   * The context object for layer management.
   */
  layerContext: React.Context<LayerContextValue>;
}

/**
 * Layer component that renders its children via a React portal.
 */
export type Layer = React.FC<React.PropsWithChildren<LayerProps>>;

export interface LayerSystem {
  /**
   * Provider component that manages layer state.
   */
  LayerProvider: React.FC<Omit<LayerProviderProps, "layerContext">>;

  /**
   * Container component that serves as the portal target.
   */
  LayerContainer: React.FC<Omit<LayerContainerProps, "layerContext">>;

  /**
   * Layer component that renders content via portal.
   */
  Layer: React.FC<Omit<LayerProps, "layerContext">>;

  /**
   * The context object for this layer system.
   */
  layerContext: React.Context<LayerContextValue>;
}

export type CreateLayer = (name: string) => LayerSystem;
