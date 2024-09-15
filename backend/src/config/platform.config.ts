const frontEndUrl = process.env.FRONT_END_URL

export const PlatformConfig = {
  fileUpload: {
    maxSize: 1024 * 1024 * 10, // 10MB
    mediaMimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/heic"],
    fileMimeTypes: ["text/csv"],
    fileSubfolder: 'files'
  },
  encryption: {
    bcryptSaltOrRound: 13
  },
  email: {
    templateDir: `${__dirname}/../assets/templates`
  },
  auth: {
    verification: {
        tokenExpiredHours: 5,
        email: {
            link: `${frontEndUrl}/verification?token=<%= token %>`,
            subject: 'Verify your account',
            text: 'Click on this link <%= link %> to verify your account.',
            textByCode: 'Enter this code: <%= code %> to verify your account.'
        }
    },
    confirmation: {
        email: {
            subject: 'Your account has been confirmed',
            text: 'Your account has been confirmed.'
        }
    },
    requestPasswordReset: {
        tokenExpiredHours: 5,
        email: {
            link: `${frontEndUrl}/reset-password/confirm?token=<%= token %>`,
            subject: 'You just requested to reset your password',
            text: 'Click on this link <%= link %> to enter new password.',
            textByCode: 'Enter this code: <%= code %> to enter new password.'
        }
    },
    passwordResetConfirmation: {
        email: {
            subject: 'Your password has been reset.',
            text: 'Your password has been reset.'
        }
    }
}
};