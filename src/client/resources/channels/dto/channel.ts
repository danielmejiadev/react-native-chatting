/**
 * The channel object representation.
 * @interface Channel
 * @author Daniel Mejia
 */
export interface Channel {
  /**
   * The identifier of channel.
   */
  id: string;

  /**
   * The last message sent on chat.
   */
  lastMessage: string;

  /**
   * The data of latest message.
   */
  lastMessageDateSent: number;

  /**
   * The name of channel.
   */
  name: string;

  /**
   * The number of unread messages.
   */
  unreadMessagesCount: number;
}
