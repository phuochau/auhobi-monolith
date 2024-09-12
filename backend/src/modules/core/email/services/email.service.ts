import { MailerService } from "@nestjs-modules/mailer"
import { Injectable } from "@nestjs/common"
import ejs from 'ejs'
import { SendMailOptions } from "../types/SendMailOptions"
import { SentMessageInfo } from "../types/SendMessageInfo"

@Injectable()
export class EmailService {
  constructor(
    private mailerService: MailerService
  ) {}

  async send(options: SendMailOptions): Promise<SentMessageInfo> {
    return this.mailerService.sendMail(options)
  }

  async renderContent(template: string, variables: any): Promise<string> {
    return ejs.render(template, variables)
  }
}