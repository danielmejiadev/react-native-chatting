// Users
import { UserCredentials, Session } from '../resources/auth/dto/authentication';
import { UserCreate } from '../resources/users/dto/user.create';
import { User } from '../resources/users/dto/user';

// Channels
import { ChannelsResponse } from '../resources/chat/channels/dto/channelsResponse';
import { Channel } from '../resources/chat/channels/dto/channel';
import { CreateChannelParams } from '../resources/chat/channels/dto/createChannelParams';

// Chat
import { ChatConnect } from '../resources/chat/dto/chatConnect';
import { MessageListParams } from '../resources/chat/message/dto/messageListParams';
import { MessageSendParams } from '../resources/chat/message/dto/messageSendParams';

/**
 * Definition of users client.
 * @interface UsersClient
 * @author Daniel Mejia
 */
export interface UsersClient {
  /**
   * Register a user into the users provider.
   * @param user The user to register.
   * @returns The user registered.
   */
  signup(user: UserCreate): Promise<User>
}

/**
 * Definition of dialog client.
 * @interface DialogClient
 * @author Daniel Mejia
 */
export interface DialogClient {
  /**
   * List channel for user.
   * @returns The channels list.
   */
  list(): Promise<ChannelsResponse>

  create(params: CreateChannelParams): Promise<Channel>;
}

export interface MessageClient {
  list(filters: MessageListParams): Promise<any>;
  sendMessage(opponentId: number | string, message: MessageSendParams): string;
  sendReadStatus(params: { userId: number, dialogId: string, messageId: string }): void;
  sendReadAll(channelId: string): void;
  addReceivedMessageListener(callback: any): void;
  addSentMessageListener(callback: any): void;
  addDeliveryMessageListener(callback: any): void;
  addReadMessageListener(callback: any): void;
  addTypingMessageLister(callback: any): void;
  sendIsTypingStatus(otherId: string | number): void;
  sendIsStopTypingStatus(otherId: string | number): void;
}

/**
 * Definition of external chat client.
 * @interface ChatClient
 * @author Daniel Mejia
 */
export interface ChatClient {
  /**
   * The dialog client of chat.
   */
  dialog: DialogClient;

  message: MessageClient;
  onMessageListener: any;

  /**
   * Connect a user to a chat provider.
   * @param crendential The credentials to connect.
   */
  connect(crendential: ChatConnect): Promise<void>;

  sendMessage(opponentId: number | string, message: MessageSendParams): string;

  addSuscription(callback: any): void;
}

/**
 * Definition of external client.
 * @interface ExternalClient
 * @author Daniel Mejia
 */
export interface ExternalClient {
  /**
   * The chat client.
   */
  chat: ChatClient;

  /**
   * The users client.
   */
  users: UsersClient;

  /**
   * Creates a session into the client provider.
   * @param userCredentials The credentials to create the session.
   * @returns The session created.
   */
  createSession(userCredentials?: UserCredentials): Promise<Session>;

  /**
   * Revemos a session into the client provider.
   */
  logout(): Promise<void>;
}
