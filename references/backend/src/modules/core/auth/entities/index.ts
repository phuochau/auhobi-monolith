import { AccountPasswordReset, AccountPasswordResetDTO } from "./account-password-reset.entity";
import { AccountVerfication, AccountVerficationDTO } from "./account-verification.entity";
import { Account, AccountDTO } from "./account.entity";

export const Entities = [
    Account,
    AccountPasswordReset,
    AccountVerfication
]

export const DTOs = [
    AccountDTO,
    AccountPasswordResetDTO,
    AccountVerficationDTO
]