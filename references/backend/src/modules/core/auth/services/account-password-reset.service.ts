import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Account } from '../entities/account.entity';
import dayjs from 'dayjs'
import { Encryption } from 'src/lib/encryption';
import { EmailService } from '../../email/services/email.service';
import { AccountPasswordReset } from '../entities/account-password-reset.entity';
import { PlatformConfig } from 'src/config/platform.config';

@Injectable()
export class AccountPasswordResetService {
  constructor(
    @InjectRepository(AccountPasswordReset) private readonly repo: Repository<AccountPasswordReset>,
    private emailService: EmailService
  ) {}

  async createOne(account: Account): Promise<AccountPasswordReset> {
    await this.repo.delete({
      account: {
        id: account.id
      },
      used: false
    })

    const token = Encryption.genToken()
    const expiredAt = dayjs().add(PlatformConfig.auth.requestPasswordReset.tokenExpiredHours, 'hours')
    const verification = this.repo.create({ account, token, expiredAt })
    return this.repo.save(verification)
  }

  async findByToken(token: string): Promise<AccountPasswordReset | undefined> {
    return this.repo.findOne({
      where: {
        token,
        used: false
      },
      relations: ['account']
    })
  }

  async findByCode(email: string, code: string): Promise<AccountPasswordReset | undefined> {
    return this.repo.findOne({
      where: {
        code,
        used: false,
        account: {
          email
        },
      },
      relations: ['account']
    })
  }

  async findActiveByToken(token: string): Promise<AccountPasswordReset | undefined> {
    return this.repo.findOne({
      where: {
        token,
        used: false,
        expiredAt: MoreThanOrEqual(dayjs().toDate()),
      },
      relations: ['account']
    })
  }

  async markAsUsed(verification: AccountPasswordReset): Promise<AccountPasswordReset> {
    verification.used = true
    return this.repo.save(verification)
  }

  async sendPasswordResetEmail(request: AccountPasswordReset): Promise<boolean> {
    const link = await this.emailService.renderContent(PlatformConfig.auth.requestPasswordReset.email.link, { token: request.token })
    const text = await this.emailService.renderContent(PlatformConfig.auth.requestPasswordReset.email.text,  { link })

    await this.emailService.send({
      to: request.account.email,
      subject: PlatformConfig.auth.requestPasswordReset.email.subject,
      text,
      template: 'request-password-reset',
      context: {
        link
      }
    })
    return true
  }

  async sendPasswordResetEmailByCode(request: AccountPasswordReset): Promise<boolean> {
    const text = await this.emailService.renderContent(PlatformConfig.auth.requestPasswordReset.email.textByCode,  { code: request.code })

    await this.emailService.send({
      to: request.account.email,
      subject: PlatformConfig.auth.requestPasswordReset.email.subject,
      text,
      template: 'request-password-reset-by-code',
      context: {
        code: request.code
      }
    })
    return true
  }

  async sendConfirmationEmail(request: AccountPasswordReset): Promise<boolean> {
    const text = PlatformConfig.auth.passwordResetConfirmation.email.text

    await this.emailService.send({
      to: request.account.email,
      subject: PlatformConfig.auth.passwordResetConfirmation.email.subject,
      text,
      template: 'reset-password-confirmation'
    })
    return true
  }
}
