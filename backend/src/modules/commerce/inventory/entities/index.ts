import { ProductCategory, ProductCategoryDTO } from "./product-category.entity"
import { ProductOptionGroup, ProductOptionGroupDTO } from "./product-option-group.entity"
import { ProductOption, ProductOptionDTO } from "./product-option.entity"
import { ProductType, ProductTypeDTO } from "./product-type.entity"
import { ProductUnit, ProductUnitDTO } from "./product-unit.entity"
import { Product, ProductDTO } from "./product.entity"


export const Entities = [
    ProductCategory,
    ProductOptionGroup,
    ProductOption,
    ProductType,
    ProductUnit,
    Product
]

export const DTOs = [
    ProductCategoryDTO,
    ProductOptionGroupDTO,
    ProductOptionDTO,
    ProductTypeDTO,
    ProductUnitDTO,
    ProductDTO
]
