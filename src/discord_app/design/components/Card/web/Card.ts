import type * as React from "react";

export type CardTypes = Record<
  "PRIMARY" | "DANGER" | "WARNING" | "SUCCESS" | "BRAND" | "CUSTOM",
  string
>;

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Whether the card is editable. Only applicable when `outline` prop is false and `type` prop is `Card.Types.PRIMARY`.
   * @default false
   */
  editable?: boolean;

  /**
   * The type of the card, which determines its appearance.
   * @default Card.Types.PRIMARY
   * @see {@link CardTypes}
   */
  type?: string;

  /**
   * Whether the card has an outline.
   * @default false
   */
  outline?: boolean;
}

/**
 * A card for displaying some specific content.
 * @example
 * ```tsx
 * <Card type={Card.Types.SUCCESS}>
 *   <Text>This is a success card.</Text>
 * </Card>
 * ```
 */
export type Card = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.PropsWithChildren<CardProps>> & React.RefAttributes<unknown>
> & {
  render: React.ForwardRefRenderFunction<unknown, React.PropsWithChildren<CardProps>>;
  Types: CardTypes;
};
