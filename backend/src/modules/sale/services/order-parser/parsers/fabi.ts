import dayjs from "dayjs"
import { FabiOrder } from "../types/fabi.types"
import { ParsedResult } from "../types/order-image.types"
import { ParserUtils } from "../utils"

export namespace FabiParser {
    export const parse = async (files: string[]): Promise<ParsedResult[]> => {
      if (files?.length) {
        const orders: FabiOrder[] = await ParserUtils.readJsonFromUrl(files[0])

        const results: ParsedResult[] = []
        for (let i = 0; i < orders.length; i++) {
          const order = orders[i]

          const createdAt = dayjs(order.created_at)
          results.push({
            customer: {
              phone: order.extra_data?.customer_phone,
              firstName: order.extra_data?.customer_name,
            },
            order: {
              id: `${createdAt.format('YYYY-MM-DD')}_${order.tran_no}`,
              shippingAddress: {
                full: order.extra_data.ship_address
              },
              totalGrossPrice: order.amount_origin,
              vouchersDiscountPrice: order.voucher_amount,
              totalDiscountPrice: order.amount_discount_price,
              commissionPercent: 0,
              commissionPrice: 0,
              totalNetPrice: order.amount_origin,
              note: order.sale_note,
              createdAt,
              createdAtString: createdAt.toISOString(),
              items: order.sale_detail.map(item => ({
                sku: item.item_id,
                quantity: item.quantity,
                grossPrice: item.amount,
                discountPrice: item.discount,
                netPrice: item.price
              }))
            }
          })
        }

        return results
      }
      
      return []
    }
}