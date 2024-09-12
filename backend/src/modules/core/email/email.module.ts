import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { PlatformConfig } from 'src/config/platform.config';
import { EmailService } from './services/email.service';
import { Services } from './services';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: Boolean(process.env.SMTP_SECURE),
            auth: {
              user: process.env.SMTP_USERNAME,
              pass: process.env.SMTP_PASSWORD,
            },
        },
        defaults: {
          from: `"${process.env.SMTP_DEFAULT_FROM_NAME}" <${process.env.SMTP_DEFAULT_FROM_EMAIL}>`,
        },
        template: {
          dir: PlatformConfig.email.templateDir,
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  providers: [
    ...Services
  ],
  exports: [
    ...Services
  ]
})
export class EmailModule {}
