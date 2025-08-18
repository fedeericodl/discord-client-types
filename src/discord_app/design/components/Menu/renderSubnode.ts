import type * as React from "react";

import type { MenuCheckboxItemProps } from "./web/items/MenuCheckboxItem";
import type { MenuItemProps } from "./web/items/MenuItem";
import type { MenuRadioItemProps } from "./web/items/MenuRadioItem";

type SubnodeProps = MenuCheckboxItemProps | MenuItemProps | MenuRadioItemProps;

/**
 * A utility function to render a subnode. If the provided node is a function component,
 * it invokes the function with the given props. Otherwise, it returns the node directly.
 * @param node The node to render, which can be a function component or a React node.
 * @param props The props to pass to the function component, if applicable.
 * @returns The rendered React node.
 */
export type RenderSubnode = (
  node: React.FC<SubnodeProps> | React.ReactNode,
  props: SubnodeProps,
) => React.ReactNode;
