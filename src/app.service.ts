import { HttpService } from '@nestjs/axios';
import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

import { BotRequest } from './dto/bot-request.dto';
import { BotResponse } from './dto/bot-response.dto';
import { MessagerAction, MessagerRequest } from './dto/messager-request.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async handleMessage(senderPSID: string, receivedMessage: any) {
    if (receivedMessage.text) {
      await this.callSendAPI(senderPSID, null, 'mark_seen');
      await this.callSendAPI(senderPSID, null, 'typing_on');

      const response = await this.sendBotpress({
        text: receivedMessage.text,
        type: 'text',
        includedContexts: ['global'],
        metadata: {},
      });

      if (response) {
        for (const data of response) {
          this.callSendAPI(senderPSID, null, 'typing_off');
          await this.callSendAPI(senderPSID, { text: data.text });
        }
      }
    }
  }

  callSendAPI(
    senderPSID: string,
    response?: any,
    action?: MessagerAction,
  ): Promise<void> {
    const PAGE_ID = process.env.FB_PAGE_ID;
    const PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
    const requestBody: MessagerRequest = {
      recipient: { id: senderPSID },
      messaging_type: 'RESPONSE',
    };

    if (response) {
      requestBody.message = response;
    }

    if (action) {
      requestBody.sender_action = action;
    }

    return new Promise((resolve) => {
      this.httpService.axiosRef
        .post(
          `https://graph.facebook.com/v20.0/${PAGE_ID}/messages?access_token=${PAGE_ACCESS_TOKEN}`,
          requestBody,
        )
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.error(
            `Unable to send message: ${error?.response?.data?.error?.message}`,
          );
          resolve();
        });
    });
  }

  async sendBotpress(bot: BotRequest): Promise<BotResponse[]> {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5namFhQGdtYWlsLmNvbSIsInN0cmF0ZWd5IjoiZGVmYXVsdCIsInRva2VuVmVyc2lvbiI6OSwiaXNTdXBlckFkbWluIjp0cnVlLCJpYXQiOjE3MjE3MTQ2OTgsImV4cCI6MTcyMTcxODI5OCwiYXVkIjoiY29sbGFib3JhdG9ycyJ9.UmK1DhI9x6nsspRHzf2EDn8hCYzftLgRfNKmkTO8HSo';
    return this.httpService.axiosRef
      .post(process.env.BOT_URL, bot, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res?.data?.responses)
      .catch((error) => {
        const response = error?.response;
        if (response) {
          if (response?.status === HttpStatus.UNAUTHORIZED) {
            throw new UnauthorizedException();
          } else {
            throw new InternalServerErrorException();
          }
        }

        throw new InternalServerErrorException();
      });
  }
}
