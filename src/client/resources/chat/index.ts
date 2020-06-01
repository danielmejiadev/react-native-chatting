// Dependencies
import { transform } from 'decorators-js-pack';

// Dto
import { Base } from '@src/client/base';
import { ChatConnect } from './dto/chatConnect';

/**
 * Manage the chat actions.
 * @class Chat
 * @author Daniel Mejia
 */
export class Chat extends Base {
  /**
   * Connect the current user to chat.
   * @param chatCredential The chat credential to connect.
   */
  @transform
  connect(chatCredential: ChatConnect): Promise<void> {
    return this.externalClient.chat.connect(chatCredential);
  }
}

export default Chat;
