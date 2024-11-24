import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Account } from '../entities/account.entity';
import { PlatformConfig } from 'src/config/platform.config';
import { AccountRole } from '../entities/enums/account-role.enum';
import { Encryption } from 'src/lib/encryption';
import dayjs, { Dayjs } from 'dayjs';
import { AccountAuthMethod } from '../entities/enums/account-auth-method.enum';
import _ from 'lodash';

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

  async findActiveAccountUserById(accId: string): Promise<Account | undefined> {
    return this.repo.findOne({ 
      where: {
        id: accId,
        isActivated: true
      },
      relations: ['user']
    })
  }

  async findAccountByEmail(email: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ email })
  }

  async findActiveAccountByEmail(email: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ email, isActivated: true })
  }

  async findUnactiveAccountByEmail(email: string): Promise<Account | undefined> {
    return this.repo.findOneBy({ email, isActivated: false })
  }

  async findActiveAccountByRefreshToken(accId: string, refreshToken: string): Promise<Account | undefined> {
    return this.repo.findOneBy({
      id: accId,
      isActivated: true,
      refreshToken,
      refreshTokenExpiredAt: MoreThanOrEqual(dayjs().toDate())
    })
  }

  async createOneAccount(email: string, password: string, firstName: string, lastName: string): Promise<Account | undefined> {
    const hash = await this.encrypt(password)
    const account = this.repo.create({
      email,
      password: hash,
      role: AccountRole.USER,
      firstName: firstName,
      lastName: lastName
    })
    return this.repo.save(account)
  }

  async createOneAccountWithUser(email: string, password: string, firstName: string, lastName: string): Promise<Account | undefined> {
    const hash = await this.encrypt(password)
    const account = this.repo.create({
      email,
      password: hash,
      role: AccountRole.USER,
      firstName: firstName,
      lastName: lastName,
      user: {}
    })
    return this.repo.save(account)
  }

  async activeAccount(account: Account): Promise<Account | undefined> {
    account.emailVerified = true
    account.isActivated = true
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

  /**
   * Facebook
   */

  async findAccountByFacebookUserId(facebookUserId: string): Promise<Account | undefined> {
    return this.repo.findOne({
      where: { facebookUserId },
      relations: ['user']
    })
  }

  async createAccountByFacebookUser(facebookUserId: string, email?:string, firstName?: string, lastName?: string, avatar?: string): Promise<Account | undefined> {
    const account = this.repo.create({
      facebookUserId,
      authMethods: [AccountAuthMethod.FACEBOOK],
      firstName: firstName,
      lastName: lastName,
      email,
      user: {
        avatar: avatar
      },
      isActivated: true
    })
    return this.repo.save(account)
  }

  async updateAccountByFacebookUser(account: Account, facebookUserId: string, email?:string, firstName?: string, lastName?: string, avatar?: string): Promise<Account | undefined> {
    account.authMethods = _.uniq([...(account.authMethods || []), AccountAuthMethod.FACEBOOK])
    account.facebookUserId = facebookUserId
    account.firstName = firstName
    account.lastName = lastName
    account.email = email
    account.user.avatar = avatar
    account.isActivated = true
    return this.repo.save(account)
  }

  /**
   * Google
   */

  async findAccountByGoogleUserId(googleUserId: string): Promise<Account | undefined> {
    return this.repo.findOne({
      where: { googleUserId },
      relations: ['user']
    })
  }

  async createAccountByGoogleUser(googleUserId: string, email?:string, firstName?: string, lastName?: string, avatar?: string): Promise<Account | undefined> {
    const account = this.repo.create({
      googleUserId,
      authMethods: [AccountAuthMethod.GOOGLE],
      firstName: firstName,
      lastName: lastName,
      email,
      user: {
        avatar: avatar
      },
      isActivated: true
    })
    return this.repo.save(account)
  }

  async updateAccountByGoogleUser(account: Account, googleUserId: string, email?:string, firstName?: string, lastName?: string, avatar?: string): Promise<Account | undefined> {
    account.authMethods = _.uniq([...(account.authMethods || []), AccountAuthMethod.GOOGLE])
    account.googleUserId = googleUserId
    account.firstName = firstName
    account.lastName = lastName
    account.email = email
    account.user.avatar = avatar
    account.isActivated = true
    return this.repo.save(account)
  }

  /**
   * Apple
   */

  async findAccountByAppleUserId(appleUserId: string): Promise<Account | undefined> {
    return this.repo.findOne({
      where: { appleUserId },
      relations: ['user']
    })
  }

  async createAccountByAppleUser(appleUserId: string, email?:string, firstName?: string, lastName?: string, avatar?: string): Promise<Account | undefined> {
    const account = this.repo.create({
      appleUserId,
      authMethods: [AccountAuthMethod.APPLE],
      firstName: firstName,
      lastName: lastName,
      email,
      user: {
        avatar: avatar
      },
      isActivated: true
    })
    return this.repo.save(account)
  }

  async updateAccountByAppleUser(account: Account, appleUserId: string, email?:string, firstName?: string, lastName?: string, avatar?: string): Promise<Account | undefined> {
    account.authMethods = _.uniq([...(account.authMethods || []), AccountAuthMethod.APPLE])
    account.appleUserId = appleUserId
    account.firstName = firstName
    account.lastName = lastName
    account.email = email
    account.user.avatar = avatar
    account.isActivated = true
    return this.repo.save(account)
  }
}
