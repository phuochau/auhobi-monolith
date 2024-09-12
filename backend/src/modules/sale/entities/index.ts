import { ProductPrice, ProductPriceDTO } from "./product-price.entity"
import { BranchSaleChannel, BranchSaleChannelDTO } from "./branch-sale-channel.entity"
import { OrderProduct, OrderProductDTO } from "./order-product.entity"
import { Order, OrderDTO } from "./order.entity"


export const Entities = [
    ProductPrice,
    BranchSaleChannel,
    OrderProduct,
    Order
]

export const DTOs = [
    ProductPriceDTO,
    BranchSaleChannelDTO,
    OrderProductDTO,
    OrderDTO
]