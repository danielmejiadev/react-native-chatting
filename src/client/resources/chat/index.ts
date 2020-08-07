// Dto
import Base from '../../base';
import { ChatConnect } from './dto/chatConnect';
import { DialogClient, MessageClient, ExternalClient } from '../../dto/externalClient';

// Resources
import Channels from './channels';
import Message from './message';

/**
 * Manage the chat actions.
 * @class Chat
 * @author Daniel Mejia
 */
export class Chat extends Base {
  dialog: DialogClient;

  message: MessageClient;

  constructor(externalClient: ExternalClient) {
    super(externalClient);
    this.dialog = new Channels(externalClient);
    this.message = new Message(externalClient);
  }

  /**
   * Connect the current user to chat.
   * @param chatCredential The chat credential to connect.
   */
  connect(chatCredential: ChatConnect): Promise<void> {
    return this.externalClient.chat.connect(chatCredential);
  }
}

export default Chat;
