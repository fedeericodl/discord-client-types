import type * as React from "react";

// ? NOTE: webpackId is of type 'void' when using `require.resolveWeak`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface MakeLazyOptions<T extends React.ComponentType<any>> {
  /**
   * Function that returns a promise for the component module.
   */
  createPromise: () => Promise<{ default: T }>;

  /**
   * The webpack module ID for the component.
   */
  webpackId: string | number;

  /**
   * A custom loader while the component is loading.
   */
  renderLoader?: React.FC;

  /**
   * The name for the component, used in the `displayName`.
   */
  name?: string;

  /**
   * Whether to wrap the component with `React.memo`.
   * @default false
   */
  memo?: boolean;
}

/**
 * Creates a lazy-loaded React component with automatic retry functionality.
 * @template T The type of the component to be lazy-loaded.
 * @param options Configuration options for the lazy component.
 * @returns A React component that lazy loads its content.
 * @example
 * ```tsx
 * // Create a lazy-loaded component
 * const LazyUserProfile = makeLazy({
 *   createPromise: () => import("./UserProfile"),
 *   webpackId: require.resolveWeak("./UserProfile"),
 *   name: "UserProfile",
 * });
 *
 * // Use it like any other component
 * function App() {
 *   return (
 *     <div className="app">
 *       <Header />
 *       <LazyUserProfile userId="123" />
 *       <Footer />
 *     </div>
 *   );
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MakeLazy = <T extends React.ComponentType<any>>(options: MakeLazyOptions<T>) => T;

export interface LazyLibraryProps<T> {
  /**
   * Function that returns a promise for the library module.
   */
  createPromise: () => Promise<{ default: T }>;

  /**
   * The webpack module ID for the component.
   */
  webpackId: string | number;

  /**
   * Function that renders content using the loaded library.
   */
  render: (lib: T) => React.ReactNode;

  /**
   * A fallback component while the library is loading.
   */
  renderFallback: React.FC;
}

/**
 * A component that lazy-loads a library and renders content based on its availability.
 * @template T The type of the library to be lazy-loaded.
 * @param props Configuration and render functions.
 * @returns A React component that renders based on library loading state.
 * @example
 * ```tsx
 * // Load a complex charting library only when needed
 * function DashboardCharts() {
 *   return (
 *     <LazyLibrary
 *       createPromise={() => import("heavy-charts-library")}
 *       webpackId={require.resolveWeak("heavy-charts-library")}
 *       renderFallback={() => <div>Loading charts...</div>}
 *       render={(ChartLib) => (
 *         <div className="charts-container">
 *           <ChartLib.LineChart data={lineData} />
 *           <ChartLib.BarChart data={barData} />
 *         </div>
 *       )}
 *     />
 *   );
 * }
 * ```
 */
export type LazyLibrary = <T>(props: LazyLibraryProps<T>) => React.ReactElement;

export type * from "./importWithRetry";
