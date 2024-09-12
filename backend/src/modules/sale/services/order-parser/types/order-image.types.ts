import { Dayjs } from "dayjs"

export enum ParserType {
  GRAB_FOOD = 'GRAB_FOOD',
  SHOPEE_FOOD = 'SHOPEE_FOOD',
  BE_FOOD = 'BE_FOOD',
  POS = 'POS'
}

export interface Customer {
  firstName?: string
  lastName?: string
  phone?: string
}
  
export interface Address {
  distanceKm?: number
  city?: string
  district?: string
  ward?: string
  full?: string
}
  
export interface ProductItem {
  sku?: string,
  name?: string
  quantity?: number
  grossPrice?: number
  discountPrice?: number
  netPrice?: number
}
  
export interface Order {
  id?: string
  items?: ProductItem[]
  vouchers?: Voucher[]
  shippingAddress?: Address
  totalGrossPrice?: number
  itemsDiscountPrice?: number,
  vouchersDiscountPrice?: number,
  totalDiscountPrice?: number
  commissionPercent?: number,
  commissionPrice?: number,
  totalNetPrice?: number
  note?: string
  createdAt?: Dayjs
  createdAtString?: string
}
  
export interface Voucher {
  name?: string
  discountPrice?: string
}

export interface ParsedResult {
  customer?: Customer
  order?: Order
}

export const EXPECT_SCHEMA_RESULT = `{
  "customer": {
    "firstName": "",
    "lastName": "",
    "phone": ""
  },
  "order": {
    "id": "",
    "items": [
        {
            "name": "",
            "quantity": 1,
            "option": [
                {
                    "name": "",
                    "value": ""
                }
            ],
            "grossPrice": 0,
            "discountPrice": 0,
            "netPrice": 0
        }
    ],
    "vouchers": [
      {
        "name": "",
        "discountPrice": 0
      }
    ],
    "shippingAddress": {
      "distanceKm": 0,
      "city": "",
      "district": "",
      "ward": "",
      "full": ""
    },
    "totalGrossPrice": 0,
    "itemsDiscountPrice": 0,
    "vouchersDiscountPrice": 0,
    "totalDiscountPrice": 0,
    "commissionPercent": 0%,
    "commissionPrice": 0,
    "totalNetPrice": 0,
    "note": "",
    "createdAt": "2024-07-31T00:00:00.000Z"
  }
}`