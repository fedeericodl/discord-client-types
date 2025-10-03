import type * as React from "react";
import type { TagGroupProps as RACTagGroupProps } from "react-aria-components";

import type { Tag, TagProps } from "./Tag";

export interface TagGroupProps
  extends Pick<RACTagGroupProps, "disabledKeys" | "selectionMode" | "onRemove">,
    Pick<TagProps, "layout"> {
  /**
   * The ref to the tag list element.
   */
  listRef?: React.ForwardedRef<HTMLDivElement>;

  /**
   * The accessibility label for the tag group.
   */
  label?: string;

  /**
   * Array of tag items to display within the group.
   */
  items: TagProps[];
}

/**
 * A group container for multiple {@link Tag} elements.
 * @example
 * ```tsx
 * <TagGroup
 *   items={[
 *     { id: "1", label: "Tag 1" },
 *     { id: "2", label: "Tag 2" },
 *     { id: "3", label: "Tag 3" },
 *   ]}
 *   selectionMode="multiple"
 *   onRemove={(key) => console.log(`Removed tag with key: ${key}`)}
 * >
 */
export type TagGroup = React.FC<React.PropsWithChildren<TagGroupProps>>;
