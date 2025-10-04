import type * as React from "react";

import type { ImageInputProps } from "@app/modules/image_upload/web/ImageUpload";
import type { MenuControlRef } from "../items/MenuControlItem";

export type MenuImageUploadControlProps = ImageInputProps;

/**
 * A menu control that can be used to display an image upload input in a menu.
 */
export type MenuImageUploadControl = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MenuImageUploadControlProps> &
    React.RefAttributes<Omit<MenuControlRef, "blur">>
> & {
  render: React.ForwardRefRenderFunction<Omit<MenuControlRef, "blur">, MenuImageUploadControlProps>;
};
