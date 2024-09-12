import { ProductPriceResolver } from "./product-price.resolver";
import { BranchSaleChannelResolver } from "./branch-sale-channel.resolver";
import { OrderProductResolver } from "./order-product.resolver";
import { OrderResolver } from "./order.resolver";

export const Resolvers = [
    BranchSaleChannelResolver,
    OrderProductResolver,
    OrderResolver,
    ProductPriceResolver,
]