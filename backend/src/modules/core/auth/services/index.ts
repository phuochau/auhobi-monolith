import { AuthService } from "./auth.service";
import { AccountPasswordResetService } from "./account-password-reset.service";
import { AccountVerificationService } from "./account-verification.service";
import { AccountService } from "./account.service";

export const Services = [
    AuthService,
    AccountService,
    AccountPasswordResetService,
    AccountVerificationService
]