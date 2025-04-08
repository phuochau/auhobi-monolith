import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios'
import * as CSVParser from 'csv-parse';
import { Product } from '../entities/product.entity';
import { Account } from 'src/modules/core/auth/entities/account.entity';
import { ErrorCodes } from 'src/modules/shared/enums/error-codes';
import { FileService } from 'src/modules/core/upload/services/file.service';
import { OrgBranchService } from 'src/modules/organization/services/org-branch.service';
import { ProductImportCSVRecord } from '../types/product-import-csv-record';
import { Http } from 'src/lib/http';
import path from 'path'
import _ from 'lodash';
import { UploadService } from 'src/modules/core/upload/services/upload.service';
import { MimeUtil } from 'src/lib/mime';
import { ProductService } from './product.service';
import { ProductType } from '../entities/product-type.entity';
import { ProductTypeService } from './product-type.service';
import { ProductUnit } from '../entities/product-unit.entity';
import { ProductUnitService } from './product-unit.service';
import { ProductCategory } from '../entities/product-category.entity';
import { ProductCategoryService } from './product-category.service';
import { SKUGeneratorService } from './sku-generator.service';
import { LoggerService } from 'src/modules/core/logger/services/logger.service';
import { OrgBranch } from 'src/modules/organization/entities/org-branch.entity';
import { File } from 'src/modules/core/upload/entities/file.entity'

@Injectable()
export class ProductImportService {
    constructor(
        private logger: LoggerService,
        private fileService: FileService,
        private orgBranchService: OrgBranchService,
        private uploadService: UploadService,
        private productService: ProductService,
        private productTypeService: ProductTypeService,
        private productUnitService: ProductUnitService,
        private productCategoryService: ProductCategoryService,
        private skuGeneratorService: SKUGeneratorService,
    ) {
    }

    async importByFile(account: Account, branchId: string, fileId: string): Promise<Product[]> {
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
            throw new NotFoundException(ErrorCodes.PRODUCT_IMPORT_EMPTY_RECORDS)
        }

        const updated: Product[] = []
        const failed = []
        for (let i = 0; i < csvRecords.length; i ++) {
            const record = csvRecords[i]
            const product = await this.importProduct(branch, record)
            if (product) {
                updated.push(product)
            } else {
                failed.push(record)
            }
        }

        if (failed) {
          this.logger.warn('Failed to import products:', failed)
        }

        return updated
    }

    async importProduct(branch: OrgBranch, record: ProductImportCSVRecord): Promise<Product> {
        if (!record.id) {
          return null
        }
      
        let productImage: File;
        if (record.image?.length) {
            try {
                const buffer = await Http.downloadFile(record.image)
                const ext = path.extname(record.image)
                const mimetype = await MimeUtil.getMimeType(ext)
                if (buffer) {
                    productImage = await this.uploadService.addFileByBuffer(buffer, mimetype)
                }
            } catch (err) {
                this.logger.warn(err)
            }
        }

        let product = await this.productService.findBySkuOrName(record.sku, record.name)
        if (product) {
            product = await this.productService.updateOne(product, {
                sku: record.sku,
                name: record.name,
                description: record.description,
                price: parseFloat(record.original_price),
                image: productImage?.id
            })
        } else {
          product = await this.productService.createOne({
              sku: record.sku,
              name: record.name,
              description: record.description,
              price: parseFloat(record.original_price),
              image: productImage?.id
          })
        }

        const productCategory = await this.getOrCreateProductCategory(branch, product, record)
        const productType = await this.getOrCreateProductType(branch, product, record)
        const productUnit = await this.getOrCreateProductUnit(branch, product, record)

        product.categories = _.uniqBy([
            ...(product.categories || []),
            productCategory
          ], item => item.id)
        product.type = productType
        product.unit = productUnit

        product = await this.productService.saveProduct(product);
        
        return product
    }

    async getOrCreateProductCategory(branch: OrgBranch, product: Product, record: ProductImportCSVRecord): Promise<ProductCategory> {
        let productUnit: ProductCategory;
        if (record.category) {
            productUnit = await this.productCategoryService.findByName(record.category)

            if (!productUnit) {
                productUnit = await this.productCategoryService.createOne({
                    sku: this.skuGeneratorService.generateSKU(record.category),
                    name: record.category,
                    branch,
                    products: [product]
                })
            }
        }

        return productUnit
    }

    async getOrCreateProductType(branch: OrgBranch, product: Product, record: ProductImportCSVRecord): Promise<ProductType> {
        let productType: ProductType;
        if (record.type) {
            productType = await this.productTypeService.findByName(record.type)

            if (!productType) {
                productType = await this.productTypeService.createOne({
                    sku: this.skuGeneratorService.generateSKU(record.type),
                    name: record.type,
                    branch,
                    products: [product]
                })
            }
        }

        return productType
    }

    async getOrCreateProductUnit(branch: OrgBranch, product: Product, record: ProductImportCSVRecord): Promise<ProductUnit> {
        let productUnit: ProductUnit;
        if (record.unit) {
            productUnit = await this.productUnitService.findByName(record.unit)

            if (!productUnit) {
                productUnit = await this.productUnitService.createOne({
                    sku: this.skuGeneratorService.generateSKU(record.unit),
                    name: record.unit,
                    branch,
                    products: [product]
                })
            }
        }

        return productUnit
    }

    private readRemoteCSV = async (filepath: string): Promise<ProductImportCSVRecord[]> => {
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
