import type * as React from "react";

import type { BaseButtonProps } from "./BaseButton";

export type BaseIconButtonProps = Omit<BaseButtonProps, "text" | "fullWidth">;

/**
 * The base icon button component.
 * @example
 * ```tsx
 * <BaseIconButton icon={TrashIcon} onClick={() => console.log("Pressed!")} />
 * ```
 */
export type BaseIconButton = React.FC<BaseIconButtonProps>;
