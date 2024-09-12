import { ParserUtils } from "../utils"
import dayjs from 'dayjs'
import { ParsedResult, ProductItem } from "../types/order-image.types"
import _ from "lodash"
import { DateUtility } from "src/lib/date"

const ORDER_ID_REGEX = /\#[0-9]{5} [0-9]{3}/gi

export namespace BeFoodParser {
    let PRODUCT_QUANTITY_MATCHES: string[] = []
    
    function generateProductQtyMatches(): void {
        PRODUCT_QUANTITY_MATCHES = []
        for (let i = 1; i <= 50; i++) {
            PRODUCT_QUANTITY_MATCHES.push(`${i}x`)
        }
    }

    function init(): void {
      generateProductQtyMatches()
    }

    export const parse = async (files: string[]): Promise<ParsedResult | null> => {
      init()
      const content = await ParserUtils.readTextFromImageUrls(files)
      return parserOrder(content)
    }

    const parserOrder = (text: string): ParsedResult | null => {
      let result: ParsedResult = {
        customer: {},
        order: {
            items: [],
            shippingAddress: {},
            createdAt: dayjs()
        }
      }
    
      const lines = text.split('\n')
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        if (!line) {
          continue
        }
    
        /**
         * Order ID
         */
        const matches = line.match(ORDER_ID_REGEX)
        if (!result.order.id && matches?.length) {
          result.order.id = matches[0]
          continue
        }

        if (line.length > 5) {
          let productQty = line.substring(0, 3).trim()
          if (PRODUCT_QUANTITY_MATCHES.includes(productQty)) {
              let matches = lines[i].match(/[0-9]+\.[0-9]+đ/g)
              if (matches && matches.length) {
                let totalPriceStr = matches[0]
                const productNameLength = line.length - (productQty.length + totalPriceStr.length)
                const productName = line.substring(productQty.length + 1, productNameLength).trim()
    
                if (productName && totalPriceStr && productQty) {
                  const isExist = result.order.items.find(item => item.name === productName)
                  if (isExist) {
                    continue
                  }
    
                  const qty = ParserUtils.getMoney(productQty)
                  const netPrice = ParserUtils.getMoney(totalPriceStr)
    
                  let product: ProductItem = {
                    name: productName,
                    quantity: qty,
                    netPrice: netPrice,
                  }
    
                  // TODO: parse gross price and discount price in later

                  result.order.items.push(product)
                  continue
                }
              }
          }
        }

        if (!result.order.totalGrossPrice && line.includes('Giá trị đơn hàng')) {
          result.order.totalGrossPrice = ParserUtils.getMoney(line)
          continue
        }

        if (!result.order.commissionPrice && line.includes('Phí DV TMDT')) {
          result.order.commissionPrice = ParserUtils.getMoney(line)
          result.order.commissionPercent = (result.order.commissionPrice / result.order.totalGrossPrice) * 100
          continue
        }

        if (!result.order.totalNetPrice && line.includes('Thu nhập')) {
          result.order.totalNetPrice = ParserUtils.getMoney(line)
          continue
        }

        if (!result.customer.firstName  && line.includes('Tên khách hàng')) {
          const customerName = line.substring('Tên khách hàng'.length).trim()
          result.customer.firstName = customerName
          continue
        }

        if (!result.order.shippingAddress.full && line.includes('Nơi giao')) {
          const shippingAddress = line.substring('Nơi giao'.length).trim()
          result.order.shippingAddress.full = shippingAddress
          continue
        }

        if (!result.customer.phone && line.includes('Gọi khách hàng')) {
          i++
          while(lines[i].trim().length === 0) {
            i++
          }
          result.customer.phone = ParserUtils.getPhoneNumber(lines[i])
          continue
        }
        
      }
      
      if (result.order.createdAt) {
          result.order.createdAt = DateUtility.zeroSecond(result.order.createdAt)
          result.order.createdAtString = result.order.createdAt.toISOString()
      }
    
      return result
    }
}