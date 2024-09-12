import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { Account } from 'src/modules/core/auth/entities/account.entity';
import { OrgBranchService } from 'src/modules/organization/services/org-branch.service';
import { ErrorCodes } from 'src/config/error-codes';
import { BranchSaleChannelService } from './branch-sale-channel.service';
import { OrderParserService } from './order-parser/order-parser.service';
import { OrderService } from './order.service';
import { ProductService } from 'src/modules/inventory/services/product.service';
import { Product } from 'src/modules/inventory/entities/product.entity';
import { OrderProductService } from './order-product.service';
import { CustomerService } from 'src/modules/crm/services/customer.service';
import { LoggerService } from 'src/modules/core/logger/services/logger.service';
import { MediaService } from 'src/modules/core/upload/services/media.service';
import { OrderProduct } from '../entities/order-product.entity';
import { BranchSaleChannel } from '../entities/branch-sale-channel.entity';
import { SaleChannel } from '../entities/enums/sale-channel';
import { FileService } from 'src/modules/core/upload/services/file.service';

@Injectable()
export class OrderImportService {
    constructor(
        private logger: LoggerService,
        private branchSaleChannelService: BranchSaleChannelService,
        private productService: ProductService,
        private orgBranchService: OrgBranchService,
        private orderParserService: OrderParserService,
        private orderService: OrderService,
        private orderProductService: OrderProductService,
        private customerService: CustomerService,
        private mediaService: MediaService,
        private fileService: FileService
    ) {
    }

    private async getFileUrls(branchSaleChannel: BranchSaleChannel, ids: string[]) {
        if (branchSaleChannel.saleChannel === SaleChannel.FABI) {
            const files = await this.fileService.getByIds(ids)

            if (!files?.length) {
                throw new NotFoundException(ErrorCodes.UPLOAD_FILE_NOT_FOUND)
            }

            return files.map(f => f.url)
        }

        const media = await this.mediaService.getByIds(ids)

        if (!media?.length) {
            throw new NotFoundException(ErrorCodes.UPLOAD_MEDIA_NOT_FOUND)
        }

        return media.map(f => f.url)
    }

    async importByFiles(account: Account, branchId: string, branchSaleChannelId: string, fileOrMediaIds: string[]): Promise<Order[]> {
        const branch = await this.orgBranchService.findAccountEditableBranchById(account, branchId)
        if (!branch) {
            throw new NotFoundException(ErrorCodes.ORG_BRANCH_NOT_FOUND)
        }

        const branchSaleChannel = await this.branchSaleChannelService.findById(branchSaleChannelId)
        if (!branchSaleChannel) {
            throw new NotFoundException(ErrorCodes.SALE_BRANCH_SALE_CHANNEL_NOT_FOUND)
        }

        const urls = await this.getFileUrls(branchSaleChannel, fileOrMediaIds)

        const parsedResults = await this.orderParserService.parseOrders(branchSaleChannel.saleChannel, urls)
        this.logger.log(JSON.stringify(parsedResults))

        if (!parsedResults) {
            throw new NotFoundException(ErrorCodes.SALE_ORDER_IMPORT_PARSE_FAILURE)
        }

        const orders: Order[] = []
        for (const result of parsedResults) {
            // Create Order
            let order = await this.orderService.createOne({
                refId: result.order.id,
                grossPrice: result.order.totalGrossPrice,
                netPrice: result.order.totalNetPrice,
                discountPrice: result.order.totalDiscountPrice,
                commissionPercent: result.order.commissionPercent,
                commissionPrice: result.order.commissionPrice,
                note: result.order.note,
                createdAt: result.order.createdAt?.toDate(),
                shippingAddressDistanceKm: result.order.shippingAddress?.distanceKm,
                shippingAddressCity: result.order.shippingAddress?.city,
                shippingAddressDistrict: result.order.shippingAddress?.district,
                shippingAddressWard: result.order.shippingAddress?.ward,
                shippingAddressFull: result.order.shippingAddress?.full,
            })

            // Created Customer
            const customer = await this.customerService.createOrUpdateOne({
                phone: result.customer.phone,
                firstName: result.customer.firstName,
                lastName: result.customer?.lastName
            })

            const orderProducts: OrderProduct[] = []
            for (let productResult of result.order.items) {
                let productDetails: Product = await this.productService.findBySkuOrName(productResult.sku, productResult.name);
                if (!productDetails) {
                    productDetails = await this.productService.createOne({
                        sku: productResult.sku,
                        name: productResult.name,
                        price: productResult.netPrice,
                        branch
                    })
                }

                const orderProduct = await this.orderProductService.createOne({
                    order,
                    product: productDetails,
                    quantity: productResult.quantity,
                    grossPrice: productResult.grossPrice,
                    discountPrice: productResult.discountPrice,
                    netPrice: productResult.netPrice
                })

                orderProducts.push(orderProduct)
            }

            order.customer = customer
            order.products = orderProducts
            order = await this.orderService.saveOrder(order)

            orders.push(order)
        }

        return orders
    }
}
