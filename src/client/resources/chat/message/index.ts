// Dependencies
import autobind from 'autobind-decorator';
import { transform } from 'decorators-js-pack';
import ConnectyCube from 'react-native-connectycube';
import humps from 'humps';

// Dtos
import Base from '../../../base';
import { MessageListParams } from './dto/messageListParams';
import { MessageList } from './dto/messageList';
import { MessageSendParams } from './dto/messageSendParams';

/**
 * Service to manage the channels of session chat.
 * @class Channels
 * @author Daniel Mejia
 */
@autobind
export class MessageClient extends Base {
  /**
   * Gets the list of channels for the current user.
   * @returns The channels response.
   */
  @transform
  list(filters: MessageListParams): Promise<MessageList> {
    return this.externalClient.chat.message.list(filters);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  sendMessage(opponentId: number | string, message: MessageSendParams): string {
    return ConnectyCube.chat.send(opponentId, humps.decamelizeKeys(message));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  sendIsTypingStatus(otherId: string | number): void {
    ConnectyCube.chat.sendIsTypingStatus(otherId);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  sendIsStopTypingStatus(otherId: string | number): void {
    ConnectyCube.chat.sendIsStopTypingStatus(otherId);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  sendReadStatus(params: { userId: number, dialogId: string, messageId: string }): void {
    ConnectyCube.chat.sendReadStatus(params);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  sendReadAll(channelId: string): void {
    return ConnectyCube.chat.message.update(null, { chat_dialog_id: channelId, read: 1 });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  addReceivedMessageListener(callback: any): void {
    this.externalClient.chat.onMessageListener = callback;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  addSentMessageListener(callback: any): void {
    ConnectyCube.chat.onSentMessageCallback = callback;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  addDeliveryMessageListener(callback: any): void {
    ConnectyCube.chat.onDeliveredStatusListener = callback;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  addReadMessageListener(callback: any): void {
    ConnectyCube.chat.onReadStatusListener = callback;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  addTypingMessageLister(callback: any): void {
    ConnectyCube.chat.onMessageTypingListener = callback;
  }
}

export default MessageClient;
