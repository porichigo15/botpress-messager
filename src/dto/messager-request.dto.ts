export interface MessagerRequest {
  recipient: Recipient;
  messaging_type: MessagerType;
  message?: string;
  sender_action?: MessagerAction;
}

export type MessagerType = 'RESPONSE';
export type MessagerAction = 'typing_on' | 'typing_off' | 'mark_seen';

interface Recipient {
  id: string;
}
