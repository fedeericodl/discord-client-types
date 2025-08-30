import type * as React from "react";

import type { ModalRootProps } from "./ModalComponents";

/**
 * A spinner component to be rendered inside a modal.
 */
export type RenderModalSpinner = React.FC<
  Omit<ModalRootProps, "aria-label" | "size" | "parentComponent" | "children">
>;
