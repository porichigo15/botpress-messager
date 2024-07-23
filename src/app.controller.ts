import { Request } from 'express';

import {
  Controller,
  ForbiddenException,
  Get,
  NotFoundException,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/webhook')
  webhook(@Req() req: Request): any {
    const VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');

        return challenge;
      } else {
        throw new ForbiddenException();
      }
    }

    throw new UnauthorizedException();
  }

  @Post('/webhook')
  async handleWebhook(@Req() req: Request) {
    const body = req.body;

    if (body.object === 'page') {
      for (const entry of body.entry) {
        const webhookEvent = entry.messaging[0];
        const senderPSID = webhookEvent.sender.id;

        console.log(`Sender PSID: ${senderPSID}`);

        // Handle the message event here
        if (webhookEvent.message) {
          await this.appService.handleMessage(senderPSID, webhookEvent.message);
        }
      }

      return 'EVENT_RECEIVED';
    } else {
      throw new NotFoundException();
    }
  }
}
