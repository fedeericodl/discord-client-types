import type EventEmitter from "events";

type Orientations = "vertical" | "horizontal";

interface DevTools {
  /**
   * Whether the dev tools are open.
   */
  open: boolean;

  /**
   * The orientation of the dev tools if open, otherwise `null`.
   */
  orientation: Orientations | null;
}

export declare class DevToolsListener extends EventEmitter {
  public constructor();

  /**
   * Returns the possible orientations of the dev tools.
   */
  public get orientations(): Orientations[];

  /**
   * Returns the current state of the dev tools.
   */
  public get state(): DevTools;

  /**
   * Check the current state of the dev tools and emit a "changed" event if it has changed.
   */
  public check: () => void;
}
