import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Account } from '../entities/account.entity';
import { PlatformConfig } from 'src/config/platform.config';
import { AccountRole } from '../entities/enums/account-role.enum';
import { Encryption } from 'src/lib/encryption';
import dayjs, { Dayjs } from 'dayjs';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private readonly repo: Repository<Account>
  ) {}

  async encrypt(content: string): Promise<string> {
    return Encryption.encrypt(content, PlatformConfig.encryption.bcryptSaltOrRound);
  }

  async compareHash(content: string, hash: string): Promise<boolean> {
    return Encryption.compare(content, hash)
  }

  async findActiveAccountById(accId: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ id: accId, emailVerified: true })
  }

  async findAccountByEmail(email: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ email })
  }

  async findActiveAccount(email: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ email, emailVerified: true })
  }

  async findUnactiveAccount(email: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ email, emailVerified: false })
  }

  async findActiveAccountByRefreshToken(accId: string, refreshToken: string): Promise<Account | undefined> {
    return this.repo.findOneBy({
      id: accId,
      emailVerified: true,
      refreshToken,
      refreshTokenExpiredAt: MoreThanOrEqual(dayjs().toDate())
    })
  }

  async createOneAccount(email: string, password: string, firstName: string, lastName: string): Promise<Account | undefined> {
    const hash = await this.encrypt(password)
    const account = this.repo.create({ email, password: hash, role: AccountRole.USER, firstName: firstName, lastName: lastName })
    return this.repo.save(account)
  }

  async activeAccount(account: Account): Promise<Account | undefined> {
    account.emailVerified = true
    return this.repo.save(account)
  }

  async updatePassword(account: Account, password: string): Promise<Account | undefined> {
    account.password = await this.encrypt(password)
    return this.repo.save(account)
  }

  async updateRefreshToken(account: Account, refreshToken: string, refreshTokenExpiredAt: Dayjs): Promise<Account | undefined> {
    account.refreshToken = refreshToken
    account.refreshTokenExpiredAt = refreshTokenExpiredAt.toDate()
    return this.repo.save(account)
  }
}
