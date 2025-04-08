import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { OrgBranch } from '../entities/org-branch.entity';
import { OrgBranchRole } from '../entities/enums/org-branch-role.enum';
import { Account } from 'src/modules/core/auth/entities/account.entity';
import { OrgBranchStatus } from '../entities/enums/org-branch-status.enum';

@Injectable()
export class OrgBranchService {
    constructor(@InjectRepository(OrgBranch) private readonly repo: Repository<OrgBranch>) {
    }

    findAccountEditableBranchById(account: Account, id: string): Promise<OrgBranch> {
        return this.repo.findOneBy({
            id,
            status: OrgBranchStatus.ACTIVATED,
            members: {
                account: { id: account.id },
                role: MoreThan(OrgBranchRole.VIEWER)
            }
         })
    }
}
