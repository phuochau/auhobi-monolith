import { ParserUtils } from "../utils"
import { ParsedResult, ProductItem } from "../types/order-image.types"
import _ from "lodash"
import dayjs from "dayjs"
import { DateUtility } from "src/lib/date"

const ORDER_ID_REGEX = /GF\-([0-9])+/g
export namespace GrabFoodParser {
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

        if (!result.order.id) {
          const matches = line.match(ORDER_ID_REGEX)
          if (matches?.length) {
            result.order.id = matches[0]
            continue
          }
        }

        if (!result.customer.phone && line.includes('Bạn muốn gọi ai?')) {
          i++
          while(lines[i].trim().length === 0) {
            i++
          }
          result.customer.phone = ParserUtils.getPhoneNumber(lines[i]).trim()
          continue
        }

        if (!result.customer.firstName && line.includes('Khách hàng:')) {
          const startIndex = line.indexOf('Khách hàng:') + 'Khách hàng:'.length
          result.customer.firstName = line.substring(startIndex + 1).trim()
          continue
        }
    
        /**
         * Products
         */
        if (line.length > 5) {
          let productQty = line.substring(0, 3).trim()
          if (PRODUCT_QUANTITY_MATCHES.includes(productQty)) {
              let matches = lines[i].match(/[0-9]+\.[0-9]+/g)
              if (matches && matches.length) {
                let totalGrossPriceStr = matches[0]
                const productNameLength = line.length - (productQty.length + totalGrossPriceStr.length)
                const productName = line.substring(productQty.length + 1, productNameLength).trim()
    
                if (productName && totalGrossPriceStr && productQty) {
                  const isExist = result.order.items.find(item => item.name === productName)
                  if (isExist) {
                    continue
                  }
    
                  const qty = ParserUtils.getMoney(productQty)
                  const totalGrossPrice = ParserUtils.getMoney(totalGrossPriceStr)
    
                  let product: ProductItem = {
                    name: productName,
                    grossPrice: totalGrossPrice,
                    quantity: qty
                  }
    
                  // Get original product price
                  i++
                  matches = lines[i].match(/[0-9]+/g)
                  if (matches && matches.length) {
                    let discountPrice = Math.abs(ParserUtils.getMoney(matches[matches.length - 1]))
    
                    if (discountPrice > 0) {
                      product.discountPrice = discountPrice
                      product.netPrice = product.grossPrice - product.discountPrice
                    }
                  }
    
                  result.order.items.push(product)
                  continue
                }
              }
          }
        }

        if (!result.order.totalGrossPrice && line.indexOf('Tổng (tạm tính)') > -1) {
            result.order.totalGrossPrice = ParserUtils.getMoney(lines[i])
            continue
        }

        if (!result.order.totalNetPrice && line.indexOf('Tổng cộng') > -1) {
            result.order.totalNetPrice = ParserUtils.getMoney(lines[i])
            result.order.totalDiscountPrice = result.order.totalGrossPrice - result.order.totalNetPrice
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