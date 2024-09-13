import { ConflictException, ForbiddenException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { AccountService } from './account.service';
import { JwtService } from '@nestjs/jwt';
import { Account } from '../entities/account.entity';
import { LoginResult } from '../entities/objects/login-result';
import { AccountVerificationService } from './account-verification.service';
import { AccountPasswordResetService } from './account-password-reset.service';
import { ErrorCodes } from '../../../../config/error-codes';
import dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private accountService: AccountService,
    private accountPasswordResetService: AccountPasswordResetService,
    private accountVerificationService: AccountVerificationService
) {}

  async generateAccessToken(acc: Account): Promise<string> {
    return this.jwtService.signAsync({ id: acc.id, email: acc.email }, {
      secret: process.env.AUTH_JWT_SECRET,
      expiresIn: process.env.AUTH_JWT_EXPIRES_IN,
    })
  }

  async verifyAccessToken(token: string): Promise<Account> {
    return this.jwtService.verifyAsync(
      token,
      {
        secret: process.env.AUTH_JWT_SECRET,
      }
    );
  }

  async generateRefreshToken(acc: Account): Promise<string> {
    return this.jwtService.signAsync({ id: acc.id, email: acc.email }, {
      secret: process.env.AUTH_REFRESH_JWT_SECRET,
      expiresIn: process.env.AUTH_REFRESH_JWT_EXPIRES_IN,
    })
  }

  async verifyRefreshToken(token: string): Promise<Account> {
    return this.jwtService.verifyAsync(
      token,
      {
        secret: process.env.AUTH_REFRESH_JWT_SECRET
      }
    );
  }

  async updateRefreshToken(accId: string, oldRefreshToken?: string): Promise<string> {
    let acc: Account;
    
    if (oldRefreshToken) {
      acc = await this.accountService.findActiveAccountByRefreshToken(accId, oldRefreshToken)
    } else {
      acc = await this.accountService.findActiveAccountById(accId)
    }

    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_FORBIDDEN)
    }

    const refreshToken = await this.generateRefreshToken(acc)
    const expiredAt = dayjs().add(process.env.AUTH_REFRESH_JWT_EXPIRES_IN, 'millisecond')

    await this.accountService.updateRefreshToken(acc, refreshToken, expiredAt)
    return refreshToken
  }

  async login(email: string, pass: string): Promise<LoginResult> {
    const acc = await this.accountService.findAccountByEmail(email);

    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
    }
    
    if (!acc.emailVerified) {
      throw new NotAcceptableException(ErrorCodes.AUTH_ACCOUNT_PENDING_ACTIVATION)
    }

    const passwordMatched = await this.accountService.compareHash(pass, acc.password)
    if (!passwordMatched) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND);
    }
    
    const accessToken = await this.generateAccessToken(acc)
    const refreshToken = await this.updateRefreshToken(acc.id)

    return {
      account: acc,
      accessToken,
      refreshToken
    };
  }

  async refreshTokens(accId: string, oldRefreshToken?: string): Promise<LoginResult> {
    const acc = await this.accountService.findActiveAccountById(accId)
    if (!acc) {
      throw new ForbiddenException(ErrorCodes.AUTH_FORBIDDEN)
    }

    const refreshToken = await this.updateRefreshToken(accId, oldRefreshToken)
    const accessToken = await this.generateAccessToken(acc)

    return {
      account: acc,
      accessToken,
      refreshToken
    }
  }

  /**
   * Register Flow
   */

  async register(email: string, pass: string, firstName: string, lastName: string, useCode: boolean): Promise<boolean> {
    let acc = await this.accountService.findAccountByEmail(email)
    if (acc) {
      if (!acc.emailVerified) {
        throw new NotAcceptableException(ErrorCodes.AUTH_ACCOUNT_PENDING_ACTIVATION)
      }
      throw new ConflictException(ErrorCodes.AUTH_ACCOUNT_EXISTS)
    }

    acc = await this.accountService.createOneAccount(email, pass, firstName, lastName)
    const verification = await this.accountVerificationService.createOne(acc)
    if (useCode) {
      this.accountVerificationService.sendRequestEmailByCode(verification)
    } else {
      this.accountVerificationService.sendRequestEmail(verification)
    }
    return true
  }

  async verifyAccount(token: string): Promise<boolean> {
    const request = await this.accountVerificationService.findByToken(token)
    if (!request) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    const expiredAt = dayjs(request.expiredAt)
    if (dayjs().isAfter(expiredAt)) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_EXPIRED)
    }
    
    const acc = await this.accountService.findUnactiveAccount(request.account.email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
    }

    await this.accountVerificationService.markAsUsed(request)
    await this.accountService.activeAccount(acc)
    this.accountVerificationService.sendConfirmationEmail(request)
    return true
  }

  async verifyAccountByCode(email: string, code: string): Promise<boolean> {
    const acc = await this.accountService.findUnactiveAccount(email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
    }

    const request = await this.accountVerificationService.findByCode(email, code)
    if (!request) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    const expiredAt = dayjs(request.expiredAt)
    if (dayjs().isAfter(expiredAt)) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_EXPIRED)
    }

    await this.accountVerificationService.markAsUsed(request)
    await this.accountService.activeAccount(acc)
    this.accountVerificationService.sendConfirmationEmail(request)
    return true
  }

  async resendVerification(token: string): Promise<boolean> {
    const request = await this.accountVerificationService.findExpiredByToken(token)
    if (!request) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    const acc = await this.accountService.findUnactiveAccount(request.account.email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
    }
    const verification = await this.accountVerificationService.createOne(acc)
    this.accountVerificationService.sendRequestEmail(verification)
    return true
  }

  async resendVerificationWithEmail(email: string, useCode: boolean): Promise<boolean> {
    const acc = await this.accountService.findUnactiveAccount(email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
    }
    const verification = await this.accountVerificationService.createOne(acc)

    if (useCode) {
      this.accountVerificationService.sendRequestEmailByCode(verification)
    } else {
      this.accountVerificationService.sendRequestEmail(verification)
    }
    return true
  }

  /**
   * Forgot password flow
   */

  async requestPasswordReset(email: string, useCode: boolean): Promise<boolean> {
    let acc = await this.accountService.findActiveAccount(email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
    }

    const request = await this.accountPasswordResetService.createOne(acc)
    if (useCode) {
      this.accountPasswordResetService.sendPasswordResetEmailByCode(request)
    } else {
      this.accountPasswordResetService.sendPasswordResetEmail(request)
    }
    return true
  }

  async confirmPasswordReset(token: string, password: string): Promise<boolean> {
    const request = await this.accountPasswordResetService.findByToken(token)
    if (!request) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    const expiredAt = dayjs(request.expiredAt)
    if (dayjs().isAfter(expiredAt)) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_EXPIRED)
    }

    const acc = await this.accountService.findActiveAccount(request.account.email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    await this.accountService.updatePassword(acc, password)
    await this.accountPasswordResetService.markAsUsed(request)
    this.accountPasswordResetService.sendConfirmationEmail(request)
    return true
  }

  async confirmPasswordResetByCode(email: string, code: string, password: string): Promise<boolean> {
    const acc = await this.accountService.findActiveAccount(email)
    if (!acc) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    const request = await this.accountPasswordResetService.findByCode(email, code)
    if (!request) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_NOT_FOUND)
    }

    const expiredAt = dayjs(request.expiredAt)
    if (dayjs().isAfter(expiredAt)) {
      throw new NotFoundException(ErrorCodes.AUTH_REQUEST_EXPIRED)
    }

    await this.accountService.updatePassword(acc, password)
    await this.accountPasswordResetService.markAsUsed(request)
    this.accountPasswordResetService.sendConfirmationEmail(request)
    return true
  }


}