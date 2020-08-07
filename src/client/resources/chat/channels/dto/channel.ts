/**
 * The types of channel.
 */
export enum ChannelTypes {
  PUBLIC = 1,
  GROUP = 2,
  PRIVATE = 3,
}

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
   * Name of a dialog. Ignored for private chats (type 3).
   */
  name: string;

  /**
   * The description of channel.
   */
  description?: string;

  /**
   * Dialog image. Ignored for private chats (type 3).
   */
  photo?: string;

  /**
   * Type of the dialog:
   * type 1 - broadcast, type 2 - group chat, type 3 - private chat, type 4 - public chat.
   */
  type: ChannelTypes

  /**
   * The identifier of last message.
   */
  lastMessageId?: string;

  /**
   * The last message sent on chat.
   */
  lastMessage?: string;

  /**
   * The data of latest message.
   */
  lastMessageDateSent: number;

  /**
   * The number of unread messages.
   */
  unreadMessagesCount: number;

  /**
   * ID of dialog's owner.
   */
  userId: number;

  /**
   * The ids of admins.
   */
  adminsIds: number[];

  /**
   * The ids of channel occupants.
   */
  occupantsIds: number[];

  /**
   * The ids of pinned messages.
   */
  pinnedMessagesIds: string[];

  /**
   * The date of creation of.
   */
  createdAt: string;

  /**
   * The date of updating.
   */
  updatedAt: string;

  /**
   * Jaber identifier of XMPP room for group chat to connect.
   * Not applicable for private chat (type 3).
   * Generated automatically by server after dialog is created
   */
  xmppRoomJid?: string | number;
}
