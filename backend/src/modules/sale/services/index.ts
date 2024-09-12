import { BranchSaleChannelService } from "./branch-sale-channel.service";
import { OrderImportService } from "./order-import.service";
import { OrderParserService } from "./order-parser/order-parser.service";
import { OrderProductService } from "./order-product.service";
import { OrderService } from "./order.service";
import { ProductPriceImportService } from "./product-price-import.service";
import { ProductPriceService } from "./product-price.service";

export const Services = [
    BranchSaleChannelService,
    OrderImportService,
    OrderParserService,
    OrderProductService,
    OrderService,
    ProductPriceImportService,
    ProductPriceService,
]