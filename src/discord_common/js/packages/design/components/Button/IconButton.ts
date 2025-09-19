import type * as React from "react";

import type { BaseIconButtonProps } from "./BaseIconButton";

export type IconButtonProps = BaseIconButtonProps;

/**
 * An interactive icon button element.
 * @example
 * ```tsx
 * <BaseIconButton icon={TrashIcon} onClick={() => console.log("Pressed!")} />
 * ```
 */
export type IconButton = React.FC<IconButtonProps>;
