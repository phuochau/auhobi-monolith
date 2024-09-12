import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { LoginResult } from "../entities/objects/login-result";
import { AuthService } from "../services/auth.service";
import { AuthLoginInput } from "./inputs/auth-login.input";
import { AuthRefreshTokenInput } from "./inputs/auth-refresh-token.input";
import { AuthRegisterInput } from "./inputs/auth-register.input";
import { AuthResendVerificationInput } from "./inputs/auth-resend-verification.input";
import { AuthResendVerificationWithEmailInput } from "./inputs/auth-resend-verification-with-email.input";
import { AuthVerifyAccountInput } from "./inputs/auth-verify-account";
import { AuthRequestPasswordResetInput } from "./inputs/auth-request-password-reset.input";
import { AuthConfirmPasswordResetInput } from "./inputs/auth-confirm-password-reset.input";

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService
  ) {
  }
  /**
   * Login
   */

  @Mutation(() => LoginResult)
  authLogin(
    @Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput
  ) {
    return this.authService.login(input.email, input.password)
  }

  @Mutation(() => LoginResult)
  authRefreshToken(
    @Args({ name: 'input', type: () => AuthRefreshTokenInput }) input: AuthRefreshTokenInput
  ) {
    return this.authService.refreshTokens(input.accountId, input.refreshToken)
  }

  /**
   * Register Flow
   */

  @Mutation(() => Boolean)
  authRegister(
    @Args({ name: 'input', type: () => AuthRegisterInput }) input: AuthRegisterInput,
  ) {
    return this.authService.register(input.email, input.password, input.firstName, input.lastName)
  }

  @Mutation(() => Boolean)
  authResendVerification(
    @Args({ name: 'input', type: () => AuthResendVerificationInput }) input: AuthResendVerificationInput,
  ) {
    return this.authService.resendVerification(input.token)
  }

  @Mutation(() => Boolean)
  authResendVerificationWithEmail(
    @Args({ name: 'input', type: () => AuthResendVerificationWithEmailInput }) input: AuthResendVerificationWithEmailInput,
  ) {
    return this.authService.resendVerificationWithEmail(input.email)
  }

  @Mutation(() => Boolean)
  authVerify(
    @Args({ name: 'input', type: () => AuthVerifyAccountInput }) input: AuthVerifyAccountInput,
  ) {
    return this.authService.verifyAccount(input.token)
  }

  /**
   * Reset Password Flow
   */

  @Mutation(() => Boolean)
  authRequestPasswordReset(
    @Args({ name: 'input', type: () => AuthRequestPasswordResetInput }) input: AuthRequestPasswordResetInput,
  ) {
    return this.authService.requestPasswordReset(input.email)
  }

  @Mutation(() => Boolean)
  authConfirmPasswordReset(
    @Args({ name: 'input', type: () => AuthConfirmPasswordResetInput }) input: AuthConfirmPasswordResetInput
  ) {
    return this.authService.confirmPasswordReset(input.token, input.password)
  }
}
