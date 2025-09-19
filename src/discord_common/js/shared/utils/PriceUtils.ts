export interface FormatPriceOptions extends Intl.NumberFormatOptions {
  /**
   * Whether to convert the amount from minor units to major units.
   * @default true
   */
  convertToMajorUnits?: boolean;
}

/**
 * Formats a price amount into a localized currency string with proper formatting.
 * @param amount The price amount to format (typically in minor units like cents).
 * @param currency The ISO currency code.
 * @param locale The locale string for formatting.
 * @param options Configuration object for formatting behavior and `Intl.NumberFormat` options
 * @returns Formatted currency string appropriate for the specified locale.
 */
export type FormatPrice = (
  amount: number,
  currency: string,
  locale: string,
  options?: FormatPriceOptions,
) => string;
