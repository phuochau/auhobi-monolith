import { Injectable } from '@nestjs/common';
import { BeforeCreateOneHook, CreateOneInputType,} from '@ptc-org/nestjs-query-graphql';
import { GqlContext } from 'src/modules/core/graphql/types/gql-context';
import { Garage } from 'src/modules/garage/entities/garage.entity';
import { GarageService } from 'src/modules/garage/services/garage.service';

interface GarageCreateInput {
  garageId?: string;
  garage?: Garage;
}

@Injectable()
export class GarageBeforeCreateOneHook<T extends GarageCreateInput> implements BeforeCreateOneHook<T, GqlContext> {
  constructor(private garageService: GarageService) {}

  async run(input: CreateOneInputType<T>, context: GqlContext): Promise<CreateOneInputType<T>> {
    if (input.input.garageId?.length) {
      const garage = await this.garageService.findActiveOneById(input.input.garageId);
      input.input.garage = garage;
    }
    return input;
  }
}