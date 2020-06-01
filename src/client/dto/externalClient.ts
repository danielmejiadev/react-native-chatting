// Dtos
import { ChannelsResponse } from '../resources/channels/dto/channelsResponse';
import { UserCredentials, Session } from '../resources/auth/dto/authentication';
import { UserCreate } from '../resources/users/dto/user.create';
import { User } from '../resources/users/dto/user';
import { ChatConnect } from '../resources/chat/dto/chatConnect';

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

  /**
   * Connect a user to a chat provider.
   * @param crendential The credentials to connect.
   */
  connect(crendential: ChatConnect): Promise<void>
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
