export enum MessageType {
  CHAT = 'chat',
  GROUP_CHAT = 'groupchat',
}

export interface MessageExtension {
  saveToHistory: number;
  dialogId: string;
  dateSent?: string;
  messageId?: string;
}

export interface MessageSendParams {
  id?: string;
  type: MessageType
  body: string;
  extension: MessageExtension
  markable: number;
}
