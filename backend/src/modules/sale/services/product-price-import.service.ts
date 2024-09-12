import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios'
import * as CSVParser from 'csv-parse';
import { Account } from 'src/modules/core/auth/entities/account.entity';
import { ErrorCodes } from 'src/config/error-codes';
import { FileService } from 'src/modules/core/upload/services/file.service';
import { OrgBranchService } from 'src/modules/organization/services/org-branch.service';
import _ from 'lodash';
import { ProductPrice } from '../entities/product-price.entity';
import { ProductPriceService } from './product-price.service';
import { ProductPriceImportCSVRecord } from '../types/product-price-import-csv-record';
import { ProductService } from 'src/modules/inventory/services/product.service';
import { BranchSaleChannelService } from './branch-sale-channel.service';
import { OrgBranch } from 'src/modules/organization/entities/org-branch.entity';
import { SaleChannel } from '../entities/enums/sale-channel';
import { LoggerService } from 'src/modules/core/logger/services/logger.service';

@Injectable()
export class ProductPriceImportService {
    constructor(
        private logger: LoggerService,
        private fileService: FileService,
        private orgBranchService: OrgBranchService,
        private productService: ProductService,
        private productPriceService: ProductPriceService,
        private branchSaleChannelService: BranchSaleChannelService,
    ) {
    }

    async importByFile(account: Account, branchId: string, fileId: string): Promise<ProductPrice[]> {
        const branch = await this.orgBranchService.findAccountEditableBranchById(account, branchId)
        if (!branch) {
            throw new NotFoundException(ErrorCodes.ORG_BRANCH_NOT_FOUND)
        }

        const files = await this.fileService.getByIds([fileId])

        if (!files?.length) {
            throw new NotFoundException(ErrorCodes.UPLOAD_FILE_NOT_FOUND)
        }

        const fileUrl = files[0].url

        const csvRecords = await this.readRemoteCSV(fileUrl)
        if (!csvRecords?.length) {
            throw new NotFoundException(ErrorCodes.PRODUCT_PRICE_IMPORT_EMPTY_RECORDS)
        }

        const updated: ProductPrice[] = []
        const failed = []
        for (let i = 0; i < csvRecords.length; i ++) {
            const record = csvRecords[i]
            const productPrices = await this.importProduct(branch, record)
            if (productPrices) {
                updated.push(...productPrices)
            } else {
                failed.push(record)
            }
        }

        return updated
    }

    async importProduct(branch: OrgBranch, record: ProductPriceImportCSVRecord): Promise<ProductPrice[]> {
        if (!record.id) {
          return null
        }

        const product = await this.productService.findBySku(record.sku)
        const recordKeys = Object.keys(record)
        const originalPriceIndex = recordKeys.indexOf('original_price')

        let productPrices: ProductPrice[] = []
        for (let i = originalPriceIndex + 1; i < recordKeys.length; i++) {
            const saleChannelKey = recordKeys[i]
            const saleChannel = SaleChannel[saleChannelKey]
            if (saleChannel) {
                const branchSaleChannel = await this.branchSaleChannelService.findBySaleChannel(branch, saleChannel)

                const productPrice = await this.productPriceService.createOrUpdateOne({
                    product,
                    branchSaleChannel,
                    price: parseFloat(record[saleChannelKey])
                })

                productPrices.push(productPrice)
            } else {
                this.logger.warn('Sale Channel is not found:', recordKeys[i])
            }
        }

        return productPrices
    }

    private readRemoteCSV = async (filepath: string): Promise<ProductPriceImportCSVRecord[]> => {
      const records = [];
      const parser = await axios.get(filepath, { responseType: 'stream' }).then(res => {
        return res.data.pipe(CSVParser.parse());
      })
    
      let i = 0
      let keys = []
      for await (const item of parser) {
        if (i === 0) {
          keys = item
        } else {
          records.push(
            _.reduce(keys, (record, key, index) => {
              record[key] = item[index]
              return record
            }, {})
          )
        }
        i++
      }
    
      return records;
    };
}
