import type * as React from "react";

import type { CardTypes } from "../../Card/web/Card";

export type FormNoticeTypes = CardTypes;

type ImagePositions = "left" | "right";

export type FormNoticeImagePositions = {
  [K in ImagePositions as Uppercase<K>]: K;
};

export interface ImageData {
  /**
   * The height of the image.
   */
  height: number;

  /**
   * The width of the image.
   */
  width: number;

  /**
   * The source of the image.
   */
  src: string;

  /**
   * The position of the image.
   * @default FormNoticeImagePositions.LEFT
   * @see {@link ImagePositions FormNoticeImagePositions}
   */
  position?: ImagePositions;
}

export interface FormNoticeProps {
  /**
   * The type of the notice, which determines its appearance.
   * @default FormNotice.Types.DANGER
   * @see {@link FormNoticeTypes}
   */
  type?: string;

  /**
   * The image data for the notice.
   */
  imageData?: ImageData;

  /**
   * The button to be rendered in the notice.
   */
  button?: React.ReactNode;

  /**
   * The class name applied to the notice.
   */
  className?: string;

  /**
   * The class name applied to the image.
   */
  iconClassName?: string;

  /**
   * The title of the notice.
   */
  title?: React.ReactNode;

  /**
   * The body of the notice.
   */
  body: React.ReactNode;

  /**
   * The styles applied to the notice.
   */
  style?: React.CSSProperties;

  /**
   * The alignment of the notice.
   * @default Flex.Align.START
   */
  align?: string;
}

/**
 * A notice to be displayed in forms.
 * @example
 * ```tsx
 * <FormNotice
 *   type={FormNotice.Types.DANGER}
 *   title="This is a title"
 *   body="This is the body of the notice."
 * />
 * ```
 */
export type FormNotice = React.FC<FormNoticeProps> & {
  Types: FormNoticeTypes;
};
