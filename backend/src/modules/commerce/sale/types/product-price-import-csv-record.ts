export interface ProductPriceImportCSVRecord {
    sku: string,
    original_price?: string,
    [saleChannel: string]: string
  }