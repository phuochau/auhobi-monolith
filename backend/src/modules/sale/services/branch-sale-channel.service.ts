import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchSaleChannel } from '../entities/branch-sale-channel.entity';
import { OrgBranch } from 'src/modules/organization/entities/org-branch.entity';
import { SaleChannel } from '../entities/enums/sale-channel';

@Injectable()
export class BranchSaleChannelService {
    constructor(@InjectRepository(BranchSaleChannel) private readonly repo: Repository<BranchSaleChannel>) {
    }

    findById(id: string): Promise<BranchSaleChannel> {
        return this.repo.findOneBy({ id })
    }

    findBySaleChannel(branch: OrgBranch, saleChannel: SaleChannel): Promise<BranchSaleChannel> {
        return this.repo.findOneBy({ branch, saleChannel })
    }
}
  