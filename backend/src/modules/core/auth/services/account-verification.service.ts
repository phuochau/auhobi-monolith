import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThanOrEqual, Repository } from 'typeorm';
import { Account } from '../entities/account.entity';
import { AccountVerfication } from '../entities/account-verification.entity';
import dayjs from 'dayjs'
import { Encryption } from 'src/lib/encryption';
import { EmailService } from '../../email/services/email.service';
import { PlatformConfig } from 'src/config/platform.config';

@Injectable()
export class AccountVerificationService {
  constructor(
    @InjectRepository(AccountVerfication) private readonly repo: Repository<AccountVerfication>,
    private emailService: EmailService
  ) {}

  async createOne(account: Account): Promise<AccountVerfication> {
    await this.repo.delete({
      account: {
        id: account.id
      },
      used: false
    })

    const token = Encryption.genToken()
    const expiredAt = dayjs().add(PlatformConfig.auth.verification.tokenExpiredHours, 'hours')
    const verification = this.repo.create({ account, token, expiredAt })
    return this.repo.save(verification)
  }

  async getToken(token: string): Promise<AccountVerfication | undefined> {
    return this.repo.findOne({
      where: {
        token,
        used: false
      },
      relations: ['account']
    })
  }

  async getExpiredToken(token: string): Promise<AccountVerfication | undefined> {
    return this.repo.findOne({
      where: {
        token,
        used: false,
        expiredAt: LessThan(dayjs().toDate()),
      },
      relations: ['account']
    })
  }

  async getActiveToken(token: string): Promise<AccountVerfication | undefined> {
    return this.repo.findOne({
      where: {
        token,
        used: false,
        expiredAt: MoreThanOrEqual(dayjs().toDate()),
      },
      relations: ['account']
    })
  }

  async markTokenAsUsed(verification: AccountVerfication): Promise<AccountVerfication> {
    verification.used = true
    return this.repo.save(verification)
  }

  async sendRequestEmail(verification: AccountVerfication): Promise<boolean> {
    const link = await this.emailService.renderContent(PlatformConfig.auth.verification.email.link, { token: verification.token })
    const text = await this.emailService.renderContent(PlatformConfig.auth.verification.email.text,  { link })

    await this.emailService.send({
      to: verification.account.email,
      subject: PlatformConfig.auth.verification.email.subject,
      text,
      template: 'email-verification',
      context: {
        link
      }
    })
    return true
  }

  async sendConfirmationEmail(verification: AccountVerfication): Promise<boolean> {
    const text = PlatformConfig.auth.confirmation.email.text

    await this.emailService.send({
      to: verification.account.email,
      subject: PlatformConfig.auth.confirmation.email.subject,
      text,
      template: 'email-confirmation'
    })
    return true
  }
}
