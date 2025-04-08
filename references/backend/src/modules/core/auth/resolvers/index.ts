import { AuthResolver } from "./auth.resolver";
import { AccountResolver } from "./account.resolver";
import { AccountVerificationResolver } from "./account-verification.resolver";
import { AccountPasswordResetResolver } from "./account-password-reset.resolver";

export const Resolvers = [
    AuthResolver,
    AccountResolver,
    AccountVerificationResolver,
    AccountPasswordResetResolver,
]