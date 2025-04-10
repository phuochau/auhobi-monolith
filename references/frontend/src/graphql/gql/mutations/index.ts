import { MutationAuthConfirmPasswordResetArgs, MutationAuthLoginArgs, MutationAuthRefreshTokenArgs, MutationAuthRegisterArgs, MutationAuthRequestPasswordResetArgs, MutationAuthResendVerificationArgs, MutationAuthResendVerificationWithEmailArgs, MutationAuthVerifyArgs, MutationCreateOneOrgArgs } from "../generated-models"
import { AuthConfirmPasswordResetMutation } from "./authConfirmPasswordReset"
import { AuthLoginMutation } from "./authLogin"
import { AuthRefreshTokenMutation } from "./authRefreshToken"
import { AuthRegisterMutation } from "./authRegister"
import { AuthRequestPasswordResetMutation } from "./authRequestPasswordReset"
import { AuthResendVerificationMutation } from "./authResendVerification"
import { AuthResendVerificationWithEmailMutation } from "./authResendVerificationWithEmail"
import { AuthVerifyMutation } from "./authVerify"
import { CreateOneOrgMutation } from "./createOneOrg"

export type MutationKeys =
    'authConfirmPasswordReset' |
    'authLogin' |
    'authRefreshToken' |
    'authRegister' |
    'authRequestPasswordReset' |
    'authResendVerification' |
    'authResendVerificationWithEmail' |
    'authVerify' |
    'createOneOrg'

export type MutationArgsDefs = {
    authConfirmPasswordReset: MutationAuthConfirmPasswordResetArgs,
    authLogin: MutationAuthLoginArgs,
    authRefreshToken: MutationAuthRefreshTokenArgs,
    authRegister: MutationAuthRegisterArgs,
    authRequestPasswordReset: MutationAuthRequestPasswordResetArgs,
    authResendVerification: MutationAuthResendVerificationArgs,
    authResendVerificationWithEmail: MutationAuthResendVerificationWithEmailArgs,
    authVerify: MutationAuthVerifyArgs,
    createOneOrg: MutationCreateOneOrgArgs
}

export const Mutations = {
    authConfirmPasswordReset: AuthConfirmPasswordResetMutation,
    authLogin: AuthLoginMutation,
    authRefreshToken: AuthRefreshTokenMutation,
    authRegister: AuthRegisterMutation,
    authRequestPasswordReset: AuthRequestPasswordResetMutation,
    authResendVerification: AuthResendVerificationMutation,
    authResendVerificationWithEmail: AuthResendVerificationWithEmailMutation,
    authVerify: AuthVerifyMutation,
    createOneOrg: CreateOneOrgMutation
}