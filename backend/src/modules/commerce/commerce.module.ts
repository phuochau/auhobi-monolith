import { Module } from '@nestjs/common';
import { SaleModule } from './sale/sale.module';
import { InventoryModule } from './inventory/inventory.module';
import { ShopModule } from './shop/shop.module';

@Module({
    imports: [
        InventoryModule,
        SaleModule,
        ShopModule
    ]
})
export class CommerceModule {}
