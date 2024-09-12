import { ParserUtils } from "../utils"
import dayjs from 'dayjs'
import { ParsedResult, ProductItem } from "../types/order-image.types"
import _ from "lodash"
import { DateUtility } from "src/lib/date"

export namespace ShopeeFoodParser {
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
            shippingAddress: {}
        }
      }


      const lines = text.split('\n')
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        if (!line) {
          continue
        }
    
        /**
         * Customer
         */
    
        if (!result.customer?.phone && line.indexOf('Khách đặt đơn') > -1) {
          i++
          while(lines[i].trim().length === 0) {
            i++
          }
          result = _.set(result, 'customer.phone', ParserUtils.getPhoneNumber(lines[i]))
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
    
                  // Get original product price
                  i++
                  matches = lines[i].match(/[0-9o\.]+/g)
                  if (matches && matches.length) {
                    let grossPrice = ParserUtils.getMoney(matches[matches.length - 1].replace(/o/g, '0'))
    
                    if (grossPrice > 0) {
                      product.grossPrice = grossPrice
                      product.discountPrice = product.grossPrice - product.netPrice
                    }
                  }
    
                  result.order.items.push(product)
                  continue
                }
              }
          }
        }
    
        /**
         * Price section
         */
        if (!result.order.totalGrossPrice && line.indexOf('Tổng tiền món') > -1) {
            result.order.totalGrossPrice = ParserUtils.getMoney(lines[i])
            continue
        }
    
        if (!result.order.totalDiscountPrice && line.indexOf('Giảm giá') > -1) {
            result.order.totalDiscountPrice = ParserUtils.getMoney(lines[i])
            continue
        }
    
        if (!result.order.commissionPrice && line.indexOf('Chiết khấu') > -1) {
            const matches = lines[i].match(/[0-9\.]+/g)
      
            if (matches && matches.length === 2) {
              result.order.commissionPercent = ParserUtils.getFloat(matches[0])
              result.order.commissionPrice = ParserUtils.getMoney(matches[1])
              continue
            }
        }
    
        if (!result.order.totalNetPrice && line.indexOf('Tổng tiền quán nhận') > -1) {
          let matches = null
          while (matches === null) {
            matches = lines[i].match(/[0-9]+\.[0-9]+đ/g)
            if (matches) {
              break;
            }
            i++
          }
    
          if (matches && matches.length > 0) {
            result.order.totalNetPrice = ParserUtils.getMoney(matches[0])
          }
          continue
        }
    
        /**
         * Order Id, Distance, Time
         */
    
        if (!result.order.shippingAddress.distanceKm && line.indexOf('Khoảng cách') > -1) {
            result.order.shippingAddress.distanceKm = ParserUtils.getFloat(line)
          continue
        }
    
        if (!result.order.id && line.indexOf('Mã đơn hàng') > -1) {
            result.order.id = line.replace(/[^\-0-9]/g, '').trim()
            const parts = result.order.id.split('-')
            const day = parts[0].substring(0, 2)
            const month = parts[0].substring(2, 4)
            result.order.createdAt = dayjs().date(parseInt(day)).month(parseInt(month) - 1)
            continue
        }
    
        if (line.indexOf('Hôm nay') > -1) {
          const parts = line.replace(/[^\:0-9]/g, '').trim().split(':')
          if (parts.length === 2) {
            result.order.createdAt = result.order.createdAt.hour(parseInt(parts[0])).minute(parseInt(parts[1]))
          }
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