import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';
import { AdminModule } from './modules/admin/admin.module';
import { ApplicationModule } from './modules/application/application.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { CrmModule } from './modules/crm/crm.module';
import { GarageModule } from './modules/garage/garage.module';
import { CommerceModule } from './modules/commerce/commerce.module';
import { EndUserModule } from './modules/end-user/end-user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { ServiceHistoryModule } from './modules/service-history/service-history.module';

@Module({
  imports: [
    AdminModule,
    CoreModule,
    ApplicationModule,
    OrganizationModule,
    CrmModule,
    CommerceModule,
    GarageModule,
    EndUserModule,
    VehicleModule,
    ServiceHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
