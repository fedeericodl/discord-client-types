export enum CustomLinkType {
  MANAGED,
  QUICK,
}

export interface DecodedCustomActivityLink {
  /**
   * The type of the custom activity link.
   * @see {@link CustomLinkType}
   */
  type: CustomLinkType;

  /**
   * The original encoded link ID.
   */
  encodedLinkId: string;

  /**
   * The decoded link ID extracted from the URL.
   */
  decodedLinkId: string;
}

/**
 * Decodes a custom activity link URL into its components.
 * @param url The custom activity link URL to decode.
 * @returns An object containing the type, encoded link ID, and decoded link ID, or `null` if the URL is invalid.
 */
export type DecodeCustomActivityLink = (url?: string) => DecodedCustomActivityLink | null;
