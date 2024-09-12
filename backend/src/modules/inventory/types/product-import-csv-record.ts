export interface ProductImportCSVRecord {
    id: string,
    sku: string,
    type: string,
    name: string,
    unit?: string,
    category?: string,
    description?: string
    image?: string,
    original_price?: string,
    [key: string]: string
  }