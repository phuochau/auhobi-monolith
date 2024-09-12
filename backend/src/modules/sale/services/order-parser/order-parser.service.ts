import { Injectable } from '@nestjs/common';
import { ParsedResult } from './types/order-image.types';
import { SaleChannel } from '../../entities/enums/sale-channel';
import { BeFoodParser } from './parsers/be-food';
import { GrabFoodParser } from './parsers/grab-food';
import { ShopeeFoodParser } from './parsers/shopee-food';
import { FabiParser } from './parsers/fabi';

@Injectable()
export class OrderParserService {
    constructor() {
    }

    async parseOrders(type: SaleChannel, files: string[]): Promise<ParsedResult[]> {
        let results: ParsedResult[] = []
        
        switch(type) {
            case SaleChannel.BE_FOOD:
                results = [await BeFoodParser.parse(files)]
                break;
            case SaleChannel.GRAB_FOOD:
                results = [await GrabFoodParser.parse(files)]
                break;
            case SaleChannel.SHOPEE_FOOD:
                results = [await ShopeeFoodParser.parse(files)]
                break;
            case SaleChannel.FABI:
                results = await FabiParser.parse(files)
                break;
        }
        
        return results?.filter(result => result && result?.customer?.phone && result?.order?.id)
    }
}
