export interface BotRequest {
  type: 'text';
  text: string;
  includedContexts: ['global'];
  metadata: unknown;
}
