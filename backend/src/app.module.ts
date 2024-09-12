import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';
import { AdminModule } from './modules/admin/admin.module';
import { ApplicationModule } from './modules/application/application.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { SaleModule } from './modules/sale/sale.module';
import { CrmModule } from './modules/crm/crm.module';

@Module({
  imports: [
    AdminModule,
    CoreModule,
    ApplicationModule,
    CrmModule,
    InventoryModule,
    OrganizationModule,
    SaleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
